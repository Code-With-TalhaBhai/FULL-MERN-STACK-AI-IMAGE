'use client'
import listImg from '@/fetch/listImg';
import { form } from '@/typings';
import React, { useEffect, useState } from 'react'
import FormField from '../FormField';
import Loader from '../Loader';
import RenderCards from './RenderCards';

type Props = {}

function OptionalRenderCards({}: Props) {
  const [searchedResult,setsearchedResult] = useState<form[]>([]);
  const [searchText, setsearchText] = useState<string>('');
  const [loading, setloading] = useState<boolean>(false);
  const [allposts, setallposts] = useState<form[]>([]);
  const [searchtime, setsearchtime] = useState<any>(null);

  
  async function fetchPosts(){
    setloading(true);
    try {
      const img = await listImg();
      setallposts(img.data.reverse());
    } catch (error) {
      console.log(error);
    }
    finally{
      setloading(false);
    }
  }


  useEffect(() => {
    fetchPosts();
  }, []);
  
  function handleChange(e:React.FormEvent<HTMLInputElement>){
    setsearchText(e.currentTarget.value);
    clearTimeout(searchtime);

    setsearchtime(
    setTimeout(() => {
      const results = allposts.filter(post => post.name.toLowerCase().includes(searchText.toLowerCase())
        || post.prompt.toLowerCase().includes(searchText.toLowerCase())
      );
      setsearchedResult(results);
    }, 5000)
    )
    ;


  }


  return (
    <div>
      <FormField lableName='Search Post' handleChange={handleChange} placeholder='Search posts' name='post' type='text'/>
      {
        searchText && (
        <h2 className='font-medium text-[#666e75] text-xl mb-3'>
          Showing results for
          <span className='text-[#222328]'>
          {searchText}
          </span>
          </h2>
        )
      }

      {
      loading ? (
        <div className='absolute inset-x-[-%50] inset-y-[-50%]'>
          <Loader/>
        </div>
      ) : (
      <div className="mt-10">
        {searchText ? (
          <RenderCards
          data={searchedResult}
          title="No results found"
          />
          ):(
          <RenderCards
            data={allposts}
            title="No Post Found"
          />
        )}
      </div>
    )}
    </div>
  )
}

export default OptionalRenderCards