import React, { Component } from "react";
import styled from "styled-components";

import Block, { getResponsiveValues } from "components/shared/Block";
import Text from "components/shared/Text";

export const Container = styled.div`
	position: relative;

	@media screen {
		max-width: 9in;
		zoom: 0.9;
		background-color: ${p => p.theme.palette.gray1};
		${getResponsiveValues({ value: { xs: "0.5rem", md: "1rem", lg: "3rem" }, style: "padding" })}
		${getResponsiveValues({ value: { md: "0.5rem auto", lg: "1rem auto 3rem auto" }, style: "margin" })}
		${p =>
			getResponsiveValues({
				value: { lg: `0 0 8px 0px ${p.theme.palette.gray5}` },
				style: "box-shadow"
			})}
	}
`;

export const Company = styled.div`
	margin-bottom: 1rem;

	@media screen {
		margin-bottom: 2rem;
	}
`;

export const CompanyName = styled.span`
	margin-right: 0.3rem;
	font-weight: bold;
`;

export const CompanySummary = styled.span`
	${getResponsiveValues({ value: { xs: "none", md: "block", print: "block" }, style: "display" })}
`;

export const Date = styled.span`
	font-weight: bold;
	font-size: 0.9rem;
	display: block;

	@media screen {
		color: ${p => p.theme.palette.secondary};
	}
`;

export const Position = styled.span`
	font-weight: bold;

	@media screen {
		color: ${p => p.theme.palette.secondary};
	}

	&:after {
		content: " at ";
		color: black;
		font-weight: normal;
	}
`;

export const Location = styled.span`
	font-size: 0.9rem;
`;

export const Tools = styled.span`
	display: block;
	font-size: 0.9rem;
	${getResponsiveValues({ value: { md: "1.8", print: "1.8" }, style: "line-height" })}
	${getResponsiveValues({
		value: { md: "0.5rem", print: "0.5rem" },
		style: "margin-top"
	})}
	
	&:before {
		${getResponsiveValues({
			value: { xs: "', Tools: '", md: "unset", print: "unset" },
			style: "content"
		})}
	}

	> br {
		${getResponsiveValues({
			value: { xs: "''", md: "unset", print: "unset" },
			style: "content"
		})}

		&:after {
			${getResponsiveValues({
				value: { xs: "', '", md: "unset", print: "unset" },
				style: "content"
			})}
		}
	}
`;

export const CompanyContent = styled.div`
	margin-top: 0.5rem;
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	${getResponsiveValues({
		value: { xs: "wrap", md: "unset", print: "unset" },
		style: "flex-wrap"
	})}
`;

export const CompanyDetails = styled.div`
	flex-basis: 20%;
	flex-grow: 1;
	${getResponsiveValues({ value: { md: "1rem", print: "1rem" }, style: "padding-left" })}
	${getResponsiveValues({ value: { md: "0.5rem", print: "1rem" }, style: "margin-left" })}
	${getResponsiveValues({ value: { xs: "100%", md: "unset", print: "unset" }, style: "min-width" })}
	${getResponsiveValues({ value: { xs: "0.5rem", md: "0", print: "0" }, style: "margin-bottom" })}

	> span {
		${getResponsiveValues({ value: { xs: "inline", md: "block", print: "block" }, style: "display" })}
	}
`;

export const BulletPoints = styled.div`
	flex-basis: 80%;
	flex-grow: 1;
`;

export const BulletPoint = styled.div`
	&:before {
		content: "‣ ";
	}

	line-height: 1.4;
	margin-bottom: 0.7rem;
`;

export const PageBreak = styled.div`
	@media print {
		height: 0;
		page-break-before: always;
		margin: 0;
		border-top: none;
	}
`;

