import style from './ContainerBox.module.css'

function ContainerBox({src, title, price}){
    return(
        <div className={style.container_box}>
            <div style={{ display:'flex', flexDirection:'column', justifyContent:'center' }}>
                <img className={style.items_image} src={src} alt="" />
                <p className={style.container_title}>{title}</p>
                <p className={style.container_price}>{price}</p>
            </div>
            <div className={style.container_buttons}>
                <div className={style.button_style}>
                    <img src="./img/9.svg" alt="" />
                </div>
                <div className={style.button_style}>
                    <img src="./img/10.svg" alt="" />
                </div>
                <div className={style.button_style}>
                    <img src="./img/11.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ContainerBox