import React, { useState } from "react";
import "./animatedcard.styles.css";
import { motion } from "framer-motion";

export default function AnimatedCard(props) {
    const {
        color,
        previewLogoSrc,
        logoSrc,
        internshipRole,
        internshipDuration,
        internshipDescription,
        website,
        name,
    } = props;
    const transitionDuration = 0.8;
    const transitionDelay = 0;

    const internshipDescriptionList = internshipDescription.split(";");

    const [rotation, setRotation] = useState(0);

    return (
        <div className="flip-card">
            <motion.div
                className="flip-card-front"
                initial={{ rotateY: 180 - rotation }}
                animate={{ rotateY: rotation }}
                transition={{ duration: transitionDuration, delay: transitionDelay }}
                onHoverStart={() => setRotation(180)}
                onHoverEnd={() => setRotation(0)}
            >
                <div className="internship-company">
                    <a href={website} target="_blank" rel="noreferrer">
                        <img src={logoSrc} alt={name} />
                    </a>
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
                    <ul key={`${name}-list`}>
                        {internshipDescriptionList.map((listItem, index) => (
                            <li key={`${name}-${index}`}>{listItem}</li>
                        ))}
                    </ul>
                </div>
            </motion.div>
            <motion.div
                className="flip-card-back"
                style={{ backgroundColor: color }}
                initial={{ rotateY: rotation }}
                animate={{ rotateY: rotation - 180 }}
                transition={{ duration: transitionDuration, delay: transitionDelay }}
                onHoverStart={() => setRotation(180)}
                onHoverEnd={() => setRotation(0)}
            >
                <a href={website} target="_blank" rel="noreferrer">
                    <img src={previewLogoSrc} alt={name} />
                </a>
            </motion.div>
        </div>
    );
}
