
import { useMemo } from 'react';

import Path from 'paths-js/path';
import Bezier from 'paths-js/bezier';

import BigSquareSvg from '/components/BigSquareSvg';


export default ({ sz = 1000 }) => {

  const path = useMemo(() => Path()
    .moveto(sz*0.10, sz*0.20)
    .lineto(sz*0.30, sz*0.50)
    .lineto(sz*0.25, sz*0.28)
    .qcurveto(sz*0.27, sz*0.30, sz*0.32, sz*0.27)
    .closepath()
  );

  const bezier = useMemo(() => Bezier({
    points: [
      [sz*1/3, sz*1/3],
      [sz*2/3, sz*1/3],
      [sz*1/3, sz*2/3],
      [sz*2/3, sz*2/3],
    ],
    tension: 0,
  }).path.closepath());

  return (
    <BigSquareSvg title='Scratchpad' {...{ sz }}>
      <path className='path' d={ path.print() }/>
      <path className='bezier' d={ bezier.print() } fill='blue' stroke='red'/>

      <style jsx>{`
        .path {
          fill: red;
        }
        .bezier {
          fill: yellow;
          stroke: blue;
          stroke-width:
        }
      `}</style>
    </BigSquareSvg>
  )
}
