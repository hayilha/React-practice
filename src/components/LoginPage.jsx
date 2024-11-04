import React from 'react'

function LoginPage() {
  return (
    <form>
        <label htmlFor='username'>Username</label>
      <br/>
      <input id="username"/>
      <br/>
      <label  htmlFor='password'>Password</label>
      <br/>
      <input id="password" type="password"/>
      <br/>
      <button>Login</button>
      </form>
  )
}

export default LoginPage