function generateColor() {
  let elements = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                  "A", "B", "C", "D", "E", "F"];
  let color = ["#"];
  for(let i = 0; i < 6; i++) {
    let rand = Math.floor(Math.random() * elements.length);
    color.push(elements[rand]);
  }
  return color.join("");
}

document.getElementById('changeColor').onclick =
  function(){
    document.body.style.backgroundColor = generateColor();
  }
