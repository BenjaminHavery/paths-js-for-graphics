
import { controlables } from './controlables';

import ControlRow from './ControlRow';


const ControlPanel = () => (
  <>
    <ul className='control-panel'>
      { controlables.map((c, i) => (
        <li key={i}>
          <ControlRow {...c} />
        </li>
      ))}
    </ul>


    <style jsx>{`
      ul {
        margin: 0;
        list-style: none
      }
      li {
        margin: 10px 0 0;
        padding: 0;
      }
    `}</style>
  </>
)

export default ControlPanel;
