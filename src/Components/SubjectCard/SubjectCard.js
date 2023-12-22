import "./SubjectCard.css";
import { useState } from "react";
export default (props) => {
  console.log(props.hr);
  let [counter, setcounter] = useState(props.hr);
  function DecreaseCount() {
    if(counter>0)
    setcounter(counter - 1);
  }
  function IncreaseCount() {
    setcounter(counter + 1);
  }
  return (
    <div className="newSubjectCard">
      <table>
        <tr className="newSubjectCardRow">
          <td>
            <h2>{props.subject}</h2>
          </td>
          <td>
            <p>{counter} Hrs</p>
          </td>
          <td>
            <button onClick={DecreaseCount}>-</button>
          </td>
          <td>
           
            <button onClick={IncreaseCount}>+</button>
          </td>
        </tr>
      </table>
    </div>
  );
};
