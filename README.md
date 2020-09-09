#  MTX·JS
![GitHub All Releases](https://img.shields.io/github/downloads/wamuM/mtx.js/total?style=flat-square) 
![npm](https://img.shields.io/npm/v/mtx.js?style=flat-square)
![npm](https://img.shields.io/npm/dm/mtx.js?color=red&label=npm%20downloads&style=flat-square)

mtx.js is a js module that gives you a matrix constructor based on the Array class.

### How does it work?

#### installing the package

You can install the package via [npm](https://www.npmjs.com/package/mtx.js) or directly from the [github project](https://github.com/wamuM/mtx.j)
#### Using a Matrix
How do you use a Matrix? well, indeed you have to create the matrix with the class constructor (more info bellow)
```js
var mtx1 = new Matrix(3,3,0)
```
and then you can get any cell by saying in wich row and wich column the cell is.
```js
mtx1[row][column] = cellValue
//be aware that it uses the js array index systeme so the first cell is mtx1[0][0]
```
#### Creating a Matrix
There are multiple ways to create a matrix with the class (from now known as Matrix) constructor.

1- None module made matrix.<br>
If you searched about it before finding this module, you may know that to easily create a matrix in js you only have to create an array with another array in each cell. 
```js
var mtx1 = 
[
[0,1,2],
[0,1,2],
[0,1,2]
]
```
But if you want more methods such as transpose the matrix (more info bellow) you can give them to it by transforming the none module matrix into a module one.
```js
var mtx2 = new Matrix(mtx1)
```
2- Aray made matrix <br>
You can also create a matrix with an Array and the number of rows you want.
```js
var mtx3 = new Matrix([0,1,2,0,1,2,0,1,2] ,  3  )
//                           array         rows
//if the array isn't long enought to have x rows it'll will throw an error
```
3- placeholder matrix <br>
The last way to create a matrix is by creating a void matrix.
```js
var mtx4 = new Matrix(rows, columns,?placeholder)
```
by default the value of each cell will be ``undefined`` but if you specify the placeholder you can set a comon value
### Methods and more cool stuff

## .tableLog()
To log the value of the matrix in a table shape you can use the ``.tableLog()`` method
```js
mtx2.tableLog();
```
```
┌─────────┬───┬───┬───┬────────┐
│ (index) │ 0 │ 1 │ 2 │ Values │
├─────────┼───┼───┼───┼────────┤
│    0    │ 0 │ 1 │ 2 │        │
│    1    │ 0 │ 1 │ 2 │        │
│    2    │ 0 │ 1 │ 2 │        │
└─────────┴───┴───┴───┴────────┘
```
It's the same as using the console.table() command
```js
console.table(mtx2)
```
### .sum() .mult() and .pow()
To sum, multiply or power all the elements of the matrix with another matrix you can use the ``.sum() .mult() and .pow()`` methods or use the static method with the same name
```js
var mtx1 = new Matrix(3,3,3)
var mtx2 = new Matrix(2,2,2)
var result;
result = mtx1.mult(mtx2)
result = Matrix.mult(mtx1,mtx2)
// the set argument of the class instance
result = mtx1.sum(mtx2,true)
mtx1 == result //true
```
###.transpose() and .transpose
WIP


