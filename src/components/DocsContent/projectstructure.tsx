import React from "react";
import styles from './index.module.scss';

import TagImg from './../../assets/images/docs/image1.png';
import StructureImg from './../../assets/images/docs/projectstructure.png';

const ProjectStructure = (props: any) => {

    return (
        <div className={styles.section_area} id="projectstructure">
                <div className={styles.section_area_title}>
                    Project Structure
                </div>
                <div className={styles.image_area}>
                    <img src={StructureImg} alt="structure" />
                    <div className={styles.image_area_description}>The project structure</div>
                </div>
                <div className={styles.article}>
                    
                    <p>
                        The structure of compositions and layers within After Effects is important in order to have CNE work correctly. There are 5 main layer/composition types make up the hierarchy, and can be defined by tagging with their appropriate labels. Select the layer, then click one of the following buttons to label it.
                    </p>

                    <div className={styles.image_area}>
                        <img src={TagImg} alt="project" />
                        <div className={styles.image_area_description}>Layer tag section. Select a layer followed by one of these buttons to define your layers</div>
                    </div>

                    <h1>
                        Master
                    </h1>
                    <p>
                        This is the composition that will be rendered, and therefore will hold everything to do with your collection. The only layer required to be inside the Master is the Root, but you can add as many aesthetic layers as you like such as effects and artwork. These extra layers will not change but provide added visual flair to every edition.
                     </p>

                     <h1>
                        Root (orange)
                    </h1>
                    <p>
                    This composition must be placed as a layer inside the Master composition. The Root will hold all the traits that will be randomised/selected by CNE. 
                    </p>

                     <h1>
                        Trait (green)
                    </h1>
                    <p>
                    This composition must be placed as a layer inside the Root composition. A Trait is part of your collection that will change in appearance and provide uniqueness to your editions. In order for a Trait to be visible, it must have at least 1 Selection layer inside it. An example of a Trait is “Hairstyle”.
                    </p>

                     <h1>
                        Selection (blue)
                    </h1>
                    <p>
                    This layer, whether a composition itself (with the artwork inside) or simply a basic art layer, sits inside a Trait composition, and represents a single possible “selection” for the Trait. An example of a Selection is “Red Mohawk”, which would sit inside a Trait called “Hairstyle”.
                     </p>

                     <h1>
                        Untagged (grey)
                    </h1>
                    <p>
                    This is simply any other layer that is none of the above. CNE will leave these layers alone, which allows you to work with additional artwork, effects, masks etc. An example of an untagged layer is an Adjustment Layer that adds a colour effect, or a mask that hides part of a Trait, or a part of your edition artwork that never changes.
                    </p>

                    
                </div>
                <div className={styles.tip_area}>
                    Use the ‘Create Template’ button to have CNE automatically create a complete template structure. You can then plug in your own artwork, rename layers, and add or remove what you don’t need.
                    </div>
            </div>
    );
}
export default ProjectStructure;    




