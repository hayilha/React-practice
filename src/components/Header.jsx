import React from 'react'

const Header = () => {
  const isAuthenticated=true
  if (isAuthenticated){
    return(
      <div>
        <h1>Welcome,User</h1>
      </div>
    )
  }
    return(
<div>
  <span>Not logged in</span>
</div>
    )
  }
  


export default Header;