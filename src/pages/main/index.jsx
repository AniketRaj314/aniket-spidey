import React from "react";

import Background from "components/background/background.component";
import Internships from "sections/Internships/internships.section";
import "./main.styles.css";

class Main extends React.Component {
    render() {
        return (
            <>
                <Background imagePath={"/images/background.jpg"} />
                <Internships size={3} />
            </>
        );
    }
}

export default Main;
