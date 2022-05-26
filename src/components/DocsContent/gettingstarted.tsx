import React from "react";
import styles from './index.module.scss';

import LoginImg from './../../assets/images/docs/image9.png';
import CodeImg from './../../assets/images/docs/image4.png';
import MetadataImg from './../../assets/images/docs/image5.png';
import TemplateImg from './../../assets/images/docs/image8.png';
import ProjectImg from './../../assets/images/docs/image10.png';

const GettingStarted = (props: any) => {

    return (
        <div className={styles.section_area} id="gettingstarted">
            <div className={styles.section_area_title}>
                Getting Started
            </div>





            <div className={styles.article}>
                <h1>
                    Installation
                </h1>
                <p>
                    Unzip the archive and place the “chump_nft_engine_v1.0.jsx” file into your After Effects “ScriptUI Panels” directory:
                </p>

                <div className={styles.indented_area}>
                    <h1>Windows:</h1>
                    <p>C:\Program Files\Adobe\Adobe After Effects (version)\Support Files\Scripts\ScriptUI Panels</p>
                </div>
                <div className={styles.indented_area}>
                    <h1>macOS:</h1>
                    <p>/Applications/Adobe After Effects (version)/Scripts/ScriptUI Panels</p>
                </div>
                <p>
                    After Effects will require a restart if it is currently running. Once restarted, you can find the extension at the bottom of the “Window” drop down.
                </p>
            </div>






           <div className={styles.article}>
                <h1>
                    Logging in
                </h1>
                <p>
                When you first open CNE you’ll be prompted with a “login” window.
                </p>
                <div className={styles.image_area}>
                    <img src={LoginImg} alt="login" />
                    <div className={styles.image_area_description}>Login window</div>
                </div>
            
                <p>
                    You will need 3 things in order to launch the full version:
                </p>

                <div className={styles.indented_area}>
                    <ol>
                        <li>Hold a valid NFT (ie. an OG Chump)</li>
                        <p>If you did not mint an original, you can purchase one on a secondary market such as Magic Eden.</p>
                        <li>Have a verified role on the Chumpville Discord server</li>
                        <p>Once you have a valid NFT in your wallet, join the discord server and follow the instructions to get your verified role. This role will be checked constantly and removed if you no longer hold a valid NFT.</p>
                        <li>Have an activation code (provided by Discord)</li>
                        <p>This step can be performed from the login screen. Click the link to open Discord’s login verification and, if you hold a verified role, you will be granted an activation code. Once you have this, enter it where prompted. CNE will remember this code and use it to verify you each time you launch. The code may expire periodically, in which case you simply repeat this step.</p>
                    </ol>
                </div>

                <div className={styles.image_area}>
                    <img src={CodeImg} alt="code" />
                    <div className={styles.image_area_description}>After authorising/signing in through Discord, you’ll be redirected to this screen and provided a code.</div>
                </div>
                
            </div>




            <div className={styles.article}>
                <h1>
                    Setting a project
                </h1>
                <div className={styles.image_area}>
                    <img src={ProjectImg} alt="project" />
                    <div className={styles.image_area_description}>Project section</div>
                </div>
            
                <p>
                Once CNE is launched, the first thing you’ll want to do is set your project. Although this is not necessary at this point, it is recommended as the logical first step.
                </p>

                <div className={styles.indented_area}>
                    <ol>
                        <li>Click the “Set Project” button</li>
                        <p>This will launch a file browser.</p>
                        <li>Navigate to the directory you wish your files to be created in, or open a directory that already has an existing project</li>
                        <p>Note that the project folder is considered the root folder of your project. When starting a new project, 2 empty folders will be created within the project folder: “images” and “metadata”. If you select an existing project folder, CNE will check if any metadata files already exist, and this will determine if you are continuing a project or not. The existing project does not need to have images, only metadata.</p>
                        <li>Click “OK”</li>
                        <p>If you have selected a folder with existing collection metadata, CNE will load this data into memory. Depending on the size of the existing collection, this can take a few seconds to complete.</p>
                    </ol>
                </div>
                
            </div>




            <div className={styles.article}>
                <h1>
                    Filling in the collection-wide metadata
                </h1>
                <p>   
                    Clicking the metadata button opens up a form where you can enter the main collection metadata such as title, description, sales commission etc. If you have loaded an existing collection, these fields will be filled by the existing metadata and should not be changed (though technically you can change them).
                </p>
                <div className={styles.image_area}>
                    <img src={MetadataImg} alt="metadata" />
                    <div className={styles.image_area_description}>Metadata window</div>
                </div>
                
            </div>



            <div className={styles.article}>
                <h1>
                Creating the layer setup for your collection
                </h1>
                <p>   
                    As long as you adhere to the structure required by CNE for layers (see section “Project Structure”), you can start from scratch and build your collection. However, for a quick setup, you can use the “Build Template” button to create an empty layer/composition structure that you can then build upon.
                </p>
                <div className={styles.image_area}>
                    <img src={TemplateImg} alt="template" />
                    <div className={styles.image_area_description}>Template section</div>
                </div>
                
            </div>



            <div className={styles.article}>
                <h1>
                Import or create artwork
                </h1>
                <p>   
                    Once you have the structure in place, the last thing you need to do is bring in artwork into the appropriate compositions. You can either import artwork created elsewhere, or create artwork within After Effects, or both. This is entirely up to you and your project.
                 </p>
                
            </div>
            
        </div>
    );
}
export default GettingStarted;    




