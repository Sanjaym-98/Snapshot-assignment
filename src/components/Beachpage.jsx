import TopBar from "./topbar";
import { useState } from "react";
import "./index.css";
import { useEffect } from "react";
import axios from "axios"

const BeachPage=()=>{
    const [data,setdata]=useState([]);
    const [zoom,setZoom]=useState(Array(100).fill(false));
    const zoomImage=(ind)=>{
        zoom[ind]=true;
        setZoom([...zoom]);
       
    }
    const unzoomImage=(ind)=>{
        zoom[ind]=false
        setZoom([...zoom]);
        
    }
    useEffect(()=>{
        const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=b8c77ace86b4ac039f289bfe356300db&tags=beaches&format=json&nojsoncallback=1';
        axios.get(url).then((response)=>{setdata(response.data.photos.photo)}).catch((err)=>{console.log(err)});
    },[])
    
    return(
        <>
        <TopBar/>
        <h2>BeachPictures</h2>
        <div id="imageContainer">
              {data.map((value,index)=>{
                const imgUrl=`https://farm${value.farm}.staticflickr.com/${value.server}/${value.id}_${value.secret}.jpg`
                return(
                    <img key={value.id} src={imgUrl} onMouseOver={()=>{zoomImage(index)}} onMouseLeave={()=>{unzoomImage(index)}}  className={zoom[index]?"img":"original"} alt="beachPictures"/>
                )
              })}
        </div>
        </>
    )
}
export default BeachPage;