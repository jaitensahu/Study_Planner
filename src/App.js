import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./Components/SearchBar";
import SubjectCard from "./Components/SubjectCard/SubjectCard";
import { useState } from "react";
import Hero from "./Components/Hero/Hero";

function App() {
  let [data, setData] = useState({});
  let [cards, addCard] = useState([]);

  function addCardFunction(subject, hour) {
    // console.log(subject, hour);
    if(subject !=""){
      let dataOnclick = {
        subject: subject,
        hr: hour,
      };
      setData(dataOnclick);
      let updated = [...cards, dataOnclick];
      addCard(updated);
      console.log(updated);
    }else{
      alert("Enter Subject")
    }
    
    
    
  }
  // function
  return (
    <div className="App">
      <Hero />
      <SearchBar addCard={addCardFunction} />
      {cards.map((card) => {
        return <SubjectCard {...card} />;
      })}
    </div>
  );
}

export default App;
