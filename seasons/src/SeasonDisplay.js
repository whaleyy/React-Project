import "./SeasonDisplay.css";
import React from "react";
// import { setFlagsFromString } from "v8";

const seasonConfig = {
  summer: {
    text: "Lets hit the beach!",
    iconName: "sun"
  },
  winter: {
    text: "Burr it is cold!",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; //{text,iconName}

  // const text =
  //   season === "winter" ? "burr, it is chilly" : "Lets hit the beach!";

  // const icon = season === "winter" ? "snowflake" : "sun";

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
