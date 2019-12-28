import React from "react"
import { Link } from "gatsby"
const PostLink = ({ post }) => (
        <ul className="actions">
            <li><Link to={post.slug} className="button">Leer más</Link></li>
        </ul>
);
export default PostLink