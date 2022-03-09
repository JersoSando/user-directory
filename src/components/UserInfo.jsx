import React from 'react'

function UserInfo({singleUser, totalUsers}) {
  return (
    <div>
        <h2>{`${singleUser.id} / ${totalUsers}`}</h2>
        <h2>Name: {singleUser.name.first} {singleUser.name.last} </h2>
        <div className='personal-info'>
            <p>From: {singleUser.city}, {singleUser.country}</p>
            <p>Job Title: {singleUser.title}</p>
            <p>Employer: {singleUser.employer}</p>
        </div>

        <div className='favorite-movies'>
            <h3>Favorite Movies</h3>
                <ol>
                    {singleUser.favoriteMovies.map((value, i) => <li key={i}>{value}</li>)}
                </ol>
        </div>
    </div>
  )
}

export default UserInfo