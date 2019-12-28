import React from 'react';
import { Link } from 'gatsby';

const PostPreview = ({ post }) => (
  <article>
    <div>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
        <ul className="actions small">
            <li><Link to={post.slug} className="button small fit">Leer más</Link></li>
        </ul>
    </div>
  </article>
);

export default PostPreview;
