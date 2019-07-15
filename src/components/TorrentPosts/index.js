import cl from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import style from './style.module.css'
import TorrentPost from '../TorrentPost/index'
import Spinner from '../Spinner/index'
import SearchField from '../SearchField/index'
import * as torrentPostsActions from '../../actions/torrentPostsActions'

const mapStateToProps = (state) => {
  return {
    collection: state.torrentPosts.collection,
    success: state.torrentPosts.success,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    torrentPostsActions: bindActionCreators(torrentPostsActions, dispatch),
  }
}

class TorrentPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collection: [],
      success: true,
    }
  }

  handleSearch = (searchText) => {
    const { torrentPostsActions: action } = this.props

    action.initSearchTorrentPosts()
    action.searchTorrentPosts(searchText)
  }

  handleDownload = (torrentPostId) => {
    const { torrentPostsActions: action, collection } = this.props

    action.downloadTorrentPost(torrentPostId, collection)
  }

  render() {
    const { success, collection } = this.props

    return (
      <div className={cl(style.root)}>
        <Container>
          {
            (
              success && (
                <div>
                  <SearchField onSearch={this.handleSearch}/>
                  {collection.map((post) => (
                    <div key={post.id}>
                      <TorrentPost
                        id={post.id}
                        imageUrl={post.image_url}
                        title={post.title}
                        body={post.body}
                        torrentSize={post.torrent_size}
                      />
                      <div>
                        {
                          post.downloading ? (
                            <Button
                              variant='contained'
                              color='default'
                              className={cl(style.button)}
                            >
                              Downloading...
                            </Button>
                          ) : (
                            <Button
                              variant='contained'
                              color='primary'
                              className={cl(style.button)}
                              onClick={() => { this.handleDownload(post.id) }}
                            >
                              Send to Google Drive
                              <CloudUploadIcon className={cl(style.rightIcon)}>
                                send
                              </CloudUploadIcon>
                            </Button>
                          )
                        }
                      </div>

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

TorrentPosts.propTypes = {
  torrentPostsActions: PropTypes.object,
  collection: PropTypes.array,
  success: PropTypes.bool,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TorrentPosts)
