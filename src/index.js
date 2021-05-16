import React,{Component} from "react";
import ReactDom from "react-dom";
import "./Assets/style.css";
import quizService from "./QuizService";
//import questionbox from "./components/QuestionBox";
import QuestionBox from "./QuizService/QuestionBox";
import Result from "./components/Result";
class QuizBee extends Component{
  state={
    questionBank : [],
    score:0,
    responses:0
  };
  
  getQuestions = () => {
    quizService().then(question => {
    this.setState({
      questionBank:question
    });
  });
};
computeAnswer=(answer,correctAnswer)=>{
  if(answer===correctAnswer){
    this.setState({
      score:this.state.score+1
    });
    
  }

this.setState({
    responses:this.state.responses<5 ? this.state.responses+1 : 5
  });
};

playAgain = ()=>{
  this.getQuestions();
  this.setState({
    score:0,
    responses:0
  });
};
componentDidMount()
{
  this.getQuestions();
}
  render(){
    return(
    <div className="container" >
      <div className="title">QuizBee</div>
      {this.state.questionBank.length>0 &&
      this.state.responses<5 &&
        this.state.questionBank.map(
          ({question,answers,correct,questionid})=>(
              <QuestionBox 
              question={question}
              options ={answers}
              key={questionid}
              selected={answer=>this.computeAnswer(answer,correct)}
              />
          )
        )}
        {this.state.responses === 5 ? (<Result score={this.state.score} playAgain={this.playAgain}/>):null}    

      </div>
      );
  }
}

ReactDom.render(<QuizBee/>,document.getElementById("root"));
