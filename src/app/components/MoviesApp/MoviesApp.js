import style from "./MoviesApp.module.css"
import Card from "../Card/Card"
import axios from "axios"
import { useState,useEffect } from "react"
const MoviesApp =()=>{
  let [moviesData,setMoviesData] = useState([])
  useEffect(()=>{
   axios.get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
   .then(res => setMoviesData(res.data.Search))
   .catch(err => console.log(err))
  },[])
  console.log(moviesData)
   return(
     <>
    <div className={style.inputBox}>
    <input className={style.search} type="text" placeholder="Search for movies Title..."/>
    </div>
      <div className={style.wrapper}>
        {
            moviesData.map((item,idx)=> <Card data={item} key={idx}/>)
        }
        </div>
        </>
   )
    
}

export  default MoviesApp