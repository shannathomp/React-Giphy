
import { Component } from 'react';
import './App.css';



class App extends Component{
state={
  giphy:[]
}


componentDidMount(){
  fetch('https://api.giphy.com/v1/gifs/trending?api_key=kF6L9YqBJ692cqHTivrUYHmlPq2ZRe26&limit=25&rating=g')
.then(response => response.json())
//   .then(json => this.setState({todos: json}))

.then(json =>{console.log(json) 
this.setState({giphy: json.data})})


}

  render(){

    
    return(
      <div>
        <h1>Giphy Images</h1>
      { this.state.giphy.map((photo,idx) => <img src={photo.images.original.url} alt={photo.title} key={idx}/>)}
      </div>
    )
  }

}


export default App;
