import React from "react";

class SocialCard extends React.Component {
  	render() {
		const addOnClassName = this.props.class ? `${this.props.class}` : ''
		return (
			<section className="socialContainer">
				<h1>Social Card</h1>
				<div className={`cardContainer ${addOnClassName}`}>
					<a href={this.props.link}>
						<img src={this.props.imagesrc} alt={this.props.imagesalt} />
						<div className="contentContainer">
							<div className="cardProfileImg">
								<img src={this.props.profimagesrc} alt={this.props.profimagesalt} />
							</div>
							<div className="cardInfo">
								<h1 className="cardTitle">{this.props.title}</h1>
								<p className="cardDesc">{this.props.text}</p>
							</div>
						</div>
					</a>
				</div>
			</section>
		);
  	}
}

export default SocialCard;