export default class Resume extends Component {
	render() {
		return (
			<Container id="resume">
				<Company>
					<Position>Founding Engineer</Position>
					<CompanyName>Agora Systems</CompanyName>
					<CompanySummary>
						Materials and supply chain management software for the construction
						industry.
					</CompanySummary>
					<CompanyContent>
						<CompanyDetails>
							<Date>2019</Date>
							{/* <Location>San Francisco</Location> */}
							<Tools>
								NextJS, ES6
								<br />
								styled-components
								<br />
								Ant Design System
								<br />
								Apollo, GraphQL
							</Tools>
						</CompanyDetails>
						<BulletPoints>
							<BulletPoint>
								Owned all of the frontend, architected from scratch. Heavily
								involved in product strategy, user experience & research, design
								mentorship, and recruiting.
							</BulletPoint>
							<BulletPoint>
								Synthesized over 20 hours of user research with Product & Design,
								iterating through 3 prototypes over 4 months to lock down
								product/market fit through user testing.
							</BulletPoint>
							<BulletPoint>
								Led recruiting for Founding Designer role in all areas:
								requirements, sourcing, screening, and crafting interview process.
							</BulletPoint>
						</BulletPoints>
					</CompanyContent>
				</Company>

				<Company>
					<Position>Senior Frontend Engineer</Position>
					<CompanyName>Patreon</CompanyName>
					<CompanySummary>
						A platform where creatives connect with and earn money directly from their
						fans.
					</CompanySummary>
					<CompanyContent>
						<CompanyDetails>
							<Date>2017 - 2018</Date>
							{/* <Location>San Francisco</Location> */}
							<Tools>
								ReactJS, ES6
								<br />
								Redux (
								<a
									href="https://github.com/Patreon/nion"
									target="_blank"
									rel="noopener noreferrer"
								>
									NION
								</a>
								)
								<br />
								JSON API
								<br />
								styled-components
								<br />
								Flask, Python
							</Tools>
						</CompanyDetails>
						<BulletPoints>
							<BulletPoint>
								Rearchitected email infrastructure, so that 200+ HTML email
								templates were standardized to 50 React templates, version
								controlled, and deployed via CircleCI.
								<br />
								<em>
									Impacts 30+ million emails monthly, and paved the way for an
									email provider upgrade that saved ~$22,000/month and drastically
									improved sending reliability.
								</em>
							</BulletPoint>
							<BulletPoint>
								Greatly reduced email-related unease and incidents by creating
								detailed documentation and a tool to preview and send emails safely
								using live data.
							</BulletPoint>
							<BulletPoint>
								Executed an immense technical cleanup and UI redesign of Make A
								Post, the main channel of communication on Patreon. Methodically
								removed 2 years of tech debt, freeing teams from technical
								constraints that were blocking core product strategy.
							</BulletPoint>
							<BulletPoint>
								Sole web engineer on{" "}
								<a href="https://techcrunch.com/2018/02/06/patreon-lens/">Lens</a>{" "}
								(ephemeral content), launching a complex cross-platform (mobile/web)
								feature across three user types (creator/patron/follower) with zero
								bugs reported post-launch.
							</BulletPoint>
							<BulletPoint>
								Owner of pair programming interview question asked to all
								engineering candidates. Authored training docs, iterated on a
								framework agnostic code skeleton based on candidate feedback, and
								conducted 30+ hours of interviews.
							</BulletPoint>
							<BulletPoint>
								Improved clarity about promotions, accountability of managers, and
								recognition of teammates as one of the authors of{" "}
								<a
									href="http://levels.patreon.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									Patreon's Engineering Levels
								</a>
								.
							</BulletPoint>
							<BulletPoint>
								Piloted a Waterloo intern (co-op) program, coordinated hiring and
								mentorship of two interns, both of whom accepted full-time return
								offers after graduation.
							</BulletPoint>
						</BulletPoints>
					</CompanyContent>
				</Company>
				<PageBreak />
				<Company>
					<Position>Frontend Engineer</Position>
					<CompanyName>Zenreach</CompanyName>
					<CompanySummary>
						A WiFi platform that enables digital marketing to brick-and-mortar
						customers.
					</CompanySummary>
					<CompanyContent>
						<CompanyDetails>
							<Date>2016</Date>
							{/* <Location>San Francisco</Location> */}
							<Tools>
								ReactJS, ExpressJS
								<br />
								Webpack, Babel, ES6
								<br />
								Django, Python
							</Tools>
						</CompanyDetails>
						<BulletPoints>
							<BulletPoint>
								Owned Web Widgets, a tool that creates white-label embedded mailing
								list forms. Customers’ most requested feature for two years,
								delivered in two months.
							</BulletPoint>
							<BulletPoint>
								Built two WYSIWYG platforms: email composer and Wifi portal
								customizer, with features like drag-and-drop, undo/redo, and custom
								templates supporting an immense variety of devices and email
								clients.
							</BulletPoint>
						</BulletPoints>
					</CompanyContent>
				</Company>

				<Block mv={2}>
					<Text bold>
						Bachelor of Computer Science (Honours) and Fine Arts Studio Minor
					</Text>
					<Block>University of Waterloo, 2015 </Block>
					<Block>
						Interned at Bandpage, Wanderable, Indochino, BazaarVoice, <br />
						and WatrHub during the Waterloo co-op program.
					</Block>
				</Block>
				<Block>
					<Text bold>Canadian University Software Engineering Conference (CUSEC)</Text>
					<br />
					Director of Sponsorship (2015), Website & Resume Upload (2014)
				</Block>
			</Container>
		);
	}
}
