import React, { useEffect, useState } from "react";
import "./animatedcard.styles.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
    const controls = useAnimation();
    const { ref, inView } = useInView();
    const [rotation, setRotation] = useState(0);

    const cardFrontSideVariants = {
        hidden: {
            rotateY: 180 - rotation,
        },
        visible: {
            rotateY: rotation,
        },
    };

    const cardBackSideVariants = {
        hidden: {
            rotateY: rotation,
        },
        visible: {
            rotateY: rotation - 180,
        },
    };

    useEffect(() => {
        if (inView) controls.start("visible");
        if (!inView) controls.start("hidden");
    }, [controls, inView]);

    const internshipDescriptionList = internshipDescription.split(";");

    return (
        <div className="flip-card">
            <motion.div
                ref={ref}
                className="flip-card-front"
                initial="hidden"
                animate={controls}
                transition={{ duration: transitionDuration, delay: transitionDelay }}
                variants={cardFrontSideVariants}
                onHoverStart={() => setRotation(180)}
                onTouchStart={() => setRotation(180)}
                onHoverEnd={() => setRotation(0)}
                onTouchEnd={() => setRotation(0)}
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
                ref={ref}
                className="flip-card-back"
                style={{ backgroundColor: color }}
                initial="hidden"
                animate={controls}
                transition={{ duration: transitionDuration, delay: transitionDelay }}
                variants={cardBackSideVariants}
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
