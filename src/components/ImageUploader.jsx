import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import { Upload as UploadIcon, LocationOn as LocationIcon } from '@mui/icons-material';
import { bg2 } from '../assets/images'

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreview('');
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleUpload = () => {
    if (!image || !location) {
      alert('Please select an image and get your location.');
      return;
    }

    setLoading(true);

    // Create a FormData object to simulate data submission
    const formData = new FormData();
    formData.append('image', image);
    formData.append('location', JSON.stringify(location));

    // Simulate an upload request
    setTimeout(() => {
      setLoading(false);
      alert('Image and location uploaded successfully!');
      setImage(null);
      setPreview('');
      setLocation(null);
    }, 2000);
  };

  return (
    <div className='image-upload-container' style={{
        backgroundImage: `url(${bg2})`, /* Change this to your image path */
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px', /* Adjust padding as needed */
        borderRadius: '8px', /* Optional: for rounded corners */
    }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          textAlign: 'center',
          mt: 4,
          p: 2,
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: 3,
          maxWidth: '400px',
          mx: 'auto', // Center horizontally
          backgroundColor: '#141b2d'
        }}
      >
        <Typography variant="h6" gutterBottom sx={{
          color: '#fff',
        }}>
          Upload and Preview Image with Location
        </Typography>
        <input
          accept="image/*"
          type="file"
          id="image-upload"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <label htmlFor="image-upload">
          <Button
            variant="contained"
            component="span"
            startIcon={<UploadIcon />}
          >
            Choose Image
          </Button>
        </label>
        <Button
          variant="outlined"
          color="primary"
          sx={{ ml: 2 }}
          startIcon={<LocationIcon />}
          onClick={getLocation}
        >
          Get Location
        </Button>
        {preview && (
          <Box mt={2} sx={{ position: 'relative', display: 'inline-block' }}>
            <img
              src={preview}
              alt="Preview"
              style={{ maxWidth: '100%', borderRadius: '8px' }}
            />
            <Button
              onClick={handleRemoveImage}
              variant="contained"
              color="error"
              sx={{ position: 'absolute', top: 8, right: 8 }}
            >
              Remove
            </Button>
          </Box>
        )}
        {location && (
          <Typography variant="body2" mt={2}>
            Location: Latitude {location.lat}, Longitude {location.lon}
          </Typography>
        )}
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          onClick={handleUpload}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Upload'}
        </Button>
      </Box>
    </div>
  );
};

export default ImageUploader;
