const main = document.body;
const address =
  "Tòa nhà 132 Phố Lạc Nghiệp, Phường Thanh Nhàn, Quận Hai Bà Trưng, Hà Nội, Việt Nam";

const checkLogin = isLogin();

// Danh sách tab cố định cho general popup (không lấy từ Supabase)
const GENERAL_TABS = [
  "Thông tin",
  "Video",
  "Chứng nhận",
  "Hình ảnh",
  "Tin tức",
  "Liên hệ",
];

const gTabSelect = select(GENERAL_TABS, generalData);
// Danh sách tab cố định cho product detail
const PRODUCT_TABS = ["360", "video", "shopping", "contact"];
const PRODUCT_TAB_LABELS = {
  360: "Xoay 360",
  video: "Video",
  shopping: "Giỏ hàng",
  contact: "Liên hệ ngay",
};
const pTabSelect = select(PRODUCT_TABS, productData);
// Giới thiệu chung
let tabs = GENERAL_TABS.map((txt, index) =>
  createElement({
    type: "div",
    className: "item radius-button",
    attributes: { "data-id": index },
    child: [createElement({ type: "div", text: `<p>${txt}</p>` })],
  })
);
const general = popup({
  id: "general-popup",
  title: "Giới thiệu chung",
  tab: createElement({
    type: "div",
    className: "popup-tab scrollbar-style2",
    child: [
      createElement({
        type: "div",
        child: tabs,
      }),
    ],
  }),
});
const gMain = general.querySelector(".popup-main");
const gContent = general.querySelector(".popup-main__content");
// Chọn tab
tabs.forEach((t, index) => {
  t.addEventListener("click", () => {
    if (t.classList.contains("select") == false) {
      selectTab(tabs, index, gTabSelect, gContent, "general");
    }
  });
});
general.addEventListener("toggle", () => {
  if (typeof rebuildGeneralTabs === "function") {
    rebuildGeneralTabs();
  } else {
    selectTab(tabs, 0, gTabSelect, gContent, "general");
  }
  document.documentElement.style.setProperty(
    "--popup-main-height",
    `${gMain.clientHeight}px`
  );
  document.documentElement.style.setProperty(
    "--popup-main-width",
    `${gMain.clientWidth}px`
  );
});

// Bản đồ
const map = popup({
  id: "map-popup",
  title: "Bản đồ",
  innerHTML: `
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.613596494502!2d105.85425567423866!3d21.008120788489094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abf435959343%3A0xd9e611c134f4898b!2zTkFTT046IEfhu5FtIFPhu6kgVMOibSBMaW5oIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1759134608049!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <a href="https://maps.app.goo.gl/HytaD5x4jvZvDe8a8" target="_blank">Mở trong Google Maps</a>
        <div class='flex gap10'>
            <img src='${iconImg.address}'>
            <b>${address}</b>
        </div>
    `,
});

// Hướng dẫn tham quan
const guideContent = `
    <div class="flex column gap20">
        <div class="flex gap10 align-center"><img src="${btnImg.fullscreen}"/><b>TOÀN MÀN HÌNH</b></div>
        <div class="flex gap10 align-center"><img src="${btnImg.help}"/><b>HƯỚNG DẪN</b></div>
        <div class="flex gap10 align-center"><img src="${btnImg.mute}"/><b>BẬT/TẮT ÂM THANH</b></div>
        <div class="flex gap10 align-center"><img src="${btnImg.setting}"/><b>CÀI ĐẶT</b></div>
    </div>
    <div class="flex column gap20">
        <div class="flex gap10 align-center"><img src="${btnImg.auto}"/><b>THAM QUAN TỰ ĐỘNG</b></div>
        <div class="flex gap10 align-center"><img src="${btnImg.share}"/><b>CHIA SẺ LINK</b></div>
        <div class="flex gap10 align-center"><img src="${btnImg.info}"/><b>THÔNG TIN</b></div>
        <div class="flex gap10 align-center"><img src="${btnImg.map}"/><b>BẢN ĐỒ</b></div>
    </div>
`;
const guide = popup({
  id: "guide-popup",
  title: "Hướng dẫn tham quan",
  innerHTML: guideContent,
});
"flex align-center space-between gap20"
  .split(" ")
  .forEach((i) => guide.querySelector(".popup-main__content").classList.add(i));

