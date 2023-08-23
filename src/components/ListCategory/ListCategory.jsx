import style from './ListCategory.module.css'

function ListCategory({ src, title }){
    return (
        <div className={style.category_catalog}>
            <img src={src} alt="" />
            <p>{title}</p>
        </div>
    )
}

export default ListCategory