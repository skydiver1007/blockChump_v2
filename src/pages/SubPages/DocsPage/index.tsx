import React, { useMemo, useEffect, useRef, useState } from "react";
import styles from './index.module.scss';
import DocsNav from './../../../components/DocsContent/DocsNav';
import DocsMain from '../../../components/DocsContent/';

const DocsPage = () => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'auto'})
      }, [])
    return (
        <div className={styles.container} id="docs">
            <DocsNav />
            <DocsMain />
        </div>
    )
}

export default DocsPage;