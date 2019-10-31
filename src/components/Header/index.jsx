import React, { Component } from "react";
import styled from "styled-components";

import Block, { getResponsiveValues } from "components/shared/Block";
import { SCREEN_ONLY } from "components/shared/Block/constants";
import Text from "components/shared/Text";

// import Background from "./images/burger.jpg";
// import Background from "./images/flower.jpg";
// import Background from "./images/eye.jpg";
// import Background from "./images/eyedark.jpg";
import Background from "./images/eyedark2.jpg";

const EMAIL = "tay.xenia@gmail.com";
const GITHUB = "github.com/xeniatay";
const WEBSITE = "xeniatay.com";
const LINKEDIN = "linkedin.com/in/xeniatay/";
const RESUME = "#resume";
const TESTIMONIALS = "#strengths";
const EXPERIENCE = "5+ years of frontend product development. ";
const CULTURE = "I value empathetic and inclusive work cultures. ";
const PRODUCT = "I enjoy building product that relieves user pain and domain inefficiencies. ";

export const Container = styled.div`
	margin: 0 auto;

	@media screen {
		position: relative; // To make box shadow appear
		background-color: black;
		background-image: url(${Background});
		background-position: center 45%;
		background-repeat: no-repeat;
		background-size: 80%;
		text-align: center;
		/* box-shadow: 0 0 4px 0 ${p => p.theme.palette.gray9}; */
	}
`;

export const ScreenHeader = styled.div`
	${SCREEN_ONLY(
		`
			display: flex;
			margin-left: auto;
			max-width: 864px; // 9in, to vaguely match resume
			align-items: center;
			text-align: left;
			${getResponsiveValues({
				value: { xs: "space-around", lg: "flex-start" },
				style: "justify-content"
			})}
			${getResponsiveValues({ value: { xs: "0.5rem", sm: "1rem", lg: "3rem 2rem" }, style: "padding" })}
			${getResponsiveValues({ value: { xs: "auto", lg: "10%", xl: "20%" }, style: "margin-right" })}
	`
	)}
`;

export const XeniaTay = styled.div`
	font-weight: bold;
	font-family: ${p => p.theme.typography.fontFamilyHeader};
	${getResponsiveValues({ value: { xs: "1.5rem", md: "2rem", lg: "3rem" }, style: "font-size" })}
	color: ${p => p.theme.palette.volcano1};
	text-shadow: 0 0 3px black;
`;

export const Summary = styled.div`
	color: ${p => p.theme.palette.volcano1};
	text-shadow: 0 0 3px black;
	max-width: 500px;
	${getResponsiveValues({ value: { xs: "1.5", lg: "2" }, style: "line-height" })}
	${p =>
		getResponsiveValues({
			value: {
				xs: p.theme.typography.fontSizeXs,
				lg: p.theme.typography.fontSizeBase
			},
			style: "font-size"
		})}
`;

export const FancyLink = styled.a`
	transition: all ease-in-out 100ms;
	display: block;
	padding: 0.2rem 1rem;
	margin-right: 2rem;
	${getResponsiveValues({ value: { xs: "1rem", lg: "2rem" }, style: "margin-right" })}
	margin-bottom: 0.5rem;
	font-weight: bold;
	letter-spacing: 1px;
	background-image: linear-gradient(
		-100deg,
		transparent,
		${p => p.theme.palette.volcano2} 35%,
		${p => p.theme.palette.tertiaryComplement} 85%,
		transparent
	);
	text-decoration: none;
	color: ${p => p.theme.palette.gray9};
	${p =>
		getResponsiveValues({
			value: {
				xs: p.theme.typography.fontSizeXs,
				lg: p.theme.typography.fontSizeSm
			},
			style: "font-size"
		})}

	&:hover {
		text-decoration: underline;
		padding-left: 1.1rem;
		padding-right: 0.9rem;
	}
`;

export default class Header extends Component {
	render() {
		return (
			<Container>
				<ScreenHeader>
					<Block flex flexDirection="column" fluidWidth>
						<XeniaTay>Xenia Tay</XeniaTay>
						<Block mv={1} textAlign="left" maxWidth={{ md: "500px" }}>
							<Summary>
								{EXPERIENCE}
								{CULTURE}
								{PRODUCT}
							</Summary>
						</Block>
						<Block flex flexWrap="wrap">
							<FancyLink href={RESUME} title="Scroll to Resume">
								Resume
							</FancyLink>
							<FancyLink href={TESTIMONIALS} title="Scroll to Reviews">
								Reviews
							</FancyLink>
							<FancyLink
								href={`http://${GITHUB}`}
								target="_blank"
								rel="noopener noreferrer"
								title="Side projects"
							>
								GitHub
							</FancyLink>
							<FancyLink
								href={`mailto:${EMAIL}`}
								target="_blank"
								rel="noopener noreferrer"
								title="Contact me for recruiting, volunteering, or advice"
							>
								Email
							</FancyLink>
							<FancyLink
								href={`http://${LINKEDIN}`}
								target="_blank"
								rel="noopener noreferrer"
								title="Detailed work and volunteer experience"
							>
								LinkedIn
							</FancyLink>
						</Block>
					</Block>
				</ScreenHeader>
				<Block print>
					<Block flex alignItems="center" justifyContent="space-between">
						<Text size="xxl" bold>
							Xenia Tay
						</Text>
						<Block
							flex
							flexGrow={1}
							justifyContent="space-between"
							maxWidth="420px"
							mr={1}
						>
							<a href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferrer">
								{EMAIL}
							</a>
							<a href={`http://${GITHUB}`} target="_blank" rel="noopener noreferrer">
								{GITHUB}
							</a>
							<a href={`http://${WEBSITE}`} target="_blank" rel="noopener noreferrer">
								{WEBSITE}
							</a>
						</Block>
					</Block>
					<Block mv={1}>
						{EXPERIENCE}
						{CULTURE}
						<br />
						{PRODUCT}
					</Block>
				</Block>
			</Container>
		);
	}
}
