import {useRouter} from "next/router";
import FoodDetailsPage from "../../components/templates/FoodDetailsPage"

function MenuId({data}) {

    console.log(data);
    const router = useRouter();
    
    if(router.isFallback){
     return <h2>Loading Page...</h2>
    }

     return (
        <div>       
            <FoodDetailsPage {...data}/>    
        </div>
      //
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

    const { params: {menuId} } = context;

   // console.log(menuId);
    const res = await fetch(`http://localhost:4000/data/${menuId}`);
    const data = await res.json();
   // console.log(data.id);

    if(!data.id){
        return {
            notFound:true
        }
    }

    return {
       props : { data },
       revalidate: 10
    }
}