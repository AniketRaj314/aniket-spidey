import React from "react";
import { InternshipData } from "data";
import AnimatedCard from "components/AnimatedCard/animatedcard.component";
import { AiOutlineUp } from "react-icons/ai";
import "./internships.styles.css";
import { motion, AnimatePresence } from "framer-motion";

class Internships extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            internshipGroups: null,
            rotation: 0,
            displayInternships: true,
        };
    }

    componentDidMount() {
        let internshipArray = [];
        const { rowSize } = this.props;

        while (InternshipData.length > 0) {
            internshipArray.push(InternshipData.splice(0, rowSize));
        }

        this.setState({ internshipGroups: internshipArray });
    }

    render() {
        const { internshipGroups, rotation, displayInternships } = this.state;
        return (
            internshipGroups && (
                <div className="internship-section">
                    <div
                        className="title clickable"
                        onClick={() =>
                            this.setState({ rotation: rotation + 180, displayInternships: !displayInternships })
                        }
                    >
                        <h1 className="title">Internships</h1>
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
                        {displayInternships &&
                            internshipGroups.map((internshipGroup, parentIndex) => (
                                <motion.div
                                    className="internship-row"
                                    key={`row-${parentIndex}`}
                                    initial={{ y: -20 }}
                                    animate={{ y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                >
                                    {internshipGroup.map((internship) => (
                                        <AnimatedCard key={`internship-${internship.name}`} {...internship} />
                                    ))}
                                </motion.div>
                            ))}
                    </AnimatePresence>
                </div>
            )
        );
    }
}

export default Internships;
