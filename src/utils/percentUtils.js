//Returns the width of a percent of toal width, as an integer
export function getWidthAsPercentOfTotalWidth(percent, totalWidth) {
  return parseInt(totalWidth * (percent / 100), 10);
}
