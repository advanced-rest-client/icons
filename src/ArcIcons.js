import { svg } from 'lit-element';

/** @typedef {import('lit-element').SVGTemplateResult} SVGTemplateResult */

/* eslint-disable max-len */
/**
 * Wraps icon into an SVG container.
 * @param {SVGTemplateResult} tpl Icon definition
 * @return {SVGTemplateResult} Complete SVG icon definition
 */
export const iconWrapper = tpl =>
  svg`<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">${tpl}</svg>`;

export const accountCircle = iconWrapper(
  svg`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>`
);
export const addCircleOutline = iconWrapper(
  svg`<path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>`
);
export const add = iconWrapper(
  svg`<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>`
);
export const arcIcon = iconWrapper(
  svg`<path style="fill:#2196F3" d="M2.3,1h19.3C22.4,1,23,1.6,23,2.3v19.4c0,0.7-0.6,1.3-1.3,1.3H2.3C1.6,23,1,22.4,1,21.7 V2.3C1,1.6,1.6,1,2.3,1z"></path><path style="opacity:0.42;fill:#FFFFFF" d="M15.8,7.1v5.1h-1.9l3.7,4.7l3.7-4.7h-1.9V7.1H15.8L15.8,7.1z"></path><path style="fill:#FFFFFF" d="M10.7,19.3v-7.6h2.8L8.1,4.8l-5.5,6.9h2.8v7.6H10.7z"></path>`
);
export const arcIconArrows = iconWrapper(
  svg`<polygon style="fill:#2196F3;" points="13.3,11.7 8.3,5.2 3.2,11.7 5.7,11.7 5.7,11.7 5.8,11.7 5.8,18.8 10.7,18.8 10.7,11.7 "></polygon><polygon style="opacity:0.42;fill:#2196F3;" points="19,12.5 19,7.7 15.7,7.7 15.7,12.5 13.9,12.5 17.4,16.8 20.8,12.5 "></polygon>`
);
export const archive = iconWrapper(
  svg`<path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path>`
);
export const arrowBack = iconWrapper(
  svg`<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>`
);
export const arrowDropDown = iconWrapper(svg`<path d="M7 10l5 5 5-5z"></path>`);
export const arrowDropUp = iconWrapper(svg`<path d="M7 14l5-5 5 5z"></path>`);
export const assignment = iconWrapper(
  svg`<path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>`
);
export const bugReport = iconWrapper(
  svg`<path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path>`
);
export const build = iconWrapper(
  svg`<path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path>`
);
export const cached = iconWrapper(
  svg`<path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path>`
);
export const chevronLeft = iconWrapper(
  svg`<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>`
);
export const chevronRight = iconWrapper(
  svg`<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>`
);
export const cancel = iconWrapper(
  svg`<path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>`
);
export const clear = iconWrapper(
  svg`<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>`
);
export const clearAll = iconWrapper(
  svg`<path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"></path>`
);
export const close = iconWrapper(
  svg`<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>`
);
export const cloudDownload = iconWrapper(
  svg`<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path>`
);
export const code = iconWrapper(
  svg`<path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>`
);
export const collectionsBookmark = iconWrapper(
  svg`<path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z"></path>`
);
export const insertComment = iconWrapper(
  svg`<path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>`
);
export const contentCopy = iconWrapper(
  svg`<path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>`
);
export const deleteIcon = iconWrapper(
  svg`<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>`
);
export const desktopWindows = iconWrapper(
  svg`<path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"></path>`
);
export const done = iconWrapper(
  svg`<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>`
);
export const driveColor = iconWrapper(
  svg`<g transform="matrix(1.597046e-4,0,0,1.6517796e-4,1.3671875,2.9482084)"><polygon points="133156,76894 110963,115341 22194,115341 44385,76894 " style="fill:#3777e3"></polygon><polygon points="88772,0 44385,0 88772,76894 133156,76894 " style="fill:#ffcf63"></polygon><polygon points="66578,38447 44385,0 0,76894 22194,115341 " style="fill:#11a861"></polygon></g>`
);
export const drive = iconWrapper(
  svg`<g transform="matrix(1.597046e-4,0,0,1.6517796e-4,1.3671875,2.9482084)"><polygon points="22194,115341 44385,76894 133156,76894 110963,115341"></polygon><polygon points="88772,76894 133156,76894 88772,0 44385,0"></polygon><polygon points="0,76894 22194,115341 66578,38447 44385,0"></polygon>`
);
export const edit = iconWrapper(
  svg`<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>`
);
export const error = iconWrapper(
  svg`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>`
);
export const expandLess = iconWrapper(
  svg`<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>`
);
export const expandMore = iconWrapper(
  svg`<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>`
);
export const exportVariant = iconWrapper(
  svg`<path d="M12,1L8,5H11V14H13V5H16M18,23H6C4.89,23 4,22.1 4,21V9A2,2 0 0,1 6,7H9V9H6V21H18V9H15V7H18A2,2 0 0,1 20,9V21A2,2 0 0,1 18,23Z"></path>`
);
export const fileDownload = iconWrapper(
  svg`<path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>`
);
export const filterList = iconWrapper(
  svg`<path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path>`
);
export const folderShared = iconWrapper(
  svg`<path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path>`
);
export const help = iconWrapper(
  svg`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>`
);
export const helpOutline = iconWrapper(
  svg`<path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>`
);
export const history = iconWrapper(
  svg`<path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path>`
);
export const home = iconWrapper(
  svg`<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>`
);
export const importExport = iconWrapper(
  svg`<path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"></path>`
);
export const info = iconWrapper(
  svg`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>`
);
export const infoOutline = iconWrapper(
  svg`<path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path>`
);
export const insertChart = iconWrapper(
  svg`<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path>`
);
export const insertDriveFile = iconWrapper(
  svg`<path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"></path>`
);
export const keyboardArrowDown = iconWrapper(
  svg`<path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>`
);
export const keyboardArrowUp = iconWrapper(
  svg`<path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>`
);
export const keyboardArrowRight = iconWrapper(
  svg`<path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path>`
);
export const list = iconWrapper(
  svg`<path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path>`
);
export const markdown = iconWrapper(
  svg`<g transform="matrix(0.04690339,0,0,0.04690339,0,5.225434)"><path d="m 123.38173,73.504 -50.39773,0 0,167.496 52.516,0 0,-93 50,60 47.62725,-60 0,93 49.87275,0 0,-167.496 -49.87276,0 L 175.5,135.5 Z M 39.998409,0 474.00159,0 C 496.08284,0 514,17.906303 514,39.994846 l 0,235.010304 C 514,297.09032 496.0921,315 474.00159,315 L 39.998409,315 C 17.917157,315 0,297.0937 0,275.00515 L 0,39.994846 C 0,17.909682 17.907898,0 39.998409,0 Z M 360,74.5 l -0.49739,0 -1e-5,86 -48.0026,0 74,80.5 74.00256,-80.99442 -49.97984,0 0,-85.50558 z m 0,0"></path>`
);
export const menu = iconWrapper(
  svg`<path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>`
);
export const message = iconWrapper(
  svg`<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"></path>`
);
export const modeEdit = iconWrapper(
  svg`<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>`
);
export const moreVert = iconWrapper(
  svg`<path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>`
);
export const newReleases = iconWrapper(
  svg`<path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"></path>`
);
export const notificationsActive = iconWrapper(
  svg`<path d="M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"></path>`
);
export const openInNew = iconWrapper(
  svg`<path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>`
);
export const ramlR = iconWrapper(
  svg`<path d="M14.44,1.48H3L4.16,3.3H14.37a4.59,4.59,0,0,1,3.31,1.41A4.8,4.8,0,0,1,19,8.07,4.45,4.45,0,0,1,17.7,11.3a5.72,5.72,0,0,1-3.28,1.54H13.17l-3.45,0,1,1.72h1.51l.08.13h0l4.45,7.51,0,0,0,0a1,1,0,0,0,1.7-.71.54.54,0,0,0-.15-.41,1.21,1.21,0,0,1-.14-.2l-3.68-6.26a6.47,6.47,0,0,0,4.51-1.92A6.61,6.61,0,0,0,14.44,1.48Z"></path>`
);
export const rateReview = iconWrapper(
  svg`<path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 14v-2.47l6.88-6.88c.2-.2.51-.2.71 0l1.77 1.77c.2.2.2.51 0 .71L8.47 14H6zm12 0h-7.5l2-2H18v2z"></path>`
);
export const refresh = iconWrapper(
  svg`<path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path>`
);
export const removeCircleOutline = iconWrapper(
  svg`<path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>`
);
export const pinDrawer = iconWrapper(
  svg`<path d="M 15.462891 4.0332031 L 15.462891 20.007812 L 18.392578 20.007812 L 18.392578 4.0332031 L 15.462891 4.0332031 z M 6.9921875 6.0195312 L 5.5820312 7.4296875 L 10.162109 12.019531 L 5.5820312 16.609375 L 6.9921875 18.019531 L 12.992188 12.019531 L 6.9921875 6.0195312 z M 16.017578 11.873047 L 17.865234 11.873047 L 17.865234 19.509766 L 16.017578 19.509766 L 16.017578 11.873047 z"></path>`
);
export const spellcheck = iconWrapper(
  svg`<path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path>`
);
export const sentimentVeryDissatisfied = iconWrapper(
  svg`<path d="M11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10S22 17.53 22 12 17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4.18-12.24l-1.06 1.06-1.06-1.06L13 8.82l1.06 1.06L13 10.94 14.06 12l1.06-1.06L16.18 12l1.06-1.06-1.06-1.06 1.06-1.06zM7.82 12l1.06-1.06L9.94 12 11 10.94 9.94 9.88 11 8.82 9.94 7.76 8.88 8.82 7.82 7.76 6.76 8.82l1.06 1.06-1.06 1.06zM12 14c-2.33 0-4.31 1.46-5.11 3.5h10.22c-.8-2.04-2.78-3.5-5.11-3.5z"></path>`
);
export const sentimentNeutral = iconWrapper(
  svg`<path d="M9 14h6v1.5H9z"></path><circle cx="15.5" cy="9.5" r="1.5"></circle><circle cx="8.5" cy="9.5" r="1.5"></circle><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>`
);
export const save = iconWrapper(
  svg`<path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path>`
);
export const saveAlt = iconWrapper(
  svg`<path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"></path><path fill="none" d="M0 0h24v24H0z"></path>`
);
export const search = iconWrapper(
  svg`<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>`
);
export const send = iconWrapper(
  svg`<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>`
);
export const settings = iconWrapper(
  svg`<path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>`
);
export const shield = iconWrapper(
  svg`<g transform="translate(0,-1028.3622)"><circle r="11.962877" cy="1040.3993" cx="11.962877" style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#1c8adb;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.40000001;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"></circle><path d="m 5.7226134,1035.2177 -5.71610049,5.7162 c 0.25024909,5.9429 3.35576479,9.2981 8.15641339,11.1171 2.1658257,-2.1563 4.3267587,-4.3171 6.4790417,-6.5004 z" style="fill:url(#linearGradient5637);fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" inkscape:connector-curvature="0"></path><path d="m 11.962898,1033.391 c -2.0501345,1.0013 -4.3555189,1.8135 -6.240256,1.8267 1.1575901,7.1589 1.8218083,9.9255 6.240256,12.1899 4.418427,-2.2644 5.082673,-5.031 6.240258,-12.1899 -1.884728,-0.013 -4.190132,-0.8254 -6.240258,-1.8267 z" style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" inkscape:connector-curvature="0"></path><path d="m 11.962878,1033.391 0,7.0084 5.261505,0 c 0.352779,-1.4257 0.64548,-3.121 0.978701,-5.1818 -1.884728,-0.013 -4.19008,-0.8254 -6.240206,-1.8266 z m 0,7.0084 -5.2615633,0 c 0.8727443,3.5268 2.1150231,5.3956 5.2615633,7.0082 l 0,-7.0082 z" style="fill:#000000;fill-opacity:0.13473056;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" inkscape:connector-curvature="0"></path>`
);
export const shortText = iconWrapper(
  svg`<path d="M4 9h16v2H4zm0 4h10v2H4z"></path>`
);
export const star = iconWrapper(
  svg`<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>`
);
export const starBorder = iconWrapper(
  svg`<path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>`
);
export const viewColumn = iconWrapper(
  svg`<path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path>`
);
export const viewList = iconWrapper(
  svg`<path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path>`
);
export const visibility = iconWrapper(
  svg`<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>`
);
export const visibilityOff = iconWrapper(
  svg`<path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path>`
);
export const warning = iconWrapper(
  svg`<path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>`
);
export const wrapText = iconWrapper(
  svg`<path d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"></path>`
);
export const zoomIn = iconWrapper(
  svg`<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path>`
);
