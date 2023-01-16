//This is named Import
import { useState } from "react";
import { IMG_CDN_LINK, RestrsuntData } from "../UtilsOrConstant/config";

function filterData(searchText, RestrsuntList) {
  return RestrsuntList.filter((RestrsuntList) =>
    RestrsuntList.data.name.includes(searchText)
  );
}

const RestrauntCard = (props) => {
  return (
    <div className="card">
      <img src={IMG_CDN_LINK + props.restaurant.data.cloudinaryImageId} />
      <h2>{props.restaurant.data.name}</h2>
      <h3> {props.restaurant.data.cuisines.join(", ")}</h3>
      <h4>{props.restaurant.data.avgRating} star</h4>
    </div>
  );
};

const Body = () => {
  const [RestrsuntList, setrestrauntList] = useState(RestrsuntData);
  const [searchText, setsearchText] = useState("");

  return (
    <>
      ={" "}
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const resData = filterData(searchText, RestrsuntList);
            console.log(resData);
            setrestrauntList(resData);
          }}
        >
          Search
        </button>
        <h3>{searchText}</h3>
      </div>
      <div className="reataraunt-List">
        {RestrsuntList.map((restaurant) => {
          return (
            <RestrauntCard restaurant={restaurant} key={restaurant.data.id} />
          );
        })}

        {/* <RestrauntCard restaurant = {RestrsuntData[0]}/>
       <RestrauntCard restaurant = {RestrsuntData[1]}/>
       <RestrauntCard restaurant = {RestrsuntData[3]}/>
       <RestrauntCard restaurant = {RestrsuntData[4]}/>
       <RestrauntCard restaurant = {RestrsuntData[5]}/>
       */}
      </div>
    </>
  );
};

export default Body;
