
import { useMemo, useState } from 'react';

import useAnimationFrame from '/hooks/useAnimationFrame';

import BigSquareSvg from '/components/BigSquareSvg';

import Body from './Body';
import Tentacles from './Tentacles';


const Octopus = ({ sz = 1000 }) => {

  const [cx, cy, r, R] = useMemo(() => [sz*(1/2), sz*(2/5), sz*(3/20), sz*(9/20)], [sz]);
  const [number, setNumber] = useState(8);

  const tentacleMeta = useMemo(() => ({
    start: (2/3) * Math.PI,
    end: (4/3) * Math.PI,
  }), []);

  const [playing, setPlaying] = useState(1);

  const frame = useAnimationFrame(playing);


  return (
    <div className='octopus-demo'>
      <BigSquareSvg title='Octopus SVG paths demo' color='white' className='octopus'
        // onClick={() => setPlaying(!playing)}
        {...{ sz }}
      >

        <Tentacles {...{
          cx, cy, r, R, number, frame,
          strokeWidth: sz/50,
          ...tentacleMeta,
        }}/>

        <Body {...{
          cx, cy, r,
          strokeWidth: sz/150,
        }}/>

      </BigSquareSvg>

      <pre>{ JSON.stringify({ frame }) }</pre>

      <div className='controls'>
        {[
          { name: 'Tentacles', type: 'number', value: number, onChange: (e) => setNumber(Math.max(2, e.target.value)) },
          // { name: 'Animating', type: 'checkbox', value: playing, update: (v) => setPlaying(!!v) },
        ].map(({ name, type, value, onChange }, i) => (
          <p key={i}>
            <span>{name}:</span>
            <input {...{ type, value, onChange }}/>
          </p>
        ))}
      </div>


      <style jsx>{`
        .octopus-demo {
          position: relative;
          width: 100%;
          background: #2c2ce5;
        }
        :global(.octopus-demo svg.octopus) {}

        pre, .controls {
          position: absolute;
          margin: 0;
          padding: 1vmin;
          bottom: 0;
          color: white;
        }
        pre {
          left: 0;
        }
        .controls {
          right: 0;
        }
        .controls p {
          margin: 20px 0 0;
        }
        .controls span {
          margin-right: 20px;
        }
      `}</style>
    </div>
  )
}

export default Octopus
