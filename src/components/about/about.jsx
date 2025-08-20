import React from "react";
import styles from "./about.module.css";

export const About=()=>{
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>
            About
        </h2>
        <div className={styles.content}> 
            <img src="/assets/imgs/about.jpg" alt="About img" className={styles.abtimg} />
            <ul className={styles.abtitm}>
                <li className={styles.aboutitems}><div className={styles.abtxt}><h3>Full-Stack Developer</h3><p> I develop responsive and optimized web applications, building both
      seamless user interfaces and efficient backend systems.</p></div></li>
                <li className={styles.aboutitems}><div className={styles.abtxt}><h3>AI/ML Enthusiast</h3><p>I work on applying machine learning and artificial intelligence to create
      intelligent, data-driven solutions that solve real-world problems.</p></div></li>
                <li className={styles.aboutitems}><div className={styles.abtxt}><h3>Web3 Developer</h3><p>I create decentralized applications and smart contract integrations,
      bringing blockchain technology into real-world use cases.</p></div></li>
                <li className={styles.aboutitems}><div className={styles.abtxt}><h3>Beyond Tech</h3><p> Outside of coding, I have a deep love for music and follow Formula 1
      passionately, always inspired by the mix of creativity and speed.</p></div></li>
            </ul>
        </div>
    </section>;
}