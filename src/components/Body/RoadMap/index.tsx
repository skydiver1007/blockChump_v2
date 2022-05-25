import React, { useMemo, useEffect, useRef, useState } from "react";
import styles from './index.module.scss';
// import MainLogo from './../../../assets/images/logo_main.svg'
import NextArrow from './../../../assets/images/Next-arrow.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useResize } from './../../../utils/Helper';
import ChumpImg from './../../../assets/images/adopt_chump_1.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const roadmap_7_title = "AEScripts.com";
const roadmap_7_content = "Release of a \"public\" variation of the Chump NFT Engine on aescripts.com. Profits go back to the community.";
const roadmap_1_title = "OG Chumps";
const roadmap_1_content = "The first collection - OG Chumps - are released into the world. 1000 hand-crafted animated GIFs.";
const roadmap_2_title = "OG Chumps - PFPs";
const roadmap_2_content = "The second collection is dropped as a free mint for OG Chumps holders. This 'profile picture' collection contains 1000 stylised portraits, with each one matching an OG Chump.";
const roadmap_3_title = "Chump NFT Engine release + Website";
const roadmap_3_content = "Our NFT collection creation tool will be launched as an extension for Adobe After Effects. Aimed at artists, this utility allows for the creation of complex collections. Our website will also be updated to prepare for the next phase.";
const roadmap_4_title = "Staking";
const roadmap_4_content = "A staking platform allowing farmers to earn Chump Change.";
const roadmap_6_title = "Collection #3";
const roadmap_6_content = "Our third collection will be released, demonstrating the capabilities of the Chump NFT Engine.";
const roadmap_5_title = "Engine Templates";
const roadmap_5_content = "We will create and accept submissions for collection art template files to be used with Chump NFT Engine. The templates will be available in exchange for Chump Change through our website. They will provide quick starting points for creating collections.";
const roadmap_8_title = "Expansion";
const roadmap_8_content = "Expansion of the project, including more collections and art-based content, tutorials and updates to Chump NFT Engine, and more.";

