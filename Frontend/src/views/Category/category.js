import React, { Component } from 'react';
import { Typography, ButtonBase, IconButton, Card, CardHeader, CardContent, CardActions, Avatar, Collapse } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class Category extends Component {
    constructor(props) {
        super(props)
        this.state={
            detail: false
        }
    }

    handleDetailClick = () => {
        this.setState({
            detail: !this.state.detail
        })
    }

    render() {
        return (
            <Card style={{maxWidth: 450}}>
              <CardHeader
                avatar={
                  <Avatar aria-label="category" style={{backgroundColor: "#ffa4a2"}}>
                    C
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={this.props.category.display}
                subheader={this.props.category.categorytId}
              />
              <CardActions>
                <ButtonBase onClick={this.handleDetailClick}>
                    <img style={{margin: 'auto', display: 'block', maxWidth: '100%', maxHeight: '100%'}} 
                        alt="complex" 
                        src={this.props.category.imageUrl} 
                    />
                </ButtonBase>
              </CardActions>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites"
                    style={{color: "#ffa4a2"}}
                >
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="show more"
                  onClick={this.handleDetailClick}
                  style={{marginLeft: 'auto'}}
                >
                    <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={this.state.detail}>
                <CardContent style={{marginLeft: 'auto'}}>
                    <Typography variant="body2" color="textSecondary">{this.props.category.description}</Typography>
                </CardContent>
              </Collapse>
            </Card>
        )
    }
}