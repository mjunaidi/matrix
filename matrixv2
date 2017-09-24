'use strict';

class Matrix{
  constructor(m) {
    if(typeof m === 'string') this.M = Matrix.fromString(m)
    else if(typeof m === 'object') this.M = m
    else this.M = []
    const dim = this.size()
    this.m = dim[0]
    this.n = dim[1]
  }

  size() {
    const m = this.M.length
    const n = this.M[0].length
    return [m,n]
  }

  at(r,c) {
    if(r>this.m) console.warn('row count is', this.m, 'asking', r)
    if(c>this.n) console.warn('column count is', this.n, 'asking', c)
    return this.M[r-1][c-1]
  }
  
  row(r) {
    const N = []
    for (let i=1;i<=this.n;i++) {
      N.push([this.at(r,i)])
    }
    return new Matrix(N)
  }
  
  col(c) {
    const N = []
    for (let i=1;i<=this.m;i++) {
      N.push([this.at(i,c)])
    }
    return new Matrix(N)
  }
  
  merge(N) {
    if (this.m !== N.m) {
      console.error('can merge only if same row count')
      return undefined
    }
    const C = []
    for (let i=1;i<=this.m;i++) {
      let rn = []
      for (let j=1;j<=this.n;j++) {
        rn.push(this.at(i,j))
      }
      for (let j=1;j<=N.n;j++) {
        rn.push(N.at(i,j))
      }
      C.push(rn)
    }
    return new Matrix(C)
  }
  
  /* operations */
  add(B) {
    // must same size/dimension
    if (this.m !== B.m || this.n !== B.n) {
      console.error('matrix addition must have same size/dimension')
      return undefined
    }
    const C = []
    let rn = []    
    for (let i=1;i<=this.m;i++) {
      for (let j=1;j<=this.n;j++) {
        rn.push(this.at(i,j)+B.at(i,j))
      }
      C.push(rn)
      rn = []
    }
    return new Matrix(C)
  }
  sub(B) {
    // must same size/dimension
    if (this.m !== B.m || this.n !== B.n) {
      console.error('matrix addition must have same size/dimension')
      return undefined
    }
    const C = []
    let rn = []    
    for (let i=1;i<=this.m;i++) {
      for (let j=1;j<=this.n;j++) {
        rn.push(this.at(i,j)-B.at(i,j))
      }
      C.push(rn)
      rn = []
    }
    return new Matrix(C)
  }
  // add scalar
  adds(s) {
    const C = []
    let rn = []
    for (let i=1;i<=this.m;i++) {
      for (let j=1;j<=this.n;j++) {
        rn.push(this.at(i,j)+s)
      }
      C.push(rn)
      rn = []
    }
    return new Matrix(C)
  }
  mults(s) {
    const C = []
    let rn = []
    for (let i=1;i<=this.m;i++) {
      for (let j=1;j<=this.n;j++) {
        rn.push(this.at(i,j)*s)
      }
      C.push(rn)
      rn = []
    }
    return new Matrix(C)
  }
  divs(s) {
    return this.mults(1/s)
  }
  // multiply with vector (single column sized matrix)
  multv(v) {
    // check column must match vector's row count
    if (this.n !== v.m) {
      console.error('matrix column must match vector\'s row count')
      return undefined
    }
    const C = []
    let rn = []
    for (let i=1; i<=this.m; i++) {
      let n = 0
      for (let j=1; j<=this.n; j++) {
        n += this.at(i,j)*v.at(j,1)
      }
      C.push([n])
    }
    return new Matrix(C)
  }
  mult(B) {
    // check matrix's column must match B's row count
    if (this.n !== B.m) {
      console.error('matrix column must match another row count')
      return undefined
    }
    const vs = [] // list of vectors
    for (let i=1;i<=B.n;i++) {
      vs.push(B.col(i))
    }
    const Cs = []
    for (let i=0;i<vs.length;i++) {
      Cs.push(this.multv(vs[i]))
    }
    let N = Cs[0]
    for (let i=1;i<Cs.length;i++) {
      N = N.merge(Cs[i])
    }
    return N
  }
  
  // transpose
  trans() {
    const T = []
    let rn = []

    const row = this.m
    const col = this.n

    for (let i=0; i<col; i++) {
      for (let j=0; j<row; j++) {
        rn.push(this.M[j][i])
      }
      T.push(rn)
      rn = []
    }
    return new Matrix(T)
  }
  
