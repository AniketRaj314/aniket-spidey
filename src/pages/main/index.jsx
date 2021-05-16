import React from "react";

import Background from "components/background/background.component";
import ScrollProgress from "components/ScrollProgress/scrollprogress.component";
import Footer from "components/Footer/footer.component";
import AnimatedTypingText from "components/AnimatedTypingText/animatedtypingtext.component";

import Internships from "sections/Internships/internships.section";
import Intro from "sections/Intro/intro.section";
import Skills from "sections/Skills/skills.section";

import "./main.styles.css";

class Main extends React.Component {
    render() {
        return (
            <div className="flexbox">
                <div className="container">
                    <AnimatedTypingText fontSize="30px" color="white" reanimate>
                        Website is still WIP! Check back soon ;)
                    </AnimatedTypingText>
                    <Intro />
                    <Skills />
                    <Background imagePath={"/images/background.jpg"} />
                    <Internships rowSize={3} />
                    <ScrollProgress />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;
