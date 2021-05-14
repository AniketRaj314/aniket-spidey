import React from "react";

import Background from "components/background/background.component";
import Internships from "sections/Internships/internships.section";
import ScrollProgress from "components/ScrollProgress/scrollprogress.component";
import "./main.styles.css";

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <Background imagePath={"/images/background.jpg"} />
                <Internships size={3} />
                <ScrollProgress />
            </div>
        );
    }
}

export default Main;
