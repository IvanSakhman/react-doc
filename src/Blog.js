import React, { Component } from 'react';

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

export const posts = [
    {id: 1, title: 'How are you', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You cn install React from npm.'},
];

export default Blog;