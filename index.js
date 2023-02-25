function bgChanger() {
  const preview = document.getElementById("preview");
  const rgbValue = document.getElementById("rgbValue");

  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);

  let rgb = `rgb(${red}, ${green}, ${blue})`;

  preview.style.backgroundColor = rgb;

  rgbValue.innerHTML = rgb;
  rgbValue.style.color = rgb;
}

setInterval(() => {
  bgChanger();
}, 1000);
