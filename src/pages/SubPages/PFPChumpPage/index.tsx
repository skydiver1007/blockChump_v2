import React, { useMemo, useEffect, useRef, useState } from "react";
import styles from './index.module.scss';
import Logo from './../../../assets/images/logo_100x76.png';
import Chump1 from './../../../assets/images/p1.png';
import Chump2 from './../../../assets/images/p2.png';
import Chump3 from './../../../assets/images/p3.png';
import Chump4 from './../../../assets/images/p4.png';
import Chump5 from './../../../assets/images/p5.png';
import { useNavigate } from "react-router-dom";

const PFPChumpPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'auto'})
      }, [])
    return (
        <div className={styles.container} id="pfp_chumps">
            <div className={styles.page_content}>
                <div className={styles.page_header}>
                    <img src={Logo} onClick={() => navigate('/')}></img>
                    <div className={styles.page_title}>
                        PFP CHUMPS
                    </div>
                </div>

                <div className={styles.page_subtitle}>
                    This PFP collection is a direct relation to our flagship collection OG Chumps. Each PFP is a stylised static portrait of an existing OG Chump. If you hold an OG Chump along with its corresponding PFP, you are entitled to staking bonuses.
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
                            Matches OG Chumps
                        </div>
                    </div>
                    <div className={styles.page_textbox}>
                        <div className={styles.page_textbox_wheel}>

                        </div>
                        <div className={styles.page_textbox_text}>
                            Hand-painted style
                        </div>
                    </div>
                    <div className={styles.page_textbox}>
                        <div className={styles.page_textbox_wheel}>

                        </div>
                        <div className={styles.page_textbox_text}>
                            Staking bonus
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

export default PFPChumpPage;