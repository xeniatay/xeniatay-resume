import React, { Component } from "react";
import styled from "styled-components";

import Block from "components/shared/Block";
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

export const FancyLink = styled.a`
	transition: all ease-in-out 100ms;
	display: block;
	padding: 0.3rem 1rem;
	margin: 1rem;
	font-weight: bold;
	letter-spacing: 1px;
	background-image: linear-gradient(-100deg, transparent, ${p => p.theme.palette.tertiary} 55%, ${p => p.theme.palette.tertiaryComplement} 85%, transparent);
	text-decoration: none;
	color: ${p => p.theme.palette.volcano9};
	font-size: 0.9rem;

	&:hover {
		color: ${p => p.theme.palette.geekblue8};
		text-decoration: underline;
		padding-left: 1.5rem;
		padding-right: 0.5rem;
	}
`;

export default class Header extends Component {
	render() {
		return (
			<Container>
				<Block flex maxWidth="9in" justifyContent="flex-start" alignItems="center" screen pv={3} ml="auto" mr="20%">
					<Block flex flexDirection="column">
						<Text bold header size="3rem" color="volcano1" textShadow="0 0 3px black">
							Xenia Tay
						</Text>
						<Block mv={1} textAlign="left" maxWidth="500px">
							<Text lineHeight={2} color="volcano1" textShadow="0 0 3px black">
								{EXPERIENCE}
								{CULTURE}
								{PRODUCT}
							</Text>
						</Block>
					</Block>
					<Block flex flexDirection="column" textAlign="left" ml={4}>
						<FancyLink href={`http://${LINKEDIN}`} target="_blank" rel="noopener noreferrer">
							LinkedIn
						</FancyLink>
						<FancyLink href={`http://${GITHUB}`} target="_blank" rel="noopener noreferrer" title="GitHub @xeniatay">
							GitHub
						</FancyLink>
						<FancyLink href={`mailto:${EMAIL}`} target="_blank" rel="noopener noreferrer" title="xeniatzy@gmail.com">
							Email
						</FancyLink>
					</Block>
				</Block>
				<Block print>
					<Block flex alignItems="center" justifyContent="space-between">
						<Text size="xxl" bold>
							Xenia Tay
						</Text>
						<Block flex flexGrow={1} justifyContent="space-between" maxWidth="420px" mr={1}>
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
