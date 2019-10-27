import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from 'theme';

import Block from 'components/shared/Block';
import Text from 'components/shared/Text';

const EMAIL = 'tay.xenia@gmail.com';
const GITHUB = 'github.com/xeniatay';
const WEBSITE = 'xeniatay.com';

export const Body = styled.div`
	width: 800px;
	margin: 2rem auto;
	line-height: 1.5;
`;

export const Contact = styled.a`
	display: block;
	float: right;
	margin-right: 1rem;
`;

export const Company = styled.div`
	display: inline-block;
	margin-right: 0.3rem;
	font-weight: bold;
	margin-top: 1rem;

	&:after {
		content: ',';
		font-weight: normal;
	}
`;

export const CompanySummary = styled.span``;

export const Date = styled.span`
	font-size: 0.9rem;
	display: block;
`;

export const Position = styled.span`
	font-weight: bold;

	&:after {
		content: ' at ';
		font-weight: normal;
	}
`;

export const Location = styled.span`
	font-size: 0.9rem;
	display: block;
`;

export const Tools = styled.span`
	margin-top: 0.5rem;
	font-size: 0.9rem;
	display: block;

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
	width: 25%;
	padding-left: 1.5rem;
	/* text-align: right; */
`;

export const BulletPoints = styled.div`
	width: 75%;
`;

export const BulletPoint = styled.div`
	display: list-item;
	text-indent: 1.2rem;
	list-style-type: square;
	line-height: 1.4;
	margin-bottom: 0.4rem;
`;

