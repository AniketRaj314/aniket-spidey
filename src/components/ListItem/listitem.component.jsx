import React from "react";
import { motion } from "framer-motion";
import "./listitem.styles.css";

class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logoIndex: 0,
        };

        if (Array.isArray(this.props.logo)) {
            this.setTimer(3000);
        }
    }

    setTimer(interval) {
        setInterval(() => {
            const { logoIndex } = this.state;
            this.setState({ logoIndex: (logoIndex + 1) % this.props.logo.length });
        }, interval);
    }

    render() {
        const { logoIndex } = this.state;
        const { skill, logo, description } = this.props;
        return (
            <div className="skill-item">
                {Array.isArray(logo) ? (
                    <motion.img
                        src={logo[logoIndex]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="skill-logo"
                        alt={skill}
                    />
                ) : (
                    <img src={logo} className="skill-logo" alt={skill} />
                )}
                <div className="skill-description">
                    <h2>{skill}</h2>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
}

export default ListItem;
