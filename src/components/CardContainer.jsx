import React, {useState} from 'react'
import CardButtons from './CardButtons'
import CardForm from './CardForm'
import UserInfo from './UserInfo'

function CardContainer({users}) {
  const allUsers = users
  const [index, setIndex] = useState(0)
  const [newUser, setNewUser] = useState({
    id: allUsers.length + 1,
    name: { first: "", last: "" },
    city: "",
    country: "",
    employer: "",
    title: "",
    favoriteMovies: [
      "",
      "",
      "",
      ""
    ]
  })

  const resetNewUser = () => {
    setNewUser({
      id: allUsers.length + 1,
      name: { first: "", last: "" },
      city: "",
      country: "",
      employer: "",
      title: "",
      favoriteMovies: [
        "",
        "",
        "",
        ""
      ]
    })
  }

  const handleClick = (stepLabel) => {
    if (stepLabel === "Next") {
      setIndex(index + 1)
    } else if (stepLabel === "Previous") {
      setIndex(index - 1)
    }
  }

  const handleFormChange = (event, key, typeOfUpdate = false) => {
    let updatedUser = {...newUser};
    if(typeOfUpdate === 'name') {
      updatedUser.name[key] = event.target.value
      setNewUser((prevState) => ({
        ...prevState,
        ...updatedUser
      }))
      console.log(updatedUser)
    } else if(typeOfUpdate === 'movies'){
      updatedUser.favoriteMovies[key] = event.target.value;
      setNewUser((prevState) => ({
        ...prevState,
        ...updatedUser
      }))
      console.log(updatedUser)
    } else {
      updatedUser[key] = event.target.value
      setNewUser((prevState) => ({
        ...prevState,
        ...updatedUser
      }))
      console.log(newUser)
    }
  }
  return (
    <div>
      <CardForm userInfo={newUser} onFormChange={handleFormChange} onUserSubmit={ () => {}}/>
      <UserInfo singleUser={allUsers[index]} totalUsers={allUsers.length}/>
      {index === 0 ? null : <CardButtons buttonText={"< Previous"} handleClick={() => handleClick("Previous")}/>}
      {index === allUsers.length - 1 ? null : <CardButtons buttonText={"Next >"} handleClick={() => handleClick("Next")}/>}
    </div>
  )
}

export default CardContainer