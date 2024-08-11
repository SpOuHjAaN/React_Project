import styles from "./jiocinema.module.css";
import styled from "styled-components";

export const SeriesCard = (props) => {
    console.log(props);
    const{id,img_url,name,rating,description,genre,cast,watch_url}=props.data;
    const Buttonstyle=styled.button({
        padding:"1.2rem 2.4rem",
        border:"none",
        fontSize:"1.6rem",
        backgroundColor:`${rating >= 8.3 ? "chartreuse" : "burlywood"}`,
        color:"var( --bg-color)",
        fontWeight:"bold",
        cursor:"pointer",
    })

    const ratingClass= rating >= 8.3 ? styles.super_hit : styles.average;

    return(
        <li className={styles.card}>
                    <div>
                        <img 
                            src={img_url}
                            alt={name}
                            width="40%"
                            height="40%"
                        />
                    </div>
                    <div className={styles["card-content"]}>
                    <h2>Name: {name}</h2>
                    <h3>
                        Rating:<span className={`${styles.rating} ${ratingClass}`}> {rating}</span>
                    </h3>
                    <p>Summary: {description}</p>
                    <p>Genre: {genre}</p>
                    <p>Cast: {cast}</p>
                    <a href={watch_url} target="_blank" rel="noopener noreferrer">
                        <Buttonstyle>Watch Now</Buttonstyle>
                    </a>
                    </div>
                </li>
    )
    
}