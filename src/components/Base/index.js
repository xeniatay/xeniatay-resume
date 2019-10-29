import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import theme from "theme";

import Block from "components/shared/Block";
import Text from "components/shared/Text";
import Header from "components/Header";
import Resume from "components/Resume";
import Feedback from "components/Feedback";

const EMAIL = "tay.xenia@gmail.com";
const GITHUB = "github.com/xeniatay";
const WEBSITE = "xeniatay.com";

export const Body = styled.div`
	line-height: 1.5;
	margin: 0 auto;

	@media screen {
		background-color: #ffffff;
		background-image: url("https://www.transparenttextures.com/patterns/beige-paper.png");
		background-image: url("https://www.transparenttextures.com/patterns/cardboard.png");
		background-image: url("https://www.transparenttextures.com/patterns/brick-wall.png");
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
					<Body>
						<Header />
						<Block flex flexWrap="wrap-reverse" justifyContent="center">
							<Resume />
							<Feedback />
						</Block>
					</Body>
				</Text>
			</ThemeProvider>
		);
	}
}
