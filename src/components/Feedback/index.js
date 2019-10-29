import React, { Component } from "react";
import styled from "styled-components";

import Block from "components/shared/Block";
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

export const isTagSelected = (tag, selectedTags) => (selectedTags.length === 0 ? true : selectedTags.indexOf(tag) !== -1);

export const Container = styled.div`
    transition: all ease-in-out 200ms;
    width: 100%;
	/* border-top: 1px solid ${p => p.theme.palette.gray4}; */
	/* border-bottom: 1px solid ${p => p.theme.palette.gray4}; */
    /* background-color: ${p => p.theme.palette.geekblue1}; */
	padding: 1rem;
    margin-bottom: 2rem;
    max-width: 1100px;

	@media print {
		display: none;
	}
`;

export const Tag = styled.div`
	transition: all ease-in-out 200ms;
	margin: 0.5rem 0.5rem 0.5rem 0;
	/* border-bottom: 2px solid ${p => p.theme.palette.primaryComplement}; */
	cursor: pointer;

    font-size: 0.9rem;
    padding: 0.1rem 0.4rem;
    background-color: ${p => p.theme.palette.gray1};
    border: 1px solid ${p => p.theme.palette.transparent};

    ${p => (isTagSelected(p.tag, p.selectedTags) ? "" : `opacity: 0.3;`)}

	&:hover {
        /* background-color: ${p => p.theme.palette.tertiaryComplement}; */
        border-color: ${p => p.theme.palette.gray7};
	}
`;

export const BulletPointContainer = styled.div`
	margin: 1rem 0;
	${p => (shouldDisplayFeedback(p.tags, p.selectedTags) ? "" : "display: none;")};
	max-width: 300px;
	padding: 0 1.5rem;

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
	color: ${p => p.theme.palette.gray8};
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
			selectedTags: []
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
			point.tags.map(tag => {
				stats[tag] = stats[tag] ? stats[tag] + 1 : 1;
			});
		});

		return stats;
	};

	render() {
		const tagStats = this.getTagStats();

		return (
			<Container>
				<Block maxWidth="9in" mh="auto">
					<Block>Previous teammates agree that I excel in:</Block>
					<Block flex flexWrap="wrap">
						{Object.keys(TAGS).map(key => {
							const value = TAGS[key];

							return (
								<Tag key={key} tag={key} onClick={() => this.onClickTag(key)} selectedTags={this.state.selectedTags}>
									{value}
									{/* ({tagStats[value]}) */}
								</Tag>
							);
						})}
					</Block>
				</Block>
				<Block flex flexWrap="wrap" justifyContent="space-around">
					{FEEDBACK.map(point => {
						return (
							<BulletPointContainer key={point.content} tags={point.tags} selectedTags={this.state.selectedTags}>
								<BulletPoint>{point.content}</BulletPoint>
								<AttributedTo>
									{point.author}
									{/* , {point.company} */}
									{/* <br /> */}
									{/* <em>{point.tags.join(", ")}</em> */}
								</AttributedTo>
							</BulletPointContainer>
						);
					})}
				</Block>
			</Container>
		);
	}
}
