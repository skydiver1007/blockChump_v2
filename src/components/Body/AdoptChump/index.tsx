import React, { useMemo, useEffect, useRef, useState } from "react";
import styles from './index.module.scss';
import AdoptChumpImg1 from './../../../assets/images/c1.gif';
import AdoptChumpImg2 from './../../../assets/images/c2.gif';
import AdoptChumpImg3 from './../../../assets/images/c3.gif';
import AdoptChumpImg4 from './../../../assets/images/c4.gif';
import AdoptChumpImg5 from './../../../assets/images/c5.gif';
import AdoptChumpImg6 from './../../../assets/images/c3.gif';
import AdoptChumpImg7 from './../../../assets/images/chump.gif';

import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useResize } from './../../../utils/Helper';
import Footer from "./../../../components/Footer";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const AdoptChump = () => {
    const axios = require('axios');
    const navigate = useNavigate();
    const [imgUrl, setImgUrl] = useState([AdoptChumpImg1, AdoptChumpImg2, AdoptChumpImg3, AdoptChumpImg4, AdoptChumpImg5, AdoptChumpImg6, AdoptChumpImg7]);
    const { isMobile } = useResize();
    const nfts = '';
    const CORS_PROXY_API = `https://curly-block-8983.globalhunter7277743.workers.dev?u=`; 
    // Make a request for a user with a given ID  https://hades.ksanalex.workers.dev,  https://curly-block-8983.globalhunter7277743.workers.dev

    useEffect(() => {
        axios.get(`${CORS_PROXY_API}https://api-mainnet.magiceden.io/rpc/getListedNFTsByQuery?q=%7B%22%24match%22%3A%7B%22collectionSymbol%22%3A%22block_chumps%22%7D%2C%22%24sort%22%3A%7B%22createdAt%22%3A-1%7D%2C%22%24skip%22%3A0%2C%22%24limit%22%3A20%2C%22status%22%3A%5B%5D%7D`)
            .then(function (response: any) {
                // handle success
                // console.log(response.data.collections);                
                // response?
                const nftsData = response?.data.results;
                let imgBuffer: [];
                const randomNFTs = nftsData.filter((val: any, index: any) => index < 7)

                imgBuffer = randomNFTs.map((val: any, index: any) => {
                    return val.img
                })
                setImgUrl(imgBuffer)
                // console.log(imgBuffer);
                
            })
            .catch(function (error: any) {
                // handle error
                console.log(error);
            });

    }, [])
    // console.log(nfts);

    return (
        <div className={styles.adopt_chump} >
            <div className={styles.adopt_chump_title}>
                <span style={{zIndex: '99'}}>adopt a chump</span>
            </div>
            <div className={styles.adopt_img_content_area}>
                <div className={styles.adopt_img_container}>
                    {!isMobile?
                        <>    

                            {
                                imgUrl.map((url: any, index: any) => {
                                    return <div className={styles.adopt_item}><img src={url}></img></div>
                                })
                            }

                                <div className={`${styles.adopt_item} ${styles.adopt_item_button}`}><button id="seemore_btn" className={styles.seemore_btn} onClick={() => window.open(`https://magiceden.io/marketplace/block_chumps`)}>
                                    <p>See More...</p>
                                </button></div>
                        </>
                    :
                        <>
                            <Swiper
                            // install Swiper modules
                            spaceBetween={0}
                            slidesPerView={1}
                            // navigation
                            // scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >
                            {
                                imgUrl.map((url: any, index: any) => {
                                    return <SwiperSlide><img src={url}></img></SwiperSlide>
                                })
                            }
                                <SwiperSlide>
                                    <button id="seemore_btn" className={styles.seemore_btn} onClick={() => window.open(`https://magiceden.io/marketplace/block_chumps`)}>
                                        <p>See More...</p>
                                    </button>
                                </SwiperSlide>
                            </Swiper>

                        </>    
                    }
                </div>
                {/* <div className={styles.adopt_img_row}>
                    <img src={AdoptChumpImg} style={{zIndex:'99'}}></img>
                    <img src={AdoptChumpImg}></img>
                    <img src={AdoptChumpImg}></img>
                    <img src={AdoptChumpImg} style={{zIndex:'99'}}></img>
                    {
                        imgUrl.map((url: any, index: any) => {
                            return <img src={url}></img>
                        })
                    }
    
                </div>
                <div className={styles.adopt_img_row}>
                    <img src={AdoptChumpImg} style={{zIndex:'99'}}></img>
                    <img src={AdoptChumpImg}></img>
                    <img src={AdoptChumpImg}></img>
                    <div style={{display: 'flex', justifyContent:'center'}}>
                        <button id="seemore_btn" className={styles.seemore_btn} onClick={() => window.open(`https://magiceden.io/marketplace/block_chumps`)}>
                            <p>See More...</p>
                        </button>
                    </div>    
                </div> */}
            </div>
            <Footer />

        </div>
    )
}
export default AdoptChump;   