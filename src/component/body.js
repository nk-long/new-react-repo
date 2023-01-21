//This is named Import
import { useState ,useEffect} from "react";
import { IMG_CDN_LINK, RestrsuntData } from "../UtilsOrConstant/config";
import Shimmer from "./shimmer";

function filterData(searchText, AllRestrauntList) {
  return AllRestrauntList.filter((RestrsuntList) =>
    RestrsuntList.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const RestrauntCard = (props) => {
  return (
    <div className="card">
      <img src={IMG_CDN_LINK + props.restaurant.data.cloudinaryImageId} />
      <h2>{props.restaurant.data.name}</h2>
      <h3> {props.restaurant.data.cuisines.join()}</h3>
      <h4>{props.restaurant.data.avgRating} star</h4>
    </div>
  );
};

const Body = () => {
  const [AllRestrauntList, setAllRestrauntList] = useState([]);
  const [filteredRestraunt,setFilteredRestraunt] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect( ()=>{
      console.log("useEffect called");
      getRestraurent();
  },[])


  async function getRestraurent(){
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.3124132&lng=76.317414&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(data)
      console.log(json?.data?.cards[0]?.data?.data?.cards)
      setAllRestrauntList(json?.data?.cards[0]?.data?.data?.cards);
      setFilteredRestraunt(json?.data?.cards[0]?.data?.data?.cards);

  }

  

  return filteredRestraunt.length === 0 ?(
      <Shimmer/>
  ) : (
    <>
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
            const resData = filterData(searchText, AllRestrauntList);
            console.log(resData);
            setFilteredRestraunt(resData);
          }}
        >
          Search
        </button>
        <h3>{searchText}</h3>
      </div>
      <div className="reataraunt-List">
        {filteredRestraunt.map((restaurant) => {
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
