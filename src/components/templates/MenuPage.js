
import Card from "../modules/Card";
import styles from "./MenuPage.module.css";

function MenuPage({data}) {

    return ( 
    <>
    <div className ={styles.container}>
     <h2>Menu</h2>
     <div className ={styles.subContainer}>
       {data.map(f=><Card key={f.id} {...f}>{f.name}</Card>)}
     </div>
    </div>
    </> 
    );

}

export default MenuPage;