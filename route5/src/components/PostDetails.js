import React from 'react';

const PostDetails = (props) => {
    console.log(props.location.search.split('=')[1]);
    return (
        <div className='panel panel-danger'>
            <div className="panel-heading">{props.match.params.topic} Page</div>
            <div className="panel-body">In this {props.match.params.topic} tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!In this {props.match.params.topic} tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!In this {props.match.params.topic} tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!In this {props.match.params.topic} tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!In this HTML tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!</div>
            <h3>Page No : {props.location.search.split('=')[1]}</h3>
        </div>
    )

}

export default PostDetails;