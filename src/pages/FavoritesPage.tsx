import React from 'react'
import { useAppSelector } from '../hooks/redux';
import { useAction } from '../hooks/actions';
import { useGetFakePostsQuery } from '../store/fakeapijs/fakeapijs.api';

function FavoritesPage() {

  const {favorites} = useAppSelector(state=> state.github)
  const {removeFavorite} = useAction()

  const {posts} = useAppSelector(state=> state.fakeapi)

  const {isError, isLoading, data} = useGetFakePostsQuery('all')


  const deleteFavo = (hrf: string) =>{
    removeFavorite(hrf)
  }
  if(favorites.length === 0) return <p>No favorites</p>

  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
      <div>

        <ul className='list-none shadow-md pl-4 pr-4 pt-5 flex flex-col gap-11 overflow-y-scroll h-[400px]'>
          REPOS
          {
            favorites.map(fav=>{
              return (
                
                  <li className='w-[600px] flex justify-between' key={fav}>
                    <a href={fav}>{fav}</a>
                    <button 
                      className='py-2 px-4 bg-red-600 text-white ml-4 rounded hover:shadow-md'
                      onClick={()=> deleteFavo(fav)}
                    >DELETE</button>
                  </li>
                
              )
            })
          }
        </ul>

        <div className='w-[700px] mt-11 h-[300px] shadow-md'>
        
        </div>

      </div>
      <ul className='list-none ml-10 overflow-y-scroll shadow-md h-[700px]'>
        <h1 className='font-bold'>POSTS</h1>
        {
          data?.map(post=>{
            return(
              <li className=' bg-slate-100 shadow-md mb-5 w-[300px] p-8'>
                <p className='gd text-gray-800 font-bold'>{post.title}</p>
                <p>{post.body}</p>
                <span>post_id: {post.id}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default FavoritesPage