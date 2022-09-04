import React, { useEffect, useState } from 'react'
import RepoCard from '../components/RepoCard'
import { useDebounce } from '../hooks/debounce'
import {useLazyGetUserReposQuery, useSearchUsersQuery} from '../store/github/github.api'
import { gapi } from 'gapi-script';
import Login from '../components/login';
import Logout from '../components/logout';

 

function HomePage() {


  const [search, setSearch] = useState('')
  const [dropdown, setDropdown] = useState(false)

  const debounce = useDebounce(search)

  const {isLoading, isError, data} = useSearchUsersQuery(debounce, 
    {
      skip: debounce.length < 3
    })
  const [fetchRepo, {isLoading: reposLoading, data: dataRepo}] = useLazyGetUserReposQuery()

  useEffect(()=>{
    setDropdown(debounce.length > 3 && data?.length! > 0)   
     
  },[debounce, data])


  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: "782832509175-hge0ffgjnqhvh5smcb5vc2g1qi7fohef.apps.googleusercontent.com",
        scope: ""
      })
    };

    gapi.load('client:auth2', start)
  })



  const handlerRepo = (username: string) =>{
    fetchRepo(username)
    setDropdown(false)
  }  

  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>

    
      {!localStorage.getItem("accessTokenName") && <Login/>}
      {isError && <p className='text-center text-red-700'>Error response</p>}
      
      {localStorage.getItem("accessTokenName") && 
        <div>
          <img src={String(localStorage.getItem("accessTokenImage"))} alt="" />
          <p>{localStorage.getItem("accessTokenName")}</p>

          <Logout/>
        </div>
      }


      <div className='relative ml-10 w-[560px]'>
        <input 
            type="text"
            className='border py-2 px-4 w-full h-[42px] mb-2'
            placeholder='Search GitHub username ...'
            value={search}
            onChange={e =>setSearch(e.target.value)}
        />

        {dropdown &&
          <ul className='list-none items-center justify-center absolute top-[62px] max-h-[400px] overflow-y-scroll left-0 right-0  shadow-md bg-white'>
            {isLoading && <p className='text-center text-green-400'>Loading</p>}
        
            {data?.map(e=>{

            return( 
                      <li onClick={()=> handlerRepo(e.login)} className='flex text-center rounded hover:bg-gray-500 hover:text-white w-[520px] items-center' key={e.id}>
                        <img className='max-w-[60px] rounded-full mr-7' src={e.avatar_url} alt="sdfgd" />
                        {e.login}
                      </li>
                  )  
            })}
          </ul> 
        }

        <div className='container'>

          {reposLoading && <p>Repos is loading...</p>}
          {dataRepo?.map(repo => <RepoCard key={repo.id} repo={repo}/>)}

        </div>
      </div>


    </div>
  )
}

export default HomePage