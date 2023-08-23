import Container from "../Container/Container";
import ContainerBox from "../ContainerBox/ContainerBox";
import style from './BestSellerItemsContent.module.css'

function BestSellerItemsContent(){
    const bestsellertoken = [
        { src: './img/2.svg', title: 'Metal Vintage Pendant', price:'$79.00' },
        { src: './img/3.svg', title: 'Klosh Table Clock', price: '$99.00' },
        { src: './img/4.svg', title: 'Arne Dining Chair', price: '$350.00' },
        { src: './img/5.svg', title: 'Klosh Wall Clock', price: '$80.00 – $129.00' }
    ]
    const bestsellertoken2 = [
        { src: './img/6.svg', title: 'Modern Outdoor Chair', price: '$79.00' },
        { src: './img/7.svg', title: 'Vipp Wool Pillow', price: '$99.00' },
        { src: './img/8.svg', title: 'Modern Bedroom Storage', price: '$499.00' }
    ]
    return(
        <Container>
            <div>
                <div className={style.first_line}>
                    {bestsellertoken.map((el) => {
                        return (
                            <ContainerBox src={el.src} title={el.title} price={el.price}/>
                        )
                    })}
                </div>
                <div className={style.second_line}>
                    {bestsellertoken2.map((el) => {
                        return (
                            <ContainerBox src={el.src} title={el.title} price={el.price}/>
                        )
                    })}
                </div>
            </div>
            
        </Container>
    )
}
export default BestSellerItemsContent