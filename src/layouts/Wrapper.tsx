import { Outlet } from 'react-router-dom';

// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Wrapper = () => (
    <Box component="main" sx={{ minHeight: 'calc(100vh - 127px - 347px)' }}>
        <Container maxWidth="xl" sx={{ px: { sm: 3, xs: 0 } }}>
            <Outlet />
        </Container>
    </Box>
);

export default Wrapper;
