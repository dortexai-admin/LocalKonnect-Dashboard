import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Activity from 'components/sections/dashboard/activity';
import TaskToday from 'components/sections/dashboard/task-today';
import MoneyCard from 'components/sections/dashboard/money-cards';
import PeopleCard from 'components/sections/dashboard/people-cards';
// import RunningTask from 'components/sections/dashboard/running-task';
import WeekCalendar from 'components/sections/dashboard/week-calendar';
import MonthlyMentors from 'components/sections/dashboard/monthly-mentors';
// import Footer from 'components/common/Footer';

const Dashboard = () => {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }}>
      <Stack p={3.5} spacing={3.5} direction="column" width={{ xs: 1, md: 'calc(100% - 300px)' }}>
        
        <Activity />
        
        <Stack
          width={1}
          spacing={3.5}
          direction={{ xs: 'column', sm: 'row', md: 'column', xl: 'column' }}
        >
          <MoneyCard />
          <PeopleCard />
          {/* <RunningTask /> */}
        </Stack>

        <MonthlyMentors />

        <Box display={{ xs: 'none', md: 'block' }}>
          {/* <Footer /> */}
        </Box>
      </Stack>

      <Box
        width={{ xs: 1, md: 460 }}
        height={{ xs: 'auto', md: 'calc(100vh - 90px)' }}
        overflow="scroll"
        bgcolor="info.main"
        position="sticky"
        top={90}
        sx={{
          '&:hover, &:focus': {
            '&::-webkit-scrollbar-thumb': {
              visibility: 'visible',
            },
          },
        }}
      >
        <Stack p={3.5} spacing={3.5} width={1} direction="column">
          <WeekCalendar />
          <TaskToday />
        </Stack>

        <Box display={{ xs: 'block', md: 'none' }}>
          {/* <Footer /> */}
        </Box>
      </Box>
    </Stack>
  );
};

export default Dashboard;
