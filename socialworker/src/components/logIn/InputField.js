import * as React from 'react';
import { FormControl, FormLabel,  OutlinedInput } from '@mui/material';

export default function InputField({label, placeholder}) {
  return (
    <FormControl>
      <FormLabel
        sx={{ 
          marginBottom: '1vh',
          fontSize: '3vh',
        }}
      >
        {label}
      </FormLabel>
      <OutlinedInput
        placeholder={placeholder}
        sx={{ 
          borderRadius: '0.75vw',
          height: '5vh',
          marginBottom: '2vh',
        }}
      />
    </FormControl>
  );
}
