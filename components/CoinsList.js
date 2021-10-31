import React from 'react'
import Coin from './Coin'
function CoinsList({filterCoins}) {


    return (
       <>
        {filterCoins.map(coin=>{
            return (
                    <Coin key={coin.id} name={coin.name}
                    price={coin.current_price}
                    symbol={coin.symbol}
                    marketcap={coin.marketcap}
                    volume={coin.total_volume}
                    image={coin.image}
                    priceChange={coin.price_change_percentage_24h}
                    />
            )
        })}
          
       </>
    )
}

export default CoinsList

            