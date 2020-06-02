import React, {Component} from 'react';

class RestaurantCreate extends Component {
	constructor(){
		super();
		this.state={
			name:null,
			rating:null,
			address:null
		}
	}
	create(){
		fetch('http://localhost:3000/restaurant', {
			method:"Post",
			headers:{
				'content-type':'application/json'
			},
			body:JSON.stringify(this.state)
		}).then((result) =>{
			result.json().then((resp) =>{
				alert("Restaurant has been added")
			})
		})
	}
    render(){
        return(
<div>
<h1>RestaurantCreate</h1>
<div>

<input onChange={(event) => {this.setState({name:event.target.value})}} placeholder="Restaurant Name" /><br /><br />
<input onChange={(event) => {this.setState({rating:event.target.value})}} placeholder="Restaurant Rating" /><br /><br />
<input onChange={(event) => {this.setState({address:event.target.value})}} placeholder="Restaurant Address" /><br /><br />
<button onClick={()=>{this.create()}}>Add Restaurant</button>

</div>
</div>
        );
    }
}
export default RestaurantCreate;