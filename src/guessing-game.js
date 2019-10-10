class GuessingGame {
    constructor() {

    }
    setRange(min, max) {
      this.min = min;
      this.max = max;
    }
    guess() {
      this.guessNumber = Math.ceil((this.max + this.min)/2);
      return this.guessNumber;
    }
    lower() {
      this.setRange(this.min, this.guessNumber);
    }

    greater() {
      this.setRange(this.guessNumber, this.max);
    }

}

module.exports = GuessingGame;
