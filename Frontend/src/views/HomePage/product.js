import React, { Component } from 'react';
import { Typography, ButtonBase, IconButton, Card, CardHeader, CardContent, CardActions, Avatar, Collapse } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export default class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detail: false,
            cart: false,
            quantity: 0
        }
    }

    handleDetailClick = () => {
        this.setState({
            detail: !this.state.detail
        })
    }

    handleCartClick = () => {
        this.setState({
            cart: !this.state.cart
        })
    }

    handleAddToCartClick(event) {
        this.setState({
            quantity: event.target.value
        })
    }

    render() {
        return (
            <Card style={{maxWidth: 450}}>
              <CardHeader
                avatar={
                  <Avatar aria-label="product" style={{backgroundColor: "#ffa4a2"}}>
                    P
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={this.props.product.display}
                subheader={this.props.product.productId}
              />
              <CardActions>
                <ButtonBase onClick={this.handleDetailClick}>
                    <img style={{margin: 'auto', display: 'block', maxWidth: '100%', maxHeight: '100%'}} 
                        alt="complex" 
                        src={this.props.product.imageUrl} />
                </ButtonBase>
              </CardActions>
              <CardContent>
                    <Typography variant="body2" color="textSecondary" style={{fontStyle: 'italic'}}>
                      {this.props.product.description}
                    </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites"
                    style={{color: "#ffa4a2"}}
                >
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="cart"
                    onClick={this.handleCartClick} 
                    style={{color: "#7986cb", marginLeft: 'auto'}}   
                >
                    <ShoppingCartIcon />
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
                    <Typography variant="body2" color="textSecondary">Provider: {this.props.product.provider}</Typography>
                    <Typography variant="body2" color="textSecondary">Instock: {this.props.product.instock}</Typography>
                    <Typography variant="body2" color="textSecondary">Status: {this.props.product.status}</Typography>
                </CardContent>
              </Collapse>
              <Collapse in={this.state.cart}>
                <CardContent style={{marginLeft: 'auto'}}>
                    <label>
                        Quantity: 
                        <input type="number" onChange={this.handleOrderClick} />    
                    </label>
                    <IconButton aria-label="add to cart"
                        onClick={this.handleAddToCartClick}
                        style={{color: "#7986cb"}}
                    >
                        <AddShoppingCartIcon />
                    </IconButton>
                </CardContent>
              </Collapse>
            </Card>
          );
    }
}
