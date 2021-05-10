import React from "react";

import Background from "components/background/background.component";
import AnimatedCard from "components/AnimatedCard/animatedcard.component";
import "./main.styles.css";
import { Internships } from "data";

class Main extends React.Component {
    render() {
        return (
            <>
                <Background imagePath={"/images/background.jpg"} />
                {Internships.map((internship, index) => (
                    <AnimatedCard key={`internship-${index}`} {...internship} />
                ))}
            </>
        );
    }
}

export default Main;
