import React from 'react';
import { TextField,Grid } from '@material-ui/core';
import { useFormContext,Controller } from 'react-hook-form';

const CustomTextField = ({name,label,required}) => {
    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
           <Controller
           as={TextField}
           control={control}
           fullwidth
           name={name}
           label={label}
           required={required}
           defaultValue={label}
           render={({ field }) => { return <TextField {...field} onChange={(e) => field.onChange(parseInt(e.target.value))} />; }} 
           /> 
        </Grid>
    );
}

export default CustomTextField;
