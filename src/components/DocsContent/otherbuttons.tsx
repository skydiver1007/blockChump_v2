import React from "react";
import styles from './index.module.scss';

import ButtonsImg1 from './../../assets/images/docs/image11.png';
import ButtonsImg2 from './../../assets/images/docs/image3.png';

const OtherButtons = (props: any) => {

    return (
        <div className={styles.section_area} id="otherbuttons">
            <div className={styles.section_area_title}>
                Other Buttons
            </div>
            <div className={styles.image_area}>
                <img src={ButtonsImg1} alt="generator" />
            </div>
            <div className={styles.image_area}>
                <img src={ButtonsImg2} alt="generator" />
                <div className={styles.image_area_description}>Buttons</div>
            </div>
            <div className={styles.article}>
                <h1>
                Export statistics only
                </h1>
                <p>
                This button will export only statistical data (rankings & trait spreadsheet) from the already loaded metadata. It will not generate any new editions and does not require an After Effects project be opened.
                </p>
                <h1>
                Match
                </h1>
                <p>
                This button will prompt you to load an existing collection, which CNE will use as reference when generating your current collection. In simple terms, CNE will try to output the same combinations, based on naming, as an existing collection. An example use of this is if you want a collection that matches another collection in terms of metadata, but uses different artwork.
                </p>
                <h1>
                Rebuild 1 edition
                </h1>
                <p>
                This button will prompt you to load a single metadata file, and then use that metadata file to “build” the combination within After Effects. It does not export anything, but simply selects all the appropriate traits within After Effects.
                </p>
                <h1>
                Generate collection
                </h1>
                <p>
                Runs the main function of CNE. 
                </p>
                <h1>
                Selection rules
                </h1>
                <p>
                Opens the selection rules window.
                </p>
                <h1>
                Preview generation
                </h1>
                <p>
                Creates a single edition based on your layers and rule settings, without exporting anything. This is a way to quickly preview how your editions will look.
                </p>

            </div>
        </div>
    );
}
export default OtherButtons;    




