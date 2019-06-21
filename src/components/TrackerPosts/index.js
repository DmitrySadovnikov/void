import axios from 'axios'
import cl from 'classnames'
import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import style from './style.module.css'
import TrackerPost from '../TrackerPost/index'
import Spinner from '../Spinner/index'

class TrackerPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collection: [],
      success: false,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/web/v1/tracker_posts/search?search=learn+react', {
      method: 'GET',
    })
      .then((response) => {
        console.log(response.data.collection)
        this.setState({ collection: response.data.collection, success: true })
      })
  }

  render() {
    const { success, collection } = this.state

    return (
      <div className={cl(style.root)}>
        <Container>
          {
            (
              success && (
                <div>
                  {collection.map((post) => (
                    <TrackerPost
                      trackerPostId={post.tracker_post_id}
                      imageUrl={post.image_url}
                      title={post.title}
                      body={post.body}
                    />
                  ))}
                </div>
              )
            ) || <Spinner/>
          }
        </Container>
      </div>
    )
  }
}

export default TrackerPosts
