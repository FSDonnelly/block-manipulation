window.onload = () => {
  let block = document.getElementById('block');

  // Pos Y manipulation
  let posY = document.getElementById('pos-y');
  posY.onchange = () => {
    block.style.top = posY.value + 'px';
  };
  // Pos X manipulation
  let posX = document.getElementById('pos-x');
  posX.onchange = () => {
    block.style.left = posX.value + 'px';
  };
  // Size
  let size = document.getElementById('size');
  size.onchange = () => {
    block.style.transform = `scale(${size.value})`;
  };
};
