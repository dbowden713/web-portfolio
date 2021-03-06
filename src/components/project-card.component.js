import React from "react";
import "./project-card.style.scss";

/*
    <Project
        key             number  mapping key     
        name            string  Project Name
        description     string  Project Description
        image           string  path to image
        languages       Array   languages used
        links           Obj     links to project page and github repo
                                {project: 'https://etc', github: 'https://etc'}
    />
*/

const LanguagePills = languages => {
	return languages.map((language, index) => {
		return (
			<span key={index} className="languagePill">
				{language}
			</span>
		);
	});
};

const ProjectLinkButtons = links => {
	return (
		<div className="projectLinkButtons">
			<a className="leftLink" href={links.project}>
				Project
			</a>
			<a className="rightLink" href={links.github}>
				Repo
			</a>
		</div>
	);
};

export default class ProjectCard extends React.Component {
	constructor(props) {
		super();

		this.state = {
			name: props.name,
			description: props.description,
			image: props.image,
			languages: props.languages,
			links: props.links
		};
	}

	render() {
		return (
			<div className="projectCard">
				<div className="projectCardImage">
					<img
						src={
							this.state.image
								? require("../assets/" + this.state.image)
								: ""
						}
					/>
				</div>
				<div className="projectCardName">{this.state.name}</div>
				<div className="projectCardDescription">
					{this.state.description}
				</div>
				{ProjectLinkButtons(this.state.links)}
				<div className="languages">
					{LanguagePills(this.state.languages)}
				</div>
			</div>
		);
	}
}
