import React from "react";
import { InternshipData } from "data";
import AnimatedCard from "components/AnimatedCard/animatedcard.component";
import "./internships.styles.css";

class Internships extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            internshipGroups: null
        }
    }

    componentDidMount() {
        let internshipArray = [];
        const { size } = this.props;

        while (InternshipData.length > 0) {
            internshipArray.push(InternshipData.splice(0, size));
        }

        this.setState({internshipGroups: internshipArray});
    }

    render() {
        const { internshipGroups } = this.state;
        return (
            internshipGroups && <div className="internship-section">
                {internshipGroups.map((internshipGroup, parentIndex) => (
                    <div className="internship-row" key={`row-${parentIndex}`}>
                        {
                            internshipGroup.map((internship) => (
                                <AnimatedCard key={`internship-${internship.name}`} {...internship} />
                            ))
                        }
                    </div>
                ))}
            </div>
        );
    }
}

export default Internships;
