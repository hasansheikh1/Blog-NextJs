import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

function Featured() {
  return (
    <div className={styles.container}>

    <h1 className={styles.title}>
      <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
    </h1>
    <div className={styles.post}>
      <div className={styles.imgContainer}>

        <Image className={styles.image} src="/p1.jpeg" alt="" fill />

      </div>

      <div className={styles.textContainer}>
      <h1 className={styles.postTitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima.</h1>
    <p className={styles.postDesc}>
      Lorem ipsum dolor sit amet 
      consectetur, adipisicing elit. 
      Illo esse autem reprehenderit quidem tempora sint,
       ducimus inventore sit veniam nulla facere
       laborum quis itaque similique suscipit, 
      quisquam culpa dolore ab.
    </p>
    <button className={styles.button}>More</button>
    </div>
    </div>

    </div>
  )
}


export default Featured