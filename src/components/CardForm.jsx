import React from 'react'
import CardButton from './CardButton'

function CardForm({onFormChange, onUserSubmit, userInfo}) {

  return (
    <div>
        <form>
            <input name="First Name" placeholder='first name' type="text" value={userInfo.name.first} onChange={(e) => onFormChange(e, 'first', 'name')}/>
            <input name="Last Name" placeholder='last name' type="text" value={userInfo.name.last} onChange={(e) => onFormChange(e, 'last', 'name')}/>
            <input name="city" placeholder='city' type="text" value={userInfo.city} onChange={(e) => onFormChange(e, 'city')}/>
            <input name="Country" placeholder='Country' type="text" value={userInfo.country} onChange={ (e) => onFormChange(e, 'country')}/>
            <input name="Employer" placeholder='Employer' type="text" value={userInfo.employer} onChange={(e) => onFormChange(e, 'employer')}/>
            <input name="Title" placeholder='Job Title' type="text" value={userInfo.title} onChange={(e) => onFormChange(e, 'title')}/>
            <p><input name="1" placeholder='movie one' type="text" value={userInfo.favoriteMovies[0]} onChange={(e) =>onFormChange(e, 0, 'movies')}/></p>
            <p><input name="2" placeholder='movie two' type="text" value={userInfo.favoriteMovies[1]} onChange={(e) => onFormChange(e, 1, 'movies')}/></p>
            <p><input name="3" placeholder='movie three' type="text" value={userInfo.favoriteMovies[2]} onChange={(e) => onFormChange(e, 2, 'movies')}/></p>
            <CardButton buttonText={"Submit"} handleClick={onUserSubmit}/>
        </form>
    </div>
  )
}

export default CardForm