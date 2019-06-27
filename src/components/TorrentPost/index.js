import axios from 'axios'
import cl from 'classnames'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Collapse from '@material-ui/core/Collapse'
import Link from '@material-ui/core/Link'
import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import style from './style.module.css'

class TorrentPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.id,
      imageUrl: props.imageUrl,
      title: props.title,
      body: props.body,
      checked: false,
      downloading: false
    }
  }

  handleCollapse = () => {
    this.setState((state) => ({ checked: !state.checked }))
  }

  handleDownload = () => {
    axios.post(`http://localhost:3000/web/v1/transfers`, {
      torrent_post_id: this.state.id,
    })
      .then((response) => {
        this.setState({ downloading: true })
      })
  }

  render() {
    const {
      imageUrl,
      title,
      body,
      checked,
      downloading
    } = this.state

    return (
      <div className={cl(style.root)}>
        <Grid
          container
          item
          className={cl(style.grid)}
          xs={12}
          md={12}
          spacing={2}
        >
          <Collapse in={checked} collapsedHeight='230px'
                    className={cl(style.collapse)}>
            <CardActionArea component='a' onClick={this.handleCollapse}>
              <Card className={cl(style.card)}>
                <div className={cl(style.cardDetails)}>
                  <CardContent>
                    <Typography component='h2' variant='h5'>
                      {title}
                    </Typography>
                    <Typography variant='subtitle1' paragraph>
                      <ReactMarkdown source={body}/>
                    </Typography>
                    {(downloading && (<Typography>Downloading</Typography>)) ||
                    <Link variant='subtitle1'
                          href='#'
                          onClick={this.handleDownload}>Download</Link>}
                  </CardContent>
                </div>
                <Hidden xsDown>
                  <CardMedia
                    className={style.cardMedia}
                    image={imageUrl}
                    title='Image title'
                  />
                </Hidden>
              </Card>
            </CardActionArea>
          </Collapse>
        </Grid>
      </div>
    )
  }
}

export default TorrentPost
