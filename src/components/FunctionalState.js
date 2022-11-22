import React from "react";


const FunctionalState = () => {
    const [counter, setCounter] = React.useState(0);//useState is a hook for the counter (starting with 0)
    const [comment, setComment] = React.useState("");//useState is a hook for the comment (starting with empty string)
    const [comments, setComments] = React.useState([]);//useState is a hook for the comments (starting with empty array) to store all comments
    
    const handleIncrementClick = () => {
        setCounter(counter + 1);//increments the counter state by 1
    };
    
    const handleCommentChange = (event) => {
        setComment(event.target.value);//sets the comment state to whatever the user is typing in
    };
    
    const handleCommentSubmit = () => {
        setComments([...comments, comment]);//sets the comments state to the previous state and the current comment
    };
    
    const deleteComment = (event) => {
        const index = event.target.getAttribute("data-index");//need to update for filter instead of splice
        const newComments = [...comments];
        newComments.splice(index, 1);
        setComments(newComments);
    };
    
    return (
        <div>
        <h1>Functional State</h1>
        <h1>Count: {counter}</h1>
        <button onClick={handleIncrementClick}>Increment Count</button>
        <br />
        <br />
        <input
            type="text"
            placeholder="Enter a comment"
            value={comment}
            // callback function to set the comment state to whatever the user is typing in
            onChange={handleCommentChange}
        />
        {/* callback function to reference above */}
        <button onClick={handleCommentSubmit}>Submit Comment</button>
        <ul>
            {comments.map((comment, index) => (
            <li key={index}>
                {comment}
                <button data-index={index} onClick={deleteComment}>
                Delete
                </button>
            </li>
            ))}
        </ul>
        </div>
    );
    };

export default FunctionalState;