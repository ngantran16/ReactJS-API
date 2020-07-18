import React, {component, Component} from 'react';
import {withRouter} from 'react-router';
class Post extends Component{
    constructor(props){
        super(props);
        this.state={
            post:[]
        }
        this.id = this.props.match.params.id;
        this.getDetail(this.id);
    }
    getDetail(id){
        fetch('http://127.0.0.1:8000/api/posts/' + id)
                .then(response => {
                    response.json().then((data) =>  {
                this.updateUI(data);
                });
        });
    }
    updateUI(data){
        this.setState({
            post:data
        })
    }
    render(){
        return(
            <div>
                {this.state.post.map((item,index) =>
                 <div>
                     <h2>{item.id}</h2>
                     <p>{item.title}</p>
                     <p>{item.content}</p>
                 </div>
                )}
            </div>
        );
    }
}
export default withRouter(Post);
