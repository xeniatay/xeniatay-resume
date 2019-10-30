import React, { Component } from "react";
import styled from "styled-components";

import Block from "components/shared/Block";
import Text from "components/shared/Text";

// import Background from "./images/burger.jpg";
// import Background from "./images/flower.jpg";
// import Background from "./images/eye.jpg";
import Background from "./images/eyedark.jpg";

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
		background-color: black;
        background-image: url(${Background});
        background-position: 50% center;
        background-repeat: no-repeat;
        background-size: cover;

        > div {
			background-image: radial-gradient(circle, ${p => p.theme.palette.volcano1}, transparent 95%, ${p => p.theme.palette.gray9});
			height: 100vh;
			box-shadow: 0 0 8px 0 black;
        }

        text-align: center;
	}
`;

export const Screen = styled.div`
	height: 100%;

	@media print {
		display: none;
	}
`;

export const FancyLink = styled.a`
	transition: all ease-in-out 100ms;
	display: block;
	padding: 0.5rem 1rem;
	margin: 1rem;
	font-weight: bold;
	font-variant: small-caps;
	letter-spacing: 2px;
	background-image: linear-gradient(-100deg, transparent, ${p => p.theme.palette.tertiary} 55%, ${p => p.theme.palette.tertiaryComplement} 85%, transparent);
	text-decoration: none;
	color: ${p => p.theme.palette.gray9};

	&:hover {
		color: ${p => p.theme.palette.blue9};
		text-decoration: underline;
		padding-left: 1.5rem;
		padding-right: 0.5rem;
	}
`;

export const Print = styled.div`
	@media screen {
		display: none;
	}
`;

export default class Header extends Component {
	render() {
		return (
			<Container>
				<div>
					<Screen>
						<Block flex maxWidth="9in" mh="auto" alignItems="center" justifyContent='center' fluidHeight>
							<Block flex flexDirection="column" alignItems="center" fluidWidth>
								<Text bold header size="7rem">
									Xenia Tay
								</Text>
								<Block mv={1} textAlign="left" maxWidth="600px">
									<Text lineHeight={2} size="xl">
										{EXPERIENCE}
										{CULTURE}
										{PRODUCT}
									</Text>
								</Block>
							</Block>
							<Block flex flexDirection="column" textAlign="left">
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
					</Screen>
					<Print>
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
					</Print>
				</div>
			</Container>
		);
	}
}
