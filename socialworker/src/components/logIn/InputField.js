import * as React from 'react';
import { FormControl, FormLabel,  OutlinedInput, FormHelperText } from '@mui/material';

export default function InputField({label, placeholder, onchange}) {
  return (
    <FormControl>
      <FormLabel
        sx={{ 
          marginBottom: '1vh',
          fontSize: '1vw',
        }}
      >
        {label}
      </FormLabel>
      <OutlinedInput
        placeholder={placeholder}
        sx={{ 
          borderRadius: '0.75vw',
          height: '2.5vw',
        }}
      />
      <FormHelperText sx={{ marginTop: 0.5 }}>
      </FormHelperText>
    </FormControl>
  );
}
