import React from 'react';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';
import Profile from './Profile';

const SidebarBox = styled('div')({
  color: 'yellow',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  padding: '30px',
});

const Layout = ({ children }) => {
  return (
    <Grid
      container
      spacing={0}
    >
      <Grid item xs={12} md={3}>
        <Paper
          square
          elevation={0}
          sx={{
            backgroundColor: 'orange',
            height: '100vh',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <SidebarBox>
            <Profile />
            <Box component="nav">
              <Breadcrumbs>
                <Link href="/">home</Link>
                <Link href="/posts">posts</Link>
              </Breadcrumbs>
            </Box>
          </SidebarBox>
        </Paper>
      </Grid>
      <Grid item xs={12} md={9}>
        <Box
          component="main"
          sx={{
            height: '100vh',
            backgroundColor: 'teal',
          }}
        >
          {children}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Layout;