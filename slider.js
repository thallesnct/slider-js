class Slider {
  constructor(itemsArray) {
    this.itemsArray = itemsArray;
    if (this.itemsArray.length >= 1) {
      this.itemsArray[0].classes = 'slider-item slider-item--current';
      if (this.itemsArray.length > 1) {
        this.itemsArray[1].classes = 'slider-item slider-item--next';
      }
    }
  }

  next(item) {
    const itemIndex = this.itemsArray.indexOf(item);
    
    // Executa a animação passando o card da ultima opção para a posição atual
    // Executes the animation, changing the item marked as next to current
    this.itemsArray[itemIndex].classes = 'slider-item slider-item--moving-to-current';
    setTimeout(() => {
      this.itemsArray[itemIndex].classes = 'slider-item slider-item--current';
    }, 600);

    // Verifica se o próximo item do slider é o 1o item do array, e se for, anima o ultimo item do array
    // Checks if the item passed in as a parameter is the first one in the items array, and if it is, it executes the animation for the last one in the array
    if (itemIndex !== 0) {
      this.itemsArray[itemIndex - 1].classes = 'slider-item slider-item--moving-to-default';
      setTimeout(() => {
        this.itemsArray[itemIndex - 1].classes = 'slider-item';
      }, 600);
    } else {
      this.itemsArray[this.itemsArray.length -1].classes = 'slider-item slider-item--moving-to-default';
      setTimeout(() => {
        this.itemsArray[this.itemsArray.length -1].classes = 'slider-item';
      }, 600);
    }

    // Verifica a existencia de um próximo item no array passado para o slider, caso não possua, volta ao primeiro item
    // Checks if the array contains an item after the one passed in as a parameter, and if it doesn't, it goes back to the first item
    if (this.itemsArray[itemIndex + 1]) {
      this.itemsArray[itemIndex + 1].classes = 'slider-item slider-item--next';
    } else {
      this.itemsArray[0].classes = 'slider-item slider-item--next';
    }
  }

}

module.exports = Slider;
