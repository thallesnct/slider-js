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
    this.itemsArray[itemIndex].classes = 'slider-item slider-item--moving-to-current';
    setTimeout(() => {
      this.itemsArray[itemIndex].classes = 'slider-item slider-item--current';
    }, 600);

    // Verifica se o próximo item do slider é o 1o item do array, e se for, anima o ultimo item do array
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
    if (this.itemsArray[itemIndex + 1]) {
      this.itemsArray[itemIndex + 1].classes = 'slider-item slider-item--next';
    } else {
      this.itemsArray[0].classes = 'slider-item slider-item--next';
    }
    console.log(this.itemsArray);
  }

}

module.exports = Slider;