import React from 'react';
//import Login from './components/Login'; 
import Render from './components/Render';

const App = () => {
  const fruits=[{id:1,name:"apple",calories:38},
    {id:2,name:"orange",calories:93},
    {id:3,name:"coconut",calories:98},
    {id:4,name:"watermelon",calories:34},
    {id:5,name:"melon",calories:59}
]
const veges=[{id:1,name:"carrot",calories:68},
  {id:2,name:"lettuce",calories:89},
  {id:3,name:"cucumber",calories:26},
  {id:4,name:"onion",calories:93},
  {id:5,name:"tomatoes",calories:47},
]
  return (
    <div>
      
 <Render items={fruits}category="Fruits"/>
 <Render items={veges}category="Vegetables"/> 
    </div>
  );
};

export default App;

