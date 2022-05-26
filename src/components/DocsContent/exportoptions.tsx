import React from "react";
import styles from './index.module.scss';

import GeneratorImg from './../../assets/images/docs/image2.png';
import FormatImg from './../../assets/images/docs/image7.png';

const ExportOptions = (props: any) => {

    return (
        <div className={styles.section_area} id="exportoptions">
                <div className={styles.section_area_title}>
                    Export Options
                </div>

                <div className={styles.article}>
                    <h1>
                        Generator
                    </h1>
                    <p>
                    The generator options allow you to set the number of editions to create, as well as some main generation settings.
                    </p>
                    <div className={styles.image_area}>
                        <img src={GeneratorImg} alt="generator" />
                        <div className={styles.image_area_description}>Generator settings</div>
                    </div>
                    <div className={styles.indented_area}>
                        <ol>
                            <li>Editions to make</li>
                            <p>How many unique editions CNE will attempt to create once you click “Generate”. If you are continuing an existing collection, this number represents how many more editions will be added to the collection.</p>
                            <li>Attempts</li>
                            <p>This number represents how many attempts CNE is allowed in order to create a unique edition. This number depends on your collection, how many traits you have, how unique you want each edition to be, and how many editions you want to make. 1000 is a good starting point.</p>
                            <li>Uniqueness</li>
                            <p>This number tells CNE how many traits need unique selections in order for the edition to be considered unique. For example, if this number is set to 1, then editions only need 1 unique trait. The higher the number, the harder it will be for CNE to find a unique combination, but the results will appear more unique.</p>
                            <li>Variable</li>
                            <p>This toggle sets the uniqueness value to be variable. That means if you have a high uniqueness value, but the maximum number of attempts are reached without finding a new edition, you can avoid CNE stopping by having it lower the uniqueness value by 1.</p>
                        </ol>
                    </div>

                    <p>
                    Depending on your collection needs, these values will need to be adjusted in relation to each other to ensure you get the result you like. Keep in mind there is always a maximum number of unique combinations possible to any collection.
                    </p>
                </div>

                <div className={styles.article}>
                    <h1>Format</h1>
                    <div className={styles.image_area}>
                        <img src={FormatImg} alt="format" />
                        <div className={styles.image_area_description}>Format options</div>
                    </div>
                    <p>There are 3 formats for exporting your NFTs: video (.mov), image (.png) and sound (.aiff). These are self explanatory, except when selecting ‘.png’ note that the first frame of the Master comp will be used as the source.
                    </p>
                    <p>
                    The last option, “Render using AME”, will send your data to Adobe Media Encoder (if you have it), and use the format settings that you have set up within that. Adobe Media Encoder allows for extra formats not possible in After Effects, such as GIFs. However, in the case of GIFs or other encoded movies, I recommend exporting using the provided .MOV template to get high quality files, which you can then compress to any other format you like using any 3rd party tools. This will get better results and smaller file sizes, and reduce the cost of hosting large collections on a decentralised network. 
                    </p>
                </div>
            </div>
    );
}
export default ExportOptions;    




