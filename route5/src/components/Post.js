import React from 'react';
import { Link } from 'react-router-dom';

const Post = () => {

    return (
        <div className='panel panel-success'>
            <div className="panel-heading">Post Page</div>
            <div className="panel-body">
                In this HTML tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!In this HTML tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!In this HTML tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!In this HTML tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!In this HTML tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!
                <h2>JavaScript</h2>
                <Link to={`posts/javascript`} className="btn btn-success">Details</Link>
                <h2>Html</h2>
                <Link to={`posts/html`} className="btn btn-success">Details</Link>
                <h2>CSS</h2>
                <Link to={`/posts/css`} className="btn btn-info">Details</Link>
                <h2>Node</h2>
                <Link to={`/posts/Node?page=3`} className="btn btn-info">Details</Link>
            </div>
        </div>
    )

}

export default Post;