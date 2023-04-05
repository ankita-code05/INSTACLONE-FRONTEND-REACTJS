const BASE_URL= "http://localhost:4000";

export function getAllPost(){

    return fetch(`${BASE_URL}/posts`)
    .then(res => res.json())
    .catch(err => alert(err.message));
}
export function addNewPost(post){

    return fetch(`${BASE_URL}/posts`,{
        method: "POST",
        body:post
    })
    .then(res => res.json())
    .catch(err => alert(err.message));
   
}