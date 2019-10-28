import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import theme from 'theme';

import Block from 'components/shared/Block';
import Text from 'components/shared/Text';
import Resume from 'components/Resume';
import Feedback from 'components/Feedback';

export const Body = styled.div`
	line-height: 1.5;
	margin: 0 auto;
	padding: 10mm;
`;

export default class Base extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Text>
					<Body>
						<Block flex>
							<Block flexGrow={1}>
								<Resume />
							</Block>
							<Block flexGrow={1} className='feedback'>
								<Feedback />
							</Block>
						</Block>
					</Body>
				</Text>
			</ThemeProvider>
		);
	}
}
