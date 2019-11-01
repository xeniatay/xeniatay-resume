import React, { Component } from "react";
import styled from "styled-components";

import Block, { getResponsiveValues } from "components/shared/Block";
import Text from "components/shared/Text";

import { TAGS, FEEDBACK } from "./constants";

export const shouldDisplayFeedback = (tags, selectedTags) => {
	// If no tags are selected, display all feedback
	if (selectedTags.length === 0) {
		// return true;
	}

	// Display this piece of feedback if it matches any selected tags
	return selectedTags.find(key => {
		if (tags.indexOf(TAGS[key]) !== -1) {
			return true;
		}
		return false;
	});
};

export const Title = styled.span`
	display: block;
	font-weight: bold;
	margin-bottom: 0.5rem;
	line-height: 1.3;
	${getResponsiveValues({
		value: { xs: "0.9rem", lg: "1rem" },
		style: "font-size"
	})}
`;

export const isTagSelected = (tag, selectedTags) =>
	selectedTags.length === 0 ? false : selectedTags.indexOf(tag) !== -1;

export const Container = styled.div`
	box-sizing: border-box;
	transition: all ease-in-out 200ms;
	width: 100%;
	margin: 1rem auto 3rem auto;
	max-width: 1100px; // 3 columns
	${getResponsiveValues({ value: { xs: "0.5rem", lg: "1rem" }, style: "padding" })}

	@media print {
		display: none;
	}
`;

export const SeeAll = styled.div`
	margin-top: 0.5rem;
	white-space: nowrap;
	padding: 0.1rem 0.4rem;
	font-size: 0.8em;
	background-color: ${p => p.theme.palette.gray1};
	text-decoration: underline;
	color: ${p => p.theme.palette.gray8};
	cursor: pointer;

	${p => (p.disabled ? `opacity: 0.4; cursor: not-allowed;` : "")}

	&:hover {
		text-decoration: underline;
		color: ${p => p.theme.palette.secondary};
	}
`;

export const TagWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	${getResponsiveValues({ value: { xs: "wrap", md: "unset" }, style: "flex-wrap" })}
`;

export const Tag = styled.div`
	transition: all ease-in-out 100ms;
	${getResponsiveValues({ value: { xs: "0.25rem", lg: "0.25rem 0.5rem" }, style: "margin" })}
	margin-left: 0 !important;
	padding: 0.1rem 0.4rem;
	background-color: ${p => p.theme.palette.gray1};
	border: 1px solid ${p => p.theme.palette.transparent};
	box-shadow: 1px 1px 1px 0 ${p => p.theme.palette.gray8};
	${getResponsiveValues({ value: { xs: "0.8rem", lg: "0.9rem" }, style: "font-size" })}
	cursor: pointer;

	${p =>
		isTagSelected(p.tag, p.selectedTags)
			? `
				box-shadow: 1px 1px 2px 0 ${p.theme.palette.secondary};
	`
			: `
				color: ${p.theme.palette.gray7};
				box-shadow: 1px 1px 1px 0 ${p.theme.palette.gray4};
			`}

	&:hover {
		color: ${p => p.theme.palette.gray9};
		box-shadow: 2px 2px 2px 0px ${p => p.theme.palette.gray7};
		background-color: ${p => p.theme.palette.white};
	}
`;

export const BulletPointContainer = styled.div`
	flex-basis: 300px;
	flex-grow: 1;
	${getResponsiveValues({ value: { xs: "0.5rem", lg: "1rem" }, style: "padding" })}

	${p =>
		shouldDisplayFeedback(p.tags, p.selectedTags)
			? ""
			: `
				display: none;
			`};

	&:nth-child(even) {
		em {
			background-color: ${p => p.theme.palette.tertiaryComplement};
			background-image: linear-gradient(
				-100deg,
				rgba(255, 255, 255, 1),
				${p => p.theme.palette.tertiaryComplement} 85%,
				rgba(255, 255, 255, 1)
			);
		}
	}

	&:nth-child(odd) {
		em {
			background-image: linear-gradient(
				-100deg,
				rgba(255, 255, 255, 1),
				${p => p.theme.palette.tertiary} 85%,
				rgba(255, 255, 255, 1)
			);
		}
	}

	em {
		font-weight: bold;
	}
