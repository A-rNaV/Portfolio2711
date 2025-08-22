import React from "react";
import { useState, useEffect } from "react";
import styles from "./hero.module.css";

const texts=["a programmer", "a Web Developer", "an AI/ML Enthusiast"]

export const Hero=()=>{
    const[index,  setIndex]=useState(0);
    const[subIndex, setSubIndex]=useState(0);
    const[back, setBack]=useState(false);

    useEffect(()=>{
        if(index===texts.length)return;
        if(subIndex===texts[index].length+1 &&!back){
            setTimeout(()=>setBack(true), 1000);
            return;
        }
        if(subIndex===0&&back){
            setBack(false);
            setIndex((prev)=>(prev+1)%texts.length);
            return;
        }
        const timeout=setTimeout(()=>{
            setSubIndex((prev)=>prev+(back? -1:1));
        }, back?50:120);
        return()=>clearTimeout(timeout);
    }, [subIndex, index, back]);

    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Arnav</h1>
            <h2 className={styles.description}>
                I am {texts[index].substring(0, subIndex)}
                <span className="cursor">|</span>
            </h2>
            <p className={styles.description}>Reach out to learn more</p>
            <a href="mailto:arnavrajvanshi27@gmail.com" className={styles.contact}>Contact Me</a>
        </div>
        <img src="/assets/imgs/me.jpg" alt="Me" className={styles.heroimg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
}