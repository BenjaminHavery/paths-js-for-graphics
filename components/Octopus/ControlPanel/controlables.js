
import { usePlayingAnimation, usePlayingAi } from '../store';
import { useArmsCount } from '../store/slices/arms';


export const controlables = [
  { name: 'AI playing', type: 'checkbox', useValue: usePlayingAi, action: 'setPlayingAi' },
  { name: 'Animation playing', type: 'checkbox', useValue: usePlayingAnimation, action: 'setPlayingAnimation' },
  { name: 'Tentacle count', type: 'number', useValue: useArmsCount, action: 'setArmsCount' },
]
