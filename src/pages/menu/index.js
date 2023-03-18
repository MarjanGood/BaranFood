import MenuPage from "../../components/templates/menuPage";

function Menu({data}) {
    return ( <MenuPage data={data}></MenuPage> );
}

export default Menu;
export async function getStaticProps(){

    const res = await fetch("http:localhost:4000/data");
    const data = await res.json(); 

    return{
        props:{ data }
    }
}