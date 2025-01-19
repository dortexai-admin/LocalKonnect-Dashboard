import { useState } from 'react';
import { 
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import { TeamMember } from './types';
import TeamMemberForm from './TeamMemberForm';

interface TeamMemberTableProps {
  teamMembers: TeamMember[];
  onUpdate: (member: TeamMember) => void;
  onDelete: (id: number) => void;
}

export default function TeamMemberTable({ teamMembers, onUpdate, onDelete }: TeamMemberTableProps) {
  const [editMember, setEditMember] = useState<TeamMember | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const handleEdit = (member: TeamMember) => {
    setEditMember(member);
  };

  const handleDelete = (id: number) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    if (deleteId !== null) {
      onDelete(deleteId);
      setDeleteId(null);
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date of Joining</TableCell>
              <TableCell>Last Login</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teamMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.fullName}</TableCell>
                <TableCell>{member.title}</TableCell>
                <TableCell>{member.role}</TableCell>
                <TableCell>{member.status}</TableCell>
                <TableCell>{member.dateOfJoining}</TableCell>
                <TableCell>{new Date(member.lastLoginDate).toLocaleString()}</TableCell>
                <TableCell>
                  <Button onClick={() => handleEdit(member)}>Edit</Button>
                  <Button onClick={() => handleDelete(member.id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={editMember !== null} onClose={() => setEditMember(null)}>
        <DialogTitle>Edit Team Member</DialogTitle>
        <DialogContent>
          {editMember && (
            <TeamMemberForm 
              initialData={editMember} 
              onSubmit={(updatedMember) => {
                onUpdate({ ...updatedMember, id: editMember.id });
                setEditMember(null);
              }} 
            />
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={deleteId !== null} onClose={() => setDeleteId(null)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this team member?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteId(null)}>Cancel</Button>
          <Button onClick={confirmDelete} color="error">Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

