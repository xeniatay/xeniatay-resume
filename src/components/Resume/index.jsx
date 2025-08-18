import React, { Component } from "react";
import styled from "styled-components";

import Block, { setRspv } from "components/shared/Block";
import Text from "components/shared/Text";

export const Container = styled.div`
	position: relative;

	@media screen {
		max-width: 9.3in;
		zoom: 0.9;
		background-color: ${p => p.theme.palette.gray1};
		${setRspv({ value: { xs: "0.5rem", md: "1rem", lg: "3rem" }, style: "padding" })}
		${setRspv({ value: { md: "0.5rem auto", lg: "1rem auto 3rem auto" }, style: "margin" })}
		${p =>
		setRspv({
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
  font-weight: bold;
	${setRspv({ value: { xs: "none", md: "block", print: "block" }, style: "display" })}
`;

export const Date = styled.span`
	font-weight: bold;
	${p =>
		setRspv({
			value: {
				xs: p.theme.typography.fontSizeSm,
				print: p.theme.typography.fontSizeXl
			},
			style: "font-size"
		})}
	text-align: right;
	${setRspv({ value: { xs: "inline", md: "block", print: "block" }, style: "display" })}

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
	}
`;

export const Location = styled.span`
	${p =>
		setRspv({
			value: {
				xs: p.theme.typography.fontSizeSm,
				print: p.theme.typography.fontSizeXl
			},
			style: "font-size"
		})}
	text-align: right;
	${setRspv({ value: { xs: "unset", md: "block", print: "block" }, style: "display" })}

	&:before {
		${setRspv({ value: { xs: "',  '", md: "unset", print: "unset" }, style: "content" })}
	}
`;

export const Tools = styled.span`
	display: block;
	${p =>
		setRspv({
			value: {
				xs: p.theme.typography.fontSizeSm,
				print: p.theme.typography.fontSizeXl
			},
			style: "font-size"
		})}
	text-align: right;
	${setRspv({ value: { md: "1.8", print: "1.8" }, style: "line-height" })}
	${setRspv({
			value: { md: "0.5rem", print: "0.5rem" },
			style: "margin-top"
		})}
	${setRspv({ value: { xs: "none", md: "block", print: "block" }, style: "display" })}

	&:before {
		${setRspv({
			value: { xs: "', Tools: '", md: "unset", print: "unset" },
			style: "content"
		})}
	}

	> br {
		${setRspv({
			value: { xs: "''", md: "unset", print: "unset" },
			style: "content"
		})}

		&:after {
			${setRspv({
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
	${setRspv({
	value: { xs: "wrap", md: "unset", print: "unset" },
	style: "flex-wrap"
})}
`;

export const CompanyDetails = styled.div`
	flex-basis: 20%;
	flex-grow: 1;
	${setRspv({ value: { md: "1rem", print: "1rem" }, style: "padding-left" })}
	${setRspv({ value: { md: "0.5rem", print: "1rem" }, style: "margin-left" })}
	${setRspv({ value: { xs: "100%", md: "unset", print: "unset" }, style: "min-width" })}
	${setRspv({ value: { xs: "0.5rem", md: "0", print: "0" }, style: "margin-bottom" })}
`;

export const BulletPoints = styled.div`
	flex-basis: 100%;
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
					<Position>Senior Software Engineer</Position>
					<CompanyName>Google</CompanyName>
					<CompanySummary>
						Core Infrastructure - making it dramatically easier for Google devs to triage and analyze test results.
					</CompanySummary>
					<CompanyContent>
						<CompanyDetails>
							<Date>2020-2025</Date>
							<Location>New York</Location>
							<Tools>
								Angular JS
								<br/>
								RxJS
								<br />
								SCSS
								<br />
								Material Design
							</Tools>
						</CompanyDetails>
						<BulletPoints>
							<BulletPoint>
								Launched a Continuous Integration (CI) troubleshooting tool loaded 1.3M times by 110k devices. Managed end-to-end launch process, took on backend responsibilities, created self-service onboarding documentation.
							</BulletPoint>
							<BulletPoint>
								Created from scratch a CI dashboard that got 160k hits and received 90%+ user satisfaction. Executed entire product lifecycle - product requirements, design, implementation, launch, post-launch landing metrics.
							</BulletPoint>
							<BulletPoint>
								Designed a critical UI for <a href="https://cloud.google.com/blog/products/compute/introducing-googles-new-arm-based-cpu" target="_blank">Google Axion</a>, Google's first Arm-based CPU effort. Collaborated with 5+ stakeholder teams, created mocks in Figma and single-handedly implemented frontend solution.
							</BulletPoint>
							<BulletPoint>
								As frontend lead, managed two MIT interns and mentored a total of eight junior engineers over five years. Proactively identified and consolidated all anecdotal knowledge into formal documentation.
							</BulletPoint>
						</BulletPoints>
					</CompanyContent>
				</Company>

				<Company>
					<Position>Founding Engineer</Position>
					<CompanyName>Agora Systems</CompanyName>
					<CompanySummary>
						Materials and supply chain procurement software for the construction industry, 275M valuation, 20M revenue.
					</CompanySummary>
					<CompanyContent>
						<CompanyDetails>
							<Date>2019</Date>
							<Location>San Francisco</Location>
							<Tools>
								NextJS
								<br />
								styled-components
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

				{/* <PageBreak /> */}
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
							<Location>San Francisco</Location>
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
								(ephemeral content), launched a complex cross-platform
								feature across three user types (creator/patron/follower), zero
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
									href="https://gigabody.com/2019/09/25/how-patreon-levels-engineers/"
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
				<Block mv={2}>
					<Text bold>
						Bachelor of Computer Science (Honours) and Fine Arts Studio Minor
					</Text>
					<Block>University of Waterloo, 2015 </Block>
					<Block maxWidth="600px">
						Interned at startups like Bandpage, Wanderable, Indochino, BazaarVoice,
						and WatrHub during the Waterloo co-op program.
					</Block>
				</Block>
			</Container>
		);
	}
}
