let catArr = ["Load Categories"]
const trivArr = []

// Load Trivia Data
// async will return a promise
async function loadTriviaData() {
  const res = await fetch('data/test.csv')
  const csv = await res.text()
  // console.log(csv)

  const arr = csv.split('\n')
  const keys = arr[0].split('\t')
  // console.log(keys)

  for(let i=1; i < arr.length; i+=1){
    const row = arr[i].split('\t')
    const trivObj = {}
    for(let j=0; j < row.length; j +=1){
      trivObj[keys[j].trim()] = row[j]
     
    }
    trivArr.push(trivObj)
  }
  console.log(trivArr)

  // const p = fetch('data/trivia.csv')
  // const p2 = p.then((res)=> {
  //   return res.text()
  // })
  // p2.then((csv)=> {
  //   console.log(csv)
  // })

  // Categories 
  catArr = Array.from(new  Set (trivArr.map(trivObj=> {
    return trivObj.Category
  })))
  console.log(catArr)
}



loadTriviaData()

// Handle Trivia Data
export default loadTriviaData;
export {trivArr, catArr}
