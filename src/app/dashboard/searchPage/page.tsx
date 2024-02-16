"use client";

import React, { use, useEffect, useState } from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { IMovie } from '../page';
import debounce from 'debounce';
import MovieCard from '@/components/common/MovieCard';
import { Half2Icon } from '@radix-ui/react-icons';

function page() {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState<IMovie[]>([]);

    const onSubmit = (search: string = "batman") => {
        axios.get(`http://www.omdbapi.com/?s=${search}&apikey=517cfddb`)
        .then((response) => {
            setSearchResults(response.data.Search);
        })
        .catch((error) => {
            console.log(error);
        });
        
    }

    useEffect(() => {
        console.log(search);
        console.log(searchResults);
    }, [search]);

  return (
    <section>
     <div className='flex lg:p-20 gap-5'>
          <Input type='text' placeholder="Search for a movie..." className=' border-opacity-25 text-lg' onChange={debounce((e) => setSearch(e.target.value), 300)}></Input>
          <Button onClick={() => console.log(onSubmit(search))}>Search</Button>
     </div >

     <div className='flex flex-wrap gap-10 justify-start items-center'>
       { searchResults.length <= 0 && <h2 className='lg:text-4xl text-xl mt-6 font-bold w-full text-center'>Type something for search for a movie! 🍿</h2>}
         { searchResults.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie}></MovieCard>
         ))}
     </div>
    </section>
  )
}

export default page