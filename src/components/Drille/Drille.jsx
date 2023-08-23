import Container from '../Container/Container'
import style from './Drille.module.css'

function Drille(){
    return (
        <Container>
            <div className={style.background}>
                <h1>Drille</h1>
                <div style={{ display:'flex', justifyContent:'space-evenly', marginTop:'50px', marginBottom:'100px' }}>
                    <div className={style.links}>
                            <h2>ABOUT US</h2>
                            <ul>
                                <li> <a href="">ABOUT US</a> </li>
                                <li> <a href="">Contact Us</a> </li>
                                <li> <a href="">Privacy Policy</a> </li>
                                <li> <a href="">Terms of Service</a> </li>
                            </ul>
                    </div>
                    <div className={style.links}>
                            <h2>COMPANY</h2>
                            <ul>
                                <li> <a href="">Explore World</a> </li>
                                <li> <a href="">Trending Video</a> </li>
                                <li> <a href="">Book a Trip</a> </li>
                                <li> <a href="">Visit Gallery</a> </li>
                            </ul>
                    </div>
                    <div className={style.links}>
                            <h2>USEFUL LINKS</h2>
                            <ul>
                                <li> <a href="">Buy this theme</a> </li>
                                <li> <a href="">Drile Landing</a> </li>
                                <li> <a href="">Documentation</a> </li>
                                <li> <a href="">Video tutorial</a> </li>
                            </ul>
                    </div>
                    <div className={style.follow_us}>
                            <h2>FOLLOW US</h2>
                            <ul>
                                <li> <img src="./img/28.svg" alt="" /> Facebook</li>
                                <li> <img src="./img/29.svg" alt="" /> Twitter</li>
                                <li> <img src="./img/30.svg" alt="" /> Instagram</li>
                            </ul>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Drille