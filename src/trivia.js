// Load Trivia Data
// async will return a promise
async function loadTriviaData() {
  const res = await fetch('data/test.csv')
  const csv = await res.text()
  // console.log(csv)

  const arr = csv.split('\n')
  const keys = arr[0].split('\t')
  // console.log(keys)

  const trivArr = []
  for(let i=1; i < arr.length; i+=1){
    const row = arr[i].split('\t')
    const trivObj = {}
    for(let j=0; j < row.length; j +=1){
      trivObj[keys[j]] = row[j]
     
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
}

loadTriviaData()

// Handle Trivia Data


export default loadTriviaData