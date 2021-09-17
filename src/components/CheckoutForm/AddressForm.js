import React, {useState} from 'react';
import { InputLabel,Select,MenuItem,Button,Grid,Typography } from '@material-ui/core';
import { useForm,FormProvider } from 'react-hook-form';
import CustomTextField from './CustomTextField';

import {commerce} from '../../lib/commerce';

const AddressForm = () => {
    const methods = useForm();
    const [shippingCountries, setshippingCountries] = useState([]);
    const [shippingCountry, setshippingCountry] = useState('');
    const [shippingSubdivisions, setshippingSubdivision] = useState('');
    const [shippingOptions, setshippingOptions] = useState('');
    const [shippingOption, setshippingOption] = useState('');

    const fetchShippingCountries = async (checkoutTokenId) => {
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);
        
        setshippingCountries(countries);
    }

    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <CustomTextField required name='firstName' label='First Name' />
                        <CustomTextField required name='lastName' label='Last Name' />
                        <CustomTextField required name='address1' label='Address' />
                        <CustomTextField required name='email' label='Email' />
                        <CustomTextField required name='city' label='City' />
                        <CustomTextField required name='zip' label='ZIP / Postal code' />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    select me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Subdivision</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    select me
                                </MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={} fullWidth onChange={}>
                                <MenuItem key={} value={}>
                                    select me
                                </MenuItem>
                            </Select>
                        </Grid>
                        
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
