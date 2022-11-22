import React from "react";
import ChildComponent from "./ChildComponent";

export default class ClassState extends React.Component {
  constructor(props) {
    //props is an object that contains all the properties of the component
    super(props); //super is a reference to the parent class
    this.state = {
      counter: 0,

      comment: "", //this is the value of the input
      comments: [], //this is the array of comments
    };
  }

  handleIncrementClick = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value, //whatever the user is typing in
    });

    console.log(event.target.value)
  };

  handleCommentSubmit = () => {
    this.setState({
      comments: [...this.state.comments, this.state.comment],
      //[..previous state, new value for state]
    });
    //test code
    //console.log("printing the spread operator: ", this.state.comments);//prints array in previous state
    console.log("printing the current comment value: ", this.state.comment); //prints current value thats added to state
  };

  //delete comment from state
    deleteComment = (event) => {
        const index = event.target.getAttribute("data-index");
        const newComments = [...this.state.comments];
        newComments.splice(index, 1); //filter instead of splice
        this.setState({
            comments: newComments,
        });
    };
    

  render() {
    //console.log(this.state.counter); //prints current state
    console.log(this.props);

    return (
      <div>
        {/* Counter */}
        <h1>Class State</h1>
        <h1>Count: {this.state.counter}</h1>
        <button onClick={this.handleIncrementClick}>Increment Count</button>

        {/* call child component and pass state as props */}
        <ChildComponent counter={this.state.counter} />

        {/* Comments */}
        <input type="text" onChange={this.handleCommentChange} />
        <button onClick={this.handleCommentSubmit}>Submit Comment</button>

        {/* map comment to list */}
        <ul>
          {this.state.comments.map((comment, index) => {
            console.log("printing index", index);
            return (
              <div key={index}>
                <li>{comment}</li>
                <button onClick={this.deleteComment}>Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
