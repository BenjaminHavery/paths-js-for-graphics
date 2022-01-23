
import { useMemo } from 'react';

import { useDimCx, useDimCy, useDimR1 } from './store/slices/dim';
import { useArmsCount, useArmsSector1, useArmsSector2 } from './store/slices/arms';

import Tentacle from './Tentacle';


const Tentacles = ({ frame }) => {
  
  const cx = useDimCx(),
        cy = useDimCy(),
        r = useDimR1();

  const number = useArmsCount(),
        start = useArmsSector1(),
        end = useArmsSector2();


  const spread = useMemo(() => end - start, [start, end]);
  const joined = useMemo(() => (spread >= 2 * Math.PI), [spread])

  const armsRotation = useMemo(() => (Array
    .from({ length: number })
    .map((_,i) => start + spread * (i/(number - (joined ? 0 : 1))) )
  ), [number, start, spread, joined]);


  return armsRotation.map((a, i) => (
    <g key={i} transform={`rotate(${a * 360}, ${cx}, ${cy})`}>
      <Tentacle {...{
        x: cx,
        y: cy - r,
        frame,
      }}/>
    </g>
  ))
}

export default Tentacles
