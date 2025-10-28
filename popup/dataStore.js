(function () {
  if (!window.firebaseDb) {
    return;
  }

  const db = window.firebaseDb;

  function applyData(docId, assign) {
    const ref = db.collection("app").doc(docId);
    ref
      .get()
      .then((snap) => {
        if (snap.exists) {
          const data = snap.data();
          assign(data);
        }
      })
      .catch((e) => console.warn("Firestore read error:", docId, e));

    // Realtime updates
    try {
      ref.onSnapshot((snap) => {
        if (snap.exists) {
          assign(snap.data());
        }
      });
    } catch (_) {}
  }

  applyData("generalData", (data) => {
    window.generalData = data;
    if (
      typeof gTabSelect !== "undefined" &&
      gTabSelect &&
      typeof gTabSelect.setdata === "function"
    ) {
      gTabSelect.setdata(window.generalData);
    }
  });

  applyData("productData", (data) => {
    window.productData = data;
    if (
      typeof pTabSelect !== "undefined" &&
      pTabSelect &&
      typeof pTabSelect.setdata === "function"
    ) {
      pTabSelect.setdata(window.productData);
    }
  });

  applyData("productTabs", (data) => {
    window.productTabs = data;
  });
})();
