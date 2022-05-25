import React, { useMemo, useEffect, useRef, useState } from "react";
import styles from './index.module.scss';
import Mini_Logo from './../../assets/images/logo_100x76.png'

const Footer = () => {

    const twitterLink = `https://twitter.com/blockchumps`;
    const discordLink = `https://discord.gg/Zjh5Q8NYc9`;
    return (
        <div className={styles.footer}>
            <div className={styles.footer_social_net}>
                <div className={styles.footer_twitter} onClick={() => window.open(`${twitterLink}`)}>

                </div>
                <div className={styles.footer_discord} onClick={() => window.open(`${discordLink}`)}>

                </div>
            </div>
            <div className={styles.footer_copyright}>
                copyright Block Chumps
            </div>
        </div>
    )
}
export default Footer;    