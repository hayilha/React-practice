import PropTypes from 'prop-types';
import React from 'react'
import Username from './Username';
import Userfav from './Userfav';

const Userprofile = (props) => {
  return (
    <div id="Userprofile">
       <Username Username={props.Username}/>
       <b>Age:</b>
       <span>{props.age}</span>
       <Userfav/>
    </div>
  )
}
Userprofile.propTypes={
Username:PropTypes.string.isRequired,
age:PropTypes.number.isRequired
}

export default Userprofile;