import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  Avatar7,
  Avatar8,
  Thumb1,
  Thumb2,
  Thumb3,
  Thumb4,
  Thumb5,
  Thumb6,
  Thumb7,
  Thumb8,
} from './images';

export interface Task {
  id: number;
  title: string;
  category: string;
  thumb: string;
  progress: number;
  daysLeft: number;
  avatars: string[];
}

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Fixing Pipeline Issues',
    category: 'Plumber',
    thumb: Thumb1,
    progress: 75,
    daysLeft: 3,
    avatars: [Avatar3, Avatar1, Avatar6, Avatar8, Avatar2],
  },
  {
    id: 2,
    title: 'New Wire fitting in Home(2 floor)',
    category: 'Electrician',
    thumb: Thumb2,
    progress: 85,
    daysLeft: 4,
    avatars: [Avatar5, Avatar2, Avatar7, Avatar3, Avatar1],
  },
  {
    id: 3,
    title: 'Hair Cut and Shave',
    category: 'Barber',
    thumb: Thumb3,
    progress: 65,
    daysLeft: 3,
    avatars: [Avatar4, Avatar6, Avatar1, Avatar5, Avatar7],
  },
  {
    id: 4,
    title: 'Give grocery items to Customer',
    category: 'Delivery',
    thumb: Thumb4,
    progress: 95,
    daysLeft: 1,
    avatars: [Avatar8, Avatar3, Avatar5, Avatar2, Avatar6],
  },
  {
    id: 5,
    title: 'Creating Awesome Mobile Apps',
    category: 'UI UX Design',
    thumb: Thumb5,
    progress: 90,
    daysLeft: 1,
    avatars: [Avatar7, Avatar4, Avatar1, Avatar6, Avatar3],
  },
  {
    id: 6,
    title: 'Creating Fresh Website',
    category: 'Web Developer',
    thumb: Thumb6,
    progress: 85,
    daysLeft: 2,
    avatars: [Avatar2, Avatar5, Avatar8, Avatar4, Avatar7],
  },
  {
    id: 7,
    title: 'Painting Home',
    category: 'Painter',
    thumb: Thumb7,
    progress: 100,
    daysLeft: 1,
    avatars: [Avatar1, Avatar7, Avatar3, Avatar8, Avatar5],
  },
  {
    id: 8,
    title: 'Foot Massage and Spa',
    category: 'Beauty',
    thumb: Thumb8,
    progress: 75,
    daysLeft: 3,
    avatars: [Avatar6, Avatar8, Avatar2, Avatar1, Avatar4],
  },
];