// Chia sẻ link
const shareContent = ["Link", "Facebook", "Google", "Youtube"].map((id) => {
  const txt = id == "Link" ? "Copy Link" : id;
  return createElement({
    type: "a",
    className: "link flex column align-center",
    child: [
      createElement({
        type: "img",
        attributes: { src: iconImg[id.toLowerCase()] },
      }),
      createElement({ type: "p", text: txt }),
    ],
    events: {
      click: () => {
        copyLink(pageLink[id.toLowerCase()]);
      },
    },
  });
});
const share = popup({
  id: "share-popup",
  title: "Chia sẻ link",
  innerTab: shareContent,
});
"flex align-center gap20"
  .split(" ")
  .forEach((i) => share.querySelector(".popup-main__content").classList.add(i));

// Chi tiết sản phẩm
let underTabs = PRODUCT_TABS.map((txt, index) =>
  createElement({
    type: "p",
    className: "item",
    attributes: { "data-id": index },
    text: `
        <p class='content'>
            <img src='${iconImg[txt]}'>
            <span class='text'>${PRODUCT_TAB_LABELS[txt]}</span>
        </p>
    `,
  })
);
const product = popup({
  id: "product-popup",
  title: "Chi tiết sản phẩm",
  underTab: createElement({
    type: "div",
    className: "under-tab flex center gap20",
    child: underTabs,
  }),
});
const pTitle = product.querySelector(".popup-title");
const pMain = product.querySelector(".popup-main");
const pContent = product.querySelector(".popup-main__content");
underTabs.forEach((t, index) => {
  t.addEventListener("click", () => {
    if (t.classList.contains("select") == false) {
      selectTab(underTabs, index, pTabSelect, pContent, "product");
    }
  });
});
product.addEventListener("toggle", () => {
  if (typeof rebuildProductUnderTabs === "function") {
    rebuildProductUnderTabs();
  } else {
    selectTab(underTabs, 0, pTabSelect, pContent, "product");
  }
  product.style.setProperty("--popup-main-height", `${pMain.clientHeight}px`);
  product.style.setProperty("--popup-main-width", `${pMain.clientWidth}px`);
});

function rebuildProductUnderTabs() {
  try {
    const doBuild = () => {
      const keys = PRODUCT_TABS;
      const container = product.querySelector(".under-tab");
      if (!container || keys.length === 0) return;

      if (typeof pTabSelect?.setlist === "function") {
        pTabSelect.setlist(keys);
      }

      const newUnderTabs = keys.map((txt, index) =>
        createElement({
          type: "p",
          className: "item",
          attributes: { "data-id": index },
          text: `
                        <p class='content'>
                            <img src='${iconImg[txt]}'>
                            <span class='text'>${PRODUCT_TAB_LABELS[txt]}</span>
                        </p>
                    `,
        })
      );

      container.innerHTML = "";
      newUnderTabs.forEach((el) => container.appendChild(el));

      underTabs = newUnderTabs;
      underTabs.forEach((t, index) => {
        t.addEventListener("click", () => {
          if (t.classList.contains("select") == false) {
            selectTab(underTabs, index, pTabSelect, pContent, "product");
          }
        });
      });

      // Chọn mặc định tab đầu tiên sau khi rebuild
      selectTab(underTabs, 0, pTabSelect, pContent, "product");
    };

    if (typeof checkAndUpdateData === "function") {
      checkAndUpdateData(false, "product").then(() => doBuild());
    } else {
      doBuild();
    }
  } catch (e) {
    console.error("rebuildProductUnderTabs error", e);
  }
}

function rebuildGeneralTabs() {
  try {
    const doBuild = () => {
      const keys = GENERAL_TABS;
      const container = general.querySelector(".popup-tab");
      if (!container || keys.length === 0) return;

      if (typeof gTabSelect?.setlist === "function") {
        gTabSelect.setlist(keys);
      }

      const newTabs = keys.map((txt, index) =>
        createElement({
          type: "div",
          className: "item radius-button",
          attributes: { "data-id": index },
          child: [createElement({ type: "div", text: `<p>${txt}</p>` })],
        })
      );

      container.innerHTML = "";
      container.appendChild(
        createElement({
          type: "div",
          child: newTabs,
        })
      );

      tabs = newTabs;
      tabs.forEach((t, index) => {
        t.addEventListener("click", () => {
          if (t.classList.contains("select") == false) {
            selectTab(tabs, index, gTabSelect, gContent, "general");
          }
        });
      });

      // Chọn mặc định tab đầu tiên sau khi rebuild
      selectTab(tabs, 0, gTabSelect, gContent, "general");
    };

    if (typeof checkAndUpdateData === "function") {
      checkAndUpdateData(false, "general").then(() => doBuild());
    } else {
      doBuild();
    }
  } catch (e) {
    console.error("rebuildGeneralTabs error", e);
  }
}

main.appendChild(general);
main.appendChild(map);
main.appendChild(guide);
main.appendChild(share);
main.appendChild(product);
