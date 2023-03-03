import { useEffect, useState } from "react";


const Menu=()=>{
    const [allfood,updateFood]=useState([])
const getFood = ()=>{
    let url=" http://localhost:1234/foodlist"
    fetch(url)
    .then(response=>response.json())
    .then(foodArray=>{
        updateFood(foodArray)
    })
}
useEffect(()=>{
    getFood()
},[1])
const delcart=(fid)=>{
    let url=" http://localhost:1234/foodlist/"+fid;
    let postData = {
       
        method:"DELETE",
        
    }
    fetch(url,postData)
    .then(response=>response.json())
    .then(serverRes=>{
        //alert(fid + "Deleted Successfully")
        getFood()
    })

}
    return(
      <div classname="container mt-4">
        <div classname="row">
            {allfood.map((food,index)=>{
                return(
                    <div classname="col-lg-3 m-4"key={index}>
                       
                        <div classname="row p-3 rounded shadow">
                            <h5 classname="text-center text-secondary">{food.name}</h5>
                            <img src={food.image}width="250"height="250"classname="rounded"/>
                            <p classname="text-center text-danger">
                            {food.price}
                            </p>
                            <p classname="text-center"><button classname="btn btn-danger text-center" onClick={delcart.bind(this,food.id)}>Delete</button></p>
                            </div>
                    </div>
                )
            })}
        </div>
      </div>  
    )
}
export default Menu;