import React,{useState} from "react";

const QuestionBox=({question,options})=>{
  const [answer,setAnswer]=useState(options);

  return(
  <div className="questionBox">
    <div className="question">{question}</div>
    
    {answer.map((text,index)=>(
    <buton key={index} className="answerBtn"
    onClick={()=>{
      setAnswer([text]);
      selected();
    }}
    >
      {text}
    </buton>
    ))}
    </div>
  );
};
export default QuestionBox;