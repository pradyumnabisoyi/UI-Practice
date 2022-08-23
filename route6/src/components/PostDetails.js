import React from 'react';
import { useSearchParams, useParams } from 'react-router-dom';

const PostDetails = () => {
    //console.log(props.location.search.split('=')[1]);
    let params = useParams();
    let [searchParams] = useSearchParams();
    return (
        <div className='panel panel-danger'>
            <div className="panel-heading">{params.topic} Page</div>
            <div className="panel-body">In this {params.topic} tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!In this {params.topic} tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!In this {params.topic} tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!In this {params.topic} tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!In this HTML tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself!</div>
            <h3>Page No : {searchParams.getAll('page')}</h3>
        </div>
    )

}

export default PostDetails;