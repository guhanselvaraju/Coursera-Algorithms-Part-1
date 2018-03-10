class QuickFind {

  constructor(length) {
    this.arrayOfIds = Array(length);

    for( let i =0 ; i< this.arrayOfIds.length ; i++) {
      this.arrayOfIds[i] = i ;
    }
  }

  connected(p , q) {
    return this.arrayOfIds[p] === this.arrayOfIds[q];
  }

  union( p , q ) {
    let temp1 = this.arrayOfIds[p];
    let temp2 = this.arrayOfIds[q];


    for( let i = 0; i < this.arrayOfIds.length ; i ++) {
      if(this.arrayOfIds[i] === temp1)
        this.arrayOfIds[i] = temp2;
    }
  }
}

module.exports = QuickFind