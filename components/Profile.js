import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const Profile = ({ }) => {
  return (
    <>
      <Avatar
        sx={{
          width: 100,
          height: 100,
        }}
      >
        P
      </Avatar>
      <Typography>Pius the Dog</Typography>
      <Typography>Ask me about my epilepsy</Typography>
    </>
  );
};

export default Profile;