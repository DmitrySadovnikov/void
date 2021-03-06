import cl from 'classnames'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import style from './style.module.css'
import Transfer from '../Transfer/index'
import Spinner from '../Spinner/index'
import * as transfersActions from '../../actions/transfersActions'
import InputField from '../InputField/index'

const mapStateToProps = (state) => {
  return {
    collection: state.transfers.collection,
    success: state.transfers.success,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    transfersActions: bindActionCreators(transfersActions, dispatch),
  }
}

class Transfers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collection: [],
      success: true,
    }
  }

  componentWillMount() {
    const { transfersActions: action } = this.props

    action.getTransfers()
  }

  handleSubmit = (inputText) => {
    const { transfersActions: action, collection } = this.props

    action.initCreateTransfer()
    action.createTransfer(inputText, collection)
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
                  <InputField onSubmit={this.handleSubmit} placeholder='Inter Magnet Link'/>
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

Transfers.propTypes = {
  transfersActions: PropTypes.object,
  collection: PropTypes.array,
  success: PropTypes.bool,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Transfers)
