/**
 * An all-purpose building block element with built-in helper props
 * to enable quick development that leans on existing global styles
 * and theming.
 * Examples of helper props: p, m (padding, margin), backgroundColor, fluidWidth.
 *
 */

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {
	XS_SCREEN_AND_UP,
	SM_SCREEN_AND_UP,
	MD_SCREEN_AND_UP,
	LG_SCREEN_AND_UP,
	XL_SCREEN_AND_UP
} from './constants';

import theme from 'theme';

const Block = ({ children, ...props }) => (
	<StyledBlock {...props}>{children}</StyledBlock>
);

Block.defaultProps = {
	backgroundColor: 'transparent',
	borderColor: 'gray4',
	borderWidth: 0,
	display: 'block',
	fluidHeight: false,
	fluidWidth: false,
	position: 'relative'
};

const displayType = PropTypes.oneOf([
	'inline',
	'block',
	'inline-block',
	'inherit',
	'flex',
	'none'
]);

export const responsiveDisplayType = PropTypes.oneOfType([
	displayType,
	PropTypes.shape({
		xs: displayType,
		sm: displayType,
		md: displayType,
		lg: displayType,
		xl: displayType
	})
]);

export const responsiveSizes = PropTypes.oneOfType([
	PropTypes.string,
	PropTypes.number,
	PropTypes.shape({
		xs: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		sm: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		md: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		lg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
	})
]);

Block.propTypes = {
	/**
	 * `left` `center` `right`
	 */
	textAlign: PropTypes.oneOf(['left', 'center', 'right']),

	children: PropTypes.node,

	/**
	 * Use a boolean or number value to control border props
	 * e.g. <Block b /> or <Block br={2} borderColor="white" />
	 * b: border shorthand
	 * bt: borderTop
	 * br: borderRight
	 * bb: borderBottom
	 * bl: borderLeft
	 */
	border: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool,
		PropTypes.number
	]),
	bt: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool,
		PropTypes.number
	]),
	br: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool,
		PropTypes.number
	]),
	bb: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool,
		PropTypes.number
	]),
	bl: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool,
		PropTypes.number
	]),

	/**
	 * Background color
	 * Can be any color name that exists in theme-variables.js
	 *
	 */
	backgroundColor: PropTypes.string,

	/**
	 * Border color
	 * Can be any color name that exists in theme-variables.js
	 */
	borderColor: PropTypes.string,

	/**
	 * Border stroke width
	 * Can be any valid stroke width value
	 */
	borderWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

	/**
	 * Border style
	 * Can be any valid stroke style value
	 */
	borderStyle: PropTypes.oneOf(['none', 'solid', 'dashed', 'dotted']),

	/**
	 * Display
	 * Can be 'inline', 'block', 'inline-block', 'inherit', 'none'
	 * For flex display, use the flex prop
	 * For responsive display, use something like {xs: 'none', md: 'block'}
	 */
	display: responsiveDisplayType,

	/**
	 * Flex properties
	 */
	flex: PropTypes.bool,

	/**
	 * Align items within a flex element on the cross axis
	 * Can be `flex-start`, `flex-end`, `center`, `baseline`, `stretch`
	 */
	alignItems: PropTypes.oneOf([
		'flex-start',
		'flex-end',
		'center',
		'baseline',
		'stretch'
	]),

	/**
	 * Establishes the main axis of the flex element
	 */
	flexDirection: PropTypes.oneOf([
		'row',
		'row-reverse',
		'column',
		'column-reverse'
	]),

	/**
	 * Allows a child of a flex element to grow.
	 * A unitless value that dictates what amount of the available space inside
	 * the flex container the item should take up.
	 */
	flexGrow: PropTypes.number,

	/**
	 * Allows items within flex element to wrap as needed
	 */
	flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),

	/**
	 * Align items within a flex element on the main axis
	 * Can be `flex-start`, `flex-end`, `center`, `baseline`, `stretch`
	 */
	justifyContent: PropTypes.oneOf([
		'flex-start',
		'flex-end',
		'center',
		'space-between',
		'space-around',
		'space-evenly'
	]),

	/**
	 * Height: 100%
	 * Default: false
	 */
	fluidHeight: PropTypes.bool,

	/**
	 * Width: 100%
	 * Default: false
	 */
	fluidWidth: PropTypes.oneOfType([
		PropTypes.bool,
		PropTypes.shape({
			xs: PropTypes.bool,
			sm: PropTypes.bool,
			md: PropTypes.bool,
			lg: PropTypes.bool,
			xl: PropTypes.bool
		})
	]),

	/**
	 * Overflow
	 * Can be: 'hidden', 'visible', 'scroll'
	 *
	 */
	overflow: PropTypes.oneOf(['hidden', 'visible', 'scroll']),
	overflowX: PropTypes.oneOf(['hidden', 'visible', 'scroll']),
	overflowY: PropTypes.oneOf(['hidden', 'visible', 'scroll']),

	/**
	 * Position
	 * Can be: `static` `relative` `absolute` `fixed`, `sticky`
	 *
	 */
	position: PropTypes.oneOf([
		'absolute',
		'fixed',
		'relative',
		'static',
		'sticky'
	]),

	/**
	 * Top/Right/Bottom/Left
	 * Can be: any number, defined as rems
	 */
	top: PropTypes.number,
	right: PropTypes.number,
	bottom: PropTypes.number,
	left: PropTypes.number,

	/**
	 * Vertical align
	 * Can be: `baseline`, `sub`, `super`, `text-top`, `text-bottom`,
	 * `middle`, `top`, `bottom`
	 *
	 */
	verticalAlign: PropTypes.oneOf([
		'baseline',
		'bottom',
		'middle',
		'sub',
		'super',
		'text-bottom',
		'text-top',
		'top'
	]),

	/**
	 * Height
	 */
	height: PropTypes.string,

	/**
	 * Min-height
	 */
	minHeight: PropTypes.string,

	/**
	 * Max width
	 */
	maxWidth: responsiveSizes,

	/**
	 * Width
	 */
	width: responsiveSizes,

	/**
	 * m: margin
	 * ml: marginLeft
	 * mr: marginRight
	 * mt: marginTop
	 * mb: marginBottom
	 * mv: marginVertical (top and bottom)
	 * mh: marginHorizontal (left and right)
	 */
	m: responsiveSizes,
	ml: responsiveSizes,
	mr: responsiveSizes,
	mt: responsiveSizes,
	mb: responsiveSizes,
	mv: responsiveSizes,
	mh: responsiveSizes,

	/**
	 * p: padding
	 * pl: paddingLeft
	 * pr: paddingRight
	 * pt: paddingTop
	 * pb: paddingBottom
	 * pv: paddingVertical (top and bottom)
	 * ph: paddingHorizontal (left and right)
	 */
	p: responsiveSizes,
	pl: responsiveSizes,
	pr: responsiveSizes,
	pt: responsiveSizes,
	pb: responsiveSizes,
	pv: responsiveSizes,
	ph: responsiveSizes
};

