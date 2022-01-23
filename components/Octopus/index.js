
import { useMemo, useState } from 'react';

import useAnimationFrame from '/hooks/useAnimationFrame';

import { StoreProvider, useDispatch, usePlayingAnimation } from './store';
import { useDimSz } from './store/slices/dim';
import { useArmsCount } from './store/slices/arms';

import BigSquareSvg from '/components/BigSquareSvg';

import Body from './Body';
import Tentacles from './Tentacles';


const Octopus = () => (
  <StoreProvider>
    <_Octopus/>
  </StoreProvider>
)

export default Octopus


const _Octopus = () => {

  const dispatch = useDispatch();

  const sz = useDimSz();
  const count = useArmsCount();
  const playing = usePlayingAnimation();
  const frame = useAnimationFrame(playing);


  return (
    <div className='octopus-demo'>
      <BigSquareSvg
        title='Octopus SVG paths demo'
        color='white'
        className='octopus'
        {...{ sz }}
      >
        <Tentacles {...{ frame }}/>
        <Body/>
      </BigSquareSvg>

      <pre>{ JSON.stringify({ frame }) }</pre>

      <div className='controls'>
        {[
          { name: 'Tentacles', type: 'number', value: count, onChange: (e) => dispatch({ type: 'setArmsCount', value: e.target.value }) },
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
