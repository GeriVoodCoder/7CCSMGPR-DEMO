import DashboardPaper from '../components/childrenDashboard/DashboardPaper';
import { Box } from '@mui/material';

export default function ChildrenDashboard({ childrenData }) {
  
  return (
    <Box>
      <DashboardPaper childrenData={childrenData}/>
    </Box>
  );
}