import { Metadata } from 'next';
import Landing from './Landing';

export const metadata: Metadata = {
  title: "Ishan's Portfolio",
  description: "Welcome to Ishan Sarode's portfolio - Full Stack Developer and Software Engineer",
};

export default function HomePage() {
  return <Landing />;
}
