import React from "react";
import styles from './index.module.scss';

import LoginImg from './../../assets/images/docs/image9.png';
import CodeImg from './../../assets/images/docs/image4.png';

const Layers = (props: any) => {

    return (
        <div className={styles.section_area} id="layers">
                <div className={styles.section_area_title}>
                    Layers
                </div>

                <div className={styles.article}>
                    <p>
                    Layers account for everything in your collection. Everything you add to your project will be a layer of some kind, whether it be text, imported images, or Compositions. You can add anything you like in order to create the visuals you desire, as long as you follow the project structure required by CNE:
                    </p>

                    <p>
                    For example, you can have 100 layers inside the Root Comp, but only 10 of them are tagged as “Trait” layers. The Trait layers will be processed by CNE and change with each edition, whereas the untagged layers will be left as intended by the user. 
                    </p>

                    <p>
                    As a simple rule, you can make anything you want as long as you tag the Root, Trait, and Selection layers correctly so CNE knows what you want to change with each new edition.
                    </p>
                </div>
            </div>
    );
}
export default Layers;    




