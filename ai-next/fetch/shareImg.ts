import { form } from "@/typings";

export default async function shareImg({name,prompt,photo}:form){
    const img = await fetch(`${process.env.SERVER_ADDRESS}/api/v1/post`,{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name,prompt,photo
        })
    })

    if(!img.ok){
        throw new Error("Response not coming through talha backened")
    }

    return img.json();
}