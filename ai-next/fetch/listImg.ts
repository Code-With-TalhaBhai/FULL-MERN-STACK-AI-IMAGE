

export default async function listImg(){
    const img = await fetch(`${process.env.SERVER_ADDRESS}/api/v1/post`,{
        method: 'GET',
        headers:{
            "Content-Type" : 'application/json'
        },
    })

    if(!img.ok){
        throw new Error('Get Images not comming from backened');
    }

    return img.json();
} 