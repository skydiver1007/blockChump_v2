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



    return (
            <>
                <div className="section" id="staking">
                    <div className={styles.page_content}>
                        <div className={styles.page_header}>
                            <img src={Logo} onClick={() => navigate('/')}></img>
                            <div className={styles.page_title}>
                                staking
                            </div>
                        </div>

                        <div className={styles.page_subtitle}>
                            Sorry chump, coming soon but not now.
                        </div>
                        
                
                        <div  style={{position:'absolute', top: '100%'}}></div>  
                    </div>
                </div>                   
            </>

    )
}

export default ChumpNftEnginePage;