import React from "react";

export const TAGS = {
	EXECUTION: "Execution and Ownership", // producing high quality work (in the context of time constraints)
	APPROACHABLE: "Being great to be around", // Approachable: being easy to approach and talk to
	DOCUMENTATION: "Documentation",
	COMMUNICATION: "Communication",
	STRATEGIC: "Learning Fast",
	PRODUCT: "Product"
};

export const FEEDBACK = [
	{
		content: (
			<span>
				Xenia is the definition of an independent worker - she always <em>owns issues no matter how challenging or frustrating</em>, and is pretty much a <em>guarantee to get it done</em>. She's consistently delivered both excellent engineering work and thorough and thoughtful documentation / communication.
			</span>
		),
		author: "Engineering Manager",
		company: "Patreon",
		tags: [TAGS.EXECUTION, TAGS.DOCUMENTATION, TAGS.COMMUNICATION]
	},
	{
		content: (
			<span>
				I really love working with you and <em>appreciate your practical approach</em> to design and development. You really advocate for creators and care a lot about design and user experience in the product. In particular, I <em>really value all the comments and feedback on my design work from you</em>, especially your comments in my Figma files. Please keep doing more of that! You always <em>surface issues I didn't consider</em>, call out things that are confusing to you, and are
				very <em>upfront on what is possible/not possible to build and suggest alternatives</em>.
			</span>
		),
		author: "Design Teammate",
		company: "Patreon",
		tags: [TAGS.PRODUCT, TAGS.COMMUNICATION]
	},

	{
		content: (
			<span>
				She constantly demonstrates an ability to remain steadfast in her judgment and ability to <em>deliver great work when there’s chaos around her</em>. All these qualities are remarkably encouraging, especially when you consider how early in her career she is. When things would go wrong, she would <em>course correct and get on the right track before I could even get involved</em> and provide feedback or guidance. The quality of being “adaptable” to situations comes to mind as
				another key strength of Xenia's.
			</span>
		),
		author: "Engineering Manager",
		company: "Patreon",
		tags: [TAGS.EXECUTION, TAGS.STRATEGIC]
	},
	{
		content: (
			<span>
				Xenia embodies “seek learning” really well. She gets up to speed on new areas quickly, she’s <em>constantly inquiring about things, and asks hard, poignant questions</em>. These further feed back into her ability to have great judgment. Xenia is fun and joyful, <em>enjoyable to be around, and is able to deliver excellent work with an easeful attitude</em>. I have learned a lot from watching her operate.
			</span>
		),
		author: "Engineering Teammate",
		company: "Patreon",
		tags: [TAGS.COMMUNICATION, TAGS.APPROACHABLE, TAGS.STRATEGIC]
	},
	{
		content: (
			<span>
				The Lens web <em>feature was incredibly complex</em> and the requirements continued to change basically through to the end. Xenia's <em>organizational skills in keeping track> of all of the use cases and requirements and test cases were nothing short of amazing</em>. When I went to one of the Lens web QAs, Xenia had everything ready to go and <em>provided detailed instructions to each of the testers</em> to test everything. I don't think it's an easy task to have all of that as
				nailed down as Xenia did, and she did it all with grace and ease.
			</span>
		),
		author: "Engineering Teammate",
		company: "Patreon",
		tags: [TAGS.DOCUMENTATION, TAGS.COMMUNICATION, TAGS.PRODUCT]
	},
	{
		content: (
			<span>
				Xenia created some of the <em>best QA documentation I've seen at Patreon</em>. It was incredibly thorough and made testing Lens Web easy even though there were <em>50+ states that we tested across user state / browser / device / user type (creator/patron/follower)</em> etc.
			</span>
		),
		author: "Engineering Teammate",
		company: "Patreon",
		tags: [TAGS.DOCUMENTATION]
	},
	{
		content: (
			<span>
				The artifacts of [Xenia's] actual work, such as <em>documentation and presentations, show an immense amount of care</em>. [She] clearly invest[s] energy into these aspects of the job, and they reflect really well on [her] ability.
			</span>
		),
		author: "Engineering Manager",
		company: "Patreon",
		tags: [TAGS.DOCUMENTATION, TAGS.COMMUNICATION]
	},
	{
		content: (
			<span>
				Xenia is an <em>extremely detail oriented engineer, and a very good teacher</em>. She onboarded me at Patreon, and onto the massive [team's] frontend codebase. She has <em>taught me really great debugging techniques, she writes amazing tests</em>, and is generally an excellent technical leader. She communicates very clearly, and is <em>always approachable and willing to help, even during a time crunch</em>.
			</span>
		),
		author: "Engineering Teammate",
		company: "Patreon",
		tags: [TAGS.COMMUNICATION, TAGS.APPROACHABLE]
	},
	{
		content: (
			<span>
				Even when we are <em>in crunch time, Xenia produces high quality work</em>. This has been so clear over the past two quarters with the work we have been doing on Make a Post and Posts on Tiers. That section of the <em>codebase was very difficult to work with, but Xenia led the way and made a plan on how to tackle the problem</em>. I attribute the success of both of these projects to her!
			</span>
		),
		author: "Engineering Teammate",
		company: "Patreon",
		tags: [TAGS.STRATEGIC, TAGS.EXECUTION, TAGS.PRODUCT]
	},
	{
		content: (
			<span>
				[Xenia's] code delivery is strong. [Xenia is] <em>conscientious of [her] time constraints</em> more than many of [her] peers, and [she] commit[s] to getting <em>high quality work delivered within these constraints without cutting corners</em>.
			</span>
		),
		author: "Engineering Teammate",
		company: "Patreon",
		tags: [TAGS.EXECUTION, TAGS.STRATEGIC]
	},
	{
		content: (
			<span>
				Xenia's execution of getting [the internship program] done should be applauded. Her idea of doing a pilot shows that she <em>understood the risk and hesitance</em> that we've had as an engineering org towards interns in the past. She <em>convinced key people that having one intern for the summer is low-risk and took on the task of leading this project</em>, and not only am I so glad that she did (because we have 2!! interns now!) but it really shows how strategically she was
				thinking through all this to <em>instill positive change within engineering</em>.
			</span>
		),
		author: "Engineering Teammate",
		company: "Patreon",
		tags: [TAGS.EXECUTION, TAGS.STRATEGIC]
	},

	{
		content: (
			<span>
				[The] final deliverable was superb. Our usage on Lens Web is equal to that of Android and iOS, but I haven’t seen a single bug report roll in. Kudos! <em>For important, high-stakes projects at Patreon, Xenia is one of the first people I would look to staffing.</em>
			</span>
		),
		author: "Engineering Manager",
		company: "Patreon",
		tags: [TAGS.EXECUTION, TAGS.PRODUCT]
	},
	{
		content: (
			<span>
				Xenia is <em>professional beyond her years, technically and intuitively smart, an efficient and effective communicator, and fun to work with</em>. I've never been prouder of our product, thanks not just to her improvement suggestions and fixes, but her <em>capacity to deliver quick, intelligent feedback, and set proper expectations</em>. We were very lucky to have her, and I would love to hire her for real.
			</span>
		),
		author: "Director of Design",
		company: "BandPage",
		tags: [TAGS.COMMUNICATION, TAGS.EXECUTION, TAGS.APPROACHABLE]
	},

	{
		content: (
			<span>
				While Lens Web didn't have immediate dependencies with most of the other mobile engineers on the team, Xenia still <em>excelled at informing and communicating her current status of the lens web project into digestible and understandable chunks</em>. I always felt informed about what was currently happening, what she was blocked on, and what was coming up next, even though the feature itself was extremely complicated and I don't know a whole lot about web.
			</span>
		),
		author: "Engineering Teammate",
		company: "Patreon",
		tags: [TAGS.COMMUNICATION]
	},
	{
		content: (
			<span>
				Xenia is a great communicator. She explains things in a honest, concise, and easy to understand way. <em>I always go to Xenia first when I have questions about a project.</em>
			</span>
		),
		author: "Product Teammate",
		company: "Patreon",
		tags: [TAGS.COMMUNICATION]
	}
];
