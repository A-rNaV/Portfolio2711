import React from 'react';
import skills from "../../data/skills.json";
import styles from "./skills.module.css";

export const Skills=()=>{
    return <section className={styles.container} id='skills'>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
            {
                skills.map((skills, id)=>{
                    return <div key={id} className={styles.skill}>
                        <div className={styles.skillimg}><img src={skills.imageSrc} alt={skills.title} /></div>
                        <p>{skills.title}</p>
                    </div>
                })
            }
        </div>
    </section>
}