import { Button, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';

const VisaForm = ({countryName}) => {
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
        if (data) {
            emailjs
              .send(
                'service_iodawml',
                'template_lapocf5',
                { ...data },
                'tL_Vpyj5WxQRqs6ec',
              )
              .then((res) => {
                router.push('/thankyou')
              })
              .catch((err) => {
              });
          } else {
            router.push('/thankyou')
          }
    }
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Stack spacing={2}>
                <div>
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
                </div>
                <div>
                    <TextField label="Email" type='email' 
                        {...register('email',{
                            required: 'Email is required'
                        })}
                    />
                    <TextField label="Nationality" type='text' {...register('nationality')}/>
                </div>
                <div>
                    <TextField label="City" type='text' {...register('city')}/>
                    <TextField label="Main Purpose(s) of the journey" type='text' {...register('mainPurpose')}/>
                </div>
                
                <TextField label="What is the best time to call you?" type='text' {...register('callTime')}/>

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

                <Button type='submit' variant='contained' color='primary'>
                    Send Email
                </Button>
                
            </Stack>
        </form>
    </>
  )
}

export default VisaForm