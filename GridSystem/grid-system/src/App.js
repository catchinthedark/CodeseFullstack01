import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h2>extra small: xm</h2>
      <h2>small: sm</h2>
      <h2>medium: md</h2>
      <h2>large: lg</h2>
      <h2>extra large: xl</h2>
      <Grid container xs={12} sm={10} md={8} lg={6} xl={4}>
        <Button>
          
        </Button>
      </Grid>
    </div>
  );
}

export default App;
