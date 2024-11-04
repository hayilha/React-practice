import React from 'react';
function Render(props){
   
    //fruits.sort((a,b)=> a.name.localeCompare(b.name))//alphabetical
    //fruits.sort((a,b)=> a.name.localCompare(b.name))//reverse alphabetical
    //fruits.sort((a,b)=>a.calories-b.calories);//numeric
   //fruits.sort((a,b)=>b.calories-a.calories);//reverse numeric
  //const highcal=fruits.filter(fruit=>fruit.calories>=90)filtering
   // const listItems=highcal.map(high=>   <li key={high.id}>{high.name}: &nbsp;<b>{high.calories}</b></li>)
   const category=props.category;
   const ItemList=props.items;
    const listItems=ItemList.map(item=> <li key={item.id}>{item.name}:&nbsp;{item.calories}</li>)
return(
    <>
    <h3 className='list-cat' >{category}</h3>
    <ol className='lists'>{listItems}</ol>
    </>
)
    
}
export default Render