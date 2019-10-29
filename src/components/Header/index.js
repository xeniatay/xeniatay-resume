import React, { Component } from "react";
import styled from "styled-components";

import Block from "components/shared/Block";
import Text from "components/shared/Text";

const EMAIL = "tay.xenia@gmail.com";
const GITHUB = "github.com/xeniatay";
const WEBSITE = "xeniatay.com";

export const Container = styled.div`
	margin: 0 auto;

	@media screen {
        /* max-width: 9in; */
        /* border: 0.5rem solid ${p => p.theme.palette.primaryComplement}; */
		color: ${p => p.theme.palette.gray4};
        background-color: ${p => p.theme.palette.gray9};
        padding: 4rem;
        margin: -3rem -3rem 0;
        text-align: center;


		a {
            /* color: ${p => p.theme.palette.gray4}; */
			/* color: ${p => p.theme.palette.tertiaryComplement}; */
		}
	}
`;

export const Contacts = styled.div`
	float: right;

	@media screen {
		/* display: none; */
	}
`;

export const Contact = styled.a`
	display: block;
	float: right;
	margin-right: 1rem;
`;

export default class Header extends Component {
	render() {
		return (
			<Container>
				<Block flex alignItems="center" fluidWidth>
					<Text size="xxl" bold>
						Xenia Tay
					</Text>
					<Contacts>
						<Contact href={`mailto:${EMAIL}`} target="_blank">
							{EMAIL}
						</Contact>
						<Contact href={`http://${GITHUB}`} target="_blank">
							{GITHUB}
						</Contact>
						<Contact href={`http://${WEBSITE}`} target="_blank">
							{WEBSITE}
						</Contact>
					</Contacts>
				</Block>
				<Block mv={1}>
					5+ years of frontend product development. I value companies with kind, empathetic, and diverse cultures. <br />I enjoy building consumer products that relieve user pain and industrial inefficiencies.
					{/* (see Glitch for inspo). */}
				</Block>
			</Container>
		);
	}
}