// Generate style rules for border
const getBorderValues = ({
	theme,
	shorthand,
	color,
	width,
	v,
	h,
	t,
	r,
	b,
	l
}) => {
	const unit = 'px';
	const style = 'solid';
	const getBorderString = widthValue =>
		`${widthValue}${unit} ${style} ${theme.palette[color]}`;
	const defaultBorder = getBorderString(1);

	return `
		${typeof shorthand === 'boolean' ? `border: ${defaultBorder};` : ''}
		${typeof shorthand === 'number' ? `border: ${getBorderString(shorthand)};` : ''}

		${
			typeof v === 'boolean'
				? `
			border-top: ${defaultBorder};
			border-bottom: ${defaultBorder};
		`
				: ''
		}
		${
			typeof v === 'number'
				? `
				border-top: ${getBorderString(v)};
				border-bottom: ${getBorderString(v)};
			`
				: ''
		}

			${
				typeof h === 'boolean'
					? `
			border-left: ${defaultBorder};
			border-right: ${defaultBorder};
		`
					: ''
			}
		${
			typeof h === 'number'
				? `
				border-left: ${getBorderString(h)};
				border-right: ${getBorderString(h)};
			`
				: ''
		}
			
		${typeof t === 'boolean' ? `border-top: ${defaultBorder};` : ''}
		${typeof t === 'number' ? `border-top: ${getBorderString(t)};` : ''}

		${typeof r === 'boolean' ? `border-right: ${defaultBorder};` : ''}
		${typeof r === 'number' ? `border-right: ${getBorderString(r)};` : ''}

		${typeof b === 'boolean' ? `border-bottom: ${defaultBorder};` : ''}
		${typeof b === 'number' ? `border-bottom: ${getBorderString(b)};` : ''}

		${typeof l === 'boolean' ? `border-left: ${defaultBorder};` : ''}
		${typeof l === 'number' ? `border-left: ${getBorderString(l)};` : ''}
		
	`;
};

const getDimension = ({ fluid, rule, value }) => {
	if (fluid) {
		return `${rule}: 100%;`;
	} else if (value === undefined) {
		return '';
	} else if (typeof value === 'object') {
		return getResponsiveValues({ value, style: rule });
	} else if (typeof value === 'string') {
		return `${rule}: ${value};`;
	} else if (typeof value === 'number') {
		return `${rule}: ${value}px;`;
	}
};

const getResponsiveValues = ({ value: responsiveValues, unit = '', style }) => {
	const responsiveStyles = Object.keys(responsiveValues).map(size => {
		const styleRule = `${style}: ${responsiveValues[size]}${unit};`;

		switch (size) {
			case 'xs':
				return XS_SCREEN_AND_UP(styleRule);
			case 'sm':
				return SM_SCREEN_AND_UP(styleRule);
			case 'md':
				return MD_SCREEN_AND_UP(styleRule);
			case 'lg':
				return LG_SCREEN_AND_UP(styleRule);
			case 'xl':
				return XL_SCREEN_AND_UP(styleRule);
			default: 
				return '';
		}
	});

	return responsiveStyles.join('\n');
};

