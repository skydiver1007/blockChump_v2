import React, { useMemo, useEffect, useRef, useState } from "react";
import styles from './index.module.scss';
import Logo from './../../../assets/images/logo_100x76.png';
import Chump1 from './../../../assets/images/c1.gif';
import Chump2 from './../../../assets/images/c2.gif';
import Chump3 from './../../../assets/images/c3.gif';
import Chump4 from './../../../assets/images/c4.gif';
import Chump5 from './../../../assets/images/c5.gif';
import { useNavigate } from "react-router-dom";

const OGChumpPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'auto'})
      }, [])
    return (
        <div className={styles.container} id="og_chumps">
            <div className={styles.page_content}>
                <div className={styles.page_header}>
                    <img src={Logo} onClick={() => navigate('/')}></img>
                    <div className={styles.page_title}>
                        OG CHUMPS
                    </div>
                </div>

                <div className={styles.page_subtitle}>
                    The OG Chumps make up our flagship collection. They are colourful moving GIFs featuring every day street chumps, made up of over 250 hand-animated traits. These NFTs were crafted hand-in-hand with our own Chump NFT Engine, and act as a license key for using our tool.
                </div>

                <div className={styles.page_image_part}>
                    <img src={Chump1}></img>
                    <img src={Chump2}></img>
                    <img src={Chump3}></img>
                    <img src={Chump4}></img>
                    <img src={Chump5}></img>
                </div>

                <div className={styles.page_textbox_area}>
                    <div className={styles.page_textbox}>
                        <div className={styles.page_textbox_wheel}>

                        </div>
                        <div className={styles.page_textbox_text}>
                            250+ animated traits
                        </div>
                    </div>
                    <div className={styles.page_textbox}>
                        <div className={styles.page_textbox_wheel}>

                        </div>
                        <div className={styles.page_textbox_text}>
                            Ultra unique style
                        </div>
                    </div>
                    <div className={styles.page_textbox}>
                        <div className={styles.page_textbox_wheel}>

                        </div>
                        <div className={styles.page_textbox_text}>
                            Real world utility
                        </div>
                    </div>
                </div>

                <div className={styles.page_button_area}>
                    <button className={styles.page_button} onClick={() => window.open(`https://magiceden.io/marketplace/block_chumps`)}>
                        <p>Buy on Magic Eden</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OGChumpPage;