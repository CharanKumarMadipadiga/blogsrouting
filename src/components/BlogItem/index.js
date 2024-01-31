import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, topic, imageUrl, avatarUrl, author} = blogDetails
  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <li className="blog-item">
        <img src={imageUrl} alt="img-url" className="image-url" />
        <div className="content-container">
          <p className="topic">{topic}</p>
          <p className="title">{title}</p>
          <div className="avatar-author-con">
            <img src={avatarUrl} alt="avatar" className="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
