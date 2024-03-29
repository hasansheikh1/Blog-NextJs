import React from 'react'
import styles from "./cardlist.module.css"
import Pagination from '../pagination/Pagination'
import Image from 'next/image'
import Card from '../card/Card'

// const getData = async (page) => {
//     const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
//         cache: "no-store",
//     })


//     if (!res.ok) {
//         throw new Error("failed")
//     }

//     return res.json();
// }

async function CardList({ page }) {
    // const data = await getData(page);

    return (
        <div className={styles.container}>

            <h1 className={styles.title}>  Recent Posts</h1>
            <div className={styles.posts}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            <Pagination />

        </div>
    )
}

export default CardList