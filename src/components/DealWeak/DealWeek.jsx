import Container from '../Container/Container'
import style from './DealWeek.module.css'

function DealWeek() {
    return (
        <Container>
            <div style={{ display:'flex', justifyContent:'flex-end' }}>
                <div className={style.background_box}>
                    <div className={style.inner_white_box}>
                        <img src="./img/12.svg" alt="" />
                    </div>
                    <div className={style.inner_content_box}>
                        <button className={style.first_button}>DEAL OF THE WEEK</button>
                        <div className={style.price_of_week}>
                            from
                            <span className={style.price}> $99.99</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris eget hendrerit odio, non ultrices lorem. Donec vel 
                            vestibulum eros. Curabitur fringilla arcu varius.
                        </p>
                        <button className={style.second_button}>SHOP NOW</button>
                        <div className={style.list_items}>
                            <div className={style.item}><img src="./img/13.svg" alt="" /></div>
                            <div className={style.item}><img src="./img/14.svg" alt="" /></div>
                            <div className={style.item}><img src="./img/15.svg" alt="" /></div>
                            <div className={style.item}><img src="./img/16.svg" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </Container>
    )
}

export default DealWeek