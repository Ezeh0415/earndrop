"use client"
import {useState} from "react"
import styles from "./Home.module.css"
import {MdKeyboardDoubleArrowRight} from "react-icons/md"
import {FaCheckDouble,FaEthereum} from "react-icons/fa"
import Image from "next/image"
import img from "../../../public/image/20221008_164521.jpg"

const HomePage = () => {

  const [isToggleOn,setIsToggleOn] = useState(false)
  const cardItems = [
    {
      id:1,
      img:img,
      coinName:"uniswap",
      shortQuote:"Automated ethereum-based crypto exchange",
      from:"dex"
    },
    {
      id:2,
      img:img,
      coinName:"uniswap",
      shortQuote:"Automated ethereum-based crypto exchange",
      from:"dex"
    },
    {
      id:3,
      img:img,
      coinName:"uniswap",
      shortQuote:"Automated ethereum-based crypto exchange",
      from:"dex"
    },
    {
      id:4,
      img:img,
      coinName:"uniswap",
      shortQuote:"Automated ethereum-based crypto exchange",
      from:"dex"
    },
    {
      id:5,
      img:img,
      coinName:"uniswap",
      shortQuote:"Automated ethereum-based crypto exchange",
      from:"dex"
    },
    {
      id:6,
      img:img,
      coinName:"uniswap",
      shortQuote:"Automated ethereum-based crypto exchange",
      from:"dex"
    }
  ]

  const handleToggle = () => {
    setIsToggleOn(!isToggleOn)
  }
  return (
    <main className={styles.main}>
        <section>
          <div>
            <h1>Get airdrop email notifications and find unclaimed airdrops</h1>
            <h5> <small>Earndrop notifies you when any of your wallets gets a new airdrop.
Access our curated list for future potential airdrops with Earndrop Alpha Protocols.</small></h5>
                <div>
                  <input type="text" placeholder="enter your wallet address..."/>
                  <button>check airdrop <MdKeyboardDoubleArrowRight /></button>
                </div>
                <p><FaCheckDouble className={styles.icon}/> 222 users joined us in the last 7 days</p>
          </div>
          <div>
             <div>
                <Image 
                  src={img}
                  alt="normal img"
                  quality={100}
                  placeholder="blur"
                  style={{
                    width:"100%",
                    height:"80px",
                    borderRadius:"10px"
                  }}
                />
             </div>
             <div className={styles.secondDiv}>
                <Image 
                  src={img}
                  alt="normal img"
                  quality={100}
                  placeholder="blur"
                  style={{
                    width:"100%",
                    height:"100px",
                    borderRadius:"10px"
                  }}
                />
             </div>
             <div>
                <Image 
                  src={img}
                  alt="normal img"
                  quality={100}
                  placeholder="blur"
                  style={{
                    width:"100%",
                    height:"150px",
                    borderRadius:"10px"
                  }}
                />
             </div>
          </div>
        </section>
        <section>
          <div>
            <h1>Access Earndrop Alpha Protocols (with no token yet)</h1>

            <h4>Earndrop Alpha Protocols (for Prime Subscribers) is a curated list that shows
protocols that do not have a token yet and how they might distribute them eventually 🪂</h4>
          </div>
          <div>
           <div className={styles.gridDiv}>
           {cardItems.map( coinItem => {
              const {coinName,shortQuote,from,img,id} = coinItem;
              return (
               <div className={styles.gridDiv} key={id}>
                  <div className={styles.card}   onClick={handleToggle} key={id}>
                 <Image 
                    src={img}
                    alt="nothing-img"
                    quality={100}
                    placeholder="blur"
                    className={styles.img}
                 />
                  <h1>{coinName}</h1>
                  <p>{shortQuote}</p>
                  <p>{from}</p>
                  <div className={styles.cardIcon}>
                    <span>
                      <h2></h2>
                      <p className={isToggleOn ? styles.off : styles.on}></p>
                    </span>
                    <span>
                          <FaEthereum className={styles.spanIcon}/>
                          <FaEthereum className={styles.spanIcon}/>
                          <FaEthereum className={styles.spanIcon}/>
                          <FaEthereum className={styles.spanIcon}/>
                    </span>
                  </div>
                  </div>
               </div>
              )
            })}
           </div>
          </div>
        </section>
    </main>
  )
}

export default HomePage

