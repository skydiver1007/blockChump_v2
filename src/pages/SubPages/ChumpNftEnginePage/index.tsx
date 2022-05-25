import React, { useMemo, useEffect, useRef, useState } from "react";

import styles from './index.module.scss';
import Logo from './../../../assets/images/logo_100x76.png';
import ChumpImg from './../../../assets/images/image_box_1.png';
import TempImg from './../../../assets/images/temp_image.png';
import NextArrow_1 from './../../../assets/images/Next-arrow.svg';
import { useNavigate } from "react-router-dom";
import useScrollSnap from 'react-use-scroll-snap';
// import ReactFullpage from '@fullpage/react-fullpage';

const ChumpNftEnginePage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        // window.scrollTo({top: 0, behavior: 'auto'});
        // fullpageApi.moveTo(3, 0);
        document.documentElement.scrollTo(0, 0);
        console.log("scrolly", window.scrollY);
        // window.scrollTo(0,0);
      }, [])
    // const scrollRef = useRef(null);
    // useScrollSnap({ ref: scrollRef, duration: 1, delay: 1 });
    // ref={scrollRef}


    const feature_0_content = 'Get going quickly by by bringing in your art, tagging your traits, and clicking generate.';
    const feature_0_title = 'Simplicity';
    const feature_1_content = 'Choose how unique each NFT in your collection should be based on trait numbers.';
    const feature_1_title = 'Uniqueness';
    const feature_2_title = 'Selection Rules';
    const feature_2_content = 'Create complex rules that determine how trait selections affect others. Don\'t want a certain hairstyle to appear alongside a certain hat? Set a rule and go.';
    const feature_3_title = 'Metadata Creation';
    const feature_3_content = 'Fill in the global metadata using a simple form, and let the engine fill in all the edition-specific metadata.';
    const feature_4_title = 'Images, Video or Audio'
    const feature_4_content = 'Go beyond the standard static image collection and create animated or video-based collections, or even audio.'
    const feature_5_title = 'Statistics';
    const feature_5_content = 'Get a complete spreadsheet containing all of your edition data and corresponding traits. Great for searching editions and cataloguing';



    return (
            <>
                <div className="section" id="chump_nft">
                    <div className={styles.page_content}>
                        <div className={styles.page_header}>
                            <img src={Logo} onClick={() => navigate('/')}></img>
                            <div className={styles.page_title}>
                                chump nft engine
                            </div>
                        </div>

                        <div className={styles.page_subtitle}>
                            An extension for Adobe After Effects. Create eye-catching NFT collections ready for the Blockchain.
                        </div>
                        
                        <div className={styles.content_area}>
                            <div className={styles.content_area_left}>
                                <div className={styles.content_area_image}>
                                    <iframe className={styles.content_iframe} src="https://www.youtube.com/embed/sjqufJeJJ9U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </div>
                            <div className={styles.content_area_right}>
                                <div className={styles.key_features}>
                                    
                                    <div className={styles.key_features_title}>
                                        FEATURES INCLUDING
                                    </div>
                                    <div className={styles.feature_box}>
            
                                        <div className={styles.feature_box_title}>
                                            {feature_0_title}
                                        </div>
                                        <div className={styles.feature_box_description}>
                                            {feature_0_content}
                                        </div>
                                    </div>
                                    <div className={styles.feature_box}>
            
                                        <div className={styles.feature_box_title}>
                                            {feature_1_title}
                                        </div>
                                        <div className={styles.feature_box_description}>
                                            {feature_1_content}
                                        </div>
                                    </div>
                                    <div className={styles.feature_box}>
            
                                        <div className={styles.feature_box_title}>
                                            {feature_2_title}
                                        </div>
                                        <div className={styles.feature_box_description}>
                                            {feature_2_content}
                                        </div>
                                    </div>
                                    <div className={styles.feature_box}>
            
                                        <div className={styles.feature_box_title}>
                                            {feature_3_title}
                                        </div>
                                        <div className={styles.feature_box_description}>
                                            {feature_3_content}
                                        </div>
                                    </div>
                                    <div className={styles.feature_box}>
            
                                        <div className={styles.feature_box_title}>
                                            {feature_4_title}
                                        </div>
                                        <div className={styles.feature_box_description}>
                                            {feature_4_content}
                                        </div>
                                    </div>
                                    <div className={styles.feature_box}>
            
                                        <div className={styles.feature_box_title}>
                                            {feature_5_title}
                                        </div>
                                        <div className={styles.feature_box_description}>
                                            {feature_5_content}
                                        </div>
                                    </div>
                                    
                                </div>

                                
                            </div>
                            
                        </div>
                        <div className={styles.btn_download_area}>
                            <a href="files\chump_nft_engine.zip" download>
                                <button className={styles.btn_download}>
                                    <p className={styles.btn_download_content}>Download now</p>
                                </button>
                            </a>
                            <div className={styles.download_message}>
                                To get started you'll need Adobe After Effects installed on your computer plus a role on our discord server.
                            </div>
                        </div>
                            
                        <div  style={{position:'absolute', top: '100%'}}></div>  
                    </div>
                </div>
                                
            </>

    )
}

export default ChumpNftEnginePage;