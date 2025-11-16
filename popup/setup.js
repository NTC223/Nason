// Theo dõi phiên bản dữ liệu
window.dataVersion = 0;
window.lastFetchedVersion = 0;

// Hàm kiểm tra và cập nhật dữ liệu từ Supabase
// dataset: 'general' | 'product'
async function checkAndUpdateData(forceUpdate = false, dataset = "general") {
  if (!window.sb) return null;

  try {
    if (dataset === "general") {
      const { data, error } = await window.sb
        .from("app_kv")
        .select("value,version")
        .eq("key", "generalData")
        .single();
      if (error) throw error;
      if (data?.version > window.dataVersion || forceUpdate) {
        window.generalData = data?.value || {};
        window.dataVersion = data?.version || 0;
        window.lastFetchedVersion = window.dataVersion;
        return true;
      }
      return false;
    }

    if (dataset === "product") {
      // Tải productTabs và productData
      const [tabsRes, dataRes] = await Promise.all([
        window.sb
          .from("app_kv")
          .select("value")
          .eq("key", "productTabs")
          .single(),
        window.sb
          .from("app_kv")
          .select("value")
          .eq("key", "productData")
          .single(),
      ]);

      if (tabsRes.error) throw tabsRes.error;
      if (dataRes.error) throw dataRes.error;

      const nextTabs = tabsRes?.data?.value || {};
      const nextData = dataRes?.data?.value || {};
      const changed =
        JSON.stringify(nextTabs) !== JSON.stringify(window.productTabs || {}) ||
        JSON.stringify(nextData) !== JSON.stringify(window.productData || {});
      window.productTabs = nextTabs;
      window.productData = nextData;
      return changed;
    }

    return false;
  } catch (e) {
    console.error("Check data version error:", e);
    return null;
  }
}

function popup({ id, title, innerHTML, tab, innerTab, underTab }) {
  const dialog = createElement({
    type: "dialog",
    className: "popup",
    attributes: {
      id: id,
    },
  });
  const beforeClose = (e) => {
    const img =
      e.target.tagName.toLowerCase() == "img"
        ? e.target
        : e.target.firstElementChild;
    img.src = btnImg["close-click"];
    setTimeout(() => {
      img.src = btnImg.close;
    }, 1000);
  };
  const popupTitle = createElement({
    type: "div",
    className: "popup-title",
    child: [
      createElement({
        type: "h1",
        className: "popup-title__h1",
        text: title,
      }),
      createElement({
        type: "button",
        className: "close",
        child: [
          createElement({ type: "img", attributes: { src: btnImg.close } }),
        ],
        events: {
          mousedown: beforeClose,
          touchstart: beforeClose,
          click: (e) => {
            const video = document.querySelector(`#${id} .iframe-video`);
            video && video.setAttribute("src", video.src);
            closeDialog(id);
            const img =
              e.target.tagName.toLowerCase() == "img"
                ? e.target
                : e.target.firstElementChild;
            img.src = btnImg.close;
          },
          mouseover: (e) => {
            const img =
              e.target.tagName.toLowerCase() == "img"
                ? e.target
                : e.target.firstElementChild;
            img.src = btnImg["close-click"];
          },
          mouseleave: (e) => {
            const img =
              e.target.tagName.toLowerCase() == "img"
                ? e.target
                : e.target.firstElementChild;
            img.src = btnImg.close;
          },
        },
      }),
    ],
  });

  dialog.appendChild(
    createElement({
      type: "div",
      className: "popup-content",
      child: [
        popupTitle,
        tab,
        createElement({
          type: "div",
          className: "popup-main scrollbar-style1",
          child: [
            createElement({
              type: "div",
              className: "popup-main__content",
              child: innerTab,
              text: innerHTML,
            }),
          ],
        }),
        underTab,
      ],
    })
  );

  return dialog;
}

function zoomImg() {}

