import React from "react";

import Background from "components/background/background.component";
import Internships from "sections/Internships/internships.section";
import ScrollProgress from "components/ScrollProgress/scrollprogress.component";
import Footer from "components/Footer/footer.component";
import "./main.styles.css";
import AnimatedTypingText from "components/AnimatedTypingText/animatedtypingtext.component";

class Main extends React.Component {
    render() {
        return (
            <div className="flexbox">
                <div className="container">
                    <AnimatedTypingText fontSize="40px" color="whitesmoke" reanimate>
                        The Website is still WIP! Check back soon ;)
                    </AnimatedTypingText>
                    <Background imagePath={"/images/background.jpg"} />
                    <Internships size={3} />
                    <ScrollProgress />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;
