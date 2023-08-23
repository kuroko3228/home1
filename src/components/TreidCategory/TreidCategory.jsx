    // import style from './TreidCategory.module.css'
    import style from './TreidCategory.module.css'
    import Container from '../Container/Container'
    import { MdArrowBackIosNew } from 'react-icons/md'
    import { MdArrowForwardIos } from 'react-icons/md'
    import ListCategory from '../ListCategory/ListCategory'
    import ContainerBox from '../ContainerBox/ContainerBox'

    function TreidCategory(){
        const listCategories = [
            { src: './img/22.svg', title: 'DRESSING TABLE' },
            { src: './img/17.svg', title: 'LAMP ' },
            { src: './img/18.svg', title: 'CABINET' },
            { src: './img/19.svg', title: 'SOFA' },
            { src: './img/20.svg', title: 'CHAIR' },
            { src: './img/21.svg', title: 'BED' },
        ]

        const categoriesItems = [
            { src: './img/23.svg', title: 'DRESSING TABLE', price: ' $1,200.00' },
            { src: './img/24.svg', title: 'LAMP ', price: '$899.00' },
            { src: './img/25.svg', title: 'CABINET', price: '$350.00' },
            { src: './img/26.svg', title: 'SOFA', price: '$800.00' },
        ]

        return (
            <Container>
            <div style={{marginBottom:'100px'}}>
                <div style={{ marginTop:'150px', display:'flex', flexDirection:'column', alignItems:'center' }}>
                    <h1 className={style.title}>TRENDING CATEGORIES</h1>
                </div>
                <div style={{ marginTop:'100px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <div className={style.arrow}>
                        <MdArrowBackIosNew/>
                    </div>
                    <div className={style.category}>
                        {listCategories.map((el)=>{
                            return <ListCategory src={el.src} title={el.title}/>
                        })}
                    </div>
                    <div className={style.arrow}>
                        <MdArrowForwardIos/>
                    </div>
                </div>
                <div style={{ marginTop:'100px', display:'flex', justifyContent:'space-between' }}>
                    {categoriesItems.map((el)=>{
                        return <ContainerBox src={el.src} title={el.title} price={el.price}/>
                    })}  
                </div>
            </div>
            
        </Container>
        )
    }

    export default TreidCategory