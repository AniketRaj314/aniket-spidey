import React from "react";
import { SkillsData } from "data";
import { AiOutlineUp } from "react-icons/ai";
import ListItem from "components/ListItem/listitem.component";
import "./skills.styles.css";
import { motion, AnimatePresence } from "framer-motion";

class Skills extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rotation: 0,
            skills: SkillsData,
            displaySkills: true,
        };
    }

    render() {
        const { rotation, skills, displaySkills } = this.state;
        return (
            <div className="skills-section">
                <div
                    className="title clickable"
                    onClick={() => this.setState({ rotation: rotation + 180, displaySkills: !displaySkills })}
                >
                    <h1 className="title">Skills</h1>
                    <motion.div
                        animate={{
                            rotateX: rotation,
                        }}
                    >
                        <AiOutlineUp className="icon" />
                    </motion.div>
                </div>
                <hr />
                <AnimatePresence>
                    {displaySkills && (
                        <motion.div
                            className="skills"
                            initial={{ y: -16 }}
                            animate={{ y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                        >
                            {skills.map((item, index) => (
                                <div className="skill-parent-item">
                                    <ListItem {...item} key={index} />
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }
}

export default Skills;
