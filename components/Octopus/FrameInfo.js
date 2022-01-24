
import { useFrame } from './store/extras/frame';


const FrameInfo = () => {
  const frame = useFrame();
  
  return (
    <>
      <pre className='frame-info'>
        { JSON.stringify({ frame }) }
      </pre>
      
      <style jsx>{`
        pre {}
      `}</style>
    
    </>
  )
}

export default FrameInfo;
