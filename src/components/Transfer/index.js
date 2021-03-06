import cl from 'classnames'
import Button from '@material-ui/core/Button'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import React, { Component } from 'react'
import style from './style.module.css'
import TorrentPost from '../TorrentPost/index'
import StatusBar from '../StatusBar/index'

class Transfer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: props.status,
      createdAt: props.createdAt,
      torrentPost: props.torrentPost,
      cloudEntities: props.cloudEntities,
      torrentEntityName: props.torrentEntity.name,
      magnetLink: props.torrentEntity.magnet_link,
    }
  }

  render() {
    const {
      status,
      createdAt,
      torrentPost,
      cloudEntities,
      torrentEntityName,
      magnetLink,
    } = this.state

    return (
      <div className={cl(style.root)}>
        {
          (
            torrentPost && (
              <TorrentPost
                id={torrentPost.id}
                imageUrl={torrentPost.image_url}
                title={torrentPost.title}
                body={torrentPost.body}
                torrentSize={torrentPost.torrent_size}
              />
            )
          ) || <div>{torrentEntityName || magnetLink}</div>
        }
        {
          status === 'uploaded' ? (
            <Button
              variant='contained'
              color='primary'
              className={cl(style.button)}
              target='_blank'
              href={cloudEntities[0].cloud_file_url}
            >
              Open in Google Drive
              <CloudDownloadIcon className={cl(style.rightIcon)}>
                send
              </CloudDownloadIcon>
            </Button>
          ) : <StatusBar status={status} time={createdAt}/>
        }
      </div>
    )
  }
}

export default Transfer
