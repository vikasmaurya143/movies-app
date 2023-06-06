import style from './Card.module.css'
const Card = (props)=>{
 let {data} = props
 return(

 <div className={style.container}>
  <div className={style.image}>
  <img src={data.Poster}/>
  </div>
  <div className={style.info}>
    <p className={style.title}>{data.Title}</p>
    <p className={style.type}>Type: {data.Type}</p>
    <p className={style.year}>Year: {data.Year}</p>
    <p className={style.imd}>ImdbID: {data.imdbID}</p>
  </div>
 </div>
 )  
}
export default Card