import styles from "../../styles/website/Slider.module.css"
import Image from "next/image";
import {useEffect, useState} from "react";
import Link from 'next/link'
import axios from "axios";
const Slider = ({pics, as}) => {
console.log(pics)


    const [index, setIndex] = useState(0)


    const handleArrow = (direction) => {
        if(direction==="left"){
            setIndex(index !==0 ? index-1 : 5)
        }
        if(direction==="right"){
            setIndex(index !==5 ? index+1 : 0)
        }
    }
    console.log(index)

    return (
       <div className={styles.container}>

         <div className={styles.intro}>
            <Link href='/shop' as='shop' crossorigin="anonymous" passHref>
                <button className={styles.button}>SHOP NOW</button>
            </Link>
        </div>


         <div className={styles.wrapper} style={{transform: `translateX(${-100 * index}vw)`}}>

            {pics.map((img, idx) => (
                img.pic.category === 'webPic' &&


                <div key={idx} className={styles.imgContainer}>
                    <Image className={styles.img} src={img.pic.img} priority={true} alt="" layout="fill" as={as}
                           objectFit="cover"/>

                </div>
            ))}

        </div>

    </div>

    );
};

export default Slider;
