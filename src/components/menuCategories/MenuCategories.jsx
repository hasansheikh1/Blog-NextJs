import Link from 'next/link'
import React from 'react'
import styles from './menucategories.module.css'

function MenuCategories() {
  return (
    <div className={styles.categoryList}>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.style}`}>

            Style
        </Link>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.fashion}`}>

            Fashion
        </Link>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.food}`}>

              Food
        </Link>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.travel}`}>

            Travel
        </Link>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.style}`}>

            Style
        </Link>

      </div>
  )
}

export default MenuCategories