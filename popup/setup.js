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
  };
}
function selectTab(list, index, s, popup) {
  list[s.get()].classList.remove("select");
  s.set(index);
  list[index].classList.add("select");
  renderPopup(s.data(), popup, s.value() == "Video" || s.value() == "Tin tức");
}

function getYtbImg(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

function closeDialog(id) {
  document.querySelector(`dialog#${id}`).close();
}

function reload() {}
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
  gContent.setAttribute("id", "upload-form");

  gContent.innerHTML = "";
  gContent.appendChild(renderForm(data));
}
function uploadVideo() {}
function uploadNews() {}
function seeMore(news) {
  gContent.setAttribute("id", "news-detal");
  gContent.setAttribute("data-id", news.id);

  gContent.innerHTML = "";
  gContent.appendChild(renderInnerTab("Chi tiết", checkLogin.get()));
  gContent.appendChild(renderDetal(news));
}
function addImg() {
  alert("ADD IMG? CHƯA BIẾT LÀM GÌ:)");
}
function write(id) {
  const news = generalData["Tin tức"].iNews.find((i) => (i.id = id)) || {};
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
    "news-title": news.title,
    "news-content": news.content,
    "news-image": news.imgs,
  };
  gContent.setAttribute("id", "upload-form");
  gContent.innerHTML = "";
  gContent.appendChild(renderForm(form, data));
}
function updateNews() {}

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
  if (window.firebaseAuth) {
    window.firebaseAuth
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
