
import { useMemo } from 'react';

import makeSector from 'paths-js/sector';


const Body = ({
  r = 100,
  cx = 50,
  cy = 50,
  strokeWidth = 5,
}) => {
  
  const dMouth = useMemo(() => makeSector({
    center: [cx, cy + r/4],
    r: 0,
    R: r/2,
    start: (1/2) * Math.PI,
    end: (3/2) * Math.PI,
  }).path.print(), [r, cx, cy]);

  return (
    <>
      <circle className='body' {...{ r, cx, cy, strokeWidth }}/>
      
      { Array.from({ length: 2 }).map((_, i) => (
        <circle
          className='eye'
          r={r/4}
          cx={cx - (r/3) * (!i ? 1 : -1)}
          cy={cy - r/6}
          key={i}
          {...{ strokeWidth }}
        />
      ))}
      
      <path className='mouth' d={dMouth} {...{ strokeWidth }}/>
      

      <style jsx>{`
        .body {
          fill: pink;
          stroke: pink;
        }
        .eye {
          fill: white;
          stroke: grey;
        }
        .mouth {
          fill: white;
          stroke: grey;
        }
      `}</style>
    </>
  )
}

export default Body
