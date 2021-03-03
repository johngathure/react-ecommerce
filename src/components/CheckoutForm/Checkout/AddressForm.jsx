import { React } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, formProvider } from 'react-hook-form'

const AddressForm = () => {
  const methods = useForm()
  return (
    <>
      <Typography variant='h6' gutterBottom>Shipping Address</Typography>
      <FormProvider {...methods} >
        <Form onSubmit={}>
          <Grid container spacing={}>
          </Grid>
        </Form>
      </FormProvider>
    </>
  )
}

export default AddressForm
