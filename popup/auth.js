(function () {
  function openLoginDialog() {
    const dialogId = "login-popup";
    let dialog = document.getElementById(dialogId);
    if (!dialog) {
      dialog = popup({
        id: dialogId,
        title: "Đăng nhập",
        innerHTML: "",
      });
      document.body.appendChild(dialog);
    }

    const content = dialog.querySelector(".popup-main__content");
    content.innerHTML = "";
    content.appendChild(
      createElement({
        type: "div",
        className: "form",
        attributes: {
          style: 'height: max-content'
        },
        child: [
          createElement({
            type: 'div',
            className: 'content',
            child: [
              createElement({
                type: "div",
                className: "form-input",
                child: [
                  createElement({
                    type: "label",
                    attributes: { for: "login-email" },
                    text: "Email",
                  }),
                  createElement({
                    type: "input",
                    attributes: {
                      type: "email",
                      id: "login-email",
                      placeholder: "email@example.com",
                    },
                  }),
                ],
              }),
              createElement({
                type: "div",
                className: "form-input",
                child: [
                  createElement({
                    type: "label",
                    attributes: { for: "login-password" },
                    text: "Mật khẩu",
                  }),
                  createElement({
                    type: "input",
                    attributes: {
                      type: "password",
                      id: "login-password",
                      placeholder: "••••••••",
                    },
                  }),
                ],
              }),
              createElement({
                type: "button",
                className: "form-btn radius-button",
                attributes: {
                  style:
                    "--height: 40px; --border-width: 3px;--button-background: var(--background);",
                },
                events: { click: tryLogin },
                child: [
                  createElement({
                    type: "div",
                    child: [createElement({ type: "p", text: "Đăng nhập" })],
                  }),
                ],
              }),
            ]
          })
        ],
      })
    );

    dialog.showModal();
  }

  function tryLogin() {
    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;
    if (!email || !password) {
      alert("Vui lòng nhập email và mật khẩu");
      return;
    }
    if (!window.sb) {
      alert("Supabase chưa sẵn sàng");
      return;
    }
    window.sb.auth
      .signInWithPassword({ email, password })
      .then(({ data, error }) => {
        if (error) throw error;
        closeDialog("login-popup");
      })
      .catch((err) => alert(err.message || "Đăng nhập thất bại"));
  }

  // Expose
  window.openLoginDialog = openLoginDialog;
})();
