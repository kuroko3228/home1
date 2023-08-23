    import BestSellerItemsContent from '../BestSellerItemsContent/BestSellerItemsContent'
    import Container from '../Container/Container'
    import style from './BestSellerItems.module.css'

    function BestSellerItems(){
        const bestselleritems = [
            {}
        ]
        return(
            <Container>
                <div className={style.main_content}>
                    <p className={style.main_catalog}>Best Seller Items</p>
                    <BestSellerItemsContent/>     
                </div>
            </Container>
        )
    }
    export default BestSellerItems