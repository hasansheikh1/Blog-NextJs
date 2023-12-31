"use client"

import React from 'react'
import styles from"./loginPage.module.css"
import { signIn, useSession } from 'next-auth/react'
function page() {
  


    const {data,status}=useSession();
    return (

    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton} onClick={()=>
              (
                signIn("google")
              )
            } >Sign In with Google</div>
            <div className={styles.socialButton}>Sign In with Github</div>
            <div className={styles.socialButton}>Sign In with Facebook</div>
            
            </div>      

    </div>
  )
}

export default page