import { Button, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';

const VisaForm = ({countryName}) => {
    const [dialog, setShowDialog]=useState()
    console.log(countryName)
    const router = useRouter();
    const form= useForm({
        defaultValues:{
            email:'',
            phone:'',
            nationality: '',
            fullName:'',
            visaIssue:'',
            mainPurpose: '',
            city:'',
            statusUK:'',
            callTime:'',
            countryName: countryName
        }
    });

    const {register, handleSubmit}= form;

    const onSubmit= (data)=>{
        console.log(data)
        if (
            data
          ) {
            emailjs
              .send(
                'service_iodawml',
                'template_lapocf5',
                { ...data },
                'tL_Vpyj5WxQRqs6ec',
              )
              .then((res) => {
                console.log(res);
                setShowDialog({
                  title: 'Successfull',
                  msg: 'Inquiry sent successfully, We will call you for further processing.',
                });
                router.push('/thankyou')
              })
              .catch((err) => {
                console.log(err);
                setShowDialog({
                  title: 'Something went wrong',
                  msg: 'Inquiry not sent.',
                });
              });
          } else {
            // setShowDialog({
            //   title: 'Error',
            //   msg: 'Kindly fill the Form.',
            // });
            router.push('/thankyou')
          }
    }
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={2}>
                <TextField label="Full name" type='text' 
                    {...register('fullName',{
                        required: 'Name is required'
                    })}
                />
                <TextField label="Phone number" type='number' 
                    {...register('phone',{
                        required: 'Phone is required'
                    })}
                />
                <TextField label="Email" type='email' 
                    {...register('email',{
                        required: 'Email is required'
                    })}
                />
                <TextField label="Nationality" type='text' {...register('nationality')}/>
                <TextField label="City" type='text' {...register('city')}/>

                <InputLabel id="status-select">Status in UK</InputLabel>
                <Select
                    {...register("statusUK")}
                    labelId="status-select"
                    id="simple-status-select"
                    label="Select Visa"
                >
                    <MenuItem value={'ukbrp'}>UK BRP</MenuItem>
                    <MenuItem value={'ukbrc'}>UK BRC</MenuItem>
                    <MenuItem value={'ukpr'}>UK PR</MenuItem>
                    <MenuItem value={'ukilr'}>UK ILR</MenuItem>
                    <MenuItem value={'ukcitizen'}>UK Citizen</MenuItem>
                </Select>

                <InputLabel id="visa-issue">Schengen Visas issued during the past three years</InputLabel>
                <Select
                    {...register("visaIssue")}
                    labelId="visa-issue"
                    id="simple-visa-issue"
                    label="Schengen Visa"
                >
                    <MenuItem value={'schengen-yes'}>Yes</MenuItem>
                    <MenuItem value={'schengen-no'}>No</MenuItem>
                </Select>

                <TextField label="Main Purpose(s) of the journey" type='text' {...register('mainPurpose')}/>
                <TextField label="What is the best time to call you?" type='text' {...register('callTime')}/>

                <Button type='submit' variant='contained' color='primary'>
                    Send Email
                </Button>
                
            </Stack>
        </form>
    </>
  )
}

export default VisaForm