export default class Resume extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Body>
					<Text>
						<Block
							flex
							alignItems='center'
							justifyContent='space-between'
						>
							<Text size='xxl'>Xenia Tay</Text>
							<Block>
								<Contact
									href={`mailto:${EMAIL}`}
									target='_blank'
								>
									{EMAIL}
								</Contact>
								<Contact
									href={`http://${GITHUB}`}
									target='_blank'
								>
									{GITHUB}
								</Contact>
								<Contact
									href={`http://${WEBSITE}`}
									target='_blank'
								>
									{WEBSITE}
								</Contact>
							</Block>
						</Block>
						<Block mv={1}>
							5+ years of frontend product development. I am
							motivated by user pain and inefficiencies. I am
							looking for opportunities in healthcare, edtech, or
							social good. I value companies that have kind,
							emphathetic cultures.
							{/* (see Glitch for inspo). */}
						</Block>
						<Position>Founding Engineer</Position>
						<Company>Agora Systems</Company>
						<CompanySummary>
							materials and supply chain management software for
							construction.
						</CompanySummary>
						<CompanyContent>
							<CompanyDetails>
								<Date>Dec 2018 - Aug 2019</Date>
								<Location>San Francisco</Location>
								<Tools>
									ReactJS, NextJS, ES6
									<br />
									Ant Design, styled-components
									<br />
									Apollo, GraphQL
								</Tools>
							</CompanyDetails>
							<BulletPoints>
								<BulletPoint>
									Owned all of the frontend, architected from
									scratch.
								</BulletPoint>
								<BulletPoint>
									Synthesized over 20 hours of user interview
									data with Product & Design, iterating
									through 3 versions of fully implemented,
									then dismantled, prototypes.
								</BulletPoint>
								<BulletPoint>
									Led recruiting for Founding Designer role in
									all areas: requirements, sourcing,
									screening, and crafting interview process.
								</BulletPoint>
							</BulletPoints>
						</CompanyContent>
						<Position>
							<a
								href='https://levels.patreon.com'
								target='_blank'
							>
								Senior Frontend Engineer
							</a>
						</Position>
						<Company>Patreon</Company>
						<CompanySummary>
							where creatives connect with and earn money directly
							from their fans.
						</CompanySummary>
						<CompanyContent>
							<CompanyDetails>
								<Date>Apr 2017 - Dec 2018</Date>
								<Location>San Francisco</Location>
								<Tools>
									ReactJS, ES6, Redux (
									<a
										href='https://github.com/Patreon/nion'
										target='_blank'
									>
										NION
									</a>
									)
									<br />
									styled-components
									<br />
									Flask, Python, JSON API
								</Tools>
							</CompanyDetails>
							<BulletPoints>
								<BulletPoint>
									Rearchitected email infrastructure so that
									templates are built in React, then compiled
									to email-safe HTML and deployed via
									CircleCI. 200+ hosted email templates were
									standardized to 50, and finally version
									controlled.
									<br />
									<em>
										This impacts 30+ million emails monthly,
										and paved the way for an email provider
										upgrade that saved ~$22,000/month and
										drastically improved sending
										reliability.
									</em>
								</BulletPoint>
								<BulletPoint>
									Greatly reduced email-related unease and
									incidents by creating detailed documentation
									for the above work, accompanied by an
									internal test tool to preview and send
									emails safely using live data.
								</BulletPoint>
								<BulletPoint>
									Sole web engineer on{' '}
									<a href='https://techcrunch.com/2018/02/06/patreon-lens/'>
										Lens
									</a>{' '}
									(ephemeral content), allowing the feature to
									become Patreon's first cross-platform
									(mobile x web) launch.
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
								<BulletPoint>
									Owner of pair programming interview question
									asked to all engineering candidates.
									Authored training docs, iterated on a
									framework agnostic code skeleton based on
									candidate feedback, and conducted 30+ hours
									of interviews.
								</BulletPoint>
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
								<BulletPoint>
									Piloted a Waterloo intern (co-op) program,
									coordinated hiring and mentorship of two
									interns, both of whom accepted full-time
									return offers after graduation.
								</BulletPoint>
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
						<Position>Frontend Engineer</Position>
						<Company>Zenreach</Company>
						<CompanySummary>
							a Wifi platform that enables digital marketing to
							brick-and-mortar customers.
						</CompanySummary>
						<CompanyContent>
							<CompanyDetails>
								<Date>Dec 2015 - Dec 2016</Date>
								<Location>San Francisco</Location>
								<Tools>
									ReactJS, Express, Webpack, Babel, ES6
									<br />
									Django, Python
								</Tools>
							</CompanyDetails>
							<BulletPoints>
								<BulletPoint>
									Owned Web Widgets, a tool that creates
									white-label embedded mailing list forms.
									Customers’ most requested feature for two
									years, delivered in two months.
								</BulletPoint>
								<BulletPoint>
									Built two WYSIWYG platforms: email composer
									and Wifi portal customizer, with features
									like drag-and-drop, undo/redo, and custom
									templates across all devices.
								</BulletPoint>
								{/* Portal Customizer */}
							</BulletPoints>
						</CompanyContent>

						<Company>BandPage</Company>
						<CompanySummary>
							a centralized platform for musicians to engage and
							sell to fans across distributed music services.
						</CompanySummary>
						<CompanyContent>
							<CompanyDetails>
								<Position>Frontend Intern </Position>
								<Date>Sept - Dec 2014</Date>
								<Location>San Francisco, California</Location>
								<Tools>Node, Backbone, Mustache, Stylus</Tools>
							</CompanyDetails>
							<BulletPoints>
								<BulletPoint>
									Led frontend for an email campaign that
									offered users exclusive VIP deals from their
									favourite musicians, based on user’s music
									streaming data
								</BulletPoint>
								<BulletPoint>
									Resolved all bugs from the entire backlog in
									one month, completely blowing the team out
									of the water and carving out unprecedented
									bandwidth for new features
								</BulletPoint>
							</BulletPoints>
						</CompanyContent>
						<Company>Wanderable</Company>
						<CompanySummary>
							an online platform that enables couples to fund and
							arrange honeymoon trips.
						</CompanySummary>
						<CompanyContent>
							<CompanyDetails>
								<Position>Software Intern</Position>
								<Date>Jan - Apr 2014</Date>
								<Location>Redwood City, California</Location>
								<Tools>
									Adobe CS6 Suite, Ruby on Rails, PostgreSQL,
									LESS
								</Tools>
							</CompanyDetails>
							<BulletPoints>
								<BulletPoint>
									Led and launched responsive site redesign,
									increased mobile signup by 80%
								</BulletPoint>
								<BulletPoint>
									Improved site load time by 35%+ through
									asset precompilation and caching
								</BulletPoint>
								<BulletPoint>
									Created Merchant self-service tool to
									optimize international partnerships,
									resulting in increased product margin
								</BulletPoint>
							</BulletPoints>
						</CompanyContent>
						<Block mv={2}>
							<Text bold>
								Bachelor of Computer Science (Honours) and Fine
								Arts Studio Minor
							</Text>
							<Block>University of Waterloo, 2015 </Block>
						</Block>
						{/* <Block>
							Canadian University Software Engineering Conference
							(CUSEC){' '}
						</Block>
						<Block>Aug 2013 - Jan 2015 </Block>
						<Block>
							• Director of Sponsorship for CUSEC 2015, secured
							sponsorship from 15 companies including Google,
							Amazon, Yelp, Khan Academy, Mandrill, Shopify,
							Genetec, Morgan Stanley, and Microsoft.{' '}
						</Block>
						<Block>
							• Built 2014.cusec.net and pioneered a resume upload
							tool, allowing candidates to submit resumes prior to
							the conference to 18 sponsor companies.
						</Block> */}
						<Block display='none'>
							<Block>
								Execution and productivity: producing high
								quality work (in the context of time
								constraints)
							</Block>
							<Block>
								Ownership: taking the lead and showing ownership
								of issues.
							</Block>
							<Block>
								Approachable: being easy to approach and talk to
							</Block>
							<Block>
								Team player: willing to help with things that
								may be outside of my role
							</Block>
							<Block>Documentation</Block>
							<Block>Execution</Block>
							<Block mv={1}>
								Past co-workers have agreed that I excel in:
							</Block>
							<Block flex>
								<Block>
									<Block mv={1}>Overall</Block>
									<Block mv={1}>
										Xenia is professional beyond her years,
										technically and intuitively smart, an
										efficient and effective communicator,
										and fun to work with. I've never been
										prouder of our product, thanks not just
										to her improvement suggestions and
										fixes, but her capacity to deliver
										quick, intelligent feedback, and set
										proper expectations. We were very lucky
										to have her, and I would love to hire
										her for real. - Director of Design
									</Block>
									<Block mv={1}>
										Xenia is the definition of an
										independent worker - she always owns
										issues no matter how challenging or
										frustrating, and is pretty much a
										guarantee to get it done. She's
										consistently delivered both excellent
										engineering work and thorough and
										thoughtful documentation /
										communication.
									</Block>
									<Block mv={1}>
										She constantly demonstrates an ability
										to remain steadfast in her judgment and
										ability to deliver great work when
										there’s chaos around her. All these
										qualities are remarkably encouraging,
										especially when you consider how early
										in her career she is. When things would
										go wrong, she would course correct and
										get on the right track before I could
										even get involved and provide feedback
										or guidance. The quality of being
										“adaptable” to situations comes to mind
										as another key strength of Xenia's.
									</Block>
									<Block mv={1}>
										Xenia embodies “seek learning” really
										well. She gets up to speed on new areas
										quickly, she’s constantly inquiring
										about things, and asks hard, poignant
										questions. These further feed back into
										her ability to have great judgment.
										Xenia is fun and joyful, enjoyable to be
										around, and is able to deliver excellent
										work with an easeful attitude. I have
										learned a lot from watching her operate.
									</Block>
								</Block>
								<Block>
									<Block mv={1}>Documentation</Block>
									<Block mv={1}>
										Xenia created some of the best QA
										documentation I've seen at Patreon. It
										was incredibly thorough and made testing
										Lens Web easy even though there were 50+
										states that we tested across user state
										/ browser / device / user type
										(creator/patron/follower) etc.
									</Block>
									<Block mv={1}>
										The artifacts of your actual work, such
										as documentation and presentations, show
										an immense amount of care. You clearly
										invest energy into these aspects of the
										job, and they reflect really well on
										your ability."
									</Block>
								</Block>
								<Block>
									<Block mv={1}>
										Product Thinking & User Experience
									</Block>
									<Block mv={1}>
										I really love working with you and
										appreciate your practical approach to
										design and development. You really
										advocate for creators and care a lot
										about design and user experience in the
										product. In particular, I really value
										all the comments and feedback on my
										design work from you, especially your
										comments in my Figma files. Please keep
										doing more of that! You always surface
										issues I didn't consider, call out
										things that are confusing to you, and
										are very up front on what is
										possible/not possible to build and
										suggest alternatives. - Designer
									</Block>
								</Block>
								<Block>
									<Block mv={1}>Mentorship</Block>
									<Block mv={1}>
										Xenia is an extremely detail oriented
										engineer, and a very good teacher. She
										onboarded me at Patreon, and onto the
										massive [team's] frontend codebase. She
										has taught me really great debugging
										techniques, she writes amazing tests,
										and is generally an excellent technical
										leader. She communicates very clearly,
										and is always approachable and willing
										to help, even during a time crunch.
									</Block>
									<Block mv={1}>
										Xenia is amazing, and I feel so lucky to
										have her on my team.
									</Block>
									<Block mv={1}>
										- Xenia is a great communicator. She
										explains things in a honest, concise,
										and easy to understand way. I always go
										to Xenia first when I have questions
										about a project.
									</Block>
									<Block mv={1}>
										- She is reliable. If you ask her to do
										something, she will do it. You never
										need to follow up!
									</Block>
								</Block>
								<Block>
									<Block mv={1}>
										Execution and Productivity
									</Block>
									<Block mv={1}>
										- Even when we are in crunch time, Xenia
										produces high quality work. This has
										been so clear over the past two quarters
										with the work we have been doing on Make
										a Post and Posts on Tiers. That section
										of the codebase was very difficult to
										work with, but Xenia led the way and
										made a plan on how to tackle the
										problem. I attribute the success of both
										of these projects to her!
									</Block>
									<Block mv={1}>
										Your code delivery is strong. You are
										conscientious of your time constraints
										more than many of your peers, and you
										commit to getting high quality work
										delivered within these constraints
										without cutting corners.
									</Block>
									<Block mv={1}>
										[The] final deliverable was superb. Our
										usage on Lens Web is equal to that of
										Android and iOS, but I haven’t seen a
										single bug report roll in. Kudos! For
										important, high-stakes projects at
										Patreon, Xenia is one of the first
										people I would look to staffing." -
										Manager on Lens team
									</Block>
								</Block>
								<Block>
									<Block mv={1}>Communication</Block>
									<Block mv={1}>
										While Lens Web didn't have immediate
										dependencies with most of the other
										mobile engineers on the team, Xenia
										still excelled at informing and
										communicating her current status of the
										lens web project into digestible and
										understandable chunks. I always felt
										informed about what was currently
										happening, what she was blocked on, and
										what was coming up next, even though the
										feature itself was extremely complicated
										and I don't know a whole lot about web.
									</Block>
								</Block>
							</Block>
						</Block>
					</Text>
				</Body>
			</ThemeProvider>
		);
	}
}
