import axios from 'axios'
import cl from 'classnames'
import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import style from './style.module.css'
import Transfer from '../Transfer/index'
import Spinner from '../Spinner/index'

class Transfers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collection: [],
      success: false,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/web/v1/transfers', {
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
          {
            (
              success && (
                <div>
                  {collection.map((transfer) => (
                    <Transfer
                      key={transfer.id}
                      className={cl(style.row)}
                      status={transfer.status}
                      createdAt={transfer.created_at}
                      torrentPost={transfer.torrent_post}
                      torrentEntity={transfer.torrent_entity}
                      cloudEntities={transfer.cloud_entities}
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

export default Transfers
