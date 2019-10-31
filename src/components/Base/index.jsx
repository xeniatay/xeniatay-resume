import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import theme from "theme";

import Block from "components/shared/Block";
import Text from "components/shared/Text";
import Header from "components/Header";
import Resume from "components/Resume";
import Feedback from "components/Feedback";
import Background from "./images/beige-paper.png";

export const Body = styled.div`
	line-height: 1.5;
	margin: 0 auto;

	@media screen {
		background-color: #ffffff;
		background-image: url(${Background});
		background-image: url("https://www.transparenttextures.com/patterns/fabric-of-squares.png");
		background-image: url("https://www.transparenttextures.com/patterns/inspiration-geometry.png");

		padding: 10mm;

		a {
			text-decoration: none;
			color: ${p => p.theme.palette.secondary};

			&:hover {
				text-decoration: underline;
			}
		}
	}
`;

export default class Base extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Text>
					<Header />
					<Body>
						<Block flex justifyContent="space-around">
							<Block flexShrink={1} mr={1}>
								<Resume />
							</Block>
							<Block flexShrink={3} flexGrow={1}>
								<Feedback />
							</Block>
						</Block>
					</Body>
				</Text>
			</ThemeProvider>
		);
	}
}
