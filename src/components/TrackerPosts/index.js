import axios from 'axios'
import cl from 'classnames'
import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import style from './style.module.css'
import TrackerPost from '../TrackerPost/index'
import Spinner from '../Spinner/index'
import SearchField from '../SearchField/index'

class TrackerPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collection: [],
      success: true,
    }
  }

  handleSearch = (searchText) => {
    this.setState(() => ({ success: false }))

    axios.get(`http://localhost:3000/web/v1/tracker_posts/search?search=${searchText}`, {
      method: 'GET',
    })
      .then((response) => {
        this.setState({ collection: response.data.collection, success: true })
      })
  }

  render() {
    const { success, collection } = this.state

    return (
      <div className={cl(style.root)}>
        <Container>
          <SearchField onSearch={this.handleSearch}/>
          {
            (
              success && (
                <div>
                  {collection.map((post) => (
                    <TrackerPost
                      key={post.tracker_post_id}
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
