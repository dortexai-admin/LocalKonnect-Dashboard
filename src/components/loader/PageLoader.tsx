import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const PageLoader = () => {
  return (
    <Box width={1} height="100vh">
      <LinearProgress />
    </Box>
  );
};

export default PageLoader;
