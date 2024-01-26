import React from 'react'
import styles from "./categoryList.module.css"
import Image from 'next/image'
import Link from 'next/link'

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/categories", {
        cache: "no-store",
    })


    if (!res.ok) {
        throw new Error("failed")
    }

    return res.json();
}


async function CategoryList() {
    const data = await getData();
    // { console.log("Data", data) }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                {data.map((item, idx) => (
                    <Link href="/blog?cat=style"
                        className={`${styles.category} ${styles[item.slug]}`}
                        key={item._id}
                    >
                        {
                            item.img && (
                                <Image src="/style.png"
                                    alt=''
                                    width={32}
                                    height={32}
                                    className={styles.image}
                                />)
                        }
                        {item.title}
                    </Link>
                ))}


            </div>
        </div>
    )
}

export default CategoryList