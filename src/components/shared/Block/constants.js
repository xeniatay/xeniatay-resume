export const VERTICAL_MOBILE_MAX_WIDTH = 320;
export const MOBILE_MAX_WIDTH = 768;
export const TABLET_MAX_WIDTH = 1024;
export const DESKTOP_MAX_WIDTH = 1224;
export const LARGE_DESKTOP_MAX_WIDTH = 1824;

/*** XS SCREEN: 0 - 320px width ***/
export const XS_SCREEN_ONLY = styles => `
	@media screen and (max-width: ${VERTICAL_MOBILE_MAX_WIDTH}px) {
		${styles}
	}
`;

export const XS_SCREEN_AND_UP = styles => ` 
	${styles}
`;

/*** SM SCREEN: 321px - 768px width ***/
export const SM_SCREEN_ONLY = styles => ` 
	@media screen and (max-width: ${MOBILE_MAX_WIDTH}px) {
		${styles}
	}
`;

export const SM_SCREEN_AND_UP = styles => ` 
	@media screen and (min-width: ${VERTICAL_MOBILE_MAX_WIDTH + 1}px) {
		${styles}
	}
`;

/*** MD SCREEN: 769px - 1024px ***/
export const MD_SCREEN_ONLY = styles => ` 
	@media screen and (max-width: ${TABLET_MAX_WIDTH}px) {
		${styles}
	}
`;

export const MD_SCREEN_AND_UP = styles => ` 
	@media screen and (min-width: ${MOBILE_MAX_WIDTH + 1}px) {
		${styles}
	}
`;

/*** LG SCREEN: 1024px - 1224px ***/
export const LG_SCREEN_ONLY = styles => ` 
	@media screen and (max-width: ${DESKTOP_MAX_WIDTH}px) {
		${styles}
	}
`;

export const LG_SCREEN_AND_UP = styles => ` 
	@media screen and (min-width: ${TABLET_MAX_WIDTH + 1}px) {
		${styles}
	}
`;

/*** XL SCREEN: 1024px - 1824px ***/
export const XL_SCREEN_ONLY = styles => ` 
	@media screen and (max-width: ${LARGE_DESKTOP_MAX_WIDTH}px) {
		${styles}
	}
`;

export const XL_SCREEN_AND_UP = styles => ` 
	@media screen and (min-width: ${DESKTOP_MAX_WIDTH + 1}px) {
		${styles}
	}
`;
