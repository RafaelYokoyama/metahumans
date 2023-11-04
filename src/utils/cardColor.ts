type ColorPalette = [string, string];

type ColorRange = {
  min: number;
  max: number;
  colors: ColorPalette;
};

const colorRanges: ColorRange[] = [
  { min: 0, max: 249, colors: ['#343434', 'rgba(217,212,212,0.75)'] },
  { min: 250, max: 349, colors: ['#15371F', 'rgba(33,199,70,0.75)'] },
  { min: 350, max: 499, colors: ['#311849', 'rgba(174,38,186,0.75)'] },
  { min: 500, max: 599, colors: ['#573C1A', 'rgba(255,215,0,0.75)'] },
  { min: 600, max: 999, colors: ['#5B1B1B', 'rgba(255,0,0,0.75)'] },
];

function getColorPaletteForNumber(number: number): ColorPalette {
  const matchedRange = colorRanges.find(({ min, max }) => number >= min && number <= max);
  return matchedRange ? matchedRange.colors : ['#343434', 'rgba(217,212,212,0.75)'];
}

export default getColorPaletteForNumber;
