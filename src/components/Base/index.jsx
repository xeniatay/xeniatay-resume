import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import theme from "theme";

import Block, { getResponsiveValues } from "components/shared/Block";
import Text from "components/shared/Text";
import Header from "components/Header";
import Resume from "components/Resume";
import Feedback from "components/Feedback";
// import Background from "./images/beige-paper.png";
// import Background from "./images/fabric-of-squares.png";
import Background from "./images/inspiration-geometry.png";

export const Body = styled.div`
	line-height: 1.5;
	margin: 0 auto;

	@media screen {
		background-color: #ffffff;
		background-image: url(${Background});

		${getResponsiveValues({ value: { xs: "0.5rem", lg: "10mm" }, style: "padding" })};

		max-width: 1824px;

		a {
			text-decoration: none;
			color: ${p => p.theme.palette.secondary};

			&:hover {
				text-decoration: underline;
			}
		}
	}
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;

	${getResponsiveValues({ value: { xs: "wrap", lg: "unset" }, style: "flex-wrap" })}
`;

export default class Base extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Text>
					<Header />
					<Body>
						<Wrapper>
							<Block flexShrink={1} mr={{ xs: 0, lg: 1 }}>
								<Resume />
							</Block>
							<Block flexShrink={3}>
								<Feedback />
							</Block>
						</Wrapper>
					</Body>
				</Text>
			</ThemeProvider>
		);
	}
}
