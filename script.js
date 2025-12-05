document.addEventListener("DOMContentLoaded", () => {
  const nurie = document.querySelector(".Nurie");
  if (!nurie) return;

  // 各レイヤーとボタンの対応
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

      // visible がついている＝今ON → OFFに戻す
      if (targetImg.classList.contains("visible")) {
        targetImg.classList.remove("visible");
        button.classList.remove("active");
      } 
      // visible がついていない＝今OFF → ONにする
      else {
        targetImg.classList.add("visible");
        button.classList.add("active");
      }
    });
  });
});
