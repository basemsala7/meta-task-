import "./App.css";
import Check from "./Check";
import { useState } from "react";
function App() {
  const [checkboxs, setcheckboxs] = useState([
    { order: "1", value: false, possition: "left" },
    { order: "2", value: false, possition: "left" },
    { order: "3", value: false, possition: "left" },
    { order: "4", value: false, possition: "right" },
    { order: "5", value: false, possition: "right" },
    { order: "6", value: false, possition: "right" },
  ]);

  const handelvalue = (e) => {
    checkboxs.forEach((ele) => {
      if (ele.order == e.target.name) ele.value = !ele.value;
    });
    setcheckboxs([...checkboxs]);
  };

  const moveToright = () => {
    checkboxs.forEach((ele) => {
      if (ele.value == true && ele.possition == "left") {
        ele.possition = "right";
        ele.value = false;
      }
    });
    setcheckboxs([...checkboxs]);
    console.log(checkboxs);
  };

  const moveToleft = () => {
    checkboxs.forEach((ele) => {
      if (ele.value == true && ele.possition == "right") {
        ele.possition = "left";
        ele.value = false;
      }
    });
    setcheckboxs([...checkboxs]);
    console.log(checkboxs);
  };

  return (
    <>
      <div className="main">
        <div>
          {checkboxs.map((ele) =>
            ele.possition == "left" ? (
              <Check
                order={ele.order}
                key={ele.order}
                value={checkboxs.value}
                setvalue={handelvalue}
              />
            ) : (
              ""
            )
          )}
        </div>
        <div>
          {checkboxs.map((ele) =>
            ele.possition == "right" ? (
              <Check
                order={ele.order}
                key={ele.order}
                value={checkboxs.value}
                setvalue={handelvalue}
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <button onClick={moveToright}> move to right</button>
      <button onClick={moveToleft}> move to left</button>
    </>
  );
}

export default App;
