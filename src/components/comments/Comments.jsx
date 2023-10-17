"use client"
import React, { useState } from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'

function Comments() {

    const [status,setStatus]=useState('authenticated')

  return (
    <div className={styles.container}>

        <h1 className={styles.title}> Comments</h1>

        {status === "authenticated"?(<div className={styles.write}>

            <textarea placeholder='write a comment..' className={styles.input} />
            <button className={styles.button}>Send</button>
        </div>):
        (<Link href="/login">Login to write a comment</Link>)}
        <div className={styles.comments}>
            <div className={styles.comment}>

                <div className={styles.user}>
                    <Image src={"/p1.jpeg"} 
                    width={50}
                    height={50}
                    className={styles.image} />
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date} >01.01.2023</span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, dicta praesentium voluptas quas, quasi rem hic ipsum sit temporibus vero recusandae. Natus, sint molestiae aspernatur cum at alias dolores est.
                </p>
            </div>
        </div>

    </div>
  )
}

export default Comments