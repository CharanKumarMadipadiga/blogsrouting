import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}}

  componentDidMount() {
    this.getBlogItems()
  }

  getBlogItems = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)

    const updatedData = {
      id: data.id,
      author: data.author,
      title: data.title,
      topic: data.topic,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
    }

    this.setState({blogData: updatedData})
  }

  render() {
    const {blogData} = this.state
    const {title, avatarUrl, author, content, imageUrl} = blogData
    return (
      <div className="blog-items-con">
        <h1 className="title-item">{title}</h1>
        <div className="author-con">
          <img src={avatarUrl} alt="avatar" className="avatar-url" />
          <p className="author">{author}</p>
        </div>
        <div className="content--con">
          <img src={imageUrl} alt="img-url" className="image" />
          <p className="content">{content}</p>
        </div>
      </div>
    )
  }
}

export default BlogItemDetails
