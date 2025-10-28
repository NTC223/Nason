(function () {
  // Require FIREBASE_CONFIG to be provided by popup/firebase.config.js
  if (!window.FIREBASE_CONFIG) {
    console.error(
      "Missing FIREBASE_CONFIG. Create popup/firebase.config.js from popup/firebase.config.example.js"
    );
    return;
  }

  try {
    if (!firebase.apps.length) {
      firebase.initializeApp(window.FIREBASE_CONFIG);
    }
  } catch (e) {
    console.error("Firebase init error:", e);
  }

  const auth = firebase.auth();
  const db = firebase.firestore();

  // Global helpers
  window.firebaseAuth = auth;
  window.firebaseDb = db;

  // Listen auth state and reflect to UI state (checkLogin)
  auth.onAuthStateChanged((user) => {
    if (
      typeof checkLogin !== "undefined" &&
      checkLogin &&
      typeof checkLogin.set === "function"
    ) {
      checkLogin.set(!!user);
    }
    window.currentUser = user || null;
  });
})();
