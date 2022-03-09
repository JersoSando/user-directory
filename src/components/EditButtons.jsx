import React from 'react'
import CardButtons from './CardButton'

// delete button
// edit button ...bring up the form
// new button ...bring up the form
function EditButtons({deleteUser, isShowingForm}) {
  return (
    <div>
        <CardButtons buttonText={"Edit"} handleClick={() => isShowingForm("EDIT")}/>
        <CardButtons buttonText={"Delete"} handleClick={deleteUser}/>
        <CardButtons buttonText={"New"} handleClick={() => isShowingForm("NEW")}/>
    </div>
  )
}

export default EditButtons