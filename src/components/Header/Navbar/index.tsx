import React, { useMemo, useEffect, useRef, useState } from "react";
import styles from './index.module.scss';
import { Link } from "react-router-dom";
import { useResize } from "./../../../utils/Helper";
import { useNavigate } from "react-router-dom";
import ClickAwayListener from 'react-click-away-listener';

const Navbar = (props: any) => {
    const [isOpen, SetisOpen] = useState(false);
    const ToggleMenu = () => {
        SetisOpen(!isOpen);
    }

    const handleClickAway = () => {
        SetisOpen(false);
    }
    const navigate = useNavigate();
    const {isMobile, isResponsive} = useResize();

    const twitterLink = `https://twitter.com/blockchumps`;
    const discordLink = `https://discord.gg/Zjh5Q8NYc9`;
    console.log("fullpageApi is: ", props.fullpageApi)
    return (
        <>
        {!isResponsive
        ?<div className={styles.navbar}>
            <div className={styles.social_connect}>
                <div className={styles.social_connect_twitter} onClick={() => window.open(`${twitterLink}`)}>

                </div>
                <div className={styles.social_connect_discord} onClick={() => window.open(`${discordLink}`)}>
                
                </div>

            </div>
            <div className={styles.navlink_area}>
                <a className={styles.navbarLink} onClick={() => props.fullpageApi.moveTo(2, 0)}>COLLECTIONS</a>                
                <a className={styles.navbarLink} onClick={() => props.fullpageApi.moveTo(3, 0)}>ROADMAP</a>
                <a className={styles.navbarLink} onClick={() => props.fullpageApi.moveTo(4, 0)}>UTILTIES</a>
                <a className={styles.navbarLink} onClick={() => props.fullpageApi.moveTo(5, 0)}>ADOPT</a>
            </div>
        </div>
        :
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className={styles.navbar}>
                <div className={styles.navlink_area}>
                    <a onClick={ToggleMenu}>
                        <i className="fa fa-bars" style={{marginTop:'0px', fontSize: '30px'}}></i>
                    </a>
                    <div className={styles.social_connect}>
                        <div className={styles.social_connect_twitter}onClick={() => window.open(`${twitterLink}`)}>

                        </div>
                        <div className={styles.social_connect_discord}onClick={() => window.open(`${discordLink}`)}>
                        
                        </div>

                    </div>
                        {isOpen? 
                        <div className={styles.navMenu}>
                            <a className={styles.navbarLink} onClick={() => {console.log("clicked");props.fullpageApi.moveTo(2, 0); handleClickAway();}}>COLLECTIONS</a>
                            <a className={styles.navbarLink} onClick={() => {props.fullpageApi.moveTo(3, 0); handleClickAway();}}>ROADMAP</a>
                            <a className={styles.navbarLink} onClick={() => {props.fullpageApi.moveTo(4, 0); handleClickAway();}}>UTILTIES</a>
                            <a className={styles.navbarLink} onClick={() => {props.fullpageApi.moveTo(5, 0); handleClickAway();}}>ADOPT</a>
                        </div>
                        :
                        <div></div>
                        }
                </div>
            </div>
        </ClickAwayListener>
        }
        </>
    )
}
export default Navbar;    




