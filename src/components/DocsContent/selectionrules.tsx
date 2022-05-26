import React from "react";
import styles from './index.module.scss';

import RulesImg from './../../assets/images/docs/image6.png';

const SelectionRules = (props: any) => {

    return (
        <div className={styles.section_area} id="selectionrules">
                <div className={styles.section_area_title}>
                    Selection Rules
                </div>

                <div className={styles.article}>
                    
                    <p>
                    Selection rules determine how CNE chooses specific “Selection” layers to display within each Trait. This forms the basis of how your editions will be built across your collection, and allows for complex criteria. 
                    </p>

                    <h1>
                        Selection order
                    </h1>

                    <p>
                        CNE uses a cascading approach to layer selection. It goes down the Trait layers from top to bottom and makes selections in that order.
                    </p>

                    <div className={styles.tip_area}>
                    The order of selection doesn’t necessarily need to be the order in which you want the layers viewed. Please visit the youtube channel for a video explanation.
                    </div>
                </div>
                <div className={styles.article}>
                    <h1>
                        Rule type overview
                    </h1>

                    <p>
                        There are 4 main rule types:
                    </p>

                    <div className={styles.indented_area}>
                        <ol>
                            <li>Chance</li>
                            <p>This number defines the relative chance that a selection layer is chosen over the others within the same Trait. For example, a selection layer with a Chance value of 20 will be more likely to be chosen over a layer with a value of 10. The scale here is relative, so any numbers are valid.</p>
                            <li>Require</li>
                            <p>The Require value represents which previous Trait’s Selection are required in order for this current Trait’s Selection to be a valid option. You can have multiple Require rules.</p>
                            <li>Avoid</li>
                            <p>The Avoid value represents which previous Trait’s Selection are to be avoided in order for this current Trait’s Selection to be a valid option. You can have multiple Avoid rules.</p>
                            <li>Trigger</li>
                            <p>The Trigger rule is used to switch variants of Selections such as poses. It is an added level of variation should it be needed.</p>
                        </ol>
                    </div>

                    <div className={styles.image_area}>
                        <img src={RulesImg} alt="rules" />
                        <div className={styles.image_area_description}>Selection rules window</div>
                    </div>
                </div>

                <div className={styles.article}>
                    <h1>Chance</h1>
                    <p>
                    Every Selection layer has a Chance value, whether set explicitly or not. By default each layer will have the same Chance value (10), meaning that each layer has an equal chance of being selected.
                    </p>
                    <p>
                    By adjusting the Chance value manually, you can control the rarity of each Selection to give your collection the desired balance. A Selection with a Chance value of 1 will be much rarer than a Selection with a Chance value of 200. 
                    </p>
                    <p>
                    It’s important to note that the Chance values of layers are relative, and must be integers. You cannot set a Chance value lower than 1, but you can make 1 rarer by increasing the Chance value of the other Selections.
                    </p>

                </div>

                <div className={styles.article}>
                    <h1>Require</h1>
                    <p>
                    When adding a Require rule, you are telling the current selection to require a particular selection on a previous trait. For example, you may have a Trait called “Hat” and a Trait called “Hairstyle”. The Hat Trait has selections which only work with a certain Hairstyle Trait. 
                    </p>
                    <p>
                    A Require rule can include multiple Traits, as well as multiple Selections in each Trait. For example:
                    </p>
                    <div className={styles.indented_area}>
                        <p>
                        The Hat Selection of Bandana Requires Hairstyle to be set to Short OR Bald <br/>
                        The Hat Selection of Bandana also Requires Earwear to be set to None.
                    </p>
                    </div>

                </div>

                <div className={styles.article}>
                    <h1>Avoid</h1>
                    <p>
                    Avoid rules work the same way as Require rules, except that you are telling CNE all of the traits and selections that must be avoided in order to consider the current Selection. 
                    </p>
                    <p>
                    In the example picture above, the Hairstyle Selection of Rockabilly will not be valid if the Headwear Selection contains any of the keywords Hat, Crown, Helmet, Bandana, or Cap. In addition to this, it will also be invalid if the Earwear Selection contains the keyword Headphones.
                    </p>

                </div>
            </div>
    );
}
export default SelectionRules;    




