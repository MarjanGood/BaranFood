import MenuPage from "../../components/templates/MenuPage";

function Menu({data}) {
    return ( <MenuPage data={data}></MenuPage> );
}

export default Menu;
export async function getStaticProps(){
    const res = await fetch(`${process.env.BASE_URL}/data`);

    //const res = await fetch("http:localhost:4000/data");
    const data = await res.json(); 

    return{
        props:{ data },
        revalidate : +process.env.REVALIDATE
    }
}