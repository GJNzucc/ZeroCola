import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostListPage extends Component {
    render() {
        return(
            <div>
                <h1>PostListPage</h1>
                <ul>
                    <li>
                        <Link to="/post/1">
                            <h2>This is Title</h2>
                        </Link>
                        <p>2017-12-05</p>
                    </li>
                    <li>
                        <h2>This is Title</h2>
                        <p>2017-12-05</p>
                    </li>
                    <li>
                        <h2>This is Title</h2>
                        <p>2017-12-05</p>
                    </li>
                </ul>
            </div>
        );
    }
}

export default PostListPage;