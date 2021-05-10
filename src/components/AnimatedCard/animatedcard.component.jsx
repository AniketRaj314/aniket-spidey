import React from "react";
import "./animatedcard.styles.css";
import { motion } from "framer-motion";

export default function AnimatedCard(props) {
    const { color, previewLogoSrc, logoSrc, internshipRole, internshipDuration, internshipDescription } = props;
    return (
        <div className="flip-card">
            <motion.div
                className="flip-card-front"
                initial={{ rotateY: 180 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 2, delay: 0.5 }}
            >
                <div className="internship-company">
                    <img src={logoSrc} alt="Devfolio" />
                </div>
                <hr />
                <div className="internship-role">
                    <h2>💼 Role</h2>
                    <p>{internshipRole}</p>
                </div>
                <hr />
                <div className="internship-duration">
                    <h2>📅 Duration</h2>
                    <p>{internshipDuration}</p>
                </div>
                <hr />
                <div className="internship-tags">
                    <h2>📝 Description</h2>
                    <p>{internshipDescription}</p>
                </div>
            </motion.div>
            <motion.div
                className="flip-card-back"
                style={{ backgroundColor: color }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: -180 }}
                transition={{ duration: 2, delay: 0.5 }}
            >
                <img src={previewLogoSrc} alt="Devfolio" />
            </motion.div>
        </div>
    );
}
