import React from 'react';
import './App.css'
import { Box, CssBaseline } from '@mui/material';
import ImageUploader from './components/ImageUploader';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      backgroundColor: '#3e4396'
    }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          textAlign: 'center',
        }}
      >
        <CssBaseline />
        <Navigation></Navigation>
      </Box>
    </div>
  );
};

export default App;
