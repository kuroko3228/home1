import style from './HeaderNavbarBtn.module.css'
import { CiSearch } from 'react-icons/ci'
import { GiShoppingCart } from 'react-icons/gi'
import { PiUserLight } from 'react-icons/pi'

function HeaderNavbarBtn(){
    return(
        <div style={{ height: '27px' }}>
            <button className={style.button_style}><CiSearch/></button>
            <button className={style.button_style}><GiShoppingCart/></button>
            <button className={style.button_style}><PiUserLight/></button>
        </div>
    )
}

export default HeaderNavbarBtn