
import { useState } from 'react';

import useAnimationFrame from 'hooks/useAnimationFrame';


const FrameTest = () => {
  const [playing, setPlaying] = useState(false);
  const frame = useAnimationFrame(playing);

  return (
    <div>
      <h1>useAnimationFrame test</h1>
      <button onClick={() => setPlaying(!playing)}>{ !playing ? 'Start' : 'Stop' }</button>
      <pre>{ JSON.stringify({ frame }) }</pre>
    </div>
  )
}

export default FrameTest
