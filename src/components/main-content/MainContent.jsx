import "./main-content.css";
import LeftSide from "./left-side/LeftSide";
import RightSide from "./right-side/RightSide";

const MainContent = ({ data }) => {
  return (
    <main className="main">
      <div className="container">
        <LeftSide data={data} />
        <RightSide data={data} />
      </div>
    </main>
  );
};

export default MainContent;
