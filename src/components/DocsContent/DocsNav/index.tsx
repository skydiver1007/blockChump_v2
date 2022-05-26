import React, { useMemo, useEffect, useRef, useState } from "react";
import styles from './index.module.scss';
import { Link } from "react-router-dom";

import EngineImg from './../../../assets/images/engine.png';

const DocsNav = (props: any) => {

    return (
        <div className={styles.docsnav}>

            <div className={styles.docsnav_logo}>
                <img src={EngineImg} alt="engine" />
            </div>

            <div className={styles.docsnav_link_area}>
            <div className={styles.docsnav_link}>
                    <a href="#introduction">
                        Introduction
                    </a>
                </div>
                <div className={styles.docsnav_link}>
                    <a href="#gettingstarted">
                        Getting Started
                    </a>
                </div>
                <div className={styles.docsnav_link}>
                    <a href="#projectstructure">
                        Project Structure
                    </a>
                </div>
                <div className={styles.docsnav_link}>
                    <a href="#layers">
                        Layers
                    </a>
                </div>
                <div className={styles.docsnav_link}>
                    <a href="#selectionrules">
                        Selection Rules
                    </a>
                </div>
                <div className={styles.docsnav_link}>
                    <a href="#exportoptions">
                        Export Options
                    </a>
                </div>
                <div className={styles.docsnav_link}>
                    <a href="#otherbuttons">
                        Other Buttons
                    </a>
                </div>
            </div>
            <div className={styles.docsnav_back}>
                <a href="/chumpnftengine">{`< Back to main site`}</a>
            </div>
        </div>
    )
}
export default DocsNav;    




