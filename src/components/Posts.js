import React, {component, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import Post from './Post';
class Posts extends Component{
    constructor(){
        super();
        this.state={
            posts: []
        }
        this.getData();
    }
    getData(){
        fetch("http://127.0.0.1:8000/api/posts")
                .then(response => {
                        response.json().then((data) =>  {
                            this.updateUI(data);
                        });
        });
    }
    updateUI(data){
        this.setState({
            posts:data
        })
    }
    render(){
        return(
            <div className="container">
                 <h1>Posts</h1>
                 {this.state.posts.map((item,index) =>
                 <div>
                     <h2>{item.id}</h2>
                     <p>{item.title}</p>
                     <Link to={'/posts/'+item.id}>Detail</Link>
                 </div>
                )}
            </div>
           
        );
    }
}
export default Posts;