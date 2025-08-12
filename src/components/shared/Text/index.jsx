/**
 * An all-purpose building text element with built-in helper props
 * to enable quick development that leans on existing global styles
 * and theming.
 * Examples of helper props: color, bold.
 *
 */

import PropTypes from "prop-types";
import styled from "styled-components";

import theme from "theme";

import withDynamicElement from "./utilities/withDynamicElement";

const StyledText = styled.span`
	${p => `
	font-family: ${p.header ? p.theme.typography.fontFamilyHeader : p.theme.typography.fontFamily} !important;

	@media print {
		font-family: ${p.theme.typography.fontFamilySerif} !important;
		font-size: ${p.theme.typography.fontSizeXxl};
		line-height: 1.6;
	}

	${p.fontVariant ? `font-variant: ${p.fontVariant};` : ""}
	${p.textShadow ? `text-shadow: ${p.textShadow};` : ""}
	${p.letterSpacing ? `letter-spacing: ${p.letterSpacing};` : ""}
	${p.lineHeight ? `line-height: ${p.lineHeight};` : ""}
${p.italic ? "font-style: italic;" : ""}
        ${p.bold ? "font-weight: bold;" : `font-weight: ${p.fontWeight};`}
        ${p.align ? `text-align: ${p.align};` : ""}
        ${p.display ? `display: ${p.display};` : ""}
				${p.textOverflow ? `text-overflow: ${p.textOverflow};` : ""}
				${p.overflow ? `overflow: ${p.overflow};` : ""}
				${p.verticalAlign ? `vertical-align: ${p.verticalAlign};` : ""}
				${p.whiteSpace ? `white-space: ${p.whiteSpace};` : ""}
		${getColor(p)}
        ${getFontSize(p)}
			`}
`;

StyledText.defaultProps = {
	bold: false,
	align: "left",
	size: "md",
	el: "span",
	fontWeight: "unset",
	theme
};

StyledText.propTypes = {
	/**
	 * Bold font weight
	 * A quick shortcut for `fontWeight: bold`.
	 */
	bold: PropTypes.bool,

	/**
	 * Font Weight
	 * Can be a number, `normal`, `bold`, or `unset`.
	 */
	fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["normal", "bold", "unset"])]),

	/**
	 * Italic font style
	 */
	italic: PropTypes.bool,

	children: PropTypes.node,

	/**
	 * Text color
	 * Can be any color name that exists in theme-variables.js
	 * If color value is not a theme variable, the component will respect that custom color value.
	 */
	color: PropTypes.string,

	/**
	 * Element
	 * Can be: `p`, `span`, `div`
	 */
	el: PropTypes.oneOf(["p", "span", "div"]),

	/**
	 * Text align
	 */
	align: PropTypes.oneOf(["left", "center", "right"]),

	/**
	 * Display
	 * Note:
	 *  "flex" and "inline-flex" requires the -webkit- prefix to work in Safari
	 *  TODO: we should autopopulate prefixed versions of the correct CSS
	 *        https://github.com/postcss/autoprefixer
	 *  "contents" does not work in Edge/Internet Explorer.
	 * For now we just throw a warning when using those properties
	 */
	display: PropTypes.oneOf([
		"inline",
		"block",
		/*
		 *'contents',
		 *'flex',
		 */
		"grid",
		"inline-block",
		//'inline-flex',
		"inline-grid",
		"inline-table",
		"list-item",
		"run-in",
		"table",
		"table-caption",
		"table-column-group",
		"table-header-group",
		"table-footer-group",
		"table-row-group",
		"table-cell",
		"table-column",
		"table-row",
		"none",
		"initial",
		"inherit"
	]),

	/**
	 * Vertical align
	 * Can be: `baseline`, `sub`, `super`, `text-top`, `text-bottom`,
	 * `middle`, `top`, `bottom`
	 *
	 */
	verticalAlign: PropTypes.oneOf(["baseline", "bottom", "middle", "sub", "super", "text-bottom", "text-top", "top"]),

	/* Text line height */
	lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

	/**
	 * Font size
	 * If font-size value is not a theme variable, the component will respect that custom value.
	 */
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"])]),

	/**
	 * Text Overflow
	 */
	textOverflow: PropTypes.oneOf(["clip", "ellipsis"]),

	/**
	 * Overflow
	 */
	overflow: PropTypes.oneOf(["auto", "inherit", "initial", "hidden", "scroll", "visible"]),

	/**
	 * Whitespace
	 */
	whiteSpace: PropTypes.oneOf(["inherit", "initial", "normal", "nowrap", "pre-line", "pre-wrap", "pre", "unset"]),

	/**
	 * Title attribute, specifies extra information about an element.
	 * Most often shown as a tooltip text when the mouse moves over the element.
	 */
	title: PropTypes.string
};

const getColor = props => {
	const {
		color,
		theme: { palette: p }
	} = props;

	if (p[color]) {
		return `color: ${p[color]};`;
	} else if (color) {
		return `color: ${color};`;
	} else {
		return `color: ${p.gray9};`;
	}
};

const getFontSize = props => {
	const {
		size,
		theme: { typography: t }
	} = props;

	switch (size) {
		case "sm":
			return `font-size: ${t.fontSizeSm};`;
		case "md":
			return `font-size: ${t.fontSizeBase};`;
		case "lg":
			return `font-size: ${t.fontSizeLg};`;
		case "xl":
			return `font-size: ${t.fontSizeXl};`;
		case "xxl":
			return `font-size: ${t.fontSizeXxl};`;
		default:
			return `font-size: ${size};`;
	}
};
export default withDynamicElement(StyledText);
