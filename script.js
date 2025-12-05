document.addEventListener("DOMContentLoaded", () => {
  // ① ページ読み込み時：フェードイン
  document.body.classList.add("page-loaded");

  // ② ページ内リンククリック時：フェードアウトしてから遷移
  const links = document.querySelectorAll('a[href]');

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // 外部リンク・新規タブ・アンカーは除外
    const isExternal = href.startsWith('http') && !href.startsWith(window.location.origin);
    const isAnchor = href.startsWith('#');
    const isNewTab = link.target === '_blank';

    if (isExternal || isAnchor || isNewTab) {
      return; // これらは通常通り
    }

    // 内部リンクだけフェードアウト遷移
    link.addEventListener('click', (event) => {
      event.preventDefault();

      // すでにフェードアウト中なら二重で動かさない
      if (document.body.classList.contains('page-fade-out')) return;

      document.body.classList.add('page-fade-out');

      // CSSのtransition時間(0.5s)に合わせる
      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  });

  // ③ ここから下は塗り絵の処理（既存のやつ） -----------------

  const nurie = document.querySelector(".Nurie");
  if (!nurie) {
    return; // Nurie がないページではここで終了
  }

  const mapping = {
    "Nurie-button-marketing": "Nurie-marketing",
    "Nurie-button-Snowboarding": "Nurie-snowboarding",
    "Nurie-button-Family_and_Friends": "Nurie-family_and_friends",
    "Nurie-button-Animals": "Nurie-Animals",
    "Nurie-button-Life_in_Canada": "Nurie-Life_in_Canada",
    "Nurie-button-Games": "Nurie-Games",
    "Nurie-button-Violin_and_Bass_Guitar": "Nurie-Violin_and_Bass_Guitar",
    "Nurie-button-Badminton": "Nurie-badminton"
  };

  Object.keys(mapping).forEach(buttonClass => {
    const button = document.querySelector(`.${buttonClass}`);
    const layerClass = mapping[buttonClass];

    if (!button) return;

    button.addEventListener("click", () => {
      const targetImg = document.querySelector(`.${layerClass} img`);

      if (!targetImg) return;

      // すでにONならOFFに
      if (targetImg.classList.contains("visible")) {
        targetImg.classList.remove("visible");
        button.classList.remove("active");
      } else {
        // OFFならONに
        targetImg.classList.add("visible");
        button.classList.add("active");
      }
    });
  });
});
