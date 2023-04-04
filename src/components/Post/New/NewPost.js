import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewPost.css";
import Header from "../Header/Header";
import { addNewPost } from '../../../services/http-services';
import { PostList } from "../../../contexts/PostContext";


export default function NewPost() {


  const ListNavigation = useNavigate();
  const { addPost } = useContext(PostList);

  const [formData, setData] = useState({
    image: null,
    Author: "",
    Location: "",
    Description: ""
  })

  function CaptureForm(event) {
    event.preventDefault();
    const formValues = new formData(event.target)
    formValues.append("date", new Date().toDateString())
    formValues.append("like", 0)
    formValues.append("Id", new Date().getTime())

    addNewPost(formValues).then(res => {
      addNewPost(res.data);
      setData({
        image: null,
        Author: "",
        Location: "",
        Description: ""
      });
      ListNavigation("post/all");
    }).catch(err=>{
      console.log("FAILED TO POST DATA" + err.meaasge())
    })
  }
  return (
    <>
      <Header />

      <div className="Card-container">
        <form onSubmit={CaptureForm}>
          <input type="file" name="image" ></input>
          <input type="text" name="Author-name" placeholder="Author" />
          <input type="text" name="location" placeholder="Location" />
          <input type="text" name="desc" className="desc" placeholder="Description" />
          <br />
          <button className="post">Post</button>
        </form>
      </div>
    </>
  );
}
