import React, { Component } from "react";
import styled from "styled-components";

import Block from "components/shared/Block";

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

export const isTagSelected = (tag, selectedTags) => (selectedTags.length === 0 ? false : selectedTags.indexOf(tag) !== -1);

export const Container = styled.div`
    transition: all ease-in-out 200ms;
    width: 100%;
	/* border-top: 1px solid ${p => p.theme.palette.gray4}; */
	/* border-bottom: 1px solid ${p => p.theme.palette.gray4}; */
    /* background-color: ${p => p.theme.palette.geekblue1}; */
	padding: 1rem;
    margin: 1rem auto 3rem auto;
    max-width: 1100px;

	@media print {
		display: none;
	}
`;

export const SeeAll = styled.div`
	margin-top: 0.5rem;
	white-space: nowrap;
	padding: 0.1rem 0.4rem;
	font-size: 0.9rem;
	cursor: pointer;

	&:before {
		${p => (p.show ? 'content: "Show ";' : 'content: "Hide ";')};
	}

	&:hover {
		text-decoration: underline;
	}
`;

export const Tag = styled.div`
	transition: all ease-in-out 100ms;
	margin: 0.5rem 0.5rem 0.5rem 0;
	/* border-bottom: 2px solid ${p => p.theme.palette.primaryComplement}; */
	cursor: pointer;

    font-size: 0.9rem;
    padding: 0.1rem 0.4rem;
    background-color: ${p => p.theme.palette.gray1};
    border: 1px solid ${p => p.theme.palette.transparent};
	box-shadow: 1px 1px 1px 0 ${p => p.theme.palette.gray8};
	opacity: 0.9;

	${p =>
		isTagSelected(p.tag, p.selectedTags)
			? `
				box-shadow: 1px 1px 1px 0 ${p.theme.palette.secondary};
	`
			: `
				opacity: 0.3;
	`}

	&:hover {
        /* background-color: ${p => p.theme.palette.tertiaryComplement}; */
        /* border-color: ${p => p.theme.palette.secondary}; */
		box-shadow: 2px 2px 2px 0px ${p => p.theme.palette.gray8};
		opacity: 1;
	}
`;

export const BulletPointContainer = styled.div`
	/* background-image: radial-gradient(circle, ${p => p.theme.palette.gray2}, transparent 80%); */
	margin: 1rem 0;
	flex-basis: 300px;
	flex-grow: 1;

	padding: 0 1.5rem;

	${p =>
		shouldDisplayFeedback(p.tags, p.selectedTags)
			? ""
			: `
				display: none;
			`};

	&:nth-child(even) {
		em {
			/* color: ${p => p.theme.palette.primary}; */
            background-image: linear-gradient(-100deg, transparent, ${p => p.theme.palette.tertiaryComplement} 85%, transparent);
		}
	}

	&:nth-child(odd) {
		em {
            /* color: ${p => p.theme.palette.secondary}; */
            background-image: linear-gradient(-100deg, transparent, ${p => p.theme.palette.tertiary} 85%, transparent);
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
	font-size: 0.8rem;
	color: ${p => p.theme.palette.gray9};
`;

export const AttributedTo = styled.div`
	&:before {
		content: "— ";
	}

	margin-top: 0.5rem;
	text-align: right;
	font-size: 0.8rem;
	color: ${p => p.theme.palette.gray8};
	/* max-width: 60%;
    float: right; */
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
		if (selectedTags.indexOf(key) !== -1) {
			const selectedIndex = selectedTags.indexOf(key);

			selectedTags.splice(selectedIndex, 1);
			this.setState({
				selectedTags
			});
		} else {
			this.setState({
				selectedTags: [...selectedTags, key]
			});
		}
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

	toggleFeedback = () => {
		const { selectedTags } = this.state;

		if (selectedTags.length !== Object.keys(TAGS).length) {
			// Show all
			this.setState({
				selectedTags: Object.keys(TAGS)
			});
		} else {
			// Hide all
			this.setState({
				selectedTags: []
			});
		}
	};

	renderPoint = (point, i) => {
		const { selectedTags } = this.state;

		console.log(point, i);
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
			<Container>
				<Block mh="auto" mb="2">
					<Block>Previous teammates agree that I excel in:</Block>
					<Block flex justifyContent="space-between">
						<Block flex flexWrap="wrap" alignItems="center">
							{Object.keys(TAGS).map(key => {
								const value = TAGS[key];

								return (
									<Tag key={key} tag={key} onClick={() => this.onClickTag(key)} selectedTags={selectedTags}>
										{value}
										{/* ({tagStats[value]}) */}
									</Tag>
								);
							})}
						</Block>
						<SeeAll onClick={this.toggleFeedback} show={selectedTags.length !== Object.keys(TAGS).length}>
							All
						</SeeAll>
					</Block>
				</Block>
				<Block flex flexWrap="wrap" justifyContent="space-around">
					{FEEDBACK.map(this.renderPoint)}
				</Block>
			</Container>
		);
	}
}
