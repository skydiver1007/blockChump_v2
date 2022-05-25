import React, { useMemo, useEffect, useRef, useState } from "react";
import  Link  from 'react-router';
import styles from './index.module.scss';
import collectionImage1 from './../../../assets/images/chump.gif';
import collectionImage2 from './../../../assets/images/image_box_2.png';
import NextArrow from './../../../assets/images/Next-arrow.svg';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useResize } from './../../../utils/Helper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Collections = (props: any) => {
    const navigate = useNavigate();
    const fullpageApi = props.fullpageApi;
    const { isMobile, isResponsive } = useResize();
    console.log("href");
    return (
        <div  className={styles.collections}>
            <div className={styles.collections_title}>
                <span style={{zIndex: '99'}}>Collections</span>
            </div>
            <div className={styles.image_box_area}  >
                <div className={styles.box_container}>
                {!isMobile?<> 
                <div className={styles.image_box_container}>
                    <div className={styles.image_box}>
                        <a href="/ogchumps">
                            <img src={collectionImage1} />
                            <div className={styles.image_box_title}>
                                OG CHUMPS
                            </div>   
                            <div className={styles.image_box_content}>
                                The original collection. 1000 fully animated GIFs, strolling the Solana sidewalks.
                            </div>
                        </a>
                    </div>
                </div>    
                <div className={styles.image_box_container}>
                    {/* <div className={styles.image_box1} onClick={() => navigate('collection')}> */}
                    <div className={styles.image_box}>
                        <a href="/pfpchumps">
                            <img src={collectionImage2}></img>
                            <div className={styles.image_box_title}>
                                OG CHUMPS-PFPS
                            </div>   
                            <div className={styles.image_box_content}>
                                Profile-picture portraits matching each OG Chump. Unlocks staking rewards when combined with their match.    
                            </div>
                        </a>    
                    </div>
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
                        <div className={styles.image_box} onClick={() => navigate('ogchumps')}>
                            <img src={collectionImage1} />
                            <div className={styles.image_box_title}>
                                OG CHUMPS
                            </div>   
                            <div className={styles.image_box_content}>
                            The original collection. 1000 fully animated GIFs, strolling the Solana sidewalks.

                            </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className={styles.image_box} onClick={() => navigate('pfpchumps')}>
                            <img src={collectionImage2}></img>
                            <div className={styles.image_box_title}>
                                OG CHUMPS-PFPS
                            </div>   
                            <div className={styles.image_box_content}>
                                Profile-picture portraits matching each OG Chump. Unlocks staking rewards when combined with their match.    
                            </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>

                }
                </div>
                
            </div>
            <div id="roadmap" style={{position: 'absolute', top: '100vh'}}></div>    
        </div>
    )
}
export default Collections;   