import React, {useState} from "react";
import Detail from "./Detail";

const WorkItems = ({ item }) => {

  const [toggle, setToggle] = useState(0);

  const toggleTab = (index) => {
    setToggle(index);
  };

  
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
        <Detail />
        {/* <i className="bx bx-right-arrow-alt work__button-icon"></i> */}
    </div>
  );
};

export default WorkItems;
