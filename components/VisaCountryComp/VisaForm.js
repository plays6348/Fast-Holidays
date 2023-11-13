import { Button, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';
import { theme } from '@/styles/theme';

const useStyles= makeStyles(()=>{
    return {
        divMargin:{
            display: 'flex',
            justifyContent: 'space-around',
            [theme.breakpoints.down("md")]: {
                flexDirection: 'column'
              },
        },
    }
})

const VisaForm = ({countryName,countryImg}) => {
    const classes= useStyles();
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
            responsePref:'',
            inquiryLocation: countryName
        }
    });

    const {register, handleSubmit, reset}= form;

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
                <div className={classes.divMargin}>
                    <TextField label="Full name" type='text' 
                    sx={{
                        width:'45%',
                        [theme.breakpoints.down("md")]: {
                            width: '100%',
                            marginBottom: '16px'
                          },
                    }}
                        {...register('fullName',{
                            required: 'Name is required'
                        })}
                    />
                    <TextField label="Phone number" type='number' 
                    sx={{
                        width:'45%',
                        [theme.breakpoints.down("md")]: {
                            width: '100%'
                          },
                    }}
                        {...register('phone',{
                            required: 'Phone is required'
                        })}
                    />
                </div>
                <div className={classes.divMargin}>
                    <TextField label="Email" type='email'
                    sx={{
                        width:'45%',
                        [theme.breakpoints.down("md")]: {
                            width: '100%',
                            marginBottom: '16px'
                          },
                    }}
                        {...register('email',{
                            required: 'Email is required'
                        })}
                    />
                    <TextField label="Nationality" 
                    sx={{
                        width:'45%',
                        [theme.breakpoints.down("md")]: {
                            width: '100%'
                          },
                    }}
                    type='text' {...register('nationality',{
                        required: 'Nationality is required'
                    })}/>
                </div>
                <div className={classes.divMargin}>
                    <TextField label="City" 
                    sx={{
                        width:'45%',
                        [theme.breakpoints.down("md")]: {
                            width: '100%',
                            marginBottom: '16px'
                          },
                    }}
                    type='text' {...register('city',{
                        required: 'City Name is required'
                    })}/>
                    <TextField label="Main Purpose(s) of the journey" 
                    sx={{
                        width:'45%',
                        [theme.breakpoints.down("md")]: {
                            width: '100%'
                          },
                    }}
                    type='text' {...register('mainPurpose',{
                        required: 'Main Purpose is required'
                    })}/>
                </div>

                <TextField label="What is the best time to call you?" type='text' {...register('callTime',{
                            required: 'Time to call you is required'
                        })}/>

                <TextField
                    defaultValue={countryName}
                    disabled
                    label="Selected Country"
                    variant="outlined"
                    sx={{
                        ".MuiOutlinedInput-root": {
                        flexDirection: "row",
                        },
                        img: {
                        width: '30px',
                        marginRight: '10px'
                        }
                    }}
                    InputProps={{
                        startAdornment: <img src={countryImg}/>
                    }}
                />

                <InputLabel id="response-preferred-by">Response Preferred By</InputLabel>
                <Select
                    {...register("responsePref",{
                        required: 'Response By is required'
                    })}
                    labelId="response-preferred-by"
                    id="simple-response-pref"
                    label="Response Prefer"
                >
                    <MenuItem value={'prefer-email'}>By Email</MenuItem>
                    <MenuItem value={'prefer-call'}>By Call</MenuItem>
                </Select>

                <InputLabel id="status-select">Status in UK</InputLabel>
                <Select
                    {...register("statusUK",{
                        required: 'UK status is required'
                    })}
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
                    {...register("visaIssue",{
                        required: 'Schengen Visa Issue is required'
                    })}
                    labelId="visa-issue"
                    id="simple-visa-issue"
                    label="Schengen Visa"
                >
                    <MenuItem value={'schengen-yes'}>Yes</MenuItem>
                    <MenuItem value={'schengen-no'}>No</MenuItem>
                </Select>

                <Button onClick={()=> reset({
                    inquiryLocation: countryName
                })} type='submit' variant='contained' color='primary'>
                    Send Email
                </Button>
                
            </Stack>
        </form>
    </>
  )
}

export default VisaForm