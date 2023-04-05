import React, { createContext, useEffect, useState } from "react";
import { getAllPost } from "../services/http-services";

export const PostList = createContext();
export default function PostContext({ children }) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPost().then(response => {
            setPosts(response.result);
        })
    }, [])

    return <PostList.Provider value={{
        posts: posts,
        addPost: (post) => {
            const latestPost = [post, ...posts];
            setPosts(latestPost);
        }
    }}>
        {children}
    </PostList.Provider>

}