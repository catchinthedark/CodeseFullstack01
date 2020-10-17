import React, { Component } from 'react';

export default class User extends Component {
    render() {
        return (
            <div style={{
                backgroundImage: 'url(https://cdn.pixabay.com/photo/2019/03/28/10/19/sky-4086848_960_720.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }} >
                <div style={{
                    marginLeft: 200,
                    marginRight: 200,
                    marginTop: 50,
                    marginBottom: 50,
                    padding: 30,
                    backgroundColor: "#fce4ec",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <div style={{
                        backgroundImage: 'url(https://cdn.pixabay.com/photo/2019/03/28/10/19/sky-4086848_960_720.jpg)',
                        padding: 10
                    }}>
                        <Avatar style={{
                            margin: 1,
                            backgroundColor: "#ffa4a2"
                        }}>
                            <LocalFloristIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" style={{color: "#ffffff"}}>
                            
                        </Typography>
                    </div>
                </div>
            </div>
        )
    }
}
