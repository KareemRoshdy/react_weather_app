import Footer from "../../footer/Footer";
import HighLights from "./HighLights";
import Today from "./Today";
import "./right-side.css";

const RightSide = ({ data }) => {
  return (
    <div className="right-side">
      <HighLights data={data} />
      <Today data={data} />
      <Footer />
    </div>
  );
};

export default RightSide;
