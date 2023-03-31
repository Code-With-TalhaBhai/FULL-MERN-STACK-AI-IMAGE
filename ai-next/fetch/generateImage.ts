
export default async function getImg(prompt:string){
    const img = await fetch(`${process.env.SERVER_ADDRESS}/api/v1/dalle`,{
       method: "POST",
       headers: {
        "Content-Type" :"application/json"
        },
       body: JSON.stringify({
        "prompt": prompt
       })
    });

    if(!img.ok){
        throw new Error("Response not coming from backend")
    }

    return img.json();
}