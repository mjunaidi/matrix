const M = new Matrix('[1,2;3,4]')

console.clear()
console.log(M.str())

//Inverse and Transpose
/*
% Initialize matrix A 
A = [1,2,0;0,5,6;7,0,9]

% Transpose A 
A_trans = A' 

% Take the inverse of A 
A_inv = inv(A)

% What is A^(-1)*A? 
A_invA = inv(A)*A
*/
/*
A =

   1   2   0
   0   5   6
   7   0   9

A_trans =

   1   0   7
   2   5   0
   0   6   9

A_inv =

   0.348837  -0.139535   0.093023
   0.325581   0.069767  -0.046512
  -0.271318   0.108527   0.038760

A_invA =

   1.00000  -0.00000   0.00000
   0.00000   1.00000  -0.00000
  -0.00000   0.00000   1.00000
*/
const A = new Matrix('[1,2,0;0,5,6;7,0,9]')
console.log(A.str())
console.log('transpose', A.trans().str())
console.log('inverse', A.inv().toString(6))
console.log('from octave =>', '[0.348837, -0.139535, 0.093023; 0.325581, 0.069767, -0.046512; -0.271318, 0.108527, 0.038760]', 'need to verify manually due to diff in precision')
console.log('A^(-1)*A', A.inv().mult(A).str())

// Matrix Multiplication Properties
/*
% Initialize random matrices A and B 
A = [1,2;4,5]
B = [1,1;0,2]

% Initialize a 2 by 2 identity matrix
I = eye(2)

% The above notation is the same as I = [1,0;0,1]

% What happens when we multiply I*A ? 
IA = I*A 

% How about A*I ? 
AI = A*I 

% Compute A*B 
AB = A*B 

% Is it equal to B*A? 
BA = B*A 

% Note that IA = AI but AB != BA
*/
/*
A =

   1   2
   4   5

B =

   1   1
   0   2

I =

Diagonal Matrix

   1   0
   0   1

IA =

   1   2
   4   5

AI =

   1   2
   4   5

AB =

    1    5
    4   14

BA =

    5    7
    8   10
*/
const B1 = new Matrix('[1,2;4,5]')
const B2 = new Matrix('[1,1;0,2]')
const I2 =  Matrix.eye(2)
console.log('A',B1.str())
console.log('B',B2.str())
console.log('I',I2.str())
console.log('I*A', I2.mult(B1).str())
console.log('A*I', B1.mult(I2).str())
console.log('I*A = A*I?', I2.mult(B1).str()===B1.mult(I2).str())
console.log('A*B',B1.mult(B2).str())
console.log('B*A',B2.mult(B1).str())
console.log('A*B = B*A?', B1.mult(B2).str()===B2.mult(B1).str())

// Matrix-Matrix Multiplication
/*
% Initialize a 3 by 2 matrix 
A = [1, 2; 3, 4;5, 6]

% Initialize a 2 by 1 matrix 
B = [1; 2] 

% We expect a resulting matrix of (3 by 2)*(2 by 1) = (3 by 1) 
mult_AB = A*B

% Make sure you understand why we got that result
*/
/*
A =

   1   2
   3   4
   5   6

B =

   1
   2

mult_AB =

    5
   11
   17
*/
const C1 = new Matrix('[1, 2; 3, 4;5, 6]')
const C2 = new Matrix('[1; 2]')
console.log('A',C1.str(),'size/dimension',C1.size(), '(row by column)')
console.log('B',C2.str(),'size',C2.size())
console.log('We expect a resulting matrix of (3 by 2)*(2 by 1) = (3 by 1)')
console.log('A*B', C1.mult(C2).str(), 'size', C1.mult(C2).size())

// Matrix-Vector Multiplication
/*
% Initialize matrix A 
A = [1, 2, 3; 4, 5, 6;7, 8, 9] 

% Initialize vector v 
v = [1; 1; 1] 

% Multiply A * v
Av = A * v
*/
/*
A =

   1   2   3
   4   5   6
   7   8   9

v =

   1
   1
   1

Av =

    6
   15
   24
*/
const D = new Matrix('[1, 2, 3; 4, 5, 6;7, 8, 9]')
const v1 = new Matrix('[1; 1; 1]')
console.log('D',D.str())
console.log('v',v1.str())
console.log('A * v', D.mult(v1).str())
console.log('A * v', D.multv(v1).str(), 'multv only works for multplying with vector!')

//Addition and Scalar Multiplication
/*
% Initialize matrix A and B 
A = [1, 2, 4; 5, 3, 2]
B = [1, 3, 4; 1, 1, 1]

% Initialize constant s 
s = 2

% See how element-wise addition works
add_AB = A + B 

% See how element-wise subtraction works
sub_AB = A - B

% See how scalar multiplication works
mult_As = A * s

% Divide A by s
div_As = A / s

% What happens if we have a Matrix + scalar?
add_As = A + s
*/
/*
A =

   1   2   4
   5   3   2

B =

   1   3   4
   1   1   1

s =  2
add_AB =

   2   5   8
   6   4   3

sub_AB =

   0  -1   0
   4   2   1

mult_As =

    2    4    8
   10    6    4

div_As =

   0.50000   1.00000   2.00000
   2.50000   1.50000   1.00000

add_As =

   3   4   6
   7   5   4
*/
const E1 = new Matrix('[1, 2, 4; 5, 3, 2]')
const E2 = new Matrix('[1, 3, 4; 1, 1, 1]')
const s1 = 2
console.log('A', E1.str())
console.log('B', E2.str())
console.log('s', s1)
console.log('A + B',E1.add(E2).str())
console.log('A - B',E1.sub(E2).str())
console.log('A * s',E1.mults(s1).str())
console.log('A / s',E1.divs(s1).str())
console.log('A + s',E1.adds(s1).str())

// Matrices and Vectors
/*
% The ; denotes we are going back to a new row.
A = [1, 2, 3; 4, 5, 6; 7, 8, 9; 10, 11, 12]

% Initialize a vector 
v = [1;2;3] 

% Get the dimension of the matrix A where m = rows and n = columns
[m,n] = size(A)

% You could also store it this way
dim_A = size(A)

% Get the dimension of the vector v 
dim_v = size(v)

% Now let's index into the 2nd row 3rd column of matrix A
A_23 = A(2,3)
*/
/*
A =

    1    2    3
    4    5    6
    7    8    9
   10   11   12

v =

   1
   2
   3

m =  4
n =  3
dim_A =

   4   3

dim_v =

   3   1

A_23 =  6
*/
const F1 = new Matrix('[1, 2, 3; 4, 5, 6; 7, 8, 9; 10, 11, 12]')
const v2 = new Matrix('[1;2;3]')
console.log('A', F1.str())
console.log('v', v2.str())
console.log('dimension of the matrix A', F1.size())
console.log('dimension of the vector v', v2.size())
console.log('A(2,3)', F1.at(2,3))
