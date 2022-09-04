import React from 'react'


const userStyle = {

    border: "1px solid black",
    marginBottom: 25,
    padding: 20,
    width: 500,
    borderRadius: 15
}

const User = ({githubUsers}) => {
  return (
    <div>
        {githubUsers.map(user =>{

            return(

                <div style={userStyle}>
                    <img src={user.avatar_url} alt="user" />
                    <h3>{user.login}</h3>
                    <a href={user.html_url}>{user.html_url}</a>
                </div>
            )
        })}
    </div>
  )
}

export default User