function select(list, data) {
  let num = 0;
  return {
    get() {
      return num;
    },
    set(newNum) {
      num = newNum;
    },
    value() {
      return list.length > num && list[num];
    },
    data() {
      return list.length > num && data[list[num]];
    },
    setdata(newData) {
      data = newData;
    },
    setlist(newList) {
      list = Array.isArray(newList) ? newList : list;
    },
  };
}
function selectTab(list, index, s, popup, dataset) {
  popup.classList.contains("form") && popup.classList.remove("form");
  list[s.get()].classList.remove("select");
  s.set(index);
  list[index].classList.add("select");

  // Kiểm tra version trước khi render
  checkAndUpdateData(false, dataset === "product" ? "product" : "general").then(
    (hasUpdate) => {
      if (hasUpdate) {
        // Nếu có update, cập nhật selector data đúng nguồn
        if (s?.setdata)
          s.setdata(
            dataset === "product" ? window.productData : window.generalData
          );
      }
      renderPopup(
        s.data(),
        popup,
        s.value() == "Video" || s.value() == "Tin tức"
      );
    }
  );
}

function getYtbImg(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

function closeDialog(id) {
  document.querySelector(`dialog#${id}`).close();
}

function reload() {
  if (!window.sb) {
    alert("Supabase chưa sẵn sàng");
    return;
  }

  // Force reload data
  checkAndUpdateData(true)
    .then((hasUpdate) => {
      if (hasUpdate && gTabSelect?.setdata) {
        gTabSelect.setdata(window.generalData);
      }
      // Re-render current tab content
      if (gContent) {
        renderPopup(window.generalData[gTabSelect.value()], gContent, true);
      }
    })
    .catch((e) => {
      console.error("Reload error:", e);
      alert("Không thể tải lại dữ liệu");
    });
}

function add(tab) {
  const data =
    tab == "Video"
      ? {
          title: "Thêm video YouTube",
          data: [
            {
              name: "video-title",
              label: "Tiêu đề",
              type: "text",
              placeholder: "Tiêu đề ảnh",
            },
            {
              name: "video-link",
              label: "URL YouTube",
              type: "text",
              placeholder: "https://www.youtube.com/watch?v...",
            },
            {
              name: "video-content",
              label: "Nội dung",
              isArea: true,
              placeholder: "Mô tả chi tiết cho video",
            },
          ],
          submit: uploadVideo,
        }
      : tab == "Tin tức"
      ? {
          title: "Tạo tin tức mới",
          data: [
            {
              name: "news-title",
              label: "Tiêu đề",
              type: "text",
              placeholder: "Tiêu đề ảnh",
            },
            {
              name: "news-content",
              label: "Nội dung",
              isArea: true,
              placeholder: "Nội dung chi tiết",
            },
            {
              name: "news-image",
              label: "Hình ảnh",
              type: "file",
            },
          ],
          submit: uploadNews,
        }
      : {};
  gContent.setAttribute("id", "");
  gContent.classList.add("form");

  gContent.innerHTML = "";
  gContent.appendChild(renderForm(data));
}
function uploadVideo() {
  try {
    if (!window.sb) {
      alert("Supabase chưa sẵn sàng");
      return;
    }
    const titleEl = document.getElementById("video-title");
    const linkEl = document.getElementById("video-link");
    const contentEl = document.getElementById("video-content");
    const title = titleEl?.value?.trim() || "";
    const link = linkEl?.value?.trim() || "";
    const desc = contentEl?.innerHTML || "";

    const vid = extractYouTubeId(link);
    if (!vid) {
      alert("URL YouTube không hợp lệ");
      return;
    }

    const gd = window.generalData || {};
    const videoArr =
      gd["Video"] && Array.isArray(gd["Video"].video)
        ? gd["Video"].video.slice()
        : [];
    if (!videoArr.includes(vid)) videoArr.unshift(vid);
    const newGeneral = {
      ...gd,
      ["Video"]: { ...(gd["Video"] || {}), video: videoArr },
    };

    // Lưu metadata video và generalData vào Supabase
    const saves = [];
    saves.push(
      window.sb.from("videos").upsert({ id: vid, title, description: desc })
    );
    saves.push(
      window.sb.from("app_kv").upsert({ key: "generalData", value: newGeneral })
    );
    Promise.all(saves)
      .then(([a, b]) => {
        if (a.error) throw a.error;
        if (b.error) throw b.error;
        window.generalData = newGeneral; // Cập nhật cache ngay lập tức
        alert("Đã thêm video");
        gContent && renderPopup(newGeneral["Video"], gContent, true);
      })
      .catch((e) => alert(e.message || "Lỗi lưu video"));
  } catch (e) {
    alert(e.message || "Lỗi không xác định");
  }
}
function uploadNews() {
  try {
    if (!window.sb) {
      alert("Supabase chưa sẵn sàng");
      return;
    }
    const titleEl = document.getElementById("news-title");
    const contentArea = document.getElementById("news-content");
    const imageInput = document.getElementById("news-image");
    const title = titleEl?.value?.trim() || "";
    const content = contentArea?.innerHTML || "";
    const file = imageInput?.files && imageInput.files[0];
    if (!title || !content) {
      alert("Thiếu tiêu đề hoặc nội dung");
      return;
    }

    const saveNews = (imageUrl) => {
      const gd = window.generalData || {};
      const list =
        gd["Tin tức"] && Array.isArray(gd["Tin tức"].iNews)
          ? gd["Tin tức"].iNews.slice()
          : [];
      const nextId =
        list.reduce((m, n) => Math.max(m, Number(n.id) || 0), 0) + 1 || 1;
      const time = formatVNDate(new Date());
      const news = {
        id: nextId,
        imgs: imageUrl ? [imageUrl] : [],
        time,
        title,
        content,
      };
      list.unshift(news);
      const newGeneral = {
        ...gd,
        ["Tin tức"]: { ...(gd["Tin tức"] || {}), iNews: list },
      };
      const updates = [];
      updates.push(window.sb.from("news").upsert({ id: nextId, ...news }));
      updates.push(
        window.sb
          .from("app_kv")
          .upsert({ key: "generalData", value: newGeneral })
      );
      Promise.all(updates)
        .then(([a, b]) => {
          if (a.error) throw a.error;
          if (b.error) throw b.error;
          alert("Đã tạo tin tức");
          gContent && renderPopup(newGeneral["Tin tức"], gContent, true);
        })
        .catch((e) => {
          console.error("uploadNews Supabase error:", e);
          alert(e && e.message ? e.message : "Lỗi lưu tin tức");
        });
    };

    if (file) {
      // Fallback: compress to Data URL and store directly in RTDB
      compressImage(file, 1200, 800, 0.75)
        .then((dataUrl) => {
          if (dataUrl.length > 2_000_000) {
            alert("Ảnh sau nén vẫn quá lớn, hãy chọn ảnh nhỏ hơn (~<300KB).");
            return;
          }
          saveNews(dataUrl);
        })
        .catch(() => alert("Không xử lý được ảnh"));
    } else {
      saveNews("");
    }
  } catch (e) {
    console.error("uploadNews error:", e);
    alert(e && e.message ? e.message : "Lỗi không xác định");
  }
}
function seeMore(news) {
  gContent.setAttribute("id", "news-detal");
  // Lưu id dưới dạng string để đảm bảo nhất quán
  gContent.setAttribute("data-id", String(news.id || ""));

  gContent.innerHTML = "";
  gContent.appendChild(renderInnerTab("Chi tiết", checkLogin.get()));
  gContent.appendChild(renderDetal(news));
}
function addImg() {
  alert("ADD IMG? CHƯA BIẾT LÀM GÌ:)");
}
function write(id) {
  // Kiểm tra id hợp lệ
  if (id == null || id === undefined || (typeof id === 'number' && isNaN(id))) {
    console.error("ID không hợp lệ:", id);
    alert("Không tìm thấy ID tin tức cần chỉnh sửa");
    return;
  }
  
  // Tìm tin tức với so sánh linh hoạt (hỗ trợ cả số và string)
  const newsList = generalData["Tin tức"]?.iNews || [];
  const news = newsList.find((i) => {
    if (!i || i.id == null) return false;
    // So sánh linh hoạt: số với số, string với string, hoặc chuyển đổi
    return i.id === id || 
           Number(i.id) === Number(id) || 
           String(i.id) === String(id);
  }) || {};
  
  // Kiểm tra nếu không tìm thấy tin tức
  if (!news.id) {
    console.error("Không tìm thấy tin tức với id:", id, "Danh sách:", newsList.map(n => ({id: n.id, title: n.title})));
    alert("Không tìm thấy tin tức cần chỉnh sửa");
    return;
  }
  
  // Lưu id của tin tức đang chỉnh sửa vào data-edit-id để updateNews có thể sử dụng
  gContent.setAttribute("data-edit-id", String(news.id));
  const form = {
    title: "Tạo tin tức mới",
    data: [
      {
        name: "news-title",
        label: "Tiêu đề",
        type: "text",
        placeholder: "Tiêu đề ảnh",
      },
      {
        name: "news-content",
        label: "Nội dung",
        isArea: true,
        placeholder: "Nội dung chi tiết",
      },
      {
        name: "news-image",
        label: "Hình ảnh",
        type: "file",
      },
    ],
    submit: updateNews,
  };
  const data = {
    "news-title": news.title || "",
    "news-content": news.content || "",
    "news-image": news.imgs || [],
  };
  gContent.setAttribute("id", "");
  gContent.classList.add("form");
  gContent.innerHTML = "";
  gContent.appendChild(renderForm(form, data));
}
function updateNews() {
  try {
    if (!window.sb) {
      alert("Supabase chưa sẵn sàng");
      return;
    }
    const titleEl = document.getElementById("news-title");
    const contentArea = document.getElementById("news-content");
    const imageInput = document.getElementById("news-image");
    const newTitle = titleEl?.value?.trim() || "";
    const newContent = contentArea?.innerHTML || "";
    const file = imageInput?.files && imageInput.files[0];
    if (!newTitle || !newContent) {
      alert("Thiếu tiêu đề hoặc nội dung");
      return;
    }

    const gd = window.generalData || {};
    const list =
      gd["Tin tức"] && Array.isArray(gd["Tin tức"].iNews)
        ? gd["Tin tức"].iNews.slice()
        : [];

    // Tìm tin tức cần cập nhật bằng id từ data-edit-id
    const editId = gContent.getAttribute("data-edit-id");
    let idx = -1;
    if (editId) {
      // Chuyển đổi editId sang số nếu cần
      const idToFind = Number(editId) || editId;
      idx = list.findIndex(
        (n) => n && (n.id === idToFind || n.id === Number(idToFind) || String(n.id) === String(idToFind))
      );
    }
    // Nếu không tìm thấy bằng id, thử tìm bằng title (fallback)
    if (idx === -1) {
      idx = list.findIndex(
        (n) => n && typeof n.title === "string" && n.title.trim() === newTitle
      );
    }
    // Nếu vẫn không tìm thấy, báo lỗi thay vì fallback về index 0
    if (idx === -1) {
      alert("Không tìm thấy tin tức cần cập nhật");
      return;
    }

    const applyUpdate = (imageUrl) => {
      const item = list[idx] || {};
      const updated = { ...item, title: newTitle, content: newContent };
      if (imageUrl) {
        updated.imgs = [imageUrl];
      }
      list[idx] = updated;
      const newGeneral = {
        ...gd,
        ["Tin tức"]: { ...(gd["Tin tức"] || {}), iNews: list },
      };
      const newsId = updated.id || idx + 1;
      const updates = [];
      updates.push(window.sb.from("news").upsert({ id: newsId, ...updated }));
      updates.push(
        window.sb
          .from("app_kv")
          .upsert({ key: "generalData", value: newGeneral })
      );
      Promise.all(updates)
        .then(([a, b]) => {
          if (a.error) throw a.error;
          if (b.error) throw b.error;
          window.generalData = newGeneral; // Cập nhật cache ngay lập tức
          alert("Đã cập nhật tin tức");
          gContent && renderPopup(newGeneral["Tin tức"], gContent, true);
        })
        .catch((e) => {
          console.error("updateNews Supabase error:", e);
          alert(e && e.message ? e.message : "Lỗi cập nhật tin tức");
        });
    };

    if (file) {
      compressImage(file, 1200, 800, 0.75)
        .then((dataUrl) => {
          if (dataUrl.length > 2_000_000) {
            alert("Ảnh sau nén vẫn quá lớn, hãy chọn ảnh nhỏ hơn (~<300KB).");
            return;
          }
          applyUpdate(dataUrl);
        })
        .catch(() => alert("Không xử lý được ảnh"));
    } else {
      applyUpdate("");
    }
  } catch (e) {
    console.error("updateNews error:", e);
    alert(e && e.message ? e.message : "Lỗi không xác định");
  }
}

function extractYouTubeId(url) {
  if (!url) return "";
  // Supports full and short URLs
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,})/);
  return m && m[1] ? m[1] : "";
}
function formatVNDate(d) {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

function compressImage(file, maxWidth, maxHeight, quality) {
  return new Promise((resolve, reject) => {
    try {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          let { width, height } = img;
          const ratio = Math.min(maxWidth / width, maxHeight / height, 1);
          const canvas = document.createElement("canvas");
          canvas.width = Math.round(width * ratio);
          canvas.height = Math.round(height * ratio);
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          const dataUrl = canvas.toDataURL("image/jpeg", quality);
          resolve(dataUrl);
        };
        img.onerror = reject;
        img.src = String(reader.result || "");
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    } catch (e) {
      reject(e);
    }
  });
}

