import * as React from 'react';
import  {Link, Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function preventDefault(event) {
  event.preventDefault();
}

export default function ChildrenTable({ childrenData }) {
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/child/${id}`);
  };

  return (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Children in your care
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell>gender</TableCell>
            <TableCell align="right">Date of birth</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {childrenData.map((row) => (
            <TableRow 
              key={row.id}
              hover
              onClick={() => handleRowClick(row.id)} 
            >
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.gender}</TableCell>
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
              <TableCell align="right">{row.dateOfBirth}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more children
      </Link>
    </Paper>
  );
}