import cl from 'classnames'
import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import style from './style.module.css'

class SearchField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchText: props.searchText || '',
      onSearch: props.onSearch,
    }
  }

  handleChange = (e) => {
    const { value } = e.target

    this.setState(() => ({ searchText: value }))
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const { onSearch, searchText } = this.state

      onSearch(searchText)
    }
  }

  render() {
    const { searchText, onSearch } = this.props

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
              placeholder='Search'
              defaultValue={searchText}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            />
            <IconButton
              className={cl(style.iconButton)}
              aria-label='Search'
              onClick={() => { onSearch(searchText) }}
            >
              <SearchIcon/>
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

SearchField.propTypes = {
  onSearch: PropTypes.func,
}

export default SearchField
