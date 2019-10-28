import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import theme from "theme";

import Block from "components/shared/Block";
import Text from "components/shared/Text";
import Resume from "components/Resume";
import Feedback from "components/Feedback";

const EMAIL = "tay.xenia@gmail.com";
const GITHUB = "github.com/xeniatay";
const WEBSITE = "xeniatay.com";

export const Body = styled.div`
	background-color: ${p => p.theme.palette.gray1};
	line-height: 1.5;
	margin: 0 auto;

	@media screen {
		padding: 10mm;
	}
`;

export const Header = styled.div`
	margin: 0 auto;

	@media screen {
		max-width: 8in;
	}
`;

export const Contact = styled.a`
	display: block;
	float: right;
	margin-right: 1rem;
`;

export default class Base extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Text>
					<Body>
						<Header>
							<Block flex alignItems="center" justifyContent="space-between">
								<Text size="xxl">Xenia Tay</Text>
								<Block>
									<Contact href={`mailto:${EMAIL}`} target="_blank">
										{EMAIL}
									</Contact>
									<Contact href={`http://${GITHUB}`} target="_blank">
										{GITHUB}
									</Contact>
									<Contact href={`http://${WEBSITE}`} target="_blank">
										{WEBSITE}
									</Contact>
								</Block>
							</Block>
							<Block mv={1}>
								5+ years of frontend product development. I enjoy building consumer products that relieve user pain and industrial inefficiencies. I value companies with kind, empathetic and diverse cultures.
								{/* (see Glitch for inspo). */}
							</Block>
						</Header>

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
