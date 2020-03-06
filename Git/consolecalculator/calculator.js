var calculator = {
		sum: 0,
		add: function(value) {
      this.sum = this.sum + value;

    },
    clear: function() {
      this.sum = 0;

    }, 
    equals: function() {
      return this.sum;
    },

    suma: function(x, y) {
      console.log (x + y);
    },

    subtract: function(x, y){
      return x - y;
    },

    multiply: function(a, b){
        return a * b;
    },

    pow: function(a, b){
        return Math.pow(a, b);
    },
    
    squareRoot: function(x, y){
        return Math.sqrt(x, y);
    }
    
}