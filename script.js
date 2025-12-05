// ページのHTMLが読み込まれてから動くようにする
document.addEventListener("DOMContentLoaded", () => {
  const nurie = document.querySelector(".Nurie");
  if (!nurie) return; // このページにNurieがないときは何もしない

  // 塗り絵レイヤー（カラー）の画像たち
  const layerImages = nurie.querySelectorAll("div img");

  // ボタンと対応するレイヤーのマッピング
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

  // すべてのボタンにクリックイベントをつける
  Object.keys(mapping).forEach(buttonClass => {
    const button = document.querySelector(`.${buttonClass}`);
    const layerClass = mapping[buttonClass];

    if (!button) return;

    button.addEventListener("click", () => {
      // いったん全レイヤーを非表示にする
      layerImages.forEach(img => img.classList.remove("visible"));

      // 対応するレイヤーだけ表示
      const targetLayerImg = document.querySelector(`.${layerClass} img`);
      if (targetLayerImg) {
        targetLayerImg.classList.add("visible");
      }

      // ボタン側の「選択中」見た目用のクラスも付け外し
      document
        .querySelectorAll(".Nurie-button-1 h2, .Nurie-button-2 h2")
        .forEach(h2 => h2.classList.remove("active"));

      button.classList.add("active");
    });
  });
});
