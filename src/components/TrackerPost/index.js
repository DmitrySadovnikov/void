import cl from 'classnames'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Collapse from '@material-ui/core/Collapse'
import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import style from './style.module.css'

class TrackerPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trackerPostId: props.trackerPostId,
      imageUrl: props.imageUrl,
      title: props.title,
      body: props.body,
      checked: false,
    }
  }

  handleCollapse = () => {
    this.setState((state) => ({ checked: !state.checked }))
  }

  render() {
    const {
      trackerPostId,
      imageUrl,
      title,
      body,
      checked,
    } = this.state

    return (
      <div className={cl(style.row)}>
        <Grid
          item
          className={cl(style.grid)}
          key={trackerPostId}
          xs={12}
          md={12}
          spacing={2}
        >
          <Collapse in={checked} collapsedHeight='230px'>
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

export default TrackerPost
