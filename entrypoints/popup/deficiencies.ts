export type Deficiency = {
  label: string;
  value: Deficiencies;
};

export enum Deficiencies {
  Trichromacy = 'trichromacy',
  Protanomaly = 'protanomaly',
  Protanopia = 'protanopia',
  Deuteranomaly = 'deuteranomaly',
  Deuteranopia = 'deuteranopia',
  Tritanomaly = 'tritanomaly',
  Tritanopia = 'tritanopia',
  Achromatomaly = 'achromatomaly',
  Achromatopsia = 'achromatopsia'
}

export const VISUAL_DEFICIENCIES: Deficiency[] = [
  {
    label: 'Trichromacy – Normal',
    value: Deficiencies.Trichromacy
  },
  {
    label: 'Protanomaly',
    value: Deficiencies.Protanomaly
  },
  {
    label: 'Protanopia',
    value: Deficiencies.Protanopia
  },
  {
    label: 'Deuteranomaly',
    value: Deficiencies.Deuteranomaly
  },
  {
    label: 'Deuteranopia',
    value: Deficiencies.Deuteranopia
  },
  {
    label: 'Tritanomaly',
    value: Deficiencies.Tritanomaly
  },
  {
    label: 'Tritanopia',
    value: Deficiencies.Tritanopia
  },
  {
    label: 'Achromatomaly',
    value: Deficiencies.Achromatomaly
  },
  {
    label: 'Achromatopsia',
    value: Deficiencies.Achromatopsia
  }
];
