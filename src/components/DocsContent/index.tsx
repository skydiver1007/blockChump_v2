import React, { useMemo, useEffect, useRef, useState } from "react";
import styles from './index.module.scss';
import { Link } from "react-router-dom";

import Introduction from './introduction';
import GettingStarted from './gettingstarted';
import ProjectStructure from './projectstructure';
import Layers from './layers';
import SelectionRules from './selectionrules';
import ExportOptions from './exportoptions';
import OtherButtons from './otherbuttons';

const DocsMain = (props: any) => {

    return (
        <div className={styles.docscontent}>
            <div className={styles.title_area}>
                <div className={styles.title_area_title}>
                    CHUMP NFT ENGINE
                </div>
                <div className={styles.title_area_subtitle}>
                    Documentation
                </div>
            </div>
            <div className={styles.tip_area}>
                This guide will be continuously updated to be more comprehensive, as well as to include links to youtube tutorials. Please get in touch with any suggestions for improvement!
            </div>
            
            <Introduction />
            <GettingStarted />
            <ProjectStructure />
            <Layers />
            <SelectionRules />
            <ExportOptions />
            <OtherButtons />

        </div>    
    );
}
export default DocsMain;    




