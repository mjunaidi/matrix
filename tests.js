/*
Let two matrices be

A=[4639],B=[−2−592]
What is A + B?
*/
const A = new Matrix('[4,3;6,9]')
const B = new Matrix('[-2,9;-5,2]')

console.clear()
console.log(A.add(B).str())
//"[2, 12; 1, 11]"

/////////////////////

/*
Let x=⎡⎣⎢⎢8251⎤⎦⎥⎥
What is 2∗x?
*/
const A = new Matrix('[8;2;5;1]')
const x = 2

console.clear()
console.log(A.mults(x).str())
//"[16; 4; 10; 2]"

///////////////////////

/*
Let u be a 3-dimensional vector, where specifically

u=⎡⎣351⎤⎦
What is uT?
*/
const u = new Matrix('[3;5;1]')

console.clear()
console.log(u.trans().str())
//"[3, 5, 1]"

////////////////////////

/*
Let u and v be 3-dimensional vectors, where specifically

u=⎡⎣13−1⎤⎦
and

v=⎡⎣224⎤⎦
What is uTv?

(Hint: uT is a

1x3 dimensional matrix, and v can also be seen as a 3x1

matrix. The answer you want can be obtained by taking

the matrix product of uT and v.) Do not add brackets to your answer.
*/
const u = new Matrix('[1;3;-1]')
const v = new Matrix('[2;2;4]')

console.clear()
console.log(u.trans().str())
console.log(u.trans().mult(v).str())
//"[4]"

///////////////////////////////

/*
Let A and B be 3x3 (square) matrices. Which of the following

must necessarily hold true? Check all that apply.


If B is the 3x3 identity matrix, then A∗B=B∗A

If C=A∗B, then C is a 3x3 matrix.

A∗B∗A=B∗A∗B

A∗B=B∗A
*/
const A = new Matrix('[1,2,3;4,5,6;7,8,9]')
const B = new Matrix('[1,0,0;0,1,0;0,0,1]')

console.clear()
console.log(A.str())
console.log(B.str())
console.log(A.mult(B).str())
console.log(B.mult(A).str())
console.log(A.mult(B).str()===B.mult(A).str())

const C = A.mult(B)
console.log(C.str())
console.log(C.size())

console.log(A.mult(B).mult(A).str())
console.log(B.mult(A).mult(B).str())
console.log(A.mult(B).mult(A).str()===B.mult(A).mult(B).str())

const D = new Matrix('[2,2,3;4,5,6;7,8,9]')
console.log(A.mult(D).str())
console.log(D.mult(A).str())
console.log(A.mult(D).str()===D.mult(A).str())
/*
If B is the 3x3 identity matrix, then A∗B=B∗A (true)

If C=A∗B, then C is a 3x3 matrix. (true)

A∗B∗A=B∗A∗B (false)

A∗B=B∗A (false) (true only on certain case but not all cases)
*/
