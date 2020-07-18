class Matrix extends Array{
    constructor(value1,value2,placeholder = undefined){
        if (typeof value1 === "object") {
          if (value1[0][0] != undefined && !value2){
            super(value1.length)
            for(let i = 0; i!=value1.length;i++){
              this[i] = value1[i];
             }
          }
          else {
            if(value1.length%value2 != 0)return console.error("mtx.js> could not create the matrix because the amount of rows doesn't fit the provided array.")
            super([])
            let i = 0;
            value1.forEach((v) => {
              if (i == value2) {
                i = 0;
                this[this.length]=[];
              }
              this[this.length - 1].push(v);
              i++;
            });
          }
        } else if (!isNaN(value1)){
          super(value1)
          for(let i=0; i!=value1; i++){
              this[i] = new Array(value2);
            for(let j = 0;j!=value2;j++){
              this[i][j] = placeholder;
            }
          };
        }
    }  
    tableLog(){
        console.table(this)
    }
    static product(mtx1,mtx2){
      let mtxR = new Matrix(mtx1.length,mtx2[0].length);
      if(mtx1[0].length != mtx2.length)return console.error("Can not multiply thoes matrices"); else {
        mtxR.forEach((v,i)=>{
          mtxR[i].forEach((u,j)=>{
            let val = 0;
            mtx2.forEach((w,y)=>{
              val = val+(mtx1[i][y]*mtx2[y][j])
            });
            mtxR[i][j] = val;
          });
        })
      }
      return mtxR
    }
    static sum(mtx1,mtx2){
      let mtxR = new Matrix(mtx1.length,mtx1[0].length)
      if(!mtx2[0])mtx2 = new Matrix(mtx1.length,mtx1[0].length,mtx2)
      mtx1.forEach((v,i)=>{
        mtx1[i].forEach((u,j)=>{
          let val = mtx2[i]?mtx2[i][j]:mtx2;
          mtxR[i][j] = mtx1[i][j] + val
        });
      })
      return mtxR;
    }
    static mult(mtx1,mtx2){
      let mtxR = new Matrix(mtx1.length,mtx1[0].length)
      if(!mtx2[0])mtx2 = new Matrix(mtx1.length,mtx1[0].length,mtx2)
      mtx1.forEach((v,i)=>{
        mtx1[i].forEach((u,j)=>{
          let val = mtx2[i]?mtx2[i][j]:mtx2;
          mtxR[i][j] = mtx1[i][j] * val
        });
      })
      return mtxR;
    }
    static pow(mtx1,mtx2){
      let mtxR = new Matrix(mtx1.length,mtx1[0].length)
      if(!mtx2[0])mtx2 = new Matrix(mtx1.length,mtx1[0].length,mtx2)
      mtx1.forEach((v,i)=>{
        mtx1[i].forEach((u,j)=>{
          let val = mtx2[i]?mtx2[i][j]:mtx2;
          mtxR[i][j] = mtx1[i][j] ** val
        });
      })
      return mtxR;
    }
    sum(mtx,set){
      let mtx1 = this
      let mtxR = new Matrix(mtx1.length,mtx1[0].length)
      if(!mtx[0])mtx = new Matrix(mtx1.length,mtx1[0].length,mtx)
      mtx1.forEach((v,i)=>{
        mtx1[i].forEach((u,j)=>{
          let val = mtx[i]?mtx[i][j]:mtx;
          mtxR[i][j] = mtx1[i][j] + val
        });
      })
      if(set)this = mtxR;
      return mtxR;
    }
    mult(mtx,set){
      let mtx1 = this
      let mtxR = new Matrix(mtx1.length,mtx1[0].length)
      if(!mtx[0])mtx = new Matrix(mtx1.length,mtx1[0].length,mtx)
      mtx1.forEach((v,i)=>{
        mtx1[i].forEach((u,j)=>{
          let val = mtx[i]?mtx[i][j]:mtx;
          mtxR[i][j] = mtx1[i][j] * val
        });
      })
      if(set)this = mtxR;
      return mtxR;
    }
    pow(mtx,set){
      let mtx1 = this
      let mtxR = new Matrix(mtx1.length,mtx1[0].length)
      if(!mtx[0])mtx = new Matrix(mtx1.length,mtx1[0].length,mtx)
      mtx1.forEach((v,i)=>{
        mtx1[i].forEach((u,j)=>{
          let val = mtx[i]?mtx[i][j]:mtx;
          mtxR[i][j] = mtx1[i][j] ** val
        });
      })
      if(set)this = mtxR;
      return mtxR;
    }
};

module.exports = Matrix;