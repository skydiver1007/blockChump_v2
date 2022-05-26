import React, { useMemo, useEffect, useRef, useState } from "react";
import styles from './index.module.scss';
import utilImage1 from './../../../assets/images/engine.png';
import utilImage2 from './../../../assets/images/staking.png';
import NextArrowSecond from './../../../assets/images/Next-arrow-second.svg';
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useResize } from './../../../utils/Helper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Utilities = (props: any) => {
    const fullpageApi = props.fullpageApi;
    const navigate = useNavigate();
    const { isMobile, isResponsive } = useResize();
    return (
        <div className={styles.utilities} >
            <div className={styles.utilities_title}>
                <span style={{zIndex: '500'}}>UTILITIES</span>
            </div>
            <div className={styles.image_box_area}>
                <div className={styles.box_container}>
                    {!isMobile?
                        <>
                            <div className={styles.image_box}>
                                <a href="/chumpnftengine">
                                    <img src={utilImage1}></img>
                                    <div className={styles.image_box_title}>
                                        chump nft engine 
                                    </div>   
                                    <div className={styles.image_box_content}>
                                        A feature-rich extension for Adobe After Effects that allows artists to easily create complex NFT collections. Only available in full to Chump holders.
                                    </div>
                                </a>
                            </div>            
                            {/* <div className={styles.image_box1} onClick={() => navigate('chump')}> */}
                            <div className={styles.image_box} onClick={() => navigate('staking')}>
                                <a href="/staking">
                                    <img src={utilImage2}></img>
                                    <div className={styles.image_box_title}>
                                        staking
                                    </div>   
                                    <div className={styles.image_box_content}>
                                        Stake your chumps to earn Chump Change. Chump Change is the digital equivalent of the coins you find under your fridge.
                                    </div>
                                </a>
                            </div>
                        </>
                        :
                        <Swiper
                          // install Swiper modules
                          spaceBetween={0}
                          slidesPerView={1}
                          // navigation
                          // scrollbar={{ draggable: true }}
                          onSwiper={(swiper) => console.log(swiper)}
                          onSlideChange={() => console.log('slide change')}
                        >
                          <SwiperSlide>
                              <div className={styles.image_box} onClick={() => navigate('/chumpnftengine')}>
                                <img src={utilImage1}></img>
                                <div className={styles.image_box_title}>
                                    chump nft engine 
                                </div>   
                                <div className={styles.image_box_content}>
                                    A feature-rich extension for Adobe After Effects that allows artists to easily create complex NFT collections. Only available in full to Chump holders, with a limited version available to all discord members.
                                </div>
                              </div> 
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className={styles.image_box} onClick={() => navigate('/staking')}>
                                <img src={utilImage2}></img>
                                <div className={styles.image_box_title}>
                                    staking
                                </div>   
                                <div className={styles.image_box_content}>
                                    Stake your chumps to earn Chump Change. Chump Change is the digital equivalent of the coins you find under your fridge. Those special long-forgotten dimes that make you happy. Get yourself a candy and enjoy your day.    
                                </div>
                              </div>
                          </SwiperSlide>
                        </Swiper>

                    }
                    
                    
                </div>

            </div>

            <div id="adopt_chump" style={{position: 'absolute', top: '400vh'}}></div>
        </div>
    )
}
export default Utilities;   