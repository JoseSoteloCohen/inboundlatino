import React from 'react';

const CommitFeed = ({ commit }) => (
    <article id="commitFeed">
      <a target="_blank"  rel="noopener nofollow noreferrer" href={commit.url}>
        <h3>
          {commit.name}
        </h3>
        <p>{commit.title}</p>
        <p>{commit.message}</p>
        <p>Pusheado {commit.date}</p>
      </a>
    </article>
);

export default CommitFeed;
