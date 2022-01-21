
import { useMemo } from 'react';

import Tentacle from './Tentacle';


export default ({
  number = 80,
  r = 100,
  R = 200,
  cx = 50,
  cy = 50,
  start = 0,
  end = 2 * Math.PI,
  strokeWidth = 5,
  frame,
}) => {

  const l = useMemo(() => R - r, [R, r]);
  const spread = useMemo(() => end - start, [start, end]);
  const joined = useMemo(() => (spread >= 2 * Math.PI), [spread])

  const tentacles = useMemo(() => Array.from({ length: number }, (_, i) => ({
    degrees: (start + (i/(number - (joined ? 0 : 1))) * (spread)) * (180/Math.PI), // Rotate perpendicular to body surface
  })), [number, start, spread, joined]);


  return (
    <>
      { tentacles.map((t, key) => (
        <g transform={`rotate(${t.degrees}, ${cx}, ${cy})`} {...{ key }}>
          <Tentacle {...{
            x: cx,
            y: cy - r,
            l, strokeWidth,
            frame,
          }}/>
        </g>
      ))}

      {/* <style jsx>{``}</style> */}
    </>
  )
}
