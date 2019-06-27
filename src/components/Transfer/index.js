import cl from 'classnames'
import React, { Component } from 'react'
import style from './style.module.css'
import TorrentPost from '../TorrentPost/index'

class Transfer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: props.status,
      createdAt: props.createdAt,
      torrentPost: props.torrentPost,
      cloudEntities: props.cloudEntities,
      torrentEntityName: props.torrentEntity.name,
    }
  }

  render() {
    const {
      status,
      createdAt,
      torrentPost,
      cloudEntities,
      torrentEntityName,
    } = this.state

    return (
      <div className={cl(style.root)}>
        <TorrentPost
          id={torrentPost.id}
          imageUrl={torrentPost.image_url}
          title={torrentPost.title}
          body={torrentPost.body}
        />
      </div>
    )
  }
}

export default Transfer
