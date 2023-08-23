import Container from "../Container/Container";
import HeaderNavbarLogo from "../HeaderNavbarLogo/HeaderNavbarLogo";
import HeaderNavbarMenu from "../HeaderNavbarMenu/HeaderNavbarMenu";
import HeaderNavbarBtn from "../HeaderNavbarBtn/HeaderNavbarBtn";


function HeaderNavbar (){
    return (
        <Container>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <HeaderNavbarLogo />
                <HeaderNavbarMenu />
                <HeaderNavbarBtn />
            </div>
            
        </Container>
    )
}

export default HeaderNavbar