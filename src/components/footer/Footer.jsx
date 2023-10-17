import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className={styles.container}>

      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt='hasan'  width={50} height={50} />
          <h1 className={styles.logoText}>Lamablog</h1>
        </div>
        <p className='styles.desc'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, ad. Veniam minus modi quos iste sapiente, odit vitae quidem optio esse, atque eum doloribus, aperiam accusantium fugiat ullam quasi illum?
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt='' width={18} height={18}/>        
          <Image src="/instagram.png" alt='' width={18} height={18}/>        
          <Image src="/tiktok.png" alt='' width={18} height={18}/>        
          <Image src="/youtube.png" alt='' width={18} height={18}/>        
        
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Codingt</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>


  )
}

export default Footer