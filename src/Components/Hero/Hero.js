import "./hero.css";
import Button from "../Button/Button";

export default () => {
  let buttonData = ["School", "Collage", "Office"];
  return (
    <>
      <header>
        <h2>Education Planner</h2>
        <div class="buttonContainer">
          {buttonData.map((data) => {
            return <Button school={data} />;
          })}
        </div>
      </header>
      <div className="Images">
        <div className="coverImg">
          <img
            src="https://notion.so/images/page-cover/met_bruegel_1565.jpg"
            alt=""
          />
        </div>
        {/* <img src="" alt="" /> */}
      </div>
    </>
  );
};
