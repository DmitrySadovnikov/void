import cl from 'classnames'
import React, { Component } from 'react'
import style from './style.module.css'
import TorrentPost from '../TorrentPost/index'
import StatusBar from '../StatusBar/index'
import Button from '@material-ui/core/Button'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'

class Transfer extends Component {
  constructor(props) {
    super(props)
    console.log(props.cloudEntities)
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
          torrentSize={torrentPost.torrent_size}
        />
        {
          status === 'uploaded' ?
            <Button
              variant='contained' color='primary'
              className={cl(style.button)}
              target='_blank'
              href={cloudEntities[0].cloud_file_url}
            >
              Open in Google Drive
              <CloudDownloadIcon className={cl(style.rightIcon)}>
                send
              </CloudDownloadIcon>
            </Button>
            : <StatusBar status={status} time={createdAt}/>
        }
      </div>
    )
  }
}

export default Transfer
