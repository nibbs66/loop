import {useState, useRef} from 'react';
import styles from "../../styles/website/Shop.module.css"
import Link from "next/link"

import CategoryCard from "../../components/website/CategoryCard";
import axios from "axios";
import Head from "next/head";

import ArrowBack from "../../components/icons/ArrowBack";
const Shop = ({categories, name}) => {




    return (
        <div className={styles.container}>
        <div className={styles.header}>
            <div className={styles.backArrow}>
                <Link href="/shop" passHref>
                  <div className={styles.backArrow}>
                    <div>
                      <ArrowBack height={35} width={35}/>
                    </div>
                    <h1 className={styles.terug}> Terug</h1>
                  </div>

                </Link>
                </div>

            <h1>Choose a Category:</h1>

        </div>
            <Head>
                <title>RnG Diving</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
          <div  className={styles.cardContainer}>
            {categories.map((category, idx)=> (

            <div key={idx}>

                <CategoryCard key={idx} fill='fill' index='all' name={list[idx].name} desc={list[idx].desc} img={list[idx].img}/>

              </div>
            ))}
          </div>

        </div>
    );
};

export default Shop;
Shop.layout = "L3";
export const getServerSideProps = async() => {
  const res = await axios.get(`/api/catmenu`);



  return{
    props:{
      categories: res.data,


    },

  }
};
