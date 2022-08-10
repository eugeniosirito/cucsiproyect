/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
  {
    subject: 'Ataque',
    A: 12,
    B: 10,
    fullMark: 10
  },
  {
    subject: 'Magia',
    A: 0,
    B: 10,
    fullMark: 10
  },
  {
    subject: 'Res.Magica',
    A: 0,
    B: 0,
    fullMark: 10
  },
  {
    subject: 'Vitalidad',
    A: 12,
    B: 10,
    fullMark: 10
  },
  {
    subject: 'Evasión',
    A: 8,
    B: 10,
    fullMark: 10
  }
];

export default function RadarWarrior() {
  return (
    <RadarChart cx={200} cy={250} outerRadius={150} width={500} height={500} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Mike" dataKey="A" stroke="#1A1717" fill="#1A1717" fillOpacity={0.5} dot />
    </RadarChart>
  );
}
