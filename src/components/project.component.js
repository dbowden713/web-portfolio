import React from 'react';
import './project.style.scss';

const LanguagePills = (languages) => {
    return (languages.map((language, index) => {
        return (<span key={index} className="languagePill">{language}</span>);
    }));
};

export default class Project extends React.Component {
    constructor(props) {
        super();

        this.state = {
            name: props.name,
            description: props.description,
            image: props.image,
            languages: props.languages
        }
    }
    
    render() {
        return(
            <div className="projectCard">
                <div className="projectCardImage">
                    <img src={this.state.image ? "../assets/" + this.state.image : ''} />
                </div>
                <div className="languages">
                    {LanguagePills(this.state.languages)}
                </div>
            </div>
        );
    }
}