import axios from 'axios'
import cl from 'classnames'
import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import style from './style.module.css'
import TorrentPost from '../TorrentPost/index'
import Spinner from '../Spinner/index'
import SearchField from '../SearchField/index'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

class TorrentPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collection: [],
      success: true,
    }
  }

  handleSearch = (searchText) => {
    this.setState(() => ({ success: false }))

    axios.get(`http://localhost:3000/web/v1/torrent_posts/search?search=${searchText}`, {
      method: 'GET',
    })
      .then((response) => {
        this.setState({ collection: response.data.collection, success: true })
      })
  }

  handleDownload = (torrent_post_id) => {
    axios.post(`http://localhost:3000/web/v1/transfers`, {
      torrent_post_id: torrent_post_id,
    })
      .then((response) => {
        this.setState({ downloading: true })
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
                  <SearchField onSearch={this.handleSearch}/>
                  {collection.map((post) => (
                    <div>
                      <TorrentPost
                        key={post.outer_id}
                        id={post.id}
                        imageUrl={post.image_url}
                        title={post.title}
                        body={post.body}
                        torrentSize={post.torrent_size}
                      />
                      <Button
                        variant='contained' color='primary'
                        className={cl(style.button)}
                        onClick={() => { this.handleDownload(post.id) }}
                      >
                        Send to Google Drive
                        <CloudUploadIcon className={cl(style.rightIcon)}>
                          send
                        </CloudUploadIcon>
                      </Button>
                    </div>
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

export default TorrentPosts
