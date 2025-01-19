import { useForm, Controller } from 'react-hook-form';
import { 
  TextField, Select, MenuItem, FormControl, InputLabel, Button, Grid 
} from '@mui/material';
import { TeamMember } from './types';

interface TeamMemberFormProps {
  initialData?: Omit<TeamMember, 'id'>;
  onSubmit: (data: Omit<TeamMember, 'id'>) => void;
  onCancel?: () => void;
}

export default function TeamMemberForm({ initialData, onSubmit, onCancel }: TeamMemberFormProps) {
  const { control, handleSubmit } = useForm<Omit<TeamMember, 'id'>>({
    defaultValues: initialData || {
      fullName: '',
      title: '',
      role: 'User',
      status: 'Active',
      dateOfJoining: '',
      lastLoginDate: new Date().toISOString(),
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Controller
            name="fullName"
            control={control}
            rules={{ required: 'Full name is required' }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Full Name"
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="title"
            control={control}
            rules={{ required: 'Title is required' }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Title"
                fullWidth
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Role</InputLabel>
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <Select {...field} label="Role">
                  <MenuItem value="User">User</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Manager">Manager</MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Select {...field} label="Status">
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="dateOfJoining"
            control={control}
            rules={{ required: 'Date of joining is required' }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Date of Joining"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                error={!!error}
                helperText={error?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="lastLoginDate"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Last Login Date"
                type="datetime-local"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" style={{ marginRight: '8px' }}>
            {initialData ? 'Update' : 'Add'} Team Member
          </Button>
          {onCancel && (
            <Button variant="outlined" color="secondary" onClick={onCancel}>
              Cancel
            </Button>
          )}
        </Grid>
      </Grid>
    </form>
  );
}

