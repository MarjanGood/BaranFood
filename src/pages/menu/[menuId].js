function MenuId(props) {
    return ( 
     <h3>Detail</h3>
     );
}
export default MenuId;

export async function getStaticPaths(){

    const res = await fetch("http://localhost:4000/data");
    const json = await res.json();
    const data = json.slice(0,10);

    const paths = data.map(food=>({ params : { menuId: food.id.toString() }}));
    return {
        paths,
        fallback: true,
    }

}

export async function getStaticProps(context){

    const { params:{menuId}  } = context;

   // console.log(menuId);
    const res = await fetch(`http://localhost:4000/data/${menuId}`);
    const data = await res.json();
    console.log(menuId);

    if(!data){
        return {
            notFound:true
        }
    }

    return {
       props : { data },
       revalidate: 10
    }
}