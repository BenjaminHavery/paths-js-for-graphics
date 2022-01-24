
import { useArmsCount } from '../store/slices/arms';


export default [
  { name: 'Tentacles', type: 'number', useValue: useArmsCount, action: 'setArmsCount' },
]
