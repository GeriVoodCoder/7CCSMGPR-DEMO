import DashboardAppBar from './DashboardAppBar';
import ChildrenTable from './ChildrenTable';
import { Box } from '@mui/material';

export default function DashboardPaper({ childrenData }) {
  
  return (
    <Box>
      <DashboardAppBar/>
      <ChildrenTable childrenData={childrenData}/>
    </Box>
  );
}