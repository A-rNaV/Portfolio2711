import React from "react";
import styles from ".//projects.module.css";
import projects from "../../data/projects.json";

export const Projects=()=>{
    return <section id="projects" className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projects}>
            {
                projects.map((project, id)=>{
                    return <div key={id} className={styles.card}>
                        <img className={styles.img} src={project.imageSrc} alt={`Image of ${project.title}`} />
                        <h3 className={styles.name}>{project.title}</h3>
                        <p className={styles.description}>{project.description}</p>
                        <ul className={styles.skills}>{
                            project.skills.map((skill, id)=>{
                                return(
                                <li key={id} className={styles.skill}>{skill}</li>
                            )})
                        }</ul>
                        <div className={styles.links}>
                            {project.demo && project.demo.trim() !=="" &&(
                                <a className={styles.link} href={project.demo}>Demo</a>
                            )}
                            <a className={styles.link} href={project.source}>Source</a>
                        </div>
                    </div>
                })
            }
        </div>
    </section>
}