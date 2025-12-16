import { useState } from "react";

interface FaqItem {
  question: string;
  answer : string;
}

const faqData : FaqItem[] = [
  {
    question : "React kya hai?",
    answer : "React ek javascript library hai UI banane ke liye kaam aathi hai",
  },
  {
    question : "Hooks kya hai",
    answer : "hooks functions hain jo functional component mein state use karne dete hai"
  },
  {
    question : "Virtual DOM kya hai",
    answer : "yeh real DOM k copy hai , jo performance fact karne mein mada karti hai"
  },
];
const Accordion = () => {
  const [activeIndex , setActiveIndex] = useState<number | null>(null);

  const toogleAccordion = (index : number) =>{
    if(activeIndex === index){
      setActiveIndex(null)
    } else {
      setActiveIndex(index)
    }
  }
  return (
    <div style={{padding:"20px ", maxWidth :"600px", margin:"0 auto"}}>
      <h2>Frequentlyy asked Question</h2>
      {faqData.map((item,index)=>(
        <div key={index} style={{borderBottom:"1px solid #ccc"}}>
          <button
          onClick={()=>toogleAccordion(index)}
          style={{
            width:"100%",
            padding: "15px",
            textAlign: "left",
            background : activeIndex === index ? "#f0f0f0" :"white",
            border : "none",
            cursor : "pointer",
            display : "flex",
            justifyContent : "space-between",
            alignItems:"center",
            fontWeight : "bold",
            fontSize : "16px"
          }}>
            {item.question}
            <span>{activeIndex === index ? "-" : "+"}</span>
          </button>
          {activeIndex === index && (
            <div
            style={{
              padding :"15px",
              background: "white",
              color : "#555",
              lineHeight :" 1.5"
            }}
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
