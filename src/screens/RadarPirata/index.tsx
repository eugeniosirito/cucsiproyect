/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data = [
  {
    subject: 'Fuerza',
    A: 80,
    B: 110,
    fullMark: 150
  },
  {
    subject: 'Inteligencia',
    A: 120,
    B: 130,
    fullMark: 150
  },
  {
    subject: 'Carisma',
    A: 50,
    B: 130,
    fullMark: 150
  },
  {
    subject: 'Constitución',
    A: 99,
    B: 100,
    fullMark: 150
  },
  {
    subject: 'Agilidad',
    A: 85,
    B: 90,
    fullMark: 150
  }
];

export default function RadarPirata() {
  return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Mike" dataKey="A" stroke="#1A1717" fill="#1A1717" fillOpacity={0.5} dot />
    </RadarChart>
  );
}
