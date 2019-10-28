import React, { Component } from "react";
import styled from "styled-components";

import Block from "components/shared/Block";
import Text from "components/shared/Text";

export const Container = styled.div`
	max-width: 8in;
`;

export const Company = styled.div`
	margin-bottom: 1rem;
`;

export const CompanyName = styled.span`
	margin-right: 0.3rem;
	font-weight: bold;

	/* &:after {
		content: ',';
		font-weight: normal;
	} */
`;

export const CompanySummary = styled.span`
	display: block;
`;

export const Date = styled.span`
	font-weight: bold;
	font-size: 0.9rem;
	display: block;
`;

export const Position = styled.span`
	font-weight: bold;

	&:after {
		content: " at ";
		font-weight: normal;
	}
`;

export const Location = styled.span`
	font-size: 0.9rem;
	display: none;
`;

export const Tools = styled.span`
	margin-top: 0.5rem;
	font-size: 0.9rem;
	display: block;
	line-height: 1.8;

	&:before {
		/* content: 'Tools: '; */
	}
`;

export const CompanyContent = styled.div`
	margin-top: 0.5rem;
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
`;

export const CompanyDetails = styled.div`
	width: 20%;
	padding-left: 1.5rem;
	/* text-align: right; */
`;

export const BulletPoints = styled.div`
	width: 80%;
`;

export const BulletPoint = styled.div`
	&:before {
		content: "‣ ";
	}

	/* display: list-item;
	text-indent: 1.2rem;
	list-style-type: square; */
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
			<Container>
				<Company>
					<Position>Founding Engineer</Position>
					<CompanyName>Agora Systems</CompanyName>
					<CompanySummary>Materials and supply chain management software for the construction industry.</CompanySummary>
					<CompanyContent>
						<CompanyDetails>
							<Date>2019</Date>
							<Location>San Francisco</Location>
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
							<BulletPoint>Owned all of the frontend, architected from scratch. Heavily involved in product strategy, user experience & research, design mentorship, and recruiting.</BulletPoint>
							<BulletPoint>Synthesized over 20 hours of user research with Product & Design, iterating through 3 prototypes over 4 months to lock down product/market fit through user testing.</BulletPoint>
							<BulletPoint>Led recruiting for Founding Designer role in all areas: requirements, sourcing, screening, and crafting interview process.</BulletPoint>
						</BulletPoints>
					</CompanyContent>
				</Company>

				<Company>
					<Position>
						<a href="https://levels.patreon.com" target="_blank">
							Senior Frontend Engineer
						</a>
					</Position>
					<CompanyName>Patreon</CompanyName>
					<CompanySummary>A platform where creatives connect with and earn money directly from their fans.</CompanySummary>
					<CompanyContent>
						<CompanyDetails>
							<Date>2017 - 2018</Date>
							<Location>San Francisco</Location>
							<Tools>
								ReactJS, ES6
								<br />
								Redux (
								<a href="https://github.com/Patreon/nion" target="_blank">
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
								Rearchitected email infrastructure, so that 200+ HTML email templates were standardized to 50 React templates, version controlled, and deployed via CircleCI.
								<br />
								<em>Impacts 30+ million emails monthly, and paved the way for an email provider upgrade that saved ~$22,000/month and drastically improved sending reliability.</em>
							</BulletPoint>
							<BulletPoint>Greatly reduced email-related unease and incidents by creating detailed documentation and a tool to preview and send emails safely using live data.</BulletPoint>
							<BulletPoint>
								Sole web engineer on <a href="https://techcrunch.com/2018/02/06/patreon-lens/">Lens</a> (ephemeral content), launching Patreon's first cross-platform (mobile/web) feature across three user types (creator/patron/follower) with zero bugs reported post-launch.
							</BulletPoint>
							{/* <BulletPoint>
									The Lens web feature was incredibly complex
									and the requirements continued to change
									basically through to the end. Xenia's
									organizational skills in keeping track of
									all of the use cases and requirements and
									test cases were nothing short of amazing.
									When I went to one of the Lens web QAs,
									Xenia had everything ready to go and
									provided detailed instructions to each of
									the testers to test everything. I don't
									think it's an easy task to have all of that
									as nailed down as Xenia did, and she did it
									all with grace and ease.
								</BulletPoint> */}
							<BulletPoint>Owner of pair programming interview question asked to all engineering candidates. Authored training docs, iterated on a framework agnostic code skeleton based on candidate feedback, and conducted 30+ hours of interviews.</BulletPoint>
							{/* <BulletPoint>Make a post redesign</BulletPoint>
								<BulletPoint>
									On average, this feature was used by 60% of
									active $100+ creators, weekly. This feature
									is the main channel used by creators to
									communicate with their patrons. One of the
									hardest features across Patreon to maintain,
									contained 2 years worth of tech debt and
									haphazard code additions.
								</BulletPoint>
								<BulletPoint>
									> insert snippets from Slack
								</BulletPoint>
								<BulletPoint>Post on tiers</BulletPoint>
								<BulletPoint>
									> insert snippet from Slack screenshot
								</BulletPoint>
							*/}
							<BulletPoint>Piloted a Waterloo intern (co-op) program, coordinated hiring and mentorship of two interns, both of whom accepted full-time return offers after graduation.</BulletPoint>
							{/* <BulletPoint>
									Xenia's execution of getting this done
									should be applauded. Her idea of doing a
									pilot [internship program] shows that she
									understood the risk and hesitance that we've
									had as an engineering org towards interns in
									the past. She convinced key people that
									having one intern for the summer is low-risk
									and took on the task of leading this
									project, and not only am I so glad that she
									did (because we have 2!! interns now!) but
									it really shows how strategically she was
									thinking through all this to instill
									positive change within engineering.
								</BulletPoint> */}
							{/* levels.patreon.com */}
						</BulletPoints>
					</CompanyContent>
				</Company>

				<PageBreak />
				<Company>
					<Position>Frontend Engineer</Position>
					<CompanyName>Zenreach</CompanyName>
					<CompanySummary>A Wifi platform that enables digital marketing to brick-and-mortar customers.</CompanySummary>
					<CompanyContent>
						<CompanyDetails>
							<Date>2016</Date>
							<Location>San Francisco</Location>
							<Tools>
								ReactJS, ExpressJS
								<br />
								Webpack, Babel, ES6
								<br />
								Django, Python
							</Tools>
						</CompanyDetails>
						<BulletPoints>
							<BulletPoint>Owned Web Widgets, a tool that creates white-label embedded mailing list forms. Customers’ most requested feature for two years, delivered in two months.</BulletPoint>
							<BulletPoint>Built two WYSIWYG platforms: email composer and Wifi portal customizer, with features like drag-and-drop, undo/redo, and custom templates supporting an immense variety of devices and email clients.</BulletPoint>
						</BulletPoints>
					</CompanyContent>
				</Company>

				<Block mv={2}>
					<Text bold>Bachelor of Computer Science (Honours) and Fine Arts Studio Minor</Text>
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
