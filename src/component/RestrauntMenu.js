import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import { IMG_CDN_LINK } from "../UtilsOrConstant/config";
import Shimmer  from "./shimmer"


const RestrauntMenu = ()=>{
    const params = useParams();
    const {id} =params;
    const [restaurantdata,setrestaurantdata] = useState(null);

    useEffect( ()=>{
        console.log("use effect")
        setrestaurntInfo();
    },[]);

    async function setrestaurntInfo(){
        console.log("in setrestaurntInfo function")
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=20.3124132&lng=76.317414&menuId=459611");
        const json = await data.json();

        console.log(json)
        setrestaurantdata(json?.data);

    }

    return(!restaurantdata) ? <Shimmer/> : (
      <div className="rest-menu">
          <div>
            <img src= {IMG_CDN_LINK + restaurantdata.cloudinaryImageId}/>
            <h1>Restrunt id : {restaurantdata.id}</h1>
            <h2>{restaurantdata.name} </h2>
            <h3>{restaurantdata.city}</h3>
            <h3>{restaurantdata.avgRating} star</h3>
          
        </div>
        <div>
            <h4>Menu</h4>
            <ul>
                {Object.values( restaurantdata?.menu?.items).map((item)=>(
                     <li key={ restaurantdata?.menu?.item?.id}> { item.name} </li>
                 )) }
            </ul>        
        </div>
      </div>
    )
}


export default RestrauntMenu;