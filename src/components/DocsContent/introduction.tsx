import React from "react";
import styles from './index.module.scss';



const GettingStarted = (props: any) => {

    return (
        <div className={styles.section_area} id="introduction">
            <div className={styles.section_area_title}>
                Introduction
            </div>

            <div className={styles.article}>
                <h1>
                    What is it?
                </h1>
                <p>
                At its core, Chump NFT Engine is an extension for Adobe After Effects that takes your artwork and outputs a collection of thousands of unique combinations. It’s designed to create NFT collections, and therefore also outputs crucial metadata files for each combination, as well as useful statistics such as rarity rankings. Although geared towards NFTs, it can be used to produce any kind of art collection that would benefit from algorithmically generated combinations.</p>
                <p>
                What makes Chump NFT Engine exciting is that it’s built natively on top of an extremely powerful graphics software, After Effects. Anything that you can do in After Effects can be incorporated into your NFTs, including but not limited to animation, compositing, simulation effects such as particles, masking and sound.
                </p>
                <p>
                Chump NFT Engine was created by us in conjunction with our NFT project Block Chumps, and was used to create our animated collection OG Chumps. The tool will be continuously expanded to add requested functionality and quality of life improvements, and we encourage critical feedback to make this as good as it can be. We really want this to inspire artists to create unique NFT collections and help grow the NFT space artistically.
                </p>
                
            </div>
        </div>
    );
}
export default GettingStarted;    




