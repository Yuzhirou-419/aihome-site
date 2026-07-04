(function () {
  const config = window.AIHOME_ADSENSE || {};
  const client = String(config.client || "");
  const isPlaceholder = client.includes("0000000000000000") || client.includes("REPLACE");
  const frames = Array.from(document.querySelectorAll(".ad-frame"));

  if (!config.enabled || !client.startsWith("ca-pub-") || isPlaceholder) {
    frames.forEach((frame) => {
      frame.dataset.active = "false";
    });
    return;
  }

  function pushAds() {
    frames.forEach(function (frame) {
      const ad = frame.querySelector(".adsbygoogle");
      if (!ad) {
        return;
      }
      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      } catch (error) {
        frame.dataset.active = "false";
        const fallback = frame.querySelector(".ad-fallback");
        if (fallback) {
          fallback.hidden = false;
          fallback.textContent = "AdSense 暂时没有返回广告，请检查发布商 ID、广告位和域名审核状态。";
        }
      }
    });
  }

  frames.forEach(function (frame) {
    const key = frame.getAttribute("data-ad-key") || "";
    const slot = config.slots && config.slots[key];
    const ad = frame.querySelector(".adsbygoogle");
    const fallback = frame.querySelector(".ad-fallback");

    frame.dataset.active = "true";

    if (ad) {
      ad.setAttribute("data-ad-client", client);
      if (slot) {
        ad.setAttribute("data-ad-slot", slot);
      }
    }

    if (fallback) {
      fallback.hidden = true;
    }
  });

  const scriptSelector = 'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]';
  let script = document.querySelector(scriptSelector);

  if (!script) {
    script = document.createElement("script");
    script.async = true;
    script.crossOrigin = "anonymous";
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + encodeURIComponent(client);
    document.head.appendChild(script);
  }

  script.addEventListener("load", pushAds, { once: true });
  window.setTimeout(pushAds, 1200);
})();
