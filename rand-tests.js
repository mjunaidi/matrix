

console.clear()
console.log(Rand.n())
const a = 1
const b = 100
const n = 1000
const counters = []
let min, max
console.log('Random numbers between', a, 'and', b, ';')
for (let i=0;i<n;i++){
  const r = Rand.n(a,b)
  if (!min||r<min) min = r
  if (!max||r>max) max = r
  const ind = counters.findIndex(c=>c.value===r)
  if (ind<0) {
    counters.push({
      value: r,
      count: 1
    })
  } else {
    counters[ind].count++
  }
}
console.log('after', n, 'times', 'min', min, 'max', max)
console.log('random number never equal to', b)
console.log('top 10', counters.sort((a,b)=>{
  //if (a.count<b.count) return -1
  //else if (a.count>b.count) return 1
  //return 0
  //return a.value-b.value // sort by value
  return a.count-b.count  // sort by count
}).reverse().splice(0,10))
//e.log(counters.splice(-10))

console.log('array of 10 random numbers', Rand.ns(10))
console.log('array of 10 random numbers between -0.999... and 0.999...', Rand.ns(10,-0.999999999999, 0.999999999999))
console.log('array of 10 random integers between 1 (inclusive 1) and 10 (not inclusive 10)', Rand.ns(10,1,10))
console.log('array of 10 random integers between -10 (inclusive -10) and 10 (inclusive 10)', Rand.ns(10,1,11))
console.log('array of 4 sets of 4 random integers between -10 (inclusive -10) and 10 (inclusive 10)', Rand.nss(4,4,-10,11))
