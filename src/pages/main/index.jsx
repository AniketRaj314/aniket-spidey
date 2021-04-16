import React from "react";
import DATA from "data";

import Background from "components/background/background.component";

class Main extends React.Component {
    render() {
        return <Background imagePath={DATA.backgroundImagePath} />;
    }
}

export default Main;
