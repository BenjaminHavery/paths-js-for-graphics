
import { StoreProvider } from './store';
import { useDimSz } from './store/slices/dim';

import BigSquareSvg from '/components/BigSquareSvg';

import Body from './Body';
import Arms from './Arms';
import FrameInfo from './FrameInfo';
import ControlPanel from './ControlPanel';


const Octopus = () => (
  <StoreProvider>
    <_Octopus/>
  </StoreProvider>
)

export default Octopus


const _Octopus = () => {

  const sz = useDimSz();

  return (
    <div className='octopus-demo'>
      <BigSquareSvg
        title='Octopus SVG paths demo'
        color='white'
        className='octopus'
        {...{ sz }}
      >
        <Arms/>
        <Body/>
      </BigSquareSvg>
      <FrameInfo/>
      <ControlPanel/>


      <style jsx>{`
        .octopus-demo {
          position: relative;
          width: 100%;
          background: #2c2ce5;
        }
        // :global(.octopus-demo svg.octopus) {}

        :global(.octopus-demo .frame-info),
        :global(.octopus-demo .control-panel) {
          position: absolute;
          margin: 0;
          padding: 1vmin;
          bottom: 0;
          color: white;
        }
        :global(.octopus-demo .frame-info) { left: 0; }
        :global(.octopus-demo .control-panel) { right: 0; }
      `}</style>
    </div>
  )
}
