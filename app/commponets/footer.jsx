import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import img from "../../public/image/20221008_164521.jpg"
import Link from 'next/link'
import {FaTwitter,FaDiscord} from "react-icons/fa"
const footer = () => {
  return (
    <div className={styles.main}>
        <section className={styles.mainSection}>
        <div className={styles.div1}>
            <section>
                <Image 
                    src={img}
                    alt="normal-img"
                    quality={100}
                    style={{
                            width:"40px",
                            height:"40px",
                            borderRadius:"50%"
                        }}
                    placeholder="blur"
                    className={styles.img}
                />
                <h1>earndrop</h1>
            </section>
            <p>Get notified of claimable airdrops to any of your wallets. Learn and discover new protocols with Earndrop Alpha.</p>
            <span>
                <FaTwitter className={styles.icon1}/>
                <FaDiscord className={styles.icon2} />
            </span>
           </div>
           <div className={styles.div2}>
                <section className={styles.div2first}>
                    <p>quick links</p>
                    <ul>
                        <li><Link href="#">home</Link></li>
                        <li><Link href="#">pricing</Link></li>
                        <li><Link href="#">earndrop alpha</Link></li>
                        <li><Link href="#">affiliate</Link></li>
                    </ul>
                </section>
                <section className={styles.div2second}>
                    <p>support center</p>
                    <ul>
                        <li><Link href="#">contact us</Link></li>
                        <li><Link href="#">FAQ</Link></li>
                    </ul>
                </section>
                <section className={styles.div2third}>
                    <p>company</p>
                    <ul>
                        <li><Link href="#">terms and conditions</Link></li>
                        <li><Link href="#">privacy policy</Link></li>
                        <li><Link href="#">refund policy</Link></li>
                        <li><Link href="#">cancel subscription</Link></li>
                    </ul>
                </section>
           </div>
        </section>
    </div>
  )
}

export default footer
