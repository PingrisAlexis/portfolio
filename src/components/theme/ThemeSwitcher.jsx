import { useTheme } from '../theme/ThemeProvider'
import {ReactSVG} from 'react-svg'

import styles  from './Theme.module.scss'
import global from '../../index.module.scss'
import sun from '../../assets/utils/sun.svg'
import moon from '../../assets/utils/moon.svg'

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();
    const handleClick = () => {
        if (typeof toggleTheme === 'function') {
          toggleTheme();
        }
      };
    return  theme === 'light' ? <ReactSVG className={`${styles.theme_switcher} ${global.square} ${global.hithere}`} src={moon} onClick={handleClick}/> 
         : <ReactSVG className={`${styles.theme_switcher} ${global.square} ${global.hithere}`} src={sun} onClick={handleClick}/>
}

export default ThemeSwitcher