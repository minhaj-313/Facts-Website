const typewriter = () => {
  const aText = [
    "This is Facts - Website, You can Read New and Unique Fact. This Website Provides you a Inspiring, Fun, Motivational, New, and many more types of Facts.",
    "If You are Developer or You Want Contribute then click on Contribute button and solve issues or add Unique Facts.",
    "If you are Normal User then do not Click on Contribute Button you can only Read Facts.",
  ];
  const speed = 100;
  let index = 0;
  let arrLength = aText[0].length;
  const scrollAt = 20;
  let textPos = 0;
  let contents = "";
  let row;

  const destination = document.getElementById("typedtext");
  if (!destination) return; // exit function if element is not found

  const typewriter = () => {
    contents = " ";
    row = Math.max(0, index - scrollAt);

    while (row < index) {
      contents += `${aText[row++]}<br />`;
    }

    destination.innerHTML = `${contents}${aText[index].substring(0, textPos)}_`;

    if (textPos++ === arrLength) {
      textPos = 0;
      index++;

      if (index !== aText.length) {
        arrLength = aText[index].length;
        setTimeout(typewriter, 500);
      }
    } else {
      setTimeout(typewriter, speed);
    }
  };

  typewriter();
};

document.addEventListener("DOMContentLoaded", typewriter);
