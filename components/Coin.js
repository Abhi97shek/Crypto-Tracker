import React from 'react'
import styles from "../styles/Coin.module.css";
function Coin({name,price,symbol,marketcap,volume,image,priceChange,id}) {
    return (
        <div className={styles.coin_container}>
            <div className={styles.coin_row}>
                <div className={styles.coin}>
                    <img src={image} alt={name} className={styles.coin_img}></img>
                    <h1 className={styles.coin_h1}>{name}</h1>
                    <p className={styles.coin_symbol}>{symbol}</p>
                </div>
                <div className={styles.coin_data}>
                    <p className={styles.coin_price}>{price}</p>
                    <p className={styles.coin_volumne}>Rs.{volume}</p>
                    {priceChange < 0 ?(<p className={styles.coin_percent,styles.red}>
                        {priceChange.toFixed(2)}%
                    </p>): (<p className={styles.coin_percent,styles.green}>
                        {priceChange.toFixed(2)}%
                    </p>)}
                   
                </div>
            </div>   
        </div>
    )
}

export default Coin
