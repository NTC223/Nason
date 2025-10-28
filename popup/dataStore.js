(function () {
  if (!window.sb) return;
  const client = window.sb;

  async function loadKv(key, assign) {
    try {
      const { data, error } = await client
        .from("app_kv")
        .select("value")
        .eq("key", key)
        .single();
      if (error) throw error;
      const val = data?.value || {};
      assign(val);
    } catch (e) {
      console.warn("Supabase load error:", key, e);
    }
  }

  loadKv("generalData", (data) => {
    window.generalData = data;
    if (
      typeof gTabSelect !== "undefined" &&
      gTabSelect &&
      typeof gTabSelect.setdata === "function"
    ) {
      gTabSelect.setdata(window.generalData);
    }
  });

  loadKv("productData", (data) => {
    window.productData = data;
    if (
      typeof pTabSelect !== "undefined" &&
      pTabSelect &&
      typeof pTabSelect.setdata === "function"
    ) {
      pTabSelect.setdata(window.productData);
    }
  });

  loadKv("productTabs", (data) => {
    window.productTabs = data;
  });
})();
