
import Octopus from '/components/Octopus';
import Scratchpad from '/components/Scratchpad';
import FrameTest from '/components/FrameTest';

const PageHome = () => (
  <div className='layout'>
    {/* <Scratchpad/> */}
    <Octopus/>

    {/* <FrameTest/> */}

    <style jsx>{`
      .layout {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        background: #2c2ce5;
      }
    `}</style>
    <style jsx global>{`

    `}</style>
  </div>
)

export default PageHome
