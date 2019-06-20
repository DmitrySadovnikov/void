import axios from 'axios'
import cl from 'classnames'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import React, { Component, Fragment } from 'react'
import Container from '@material-ui/core/Container'
import ReactMarkdown from 'react-markdown'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import style from './style.module.css'

class TrackerPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collection: [],
      success: false,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/web/v1/tracker_posts/search?search=learn+react', {
      method: 'GET',
    })
      .then((response) => {
        console.log(style)
        console.log(style.card)
        console.log(response.data.collection)
        this.setState({ collection: response.data.collection, success: true })
      })
  }

  render() {
    const { success, collection } = this.state

    return (
      <div className={cl(style.root)}>
        <Container>
          {success && (
            <div>
              {collection.map((post) => (
                <div className={cl(style.row)}>
                  <Grid item key={post.tracker_post_id} xs={12} md={12} spacing={2} className={cl(style.grid)}>
                    <CardActionArea component='a' href='#'>
                      <Card className={cl(style.card)}>
                        <div className={cl(style.cardDetails)}>
                          <CardContent>
                            <Typography component='h2' variant='h5'>
                              {post.title}
                            </Typography>
                            <Typography variant='subtitle1' color='textSecondary'>
                              {post.title}
                            </Typography>
                            <Typography variant='subtitle1' paragraph>
                              {post.title}
                            </Typography>
                            <Typography variant='subtitle1' color='primary'>
                              Continue reading...
                            </Typography>
                          </CardContent>
                        </div>
                        <Hidden xsDown>
                          <CardMedia
                            className={style.cardMedia}
                            image={post.image_url}
                            title='Image title'
                          />
                        </Hidden>
                      </Card>
                    </CardActionArea>
                    {/*<div>*/}
                    {/*<img src={post.image_url} alt='pic' height={200}/>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*<ReactMarkdown source={post.body}/>*/}
                    {/*</div>*/}
                  </Grid>
                </div>
              ))}
            </div>
          )}
        </Container>
      </div>
    )
  }
}

export default TrackerPosts
