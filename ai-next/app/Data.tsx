import React, { use } from 'react'

type Props = {}

async function getData(){
    const data = await fetch('http://localhost:3000/api/hello',{
        cache:'no-cache'
    });
    // const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    return data.json();
}


const Data = ({}: Props) => {

    const data = use(getData());
    console.log('data');
    console.log(data);
    // console.log(data.then(res=>console.log(res)));
    // console.log(data);
  return (
    <div>
        <p>Data from typing</p>
    </div>
  )
}

export default Data