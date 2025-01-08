import * as React from 'react';
import DashboardAppBar from '../components/formsDashboard/DashboardAppBar';
import DashboardPaper from '../components/formsDashboard/DashboardPaper';
import NewButton from '../components/formsDashboard/NewButton';
import DraftsButton from '../components/formsDashboard/DraftsButton';
import SentButton from '../components/formsDashboard/SentButton';
import FormsTable from '../components/formsDashboard/FormsTable';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export default function FormsDashboard({ childrenData }) {

  const { id } = useParams();

  const child = childrenData.find(child => child.id === parseInt(id));

  if (!child) {
    return <Typography variant="h6">An Error occured, child not found!</Typography>;
  }

  return(
    <React.Fragment>
      <DashboardAppBar child_name={`${child.firstName} ${child.lastName}`}/>
      <NewButton/>
      <DraftsButton/>
      <SentButton/>
      <FormsTable/>
    </React.Fragment>
  );
}
