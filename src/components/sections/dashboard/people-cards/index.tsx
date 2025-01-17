import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { UserRound, Wallet, UserRoundCog , Activity } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  period: string;
  icon: React.ReactNode;
}

const StatCard = ({ title, value, change, period, icon }: StatCardProps) => {
  const isPositive = change > 0;

  return (
    <Card sx={{ height: '100%', position: 'relative' }}>
      <CardContent>
        <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'rgba(0, 0, 255, 0.1)',
            }}
          >
            {icon}
          </Box>
        </Box>
        <Typography color="text.secondary" fontSize={14} gutterBottom>
          {title}
        </Typography>
        <Typography variant="h4" component="div" fontWeight="bold" gutterBottom>
          {value}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography
            component="span"
            sx={{
              px: 1,
              py: 0.5,
              borderRadius: 1,
              fontSize: 14,
              bgcolor: isPositive ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
              color: isPositive ? 'success.main' : 'error.main',
            }}
          >
            {isPositive ? '+' : ''}{change}%
          </Typography>
          <Typography color="text.secondary" fontSize={14}>
            {period}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default function Cards() {
  const stats = [
    {
      title: 'Total Users',
      value: '3130',
      change: 12,
      period: 'Last 30 days',
      icon: <UserRound />,
    },
    {
      title: 'Service Provider',
      value: '1130',
      change: -2,
      period: 'Last 30 days',
      icon: <UserRoundCog  />,
    },
    {
      title: 'End Users',
      value: '2000',
      change: 15.8,
      period: 'Last 30 days',
      icon: <Wallet />,
    },
    {
      title: 'CRO',
      value: '110',
      change: -10.1,
      period: 'Conversion Rate',
      icon: <Activity />,
    },
  ];

  return (
    <Stack
      component={Paper}
      spacing={2.5}
      width={{ xs: 1, sm: 1, md: 1, xl: 1 }}
      alignItems={{ xs: 'center', md: 'flex-start' }}
      direction={{ xs: 'row', sm: 'column', md: 'row', xl: 'column' }}
      bgcolor="info.main"
      // sx={{ flex: 1}}
    >

      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={3}>
          {stats.map((stat) => (
            <Grid item xs={12} sm={12} md={6} lg={6} key={stat.title}>
              <StatCard {...stat} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  );
}

