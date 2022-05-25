
import React, { useMemo, useEffect, useRef, useState } from "react";
import styles from './index.module.scss';
import MainSection from "../Body/MainSection";
import Collections from "../Body/Collections";
import RoadMap from "../Body/RoadMap";
import Utilities from "../Body/Utilities";
import AdoptChump from "../Body/AdoptChump";
import useScrollSnap from 'react-use-scroll-snap';
import ReactFullpage from '@fullpage/react-fullpage';
import Footer from "./../../components/Footer";
import Navbar from './../../components/Header/Navbar';

const MainContent = () => {
    // const [mainElement, setMainElement] = useState();
    // const autoscroll = () => {
    //     mainElement.scrollIntoView();
    // }
    // const scrollRef = useRef(null);
    // useScrollSnap({ ref: scrollRef, duration: 0.001, delay: 0.001 });
    // ref={scrollRef} 
    return (
        // <div className={styles.main_content}>
        //     <div className={styles.main_background}></div>
        //     <div className={styles.scroll_container} style = {{zIndex: 500}}>
        //       <div className={styles.section}>
        //         <MainSection></MainSection>
        //       </div>
        //       <div className={styles.section}>
        //         <Collections></Collections>
        //       </div>
        //       <div className={styles.section}>
        //         <RoadMap></RoadMap>
        //       </div>
        //       <div className={styles.section}>
        //         <Utilities></Utilities>
        //       </div>
        //       <div className={styles.section}>
        //         <AdoptChump></AdoptChump>
        //       </div>

        //         {/*<MainSection></MainSection>
        //         <Collections></Collections>
        //         <RoadMap></RoadMap>
        //         <Utilities></Utilities>
        //         <AdoptChump></AdoptChump>*/}
                
        //     </div>

            
        // </div>
        <div className={styles.main_content}>
          {/*<div className={styles.main_background}></div>*/}
            
            <ReactFullpage
              //fullpage options
              licenseKey = {'AZIKK-M84G6-KII0H-J72K6-BUJTM'}
              scrollingSpeed = {1000} /* Options here */
              render={({state, fullpageApi}) => {
                return (<>
                <div className={styles.main_background}></div>
                    <div className={styles.cloud}></div>
                    <div className={styles.cloud_2}></div>
                    <div className={styles.cloud_3}></div>
                  <ReactFullpage.Wrapper>
                    <div className="section">
                      <MainSection 
                        fullpageApi={fullpageApi}
                      ></MainSection>
                    </div>
                    <div className="section">
                      <Collections
                        fullpageApi={fullpageApi}
                      ></Collections>
                    </div>
                    <div className="section">
                      <RoadMap
                        fullpageApi={fullpageApi}
                      ></RoadMap>
                    </div>
                    <div className="section">
                      <Utilities
                        fullpageApi={fullpageApi}
                      ></Utilities>
                    </div>
                    <div className="section">
                      <AdoptChump></AdoptChump>
                    </div>
                  </ReactFullpage.Wrapper>
                  </>
                );
              }}
            />
        </div>
    )
}
export default MainContent;  