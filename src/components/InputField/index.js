import cl from 'classnames'
import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import style from './style.module.css'

class InputField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: props.inputText || '',
      onSubmit: props.onSubmit,
      placeholder: props.placeholder,
    }
  }

  handleChange = (e) => {
    const { value } = e.target

    this.setState(() => ({ inputText: value }))
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const { onSubmit, inputText } = this.state

      onSubmit(inputText)
    }
  }

  render() {
    const { inputText, onSubmit , placeholder } = this.props

    return (
      <Grid
        container
        className={cl(style.root)}
        spacing={0}
        direction='column'
        justify='center'
      >
        <Grid>
          <Paper className={cl(style.paper)}>
            <InputBase
              className={cl(style.input)}
              placeholder={placeholder}
              defaultValue={inputText}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            />
            <IconButton
              className={cl(style.iconButton)}
              aria-label={placeholder}
              onClick={() => { onSubmit(inputText) }}
            >
              <SearchIcon/>
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

InputField.propTypes = {
  onSubmit: PropTypes.func,
  placeholder: PropTypes.string,
}

export default InputField
