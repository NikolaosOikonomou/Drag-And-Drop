const redBox = document.getElementById('redBox');
const blueBox = document.getElementById('blueBox');
const containers = document.querySelectorAll('.container');
const dragableItems = document.querySelectorAll('.draggable');

const smallBoxesValueCheck = () => {
  let redDivsTxtContent = [];
  let blueDivsTxtContent = [];
  redBox.querySelectorAll('div').forEach(box => redDivsTxtContent.push(box.textContent));
  blueBox.querySelectorAll('div').forEach(box => blueDivsTxtContent.push(box.textContent));
  let tempRedArray = [];
  let tempBlueArray = [];

  for (let i = 0; i < redDivsTxtContent.length; i++) {
    if (isNaN(redDivsTxtContent[i])) {
      tempRedArray.push(redDivsTxtContent[i])
      console.log(tempRedArray);
    } else if (isNaN(blueDivsTxtContent[i])) {
      tempBlueArray.push(blueDivsTxtContent[i])
      console.log(tempBlueArray);
    }
    if (tempRedArray.length == redDivsTxtContent.length && blueDivsTxtContent.length == 8 ||
      tempBlueArray.length == blueDivsTxtContent.length && redDivsTxtContent.length == 8) {
      alert('Well Done!!\nYou have successfully match the boxes!');
    }
  }

}

// -----   Small boxes inside the 2 Big boxes
dragableItems.forEach(ele => {
  ele.addEventListener('dragstart', () => {
    ele.classList.add('dragging');
  });
});

dragableItems.forEach(ele => {
  ele.addEventListener('dragend', () => {
    ele.classList.remove('dragging');
    smallBoxesValueCheck();
  });
});

// -----  Big boxes
containers.forEach(container => {
  container.addEventListener('dragover', event => {
    event.preventDefault();
    const draggedItem = document.querySelector('.dragging');
    container.appendChild(draggedItem);
  })
})
