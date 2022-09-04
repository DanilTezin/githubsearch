import React, { useState } from 'react'
import { useAction } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import {IRepo} from '../models/models'

function RepoCard({repo}: {repo: IRepo}) {

  const {addFavorite, removeFavorite} = useAction()
  const {favorites} = useAppSelector(state => state.github)

  const [isFav, setIsFav] = useState(favorites.includes(repo.html_url))

  const addToFavorite = (event: React.MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault()
    addFavorite(repo.html_url)
    setIsFav(true)
  }

  const removeToFavorite = (event: React.MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault()
    removeFavorite(repo.html_url)
    setIsFav(false)
  }

    return (
      <div className='border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
        <a href={repo.html_url} rel="noreferrer" target="_blank">
            <h1 className='text-lg font-bold'>{repo.full_name}</h1>
            <p className='text-sm'>
                Watchers: <span className='font-bold'>{repo.watchers}</span>
            </p>
            <p className='text-sm font-thin'>{repo?.description}</p>
           
            {!isFav &&

                <button 
                className='py-2 px-4 bg-yellow-400 rounded hover:shadow-md'
                onClick={addToFavorite}
                >Add</button>
            }
            {
              isFav &&
              <button 
              className='py-2 px-4 bg-red-600 rounded hover:shadow-md'
              onClick={removeToFavorite}
              >Remove</button>
            }
           
        </a>    
      </div>
    )
  }

export default RepoCard