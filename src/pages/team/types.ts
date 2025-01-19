export interface TeamMember {
    id: number;
    fullName: string;
    title: string;
    role: 'User' | 'Admin' | 'Manager';
    status: 'Active' | 'Inactive';
    dateOfJoining: string;
    lastLoginDate: string;
  }
  
  