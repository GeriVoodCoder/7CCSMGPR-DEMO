import * as React from 'react';
import  {Link, Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function preventDefault(event) {
  event.preventDefault();
}

export default function FormsTable() {
  const formsData = [
    { id: 0, dateSubmitted: '01 Jan 2010', status: 'approved'},
    { id: 1, dateSubmitted: '31 Dec 2011', status: 'under review'},
    { id: 2, dateSubmitted: '29 Feb, 2020', status: 'under review'},
  ];

  const navigate = useNavigate();

  const handleRowClick = (id) => {
    // navigate(`/child/${id}`);
  };

  return (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Forms
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date submitted</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {formsData.map((row) => (
            <TableRow 
              key={row.id}
              hover
              onClick={() => handleRowClick(row.id)} 
            >
              <TableCell>{row.dateSubmitted}</TableCell>
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}