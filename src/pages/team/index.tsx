import { useState } from 'react';
import { Container, Typography, Fab, Dialog, DialogTitle, DialogContent } from '@mui/material';
import TeamMemberTable from './TeamMemberTable';
import TeamMemberForm from './TeamMemberForm';
import { TeamMember } from './types';
import { Plus} from 'lucide-react'

const initialTeamMembers: TeamMember[] = [
  {
    id: 1,
    fullName: 'John Doe',
    title: 'Software Engineer, Engineering',
    role: 'User',
    status: 'Active',
    dateOfJoining: '2023-01-15',
    lastLoginDate: '2023-06-10T14:30:00',
  },
  // Add more initial team members as needed
];

export default function TeamManagement() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialTeamMembers);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const addTeamMember = (newMember: Omit<TeamMember, 'id'>) => {
    const id = Math.max(...teamMembers.map(m => m.id), 0) + 1;
    setTeamMembers([...teamMembers, { ...newMember, id }]);
    setIsAddDialogOpen(false);
  };

  const updateTeamMember = (updatedMember: TeamMember) => {
    setTeamMembers(teamMembers.map(member => 
      member.id === updatedMember.id ? updatedMember : member
    ));
  };

  const deleteTeamMember = (id: number) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Team Management
      </Typography>
      <TeamMemberTable 
        teamMembers={teamMembers}
        onUpdate={updateTeamMember}
        onDelete={deleteTeamMember}
      />
      <Fab 
        color="primary" 
        aria-label="add" 
        style={{ position: 'fixed', bottom: 16, right: 16 }}
        onClick={() => setIsAddDialogOpen(true)}
      >
        <Plus />
      </Fab>
      <Dialog open={isAddDialogOpen} onClose={() => setIsAddDialogOpen(false)}>
        <DialogTitle>Add New Team Member</DialogTitle>
        <DialogContent>
          <TeamMemberForm onSubmit={addTeamMember} />
        </DialogContent>
      </Dialog>
    </Container>
  );
}

