import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'theme';

import Block from 'components/shared/Block';
import Text from 'components/shared/Text';

const EMAIL = 'tay.xenia@gmail.com';
const GITHUB = 'github.com/xeniatay';
const WEBSITE = 'xeniatay.com';

export default class Resume extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Block m={1}>
					<Text>
						<Text size='xxl'>Xenia Tay</Text>
						<a href={`mailto:${EMAIL}`} target='_blank'>
							{EMAIL}
						</a>
						<a href={GITHUB} target='_blank'>
							{GITHUB}
						</a>
						<a href={WEBSITE} target='_blank'>
							{WEBSITE}
						</a>

						<Block mv={1}>
							I specialize in frontend product development with
							over 5 years of cumulative work experience. I am
							most recently working with Javascript using
							React.js, Next.js, styled-components, Apollo, and
							GraphQL. I am looking for opportunities in
							healthcare, edtech, or social good.
						</Block>

						<Block mv={1}>
							Past co-workers have agreed that I excel in:
						</Block>
						<Block flex>
							<Block>
								<Block mv={1}>Overall</Block>
								<Block mv={1}>
									Xenia is professional beyond her years,
									technically and intuitively smart, an
									efficient and effective communicator, and
									fun to work with. I've never been prouder of
									our product, thanks not just to her
									improvement suggestions and fixes, but her
									capacity to deliver quick, intelligent
									feedback, and set proper expectations. We
									were very lucky to have her, and I would
									love to hire her for real. - Director of
									Design
								</Block>
								<Block mv={1}>
									Xenia is the definition of an independent
									worker - she always owns issues no matter
									how challenging or frustrating, and is
									pretty much a guarantee to get it done.
									She's consistently delivered both excellent
									engineering work and thorough and thoughtful
									documentation / communication.
								</Block>
								<Block mv={1}>
									She constantly demonstrates an ability to
									remain steadfast in her judgment and ability
									to deliver great work when there’s chaos
									around her. All these qualities are
									remarkably encouraging, especially when you
									consider how early in her career she is.
									When things would go wrong, she would course
									correct and get on the right track before I
									could even get involved and provide feedback
									or guidance. The quality of being
									“adaptable” to situations comes to mind as
									another key strength of Xenia's.
								</Block>
								<Block mv={1}>
									Xenia embodies “seek learning” really well.
									She gets up to speed on new areas quickly,
									she’s constantly inquiring about things, and
									asks hard, poignant questions. These further
									feed back into her ability to have great
									judgment. Xenia is fun and joyful, enjoyable
									to be around, and is able to deliver
									excellent work with an easeful attitude. I
									have learned a lot from watching her
									operate.
								</Block>
							</Block>
							<Block>
								<Block mv={1}>Documentation</Block>
								<Block mv={1}>
									Xenia created some of the best QA
									documentation I've seen at Patreon. It was
									incredibly thorough and made testing Lens
									Web easy even though there were 50+ states
									that we tested across user state / browser /
									device / user type (creator/patron/follower)
									etc.
								</Block>
								<Block mv={1}>
									The artifacts of your actual work, such as
									documentation and presentations, show an
									immense amount of care. You clearly invest
									energy into these aspects of the job, and
									they reflect really well on your ability."
								</Block>
							</Block>
							<Block>
								<Block mv={1}>
									Product Thinking & User Experience
								</Block>
								<Block mv={1}>
									I really love working with you and
									appreciate your practical approach to design
									and development. You really advocate for
									creators and care a lot about design and
									user experience in the product. In
									particular, I really value all the comments
									and feedback on my design work from you,
									especially your comments in my Figma files.
									Please keep doing more of that! You always
									surface issues I didn't consider, call out
									things that are confusing to you, and are
									very up front on what is possible/not
									possible to build and suggest alternatives.
									- Designer
								</Block>
							</Block>
							<Block>
								<Block mv={1}>Mentorship</Block>
								<Block mv={1}>
									Xenia is an extremely detail oriented
									engineer, and a very good teacher. She
									onboarded me at Patreon, and onto the
									massive [team's] frontend codebase. She has
									taught me really great debugging techniques,
									she writes amazing tests, and is generally
									an excellent technical leader. She
									communicates very clearly, and is always
									approachable and willing to help, even
									during a time crunch.
								</Block>
								<Block mv={1}>
									Xenia is amazing, and I feel so lucky to
									have her on my team.
								</Block>
								<Block mv={1}>
									- Xenia is a great communicator. She
									explains things in a honest, concise, and
									easy to understand way. I always go to Xenia
									first when I have questions about a project.
								</Block>
								<Block mv={1}>
									- She is reliable. If you ask her to do
									something, she will do it. You never need to
									follow up!
								</Block>
							</Block>
							<Block>
								<Block mv={1}>Execution and Productivity</Block>
								<Block mv={1}>
									- Even when we are in crunch time, Xenia
									produces high quality work. This has been so
									clear over the past two quarters with the
									work we have been doing on Make a Post and
									Posts on Tiers. That section of the codebase
									was very difficult to work with, but Xenia
									led the way and made a plan on how to tackle
									the problem. I attribute the success of both
									of these projects to her!
								</Block>
								<Block mv={1}>
									Your code delivery is strong. You are
									conscientious of your time constraints more
									than many of your peers, and you commit to
									getting high quality work delivered within
									these constraints without cutting corners.
								</Block>
								<Block mv={1}>
									[The] final deliverable was superb. Our
									usage on Lens Web is equal to that of
									Android and iOS, but I haven’t seen a single
									bug report roll in. Kudos! For important,
									high-stakes projects at Patreon, Xenia is
									one of the first people I would look to
									staffing." - Manager on Lens team
								</Block>
							</Block>
							<Block>
								<Block mv={1}>Communication</Block>
								<Block mv={1}>
									* While Lens Web didn't have immediate
									dependencies with most of the other mobile
									engineers on the team, Xenia still excelled
									at informing and communicating her current
									status of the lens web project into
									digestible and understandable chunks. I
									always felt informed about what was
									currently happening, what she was blocked
									on, and what was coming up next, even though
									the feature itself was extremely complicated
									and I don't know a whole lot about web.
								</Block>
							</Block>
						</Block>
						<Block mv={1}>Agora Systems</Block>
						<Block mv={1}>
							Agora Systems is a technology company that builds
							materials and supply chain management software for
							the construction industry.
						</Block>
						<Block mv={1}>December 2018 - August 2019</Block>
						<Block mv={1}>
							Tools: Ant Design System, React, Next,
							styled-components, ES6, webpack, babel, node,
							GraphQL, Apollo.
						</Block>
						<Block mv={1}>
							* Owner and sole engineer of the frontend domain,
							architected and implemented the entire frontend
							codebase from scratch.
						</Block>
						<Block mv={1}>
							* Took copious user research notes at user
							interviews that directly seeded iterations of
							product used to secure clients, our first contract,
							investors, and launch. Did 2 full weeks of onsites
							at our first clients' offices.
						</Block>
						<Block mv={1}>
							* Drove user testing and user research through 2
							weeks of detailed customer on-sites, followed by
							regular video check-ins. Obtained valuable user
							feedback for iteration and refinement of the Agora
							platform, resulting in the evolution of a product
							demo used for initial client meeting to a
							streamlined and fully launched product in 4 months.
						</Block>
						<Block mv={1}>
							* Led recruiting for first Design role, worked
							heavily on candidate sourcing and screening,
							entirely planned first candidate on-site.
						</Block>
						<Block mv={1}>Patreon</Block>
						<Block mv={1}>April 2017 - December 2018</Block>
						<Block mv={1}>
							Tools: React, ES6 Redux (NION), styled-components
							Flask, Python, JSON API
						</Block>
						<Block mv={1}>
							* Rearchitected company-wide email template
							infrastructure, created a workflow where email
							templates constructed with React components are
							automatically compiled to email-safe HTML and
							deployed via CircleCI.
						</Block>
						<Block mv={1}>
							* Cleaned up and standardized 200+ unmaintained
							email templates, reduced to 50.
						</Block>
						<Block mv={1}>
							* Streamlined developer workflows and greatly
							reduced future email incidents by creating an
							internal test tool to preview and send emails.
						</Block>
						<Block mv={1}>
							* Till present, my work directly impacts 30+ million
							emails sent every month. This work paved the way for
							further architectural improvements a year later that
							resulted in decreased spending of ~$22,000 monthly.
						</Block>
						<Block mv={1}>
							* Sole engineer on Lens Web, Patreon's ephemeral
							stories feature.
							https://techcrunch.com/2018/02/06/patreon-lens/
						</Block>
						<Block mv={1}>
							* The Lens web feature was incredibly complex and
							the requirements continued to change basically
							through to the end. Xenia's organizational skills in
							keeping track of all of the use cases and
							requirements and test cases were nothing short of
							amazing. When I went to one of the Lens web QAs,
							Xenia had everything ready to go and provided
							detailed instructions to each of the testers to test
							everything. I don't think it's an easy task to have
							all of that as nailed down as Xenia did, and she did
							it all with grace and ease.
						</Block>
						<Block mv={1}>
							* Owner of the pair programming interview slate at
							Patreon (pair programming), authored training
							documentation and participated heavily in candidate
							interviews and screening.
						</Block>
						<Block mv={1}>* Make a post redesign</Block>
						<Block mv={1}>
							* On average, this feature was used by 60% of active
							$100+ creators, weekly. This feature is the main
							channel used by creators to communicate with their
							patrons. One of the hardest features across Patreon
							to maintain, contained 2 years worth of tech debt
							and haphazard code additions.
						</Block>
						<Block mv={1}>* > insert snippets from Slack</Block>
						<Block mv={1}>* Post on tiers</Block>
						<Block mv={1}>
							* > insert snippet from Slack screenshot
						</Block>
						<Block mv={1}>
							* Piloted Waterloo internship/co-op program at
							Patreon, led to 2 intern hires, one of whom returned
							for a second internship and both of whom got
							full-time return offers after graduation.{' '}
						</Block>
						<Block mv={1}>
							* Xenia's execution of getting this done should be
							applauded. Her idea of doing a pilot [internship
							program] shows that she understood the risk and
							hesitance that we've had as an engineering org
							towards interns in the past. She convinced key
							people that having one intern for the summer is
							low-risk and took on the task of leading this
							project, and not only am I so glad that she did
							(because we have 2!! interns now!) but it really
							shows how strategically she was thinking through all
							this to instill positive change within engineering.
						</Block>
						<Block mv={1}>* </Block>
						<Block mv={1} />
						<Block mv={1} />
						<Block mv={1}>Zenreach</Block>
						<Block mv={1}>December 2015 - December 2016</Block>
						<Block mv={1}>
							Tools: React, Express Webpack, Babel, ES6, Django,
							Python
						</Block>
						<Block mv={1}>
							* Sole frontend engineer on a Zenreach core feature
							named Web Widgets, a tool that creates white-label
							embedded mailing list forms. This was customers’
							most requested feature over 2 years, and I delivered
							it in 2 months.
						</Block>
						<Block mv={1}>
							* Built a WYSIWYG email composer on par with
							MailChimp, with features like drag-and-drop email
							components, undo/redo, and customizable templates
							supported across all email clients.
						</Block>
						<Block mv={1} />
						<Block mv={1}>BandPage</Block>
						<Block mv={1}>Frontend Engineer Intern </Block>
						<Block mv={1}>September - December 2014</Block>
						<Block mv={1}>San Francisco, California</Block>
						<Block mv={1}>
							Tools: Node, Backbone, Mustache, Stylus
						</Block>
						<Block mv={1}>
							* Led frontend for an email campaign that offered
							users exclusive VIP deals from their favourite
							musicians, based on user’s music streaming data
						</Block>
						<Block mv={1}>
							* Resolved all bugs from the entire backlog in one
							month, completely blowing the team out of the water
							and carving out unprecedented bandwidth for new
							features
						</Block>
						<Block mv={1} />
						<Block mv={1}>Wanderable</Block>
						<Block mv={1}>Software Engineer Intern</Block>
						<Block mv={1}>Jan - Apr 2014</Block>
						<Block mv={1}>Redwood City, California</Block>
						<Block mv={1}>
							Tools: Adobe CS6 Suite, Ruby on Rails, PostgreSQL,
							LESS
						</Block>
						<Block mv={1}>
							Led and launched responsive site redesign, increased
							mobile signup by 80%
						</Block>
						<Block mv={1}>
							Improved site load time by 35%+ through asset
							precompilation and caching
						</Block>
						<Block mv={1}>
							Created Merchant self-service tool to optimize
							international partnerships, resulting in increased
							product margin
						</Block>
						<Block mv={1} />
						<Block mv={1}>
							Bachelor of Computer Science (Honours) and Fine Arts
							Studio Minor
						</Block>
						<Block mv={1}>University of Waterloo, 2015 </Block>
						<Block mv={1} />
						<Block mv={1} />
						<Block mv={1}>
							Canadian University Software Engineering Conference
							(CUSEC){' '}
						</Block>
						<Block mv={1}>Aug 2013 - Jan 2015 </Block>
						<Block mv={1}>
							• Director of Sponsorship for CUSEC 2015, secured
							sponsorship from 15 companies including Google,
							Amazon, Yelp, Khan Academy, Mandrill, Shopify,
							Genetec, Morgan Stanley, and Microsoft.{' '}
						</Block>
						<Block mv={1}>
							• Built 2014.cusec.net and pioneered a resume upload
							tool, allowing candidates to submit resumes prior to
							the conference to 18 sponsor companies.
						</Block>
						<Block mv={1} />
						<Block mv={1} />
						<Block mv={1} />
						<Block mv={1} />
						<Block mv={1} />
						<Block mv={1} />
						<Block mv={1} />
						<Block mv={1} />
						<Block mv={1}>
							Execution and productivity: producing high quality
							work (in the context of time constraints)
						</Block>
						<Block mv={1}>
							Ownership: taking the lead and showing ownership of
							issues.
						</Block>
						<Block mv={1}>
							Approachable: being easy to approach and talk to
						</Block>
						<Block mv={1}>
							Team player: willing to help with things that may be
							outside of my role
						</Block>
						<Block mv={1}>Documentation</Block>
						<Block mv={1}>Execution</Block>
					</Text>
				</Block>
			</ThemeProvider>
		);
	}
}
