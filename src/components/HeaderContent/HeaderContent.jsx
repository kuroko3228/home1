import style from './HeaderContent.module.css'
import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'
import Container from '../Container/Container'

function HeaderContent(){
    return(
        <Container>
            <div style={{ marginTop:'100px', display:'flex', justifyContent: 'space-between', alignItems:'center' }}>
                <button className={style.arrow}> 
                    <MdArrowBackIosNew/> 
                </button>

            <   div className={style.content_image}>
                    <img src="./img/1.svg" alt="" />
                </div>

                <div className={style.content_text}>
                    <p>Get ready for Our stylist chair</p>
                    <button className={style.shop_button}> SHOP NOW </button>
                </div>

                <button className={style.arrow}> 
                    <MdArrowForwardIos/> 
                </button>
            </div>
        </Container>
    )
}

export default HeaderContent