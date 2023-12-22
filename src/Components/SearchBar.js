import './SearchBar.css'
import {useState}  from 'react'
export default (props)=>{
    
    let [subject, setSubject] = useState("");
    let [hours, setHours] = useState(0);
    function TypeSubjectCard(e){
        console.log(e.target.getAttribute("type"));
        if(e.target.getAttribute("type")=="text"){
            setSubject(e.target.value);
        }else{
            if(e.target.value>=0)
            setHours(Number(e.target.value));
        // console.log(typeof()));
        }
        
        
    }
    function addSubjectCard(){
        props.addCard(subject, hours)
    }
    return (
        <div className='searchBar'>
            <input onChange={TypeSubjectCard} type="text" value={subject} placeholder="Subject"/>
            <input onChange={TypeSubjectCard} type="number" value={hours}/>
            <button onClick={addSubjectCard}>Add</button>
        </div>
    )
}