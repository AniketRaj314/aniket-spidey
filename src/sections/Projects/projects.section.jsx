import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { ProjectData } from "data";
import "./projects.styles.css";

export default function Projects() {
    const [selectedId, setSelectedId] = useState(null);
    return (
        <div className="project-section">
            <AnimateSharedLayout>
                {ProjectData.map((item, index) => {
                    if (index % 2 === 0 && index + 1 < ProjectData.length) {
                        let class1;
                        let class2;
                        if ((index / 2) % 2 === 0) {
                            class1 = "section-1";
                            class2 = "section-2";
                        } else {
                            class1 = "section-2";
                            class2 = "section-1";
                        }
                        return (
                            <div className="row">
                                <ProjectMiniView
                                    {...item}
                                    setIdOnClick={() => setSelectedId(index + 1)}
                                    index={index}
                                    className={`section ${class1}`}
                                />
                                <ProjectMiniView
                                    {...ProjectData[index + 1]}
                                    setIdOnClick={() => setSelectedId(index + 1 + 1)}
                                    index={index + 1}
                                    className={`section ${class2}`}
                                />
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
                <AnimatePresence>
                    {selectedId && (
                        <div className="modal" onClick={() => setSelectedId(null)}>
                            <motion.div className="modal-content" layoutId={selectedId}>
                                <motion.h2>{ProjectData[selectedId - 1].project_name}</motion.h2>
                                <motion.h5>{ProjectData[selectedId - 1].description}</motion.h5>
                                <motion.button onClick={() => setSelectedId(null)}>Click me</motion.button>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </AnimateSharedLayout>
        </div>
    );
}

function ProjectMiniView(props) {
    const { project_name, description, index, flex, setIdOnClick, ...otherProps } = props;
    return (
        <motion.div layoutId={index + 1} onClick={setIdOnClick} style={{ flex: flex }} {...otherProps}>
            <motion.h2>{project_name}</motion.h2>
            <motion.h5>{description}</motion.h5>
        </motion.div>
    );
}
