import Container from '../Container/Container'
import style from './HeaderNavbarMenu.module.css'
function HeaderNavbarMenu (){
    const listMenu = ['Home', 'Shop', 'Product', 'Blog', 'Page', 'Contact']
    const listMenuItems = listMenu.map((el) => {
        return <li className={style.list_menu}><a href="">{el}</a></li>
    })

    return (
        <ul style={{ display: 'flex' }}>
            {listMenuItems}
        </ul>
    )
}

export default HeaderNavbarMenu