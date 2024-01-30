"use client"
import { useState } from "react"
import Image from "next/image"
import styles from "./NavBar.module.css"
import img from "../../public/image/20221008_164521.jpg"
import Link from "next/link"
import {RiArrowDownSFill,RiArrowUpSFill} from "react-icons/ri"


const NavBar = () => {

    const [styleShow,setStyleShow] = useState(false);

  return (
    <main className={styles.main}>
        <section>
           <div>
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
            />
            <h1>earndrop</h1>
           </div>
        </section>
        <section className={styles.secondSection}>
           <div>
             <ul>
              <li><Link href="#">pricing</Link></li>
              <li><Link href="#">earndrop alpha</Link></li>
              <li><Link href="#">affiliate</Link></li>
                <span>
                    <li><Link href="#" 
                        onMouseEnter={() => setStyleShow(true)}
                        onMouseLeave={() => setStyleShow(false)}
                        >tools</Link>{styleShow ? <RiArrowUpSFill /> : <RiArrowDownSFill />}</li>
                     <ul className={styleShow ? styles.show : styles.hide}>
                      <li><Link href="#">bridges list</Link></li>
                      <li><Link href="#">faucets list</Link></li>
                     </ul>
                </span>
              <li><Link href="#">login</Link></li>
             </ul>
           </div>
        </section>
        <section>
          <div>
             <button><Link href="#">get started</Link></button>
          </div>
        </section>
    </main>
  )
}

export default NavBar
