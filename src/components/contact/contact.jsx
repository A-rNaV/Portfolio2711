import React from "react";
import styles from "./contact.module.css";

export const Contact=()=>{
    return <footer className={styles.container} id="contactme">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Wanna play cards, discuss anime, jam or build something cool then feel free to reach out</p>
            <span>PS: The card games won't involve betting...</span>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src="/assets/imgs/emailIcon.png" alt="email icon" />
                <a href="mailto:arnavrajvanshi27@gmail.com">Gmail</a>
            </li>
            <li className={styles.link}>
                <img src="/assets/imgs/linkedinIcon.png" alt="linkedin icon" />
                <a href="https://www.linkedin.com/in/arnav-rajvanshi-39092a297/">LinkedIn</a>
            </li>
            <li className={styles.link}>
                <img src="/assets/imgs/githubIcon.png" alt="github icon" />
                <a href="https://github.com/A-rNaV">Github</a>
            </li>
        </ul>
    </footer>
}