const RoadMap = (props: any) => {
    const fullpageApi = props.fullpageApi;
    const { isMobile, isResponsive } = useResize();
    return (
        <div className={styles.roadmap} >
            <div className={styles.roadmap_title}>
               <span style={{zIndex: '99'}}>ROADMAP</span>
            </div>

            <div className={styles.concept_creation_area}>
                <div className={styles.circles}>

                    {!isMobile?
                        <ul>
                            <li>
                                <div className={styles.roadmap_bubble_text}>
                                    <div className={styles.roadmap_bubble_number}>1.</div>
                                    <div className={styles.roadmap_bubble_title}>{roadmap_1_title}</div>
                                    <div className={styles.roadmap_bubble_content}>{roadmap_1_content}</div>
                                </div>
                            </li>

                            <li>
                                <div className={styles.roadmap_bubble_text}>
                                    <div className={styles.roadmap_bubble_number}>2.</div>
                                    <div className={styles.roadmap_bubble_title}>{roadmap_2_title}</div>
                                    <div className={styles.roadmap_bubble_content}>{roadmap_2_content}</div>
                                </div>
                            </li>

                            <li>
                                <div className={styles.roadmap_bubble_text}>
                                    <div className={styles.roadmap_bubble_number}>3.</div>
                                    <div className={styles.roadmap_bubble_title}>{roadmap_3_title}</div>
                                    <div className={styles.roadmap_bubble_content}>{roadmap_3_content}</div>
                                </div>
                            </li>

                            <li>
                                <div className={styles.roadmap_bubble_text}>
                                    <div className={styles.roadmap_bubble_number}>4.</div>
                                    <div className={styles.roadmap_bubble_title}>{roadmap_4_title}</div>
                                    <div className={styles.roadmap_bubble_content}>{roadmap_4_content}</div>
                                </div>
                            </li>

                            <li>
                                <div className={styles.roadmap_bubble_text}>
                                    <div className={styles.roadmap_bubble_number}>5.</div>
                                    <div className={styles.roadmap_bubble_title}>{roadmap_5_title}</div>
                                    <div className={styles.roadmap_bubble_content}>{roadmap_5_content}</div>
                                </div>
                            </li>

                            <li>
                                <div className={styles.roadmap_bubble_text}>
                                    <div className={styles.roadmap_bubble_number}>6.</div>
                                    <div className={styles.roadmap_bubble_title}>{roadmap_6_title}</div>
                                    <div className={styles.roadmap_bubble_content}>{roadmap_6_content}</div>
                                </div>
                            </li>

                            <li>
                                <div className={styles.roadmap_bubble_text}>
                                    <div className={styles.roadmap_bubble_number}>7.</div>
                                    <div className={styles.roadmap_bubble_title}>{roadmap_7_title}</div>
                                    <div className={styles.roadmap_bubble_content}>{roadmap_7_content}</div>
                                </div>
                            </li>

                            <li>
                                <div className={styles.roadmap_bubble_text}>
                                    <div className={styles.roadmap_bubble_number}>8.</div>
                                    <div className={styles.roadmap_bubble_title}>{roadmap_8_title}</div>
                                    <div className={styles.roadmap_bubble_content}>{roadmap_8_content}</div>
                                </div>
                            </li>
                        </ul>
                        :
                        <div>
                                                        
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

                                    <SwiperSlide>
                                        <li>
                                            <div className={styles.roadmap_bubble_text}>
                                                <div className={styles.roadmap_bubble_number}>1.</div>
                                                <div className={styles.roadmap_bubble_title}>{roadmap_1_title}</div>
                                                <div className={styles.roadmap_bubble_content}>{roadmap_1_content}</div>
                                            </div>
                                        </li>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <li>
                                            <div className={styles.roadmap_bubble_text}>
                                                <div className={styles.roadmap_bubble_number}>2.</div>
                                                <div className={styles.roadmap_bubble_title}>{roadmap_2_title}</div>
                                                <div className={styles.roadmap_bubble_content}>{roadmap_2_content}</div>
                                            </div>
                                        </li>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <li>
                                            <div className={styles.roadmap_bubble_text}>
                                                <div className={styles.roadmap_bubble_number}>3.</div>
                                                <div className={styles.roadmap_bubble_title}>{roadmap_3_title}</div>
                                                <div className={styles.roadmap_bubble_content}>{roadmap_3_content}</div>
                                            </div>
                                        </li>                                       
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <li>
                                            <div className={styles.roadmap_bubble_text}>
                                                <div className={styles.roadmap_bubble_number}>4.</div>
                                                <div className={styles.roadmap_bubble_title}>{roadmap_4_title}</div>
                                                <div className={styles.roadmap_bubble_content}>{roadmap_4_content}</div>
                                            </div>
                                        </li>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <li>
                                            <div className={styles.roadmap_bubble_text}>
                                                <div className={styles.roadmap_bubble_number}>5.</div>
                                                <div className={styles.roadmap_bubble_title}>{roadmap_5_title}</div>
                                                <div className={styles.roadmap_bubble_content}>{roadmap_5_content}</div>
                                            </div>
                                        </li>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <li>
                                            <div className={styles.roadmap_bubble_text}>
                                                <div className={styles.roadmap_bubble_number}>6.</div>
                                                <div className={styles.roadmap_bubble_title}>{roadmap_6_title}</div>
                                                <div className={styles.roadmap_bubble_content}>{roadmap_6_content}</div>
                                            </div>
                                        </li>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <li>
                                            <div className={styles.roadmap_bubble_text}>
                                                <div className={styles.roadmap_bubble_number}>7.</div>
                                                <div className={styles.roadmap_bubble_title}>{roadmap_7_title}</div>
                                                <div className={styles.roadmap_bubble_content}>{roadmap_7_content}</div>
                                            </div>
                                        </li>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <li>
                                            <div className={styles.roadmap_bubble_text}>
                                                <div className={styles.roadmap_bubble_number}>8.</div>
                                                <div className={styles.roadmap_bubble_title}>{roadmap_8_title}</div>
                                                <div className={styles.roadmap_bubble_content}>{roadmap_8_content}</div>
                                            </div>
                                        </li>
                                    </SwiperSlide>
                                </Swiper>
                            </>
                        </div>
                    }
                        

                </div>
                

            </div>


            <div id="utilities" style={{position: 'absolute', top: '300vh'}}></div>

        </div>
    )
}
export default RoadMap;   