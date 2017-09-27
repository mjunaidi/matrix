'use strict';

class Rand{
  static n(a,b) {
    let r = Math.random()
    if (a && b) {
      r = r*(b-a)+a
      if (a%1 === 0 && b%1 === 0) {
        a = Math.ceil(a)
        b = Math.floor(b)
        return Math.floor(r)
      }
      return r
    }
    return r
  }
  
  static ns(n,a,b) {
    const ns = []
    for (let i=0;i<n;i++) {
      ns.push(this.n(a,b))
    }
    return ns
  }
  
  static nss(m,n,a,b) {
    const nss = []
    for (let h=0;h<m;h++) {
      nss.push(this.ns(n,a,b))
    }
    return nss
  }
}
