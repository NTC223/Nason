(function () {
  if (!window.SUPABASE_CONFIG) {
    console.error(
      "Missing SUPABASE_CONFIG. Create popup/supabase.config.js from popup/supabase.config.example.js"
    );
    return;
  }
  const { url, anonKey } = window.SUPABASE_CONFIG;
  const client = window.supabase.createClient(url, anonKey);

  window.sb = client;

  client.auth.onAuthStateChange((_event, session) => {
    const user = session?.user || null;
    if (
      typeof checkLogin !== "undefined" &&
      checkLogin &&
      typeof checkLogin.set === "function"
    ) {
      checkLogin.set(!!user);
    }
    window.currentUser = user;
  });
})();