function copyLink(link) {
  navigator.clipboard
    .writeText(link)
    .then(() => alert(`Đã sao chép liên kết: ${link}`));
}

function isLogin() {
  let check = false;
  return {
    get() {
      return check;
    },
    set(value) {
      if (check != value) {
        check = value;
        if (gContent.querySelector(".inner-tab")) {
          const tab =
            gContent.id == "news-detal"
              ? gContent.getAttribute("data-id")
              : gTabSelect.value();
          gContent.querySelector(".inner-tab").remove();
          gContent.insertBefore(
            renderInnerTab(tab, value),
            gContent.firstElementChild
          );
        }
      }
    },
  };
}
function login() {
  if (typeof openLoginDialog === "function") {
    openLoginDialog();
  } else {
    alert("Auth UI chưa sẵn sàng");
  }
}
function logout() {
  if (window.sb) {
    window.sb.auth
      .signOut()
      .then(() => {
        checkLogin.set(false);
      })
      .catch((e) => alert(e.message || "Lỗi đăng xuất"));
  } else {
    checkLogin.set(false);
  }
}

function createElement({
  type,
  child,
  underChild,
  className,
  attributes,
  events,
  text,
}) {
  const element = type
    ? document.createElement(type)
    : document.createDocumentFragment();
  child?.forEach((e) => e && element.appendChild(e));
  if (className) element.className = className;
  if (text) element.innerHTML += text;
  underChild?.forEach((e) => e && element.appendChild(e));
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  for (const ev in events) {
    element.addEventListener(ev, events[ev]);
  }
  return element;
}
function findParentTag(element, tagName) {
  let e = element;
  while (
    e.nodeName != tagName.toLowerCase() &&
    e.nodeName != tagName.toUpperCase()
  ) {
    e = e.parentElement;
    if (e.nodeName == "html" || e.nodeName == "HTML") return null;
  }
  return e;
}
