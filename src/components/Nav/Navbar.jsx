import React, {useState} from 'react';
import styles from "./Navbar.module.css";

export const Navbar=()=>{
        const [menuOpen, setmenuOpen]=useState(false);
    return <nav className={styles.navbar}>
        <a href="/" className={styles.title}>Home</a>
        <div className={styles.menu}>
            <img 
             className={styles.menubtn} 
             src={menuOpen 
                 ? "/assets/imgs/closeicon.png" 
                 : "/assets/imgs/menuicon.png"} 
             alt="menu-button"
             onClick={()=>setmenuOpen(!menuOpen)}
            />
            <ul className={`${styles.items} ${menuOpen && styles.menuOpen}`}
            onClick={()=>setmenuOpen(false)}>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contactme">Contact Me</a></li>
            </ul>
        </div>
    </nav>;
};