`;

export const BulletPoint = styled.div`
	&:before {
		content: "‣ ";
	}

	line-height: 1.5;
	${getResponsiveValues({ value: { xs: "0.8rem", lg: "0.9rem" }, style: "font-size" })}
	color: ${p => p.theme.palette.gray9};
	background-color: ${p => p.theme.palette.gray1};
`;

export const AttributedTo = styled.div`
	&:before {
		content: "— ";
	}

	margin-top: 0.3rem;
	text-align: right;
	${getResponsiveValues({ value: { xs: "0.7rem", lg: "0.7rem" }, style: "font-size" })}
	color: ${p => p.theme.palette.gray8};
	background-color: ${p => p.theme.palette.gray1};
`;

export default class Feedback extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// selectedTags: Object.keys(TAGS)
			selectedTags: [Object.keys(TAGS)[0]]
		};
	}

	onClickTag = key => {
		const { selectedTags } = this.state;

		// If tag was selected, remove it
		// if (selectedTags.indexOf(key) !== -1) {
		// 	const selectedIndex = selectedTags.indexOf(key);

		// 	selectedTags.splice(selectedIndex, 1);
		// 	this.setState({
		// 		selectedTags
		// 	});
		// } else {
		// 	this.setState({
		// 		selectedTags: [...selectedTags, key]
		// 	});
		// }

		// Just allow selection of one tag
		this.setState({
			selectedTags: [key]
		});
	};

	getTagStats = () => {
		const stats = {};

		FEEDBACK.map(point => {
			return point.tags.map(tag => {
				stats[tag] = stats[tag] ? stats[tag] + 1 : 1;
				return null;
			});
		});

		return stats;
	};

	showAllFeedback = () => {
		const { selectedTags } = this.state;

		if (selectedTags.length !== Object.keys(TAGS).length) {
			// Show all
			this.setState({
				selectedTags: Object.keys(TAGS)
			});
		}
		// else {
		// 	// Hide all
		// 	this.setState({
		// 		selectedTags: []
		// 	});
		// }
	};

	renderPoint = (point, i) => {
		const { selectedTags } = this.state;

		return (
			<BulletPointContainer key={i} tags={point.tags} selectedTags={selectedTags}>
				<BulletPoint>{point.content}</BulletPoint>
				<AttributedTo>
					{point.author}
					{/* , {point.company} */}
					{/* <br /> */}
					{/* <em>{point.tags.join(", ")}</em> */}
				</AttributedTo>
			</BulletPointContainer>
		);
	};

	render() {
		// const tagStats = this.getTagStats();
		const { selectedTags } = this.state;

		return (
			<Container id="strengths">
				<Block mh="auto" mb="2">
					<Block backgroundColor="gray1">
						<Title>Past teammates appreciate that I am good at:</Title>
					</Block>
					<TagWrapper>
						<Block flex flexWrap="wrap" alignItems="center">
							{Object.keys(TAGS).map(key => {
								const value = TAGS[key];

								return (
									<Tag
										key={key}
										tag={key}
										onClick={() => this.onClickTag(key)}
										selectedTags={selectedTags}
									>
										{value}
										{/* ({tagStats[value]}) */}
									</Tag>
								);
							})}
						</Block>
						<div>
							<SeeAll
								onClick={this.showAllFeedback}
								disabled={selectedTags.length === Object.keys(TAGS).length}
							>
								Show All
							</SeeAll>
						</div>
					</TagWrapper>
				</Block>
				<Block flex flexWrap="wrap" justifyContent="space-around">
					{FEEDBACK.map(this.renderPoint)}
				</Block>
			</Container>
		);
	}
}
