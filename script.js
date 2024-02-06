document.addEventListener("DOMContentLoaded", function() {
  const titleElement = document.querySelector(".title");
  const buttonsContainer = document.querySelector(".buttons");
  const yesButton = document.querySelector(".btn--yes");
  const noButton = document.querySelector(".btn--no");
  const catImg = document.querySelector(".cat-img");

  const MAX_IMAGES = 5;

  let play = true;
  let noCount = 0;

  yesButton.addEventListener("click", handleYesClick);

  noButton.addEventListener("click", function () {
    if (play) {
      noCount++;
      const imageIndex = Math.min(noCount, MAX_IMAGES);
      changeImage(imageIndex);
      resizeYesButton();
      updateNoButtonText();
      if (noCount === MAX_IMAGES) {
        play = false;
      }
    }
  });

  function handleYesClick() {
    titleElement.textContent = "Yayyy i love you!! :3";
    buttonsContainer.classList.add("hidden");
    changeImage("yes");
  }

  function resizeYesButton() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.6;

    yesButton.style.fontSize = `${newFontSize}px`;
  }

  function generateMessage(noCount) {
    const messages = [
      "No",
      "sure ka?",
      "sige naaa please",
      "wag moko gantohin :(",
      "ma sasad nako",
      "ginagalit mona ko ah :<",
    ];

    const messageIndex = Math.min(noCount, messages.length - 1);
    return messages[messageIndex];
  }

  function changeImage(image) {
    catImg.src = `d:/User/code/cat-${image}.jpg`;
  }

  function updateNoButtonText() {
    noButton.textContent = generateMessage(noCount);
  }
});
