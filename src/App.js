import React, {Component} from 'react';
import Hero from './components/Hero'
import './components/styles/custom.scss'
import  CategoryButton from './components/CategoryButton'
import './trivia'
import Question from './components/Question'
import loadTriviaData, {catArr, trivArr} from './trivia'
import Papa from 'papaparse'
import * as d3 from 'd3'


class App extends Component {

  state = { currentCategory: null }
  render() {

    const categoryButtons = catArr.map(category => {
      return <CategoryButton

        key={category}
        cat={category}
        onClick={
          (category) => this.setState({ currentCategory: category })
        } />;


    });

//  const trivia_item = trivia.filter((trivia_item) => {
//    return trivia_item.category == this.state.currentCategory || this.state.currentCategory == null
//  }).map((trivia_item, i)=>{
//    const {category, question, answer} = trivia_item
//    return {
//      <Question
     
//      />
//    }
//  })

    return (

      <div>
        <Hero/>
  
        <div>{categoryButtons} </div>
        <Question 
          category = "category" 
          question = "question" 
          answer = "answer" 
        />
      </div>
    );

  }
}

export default App;