  // determinant
  det() {
    if (this.m !== this.n) {
      console.error('must be a square matrix')
      return undefined
    }
    if (this.m === 1) {
      return this.at(1,1)
    }
    if (this.m === 2) {
      // ad-bc
      return this.at(1,1)*this.at(2,2)-this.at(1,2)*this.at(2,1)
    }
    if (this.m === 3) {
      const minors = []
      for (let i=1;i<=this.m;i++) {
        let mn = []
        for (let j=1;j<=this.n;j++) {
          mn.push(this.minor(i,j))
        }
        minors.push(mn)
      }
      
      const determinants = []
      for (let i=0;i<minors.length;i++) {
        let dn = []
        for (let j=0;j<minors[i].length;j++) {
          dn.push(minors[i][j].det())
        }
        determinants.push(dn)
      }
      //console.log('determinants',determinants)
      
      const matrixOfMinors = new Matrix(determinants)
      //console.log('matrixOfMinors',matrixOfMinors.str())
      
      const cofactors = []
      for (let i=0;i<determinants.length;i++) {
        let cn = []
        for (let j=0;j<determinants[i].length;j++) {
          let cofactor = determinants[i][j]
          if ((i+j)%2===1) {
            cofactor *= -1
          }
          cn.push(cofactor)
        }
        cofactors.push(cn)
      }
      const C = new Matrix(cofactors)
      //console.log('cofactors',cofactors)
      //console.log('matrixOfCofactors',C.str())
      
      const rowDeterminants = []
      for (let i=1;i<=this.m;i++) {
        let n = 0
        for (let j=1;j<=this.n;j++) {
          n += this.at(i,j)*C.at(i,j)
        }
        rowDeterminants.push(n)
      }
      //console.log(rowDeterminants)
      
      // verify rowDeterminants, each element must equals
      for (let i=1;i<rowDeterminants;i++) {
        if (rowDeterminants[i] !== rowDeterminants[i-1]) {
          console.warn('determinant calculated based on diff row should be the same! something is not right', rowDeterminants[i], rowDeterminants[i-1])
        }
      }
      return rowDeterminants[0]
    }
    return undefined
  }
  
  //inverse
  inv() {
    if (this.m !== this.n) {
      console.error('must be a square matrix')
      return undefined
    }
    if (this.m === 1) {
      return this.at(1,1)
    }
    if (this.m === 2) {
      // ad-bc
      return this.at(1,1)*this.at(2,2)-this.at(1,2)*this.at(2,1)
    }
    if (this.m === 3) {
      const minors = []
      for (let i=1;i<=this.m;i++) {
        let mn = []
        for (let j=1;j<=this.n;j++) {
          mn.push(this.minor(i,j))
        }
        minors.push(mn)
      }
      
      const determinants = []
      for (let i=0;i<minors.length;i++) {
        let dn = []
        for (let j=0;j<minors[i].length;j++) {
          dn.push(minors[i][j].det())
        }
        determinants.push(dn)
      }
      
      const matrixOfMinors = new Matrix(determinants)
      
      const cofactors = []
      for (let i=0;i<determinants.length;i++) {
        let cn = []
        for (let j=0;j<determinants[i].length;j++) {
          let cofactor = determinants[i][j]
          if ((i+j)%2===1) {
            cofactor *= -1
          }
          cn.push(cofactor)
        }
        cofactors.push(cn)
      }
      const C = new Matrix(cofactors)
      //console.log('matrixOfCofactors',C.str())
      
      // adjugate (also called adjoint)
      const T = C.trans()
      //console.log('adjugate',T.str())
      
      const determinant = this.det()
      //console.log('determinant',determinant)
      
      return T.mults(1/determinant)
    }
    return undefined
  }
  
  minor(r,c) {
    if (this.m !== this.n && this.m >= 3) {
      console.error('must be a square matrix with minimum 3x3')
      return undefined
    }
    const N = []
    let k = 0
    for (let i=1;i<=this.m;i++) {
      if (r===i) continue;
      let rn = []
      let l = 0
      for (let j=1;j<=this.n;j++) {
        if (c===j) continue;
        rn.push(this.at(i,j))
        l++
      }
      N.push(rn)
      k++
    }
    return new Matrix(N)
  }
  
  /* utils */  
  toString(precision) {
    const rows = []
    for (let i=0; i<this.M.length; i++) {
      if (typeof precision === 'number') {
        let rn = []
        for (let j=0; j<this.M[i].length; j++) {
          let val = this.M[i][j]
          if (val%1 !== 0) {
            val = val.toPrecision(precision)
            rn.push(val)
          }
        }
        rows.push(rn.join(', '))
      } else
        rows[i] = this.M[i].join(', ')
    }
    return '['+ rows.join('; ') +']'
  }
  // alias to toString
  str() {
    return this.toString()
  }
  toStr() {
    return this.toString()
  }
  
