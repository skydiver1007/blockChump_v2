import React, { useMemo, useEffect, useRef, useState, useCallback } from "react";
import styles from './index.module.scss';
import MainLogo from './../../../assets/images/logo_main.svg'
import NextArrow from './../../../assets/images/Next-arrow.svg';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useResize } from './../../../utils/Helper';
import Navbar from './../../Header/Navbar';

import ScrollIntoView from 'react-scroll-into-view'

const MainSection = (props: any) => {
    const navigate = useNavigate();
    const { isMobile } = useResize();
    const myRef: any = useRef(null);
    const [sectionBorder, setSectionBorder] = useState<any>();
    const { pathname } = useLocation();
    
    useEffect(() => {
        setSectionBorder(myRef.current.getBoundingClientRect().y);
        const main_position = myRef.current.getBoundingClientRect().top;
        // console.log("sectionborder", myRef.current.getBoundingClientRect().top);
    }, [])
    const ref = useRef(null)

    // The scroll listener
    const handleScroll = useCallback(() => {
      console.log("scrolling")
    }, [])
  
    // Attach the scroll listener to the div
    useEffect(() => {
      const div = myRef.current
      div.addEventListener("scroll", handleScroll)
    }, [handleScroll])

    const scrolltop = () => {
        window.scrollTo(0, 1050);
    }
    const scrollnav = () => {
        window.scrollTo(0, 0);
    }

    const handleCapture = (e: any) => {
        // console.log("top",sectionBorder);
        // console.log("y", window.scrollY);
        // if( window.scrollY > 200 && window.scrollY < 400) scrolltop();
        // if( window.scrollY > 850) scrollnav();
    }
    
    
    // const executeScroll = () => myRef.current.scrollIntoView()   
    return (
        <div className={styles.main}>
            <Navbar 
                fullpageApi={props.fullpageApi}
            />
            <div className={styles.main_section}  onWheel={(e) => handleCapture(e)}> 
                <div className={styles.main_section_content}>       
                    <img id="logo" className={styles.logo} src={MainLogo} style={{zIndex:'99'}}></img>
                    <div id="main_subtitle" ref={myRef} className={styles.main_subtitle}>
                        Animated NFTs & other cool stuff created by artists and weirdos
                    </div>
                </div>
                

                <div id="collections" style={{marginBottom: '-1px'}}></div>
            </div>
        </div>
    )
}
export default MainSection;    