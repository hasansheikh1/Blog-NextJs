import React from 'react'
import styles from"./loginPage.module.css"
function page() {
  
    return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton}>Sign In with Google</div>
            <div className={styles.socialButton}>Sign In with Github</div>
            <div className={styles.socialButton}>Sign In with Facebook</div>
            
            </div>      

    </div>
  )
}

export default page