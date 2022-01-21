
import { useMemo, useState } from 'react';

import useAnimationFrame from '/hooks/useAnimationFrame';

import BigSquareSvg from '/components/BigSquareSvg';

import Body from './Body';
import Tentacles from './Tentacles';


const Octopus = ({ sz = 1000 }) => {

  const [cx, cy, r, R] = useMemo(() => [sz*(1/2), sz*(2/5), sz*(3/20), sz*(9/20)], [sz]);
  
  const tentacleMeta = useMemo(() => ({
    number: 10,
    start: (2/3) * Math.PI,
    end: (4/3) * Math.PI,
  }), []);

  const [playing, setPlaying] = useState(true);

  const frame = useAnimationFrame(playing);


  return (
    <>
      <BigSquareSvg title='Octopus SVG paths demo' color='white' onClick={() => setPlaying(!playing)} {...{ sz }}>

        <Tentacles {...{
          cx, cy, r, R, frame,
          strokeWidth: sz/50,
          ...tentacleMeta,
        }}/>

        <Body {...{
          cx, cy, r,
          strokeWidth: sz/150,
        }}/>

      </BigSquareSvg>

      <pre>{ JSON.stringify({ frame }) }</pre>


      <style jsx>{`
        * { color: white; }
        pre {
          margin: 0;
          padding: 1vmin 0;
          transform: translateY(-100%);
        }
      `}</style>
    </>
  )
}

export default Octopus