  static eye(n) {
    const I = []
    let rn = []
    for (let i=0; i<n; i++) {
      for (let j=0; j<n; j++) {
        if (j===i) rn.push(1)
        else rn.push(0)
      }
      I.push(rn)
      rn = []
    }
    return new Matrix(I)
  }
  
  static fromString(s) {
    const M = []
    let rn = []
    let n
    let row = 0
    let col = 0
    for (let i=0; i<s.length; i++) {
      const c = s.charAt(i)
      if (isNaN(c)===true) {
        if (c === '[') {
          n = ''
        } else {
          if (c === '-' || c === '.') {
            n += c
          } else {
            if (n.indexOf('.')>=0) {
              n = parseFloat(n)
            } else {
              n = parseInt(n)
            }
            rn.push(n)
            n = ''
            if (c === ',') {
              col++
            } else if (c === ';') {
              M.push(rn)
              rn = []
              row++
            } else if (c === ']') {
              M.push(rn)
              break
            }
          }
        }
      } else {
        n += c
      }
    }
    return M
  }
}

console.clear()

const A = new Matrix('[1,3,2;4,0,1]')
const B = new Matrix('[1,3;0,1;5,2]')

//console.log(A.toString())
//console.log(B.toString())

const AB = A.mult(B)
console.log(AB.toString(), AB.toString() === '[11, 10; 9, 14]')

const C = new Matrix('[1,3;2,5]')
const D = new Matrix('[0,1;3,2]')
const CD = C.mult(D)
console.log(CD.toString(), CD.toString() === '[9, 7; 15, 12]')

const H = new Matrix('[1,2104;1,1416;1,1534;1,852]')
const M = new Matrix('[-40,200,-150;0.25,0.1,0.4]')
const HM = H.mult(M)
console.log(HM.toString(), HM.toStr()==='[486, 410.4, 691.6; 314, 341.6, 416.4; 343.5, 353.4, 463.6; 173, 285.2, 190.8]')

const AA = new Matrix('[1, 2, 3; 4, 5, 6; 7, 8, 9]')
const v = new Matrix('[1; 1; 1]')
//console.log(AA.toString())
//console.log(v.toString())
const AAv = AA.multv(v)
console.log(AAv.toString(), AAv.toString()==='[6; 15; 24]')

const AA1 = AA.col(1)
const AA2 = AA.col(2)
const AA3 = AA.col(3)
//console.log(AA1.toStr())
//console.log(AA1.merge(AA2).toStr())
console.log(AA.toStr(), AA1.merge(AA2).merge(AA3).toStr()===AA.toStr())

console.log(Matrix.eye(2).toStr(), Matrix.eye(2).toStr()==='[1, 0; 0, 1]')
console.log(Matrix.eye(3).toStr(), Matrix.eye(3).toStr()==='[1, 0, 0; 0, 1, 0; 0, 0, 1]')

const AAA = new Matrix('[1,2,0;3,5,9]')
console.log(AAA.toStr(),AAA.trans().toStr()==='[1, 3; 2, 5; 0, 9]')

// determinant test
const A1 = new Matrix('[7]')
console.log(A1.det(), A1.det()===7)
const A2 = new Matrix('[3,4;6,8]')
console.log(A2.det(), A2.det()===0) // if determinant is 0, it has no inverse
const A3 = new Matrix('[4,7;2,6]')
console.log(A3.det(), A3.det()===10)

// matrix of minors
const A4 = new Matrix('[1,5,3;2,4,1;4,6,2]')
console.log(A4.str())
console.log(A4.minor(1,1).str(), A4.minor(1,1).str()==='[4, 1; 6, 2]')
console.log(A4.minor(1,2).str(), A4.minor(1,2).str()==='[2, 1; 4, 2]')
console.log(A4.minor(1,3).str(), A4.minor(1,3).str()==='[2, 4; 4, 6]')

// determinant 3x3 test
console.log(A4.det(), A4.det()===-10)

const A5 = new Matrix('[3,0,2;2,0,-2;0,1,1]')
console.log(A5.str())
console.log(A5.det())

// inverse
console.log(A5.inv().str())

const A6 = new Matrix('[1,2,0;0,5,6;7,0,9]')
console.log(A6.str())
console.log(A6.trans().str())
console.log(A6.inv().toString(7), A6.inv().toString(7)==='[0.348837, -0.139535, 0.093023; 0.325581, 0.069767, -0.046512; -0.271318, 0.108527, 0.038760]', 'false because of the precision diff')
console.log(A6.inv().mult(A6).str(), A6.inv().mult(A6).str()==='[1, 0, 0; 0, 1, 0; 0, 0, 1]')
