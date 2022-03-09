import React, {useState} from 'react'
import CardButton from './CardButton'
import CardForm from './CardForm'
import EditButtons from './EditButtons'
import UserInfo from './UserInfo'

function CardContainer({users}) {
  // const allUsers = users
  const [index, setIndex] = useState(0)
  const [allUsers, setAllUsers] = useState(users)
  const [shouldShow, setShouldShow] = useState(false)
  const [formType, setFormType] = useState("NEW")
  // do not delete this line or uncomment
  const [currentUser, setCurrentUserInfo] = useState(allUsers[index])
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
      // do not delete this line or uncomment this line
      setIndex((prevIndex) => {
        setCurrentUserInfo(allUsers[prevIndex + 1])
        return prevIndex + 1
      })
      // setIndex(index + 1);
    } else if (stepLabel === "Previous") {
      // do not delete this line or uncomment this line
      setIndex((prevIndex) => {
        setCurrentUserInfo(allUsers[prevIndex - 1])
        return prevIndex - 1
      })
      // setIndex(index - 1);
    }
  }

  const handleFormChange = (event, key, typeOfUpdate = false) => {
    
    switch(formType) {
      case "NEW": {
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
        break;
      case "EDIT": {
        let updatedUser = {...currentUser};
        if(typeOfUpdate === 'name') {
          updatedUser.name[key] = event.target.value
         setCurrentUserInfo((prevState) => ({
            ...prevState,
            ...updatedUser
          }))
          console.log(updatedUser)
        } else if(typeOfUpdate === 'movies'){
          updatedUser.favoriteMovies[key] = event.target.value;
         setCurrentUserInfo((prevState) => ({
            ...prevState,
            ...updatedUser
          }))
          console.log(updatedUser)
        } else {
          updatedUser[key] = event.target.value
         setCurrentUserInfo((prevState) => ({
            ...prevState,
            ...updatedUser
          }))
          console.log(newUser)
        }
      }

    } //end of switch statement
  } //end of handleFormChange

  const handleUserSubmit = (event) => {
    event.preventDefault();
    const updatedList = [...allUsers]
    updatedList.push(newUser)
    setAllUsers(updatedList);
    resetNewUser();

  }

  const handleDeleteUser = () => {
    const deletedList = [...allUsers]
    deletedList.splice(index, 1)
    setAllUsers(deletedList);

    index === allUsers.length -1 ? setIndex(index - 1) : setIndex(index + 1)
  }

  const isShowingForm = (formType) => {
    setFormType(formType)
    setShouldShow(!shouldShow)
  }
  // TODO: logic
  // handle onSubmit for adding a user to the list from the form
  // handle deleting a user from the list
  // handle editing a user at any given location
  // build out edit, add and delete buttons
  // add state to container to handle showing/not showing the form when edit or new button is "clicked"
  // handle null values being passed to form

  return (
    <div>
      {shouldShow && <CardForm userInfo={formType === "EDIT" ? currentUser : newUser} onFormChange={handleFormChange} onUserSubmit={ (event) => {handleUserSubmit(event)}}/>}
      <UserInfo singleUser={allUsers[index]} totalUsers={allUsers.length}/>
      {index === 0 ? null : <CardButton buttonText={"< Previous"} handleClick={() => handleClick("Previous")}/>}
      <EditButtons deleteUser={handleDeleteUser} isShowingForm={isShowingForm}/>
      {index === allUsers.length - 1 ? null : <CardButton buttonText={"Next >"} handleClick={() => handleClick("Next")}/>}
    </div>
  )
}

export default CardContainer