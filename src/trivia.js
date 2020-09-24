// Load Trivia Data
d3.csv("trivia.csv").then(function(data) {
  // data.forEach(function(d) {});
  console.log(data);
  handleTriviaData(data);
});

// Handle Trivia Data
function handleTriviaData(csv) {
  
}