// Generate style rules for top/right/bottom/left options
const getTrblValues = ({ rule, shorthand, v, h, t, r, b, l, unit = '' }) => {
	if (!rule) {
		return;
	}

	const getValue = ({ value, style }) => {
		let val;
		if (typeof value === 'string') {
			val = `${style}: ${value};`;
		} else if (typeof value === 'number') {
			val = `${style}: ${value}${unit};`;
		} else if (typeof value === 'object') {
			val = getResponsiveValues({ value, unit, style });
		}

		return val;
	};

	return `
		${
			shorthand !== undefined
				? `${getValue({ value: shorthand, style: rule })};`
				: ''
		}

		${
			v !== undefined
				? `
			${getValue({ value: v, style: `${rule}-top` })}
			${getValue({ value: v, style: `${rule}-bottom` })}
		`
				: ''
		}

		${
			h !== undefined
				? `
			${getValue({ value: h, style: `${rule}-right` })}
			${getValue({ value: h, style: `${rule}-left` })}
		`
				: ''
		}

		${t !== undefined ? `${getValue({ value: t, style: `${rule}-top` })}` : ''}
		${r !== undefined ? `${getValue({ value: r, style: `${rule}-right` })}` : ''}
		${b !== undefined ? `${getValue({ value: b, style: `${rule}-bottom` })}` : ''}
		${l !== undefined ? `${getValue({ value: l, style: `${rule}-left` })}` : ''}
	`;
};

const StyledBlock = styled.div`
	${p => `
				transition: all 100ms ease-in-out;
        box-sizing: border-box;
        display: ${p.display};
        position: ${p.position};
        ${p.top !== undefined ? `top: ${p.top}rem;` : ''}
        ${p.right !== undefined ? `right: ${p.right}rem;` : ''}
        ${p.bottom !== undefined ? `bottom: ${p.bottom}rem;` : ''}
        ${p.left !== undefined ? `left: ${p.left}rem;` : ''}

        ${p.flex ? 'display: flex;' : ''}
        ${p.alignItems ? `align-items: ${p.alignItems};` : ''}
        ${p.flexDirection ? `flex-direction: ${p.flexDirection};` : ''}
        ${p.flexShrink ? `flex-shrink: ${p.flexShrink};` : ''}
        ${p.flexGrow ? `flex-grow: ${p.flexGrow};` : ''}
        ${p.flexWrap ? `flex-wrap: ${p.flexWrap};` : ''}
        ${p.justifyContent ? `justify-content: ${p.justifyContent};` : ''}

        ${p.overflow ? `overflow: ${p.overflow};` : ''}
        ${p.overflowX ? `overflow-x: ${p.overflowX};` : ''}
        ${p.overflowY ? `overflow-y: ${p.overflowY};` : ''}
        ${p.verticalAlign ? `vertical-align: ${p.verticalAlign};` : ''}
        ${p.textAlign ? `text-align: ${p.textAlign};` : ''}
        ${
			p.backgroundColor
				? `background-color: ${p.theme.palette[p.backgroundColor]};`
				: ''
		}

        /* max-width */
        ${getDimension({
			rule: 'max-width',
			value: p.maxWidth
		})}

        /* max-height */
        ${getDimension({
			rule: 'max-height',
			value: p.maxHeight
		})}

        /* width */
        ${getDimension({
			fluid: p.fluidWidth,
			rule: 'width',
			value: p.width
		})}

        /* height */
        ${getDimension({
			fluid: p.fluidHeight,
			rule: 'height',
			value: p.height
		})}

        /*
         * border 
         * border-top
         * border-right
         * border-bottom
         * border-left
         */
        ${getBorderValues({
			shorthand: p.b,
			v: p.bv,
			h: p.bh,
			t: p.bt,
			r: p.br,
			b: p.bb,
			l: p.bl,
			color: p.borderColor,
			width: p.borderWidth,
			theme: p.theme
		})}

        /*
         * padding 
         * padding-top
         * padding-right
         * padding-bottom
         * padding-left
         */
        ${getTrblValues({
			rule: 'padding',
			shorthand: p.p,
			v: p.pv,
			h: p.ph,
			t: p.pt,
			r: p.pr,
			b: p.pb,
			l: p.pl,
			unit: 'rem'
		})}

        /*
         * margin 
         * margin-top
         * margin-right
         * margin-bottom
         * margin-left
         */
        ${getTrblValues({
			rule: 'margin',
			shorthand: p.m,
			v: p.mv,
			h: p.mh,
			t: p.mt,
			r: p.mr,
			b: p.mb,
			l: p.ml,
			unit: 'rem'
		})}
    `}
`;

StyledBlock.defaultProps = {
	theme
};

export default Block;
