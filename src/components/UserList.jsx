import React from 'react'

function UserList() {

    const obj=[
       { id:1,name:"Alice",age:25},
       {id:2,name:"Ali",age:35},
       {id:3,name:"Alid",age:95},
        
    ]
  return (
    <div>
       { obj.map((user) => (
            <div key={user.id}>
                <h1>Name:{user.name}</h1>
                <h1>age:{user.age}</h1>
               

            </div>
        )

        )}

    </div>
  )
}

export default UserList