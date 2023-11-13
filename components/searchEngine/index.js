import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import styles from '@/styles/components/searchbar.module.css';
import { data } from '../../utils/searchJson';
import { useRouter } from 'next/router';

import {
  TextField,
  Button,
  ThemeProvider,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Autocomplete,
  Skeleton,
  Dialog,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Tabs,
  Stack,
} from '@mui/material';
import { convertString } from '../../utils/helpers';
import MuiPhoneNumber from 'material-ui-phone-number';
import LoadingButton from '@mui/lab/LoadingButton';
import Close from '@mui/icons-material/Close';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { airlines } from '../../utils/data';

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 80,
    },
  },
};

export default function Searchbar() {
  const router = useRouter();
  const [type, setType] = useState('business');
  const [selectedDept, setSelectedDept] = useState(' ');
  const [selectedDest, setSelectedDest] = useState(' ');
  const [route, setRoute] = useState();
  const [deptdate, setDeptDate] = useState();
  const [arriveDate, setArriveDate] = useState();
  const [open, setOpen] = useState();
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [airline, setAirline] = useState('all');
  const [value, setValue] = React.useState(0);

  const handleChange1 = (event, newValue) => {
    setValue(newValue);
  };

  // console.log("selectedDept", selectedDept);
  // console.log("selectedDest", selectedDest);

  const [details, setDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    returnDate: '',
    deptDate: '',
    budget: '',
    dept: '',
    dest: '',
    msg: '',
    adult: 1,
  });

  const handleChange = (type, value) => {
    if (type == 'dep') {
      setSelectedDept(value);
    } else if (type == 'dest') {
      setSelectedDest(value);
    } else if (type == 'phone') {
      setDetails({ ...details, phone: value });
    }
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  function generateLink(dept, dest, airline) {
    let deptCode = '';
    let destCode = '';
    const airlineCode = airline.split("-")[1]?.trim() ? airline.split("-")[1]?.trim() : "all";

    if (dept.length > 3 && dest.length > 3) {
      const _dept = dept.split('-')[1].trim().split('');
      deptCode = [_dept[1], _dept[2], _dept[3]].join('');

      const _dest = dest.split('-')[1].trim().split('');
      destCode = [_dest[1], _dest[2], _dest[3]].join('');

      setRoute(`/fares?dept=${deptCode}&dest=${destCode}&airline=${airlineCode}`);
      return;
    } else if (dept.length > 3) {
      const _dept = dept.split('-')[1].trim().split('');
      deptCode = [_dept[1], _dept[2], _dept[3]].join('');

      setRoute(`/fares?dept=${deptCode}&dest=all&airline=${airlineCode}`);
    } else if (dest.length > 3) {
      const _dest = dest.split('-')[1].trim().split('');
      destCode = [_dest[1], _dest[2], _dest[3]].join('');

      setRoute(`/fares?dept=all&dest=${destCode}&airline=${airlineCode}`);
    }

    // console.log(deptCode);
    // console.log(destCode);
  }

  const [enquiryLocation, setEnquiryLocation] = useState();
  const { airlineSlug } = router.query;
  const pathName = router.pathname;
  let pathname = pathName;
  useEffect(() => {
    if (airlineSlug) {
      setEnquiryLocation(airlineSlug);
    } else {
      if (pathname === '/') {
        pathname = '/home';
      }
      setEnquiryLocation(pathname);
    }
  }, [airlineSlug, pathName]);

  // const handleSearch = () => {
  //   if (arriveDate && deptdate && selectedDept && selectedDest) {
  //     setOpen(true);
  //   } else {
  //     setShowDialog({
  //       title: 'Error',
  //       msg: 'Kindly fill the Form.',
  //     });
  //   }
  // };

  function validateEmail(email) {
    if (email.length > 0) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
      }
      return false;
    } else {
      return true;
    }
  }

  const handleSearch = () => {
    setLoading(true);
    if (
      arriveDate &&
      deptdate &&
      selectedDept.length > 1 &&
      selectedDest.length > 1 &&
      details.email &&
      validateEmail(details.email) &&
      details.phone.length === 15 &&
      details.name.length > 0
    ) {
      emailjs
        .send(
          'service_iodawml',
          'template_mqvxf7a',
          {
            name: details.name,
            email: details.email,
            phone: details.phone,
            returnDate: arriveDate,
            deptDate: deptdate,
            dept: selectedDept,
            dest: selectedDest,
            inquiryLocation: enquiryLocation,
            siteName: 'FastHolidays',
          },
          'tL_Vpyj5WxQRqs6ec',
        )
        .then((res) => {
          setShowDialog({
            title: 'Successfull',
            msg: 'Inquiry sent successfully, We will call you for further processing.',
          });
          setForm({
            name: '',
            email: '',
            phone: '',
            returnDate: '',
            deptDate: '',
            dept: '',
            dest: '',
            msg: '',
            adult: '',
          });
          Router.push(route);
        })
        .catch((err) => {
          // setShowDialog({
          //   title: 'Something went wrong',
          //   msg: 'Inquiry not sent.',
          // });
          setDetails({
            name: '',
            email: '',
            phone: '',
          });
          Router.push(route);
          setOpen(false);
        });
    } else {
      setShowDialog({
        title: 'Error',
        msg: 'Kindly Enter Appropriate Data.',
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    generateLink(selectedDept, selectedDest, airline);
  }, [selectedDest, selectedDept, airline]);

  return (
    <div className={styles.bannerContainer}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange1}
          aria-label="basic tabs example"
        >
          <Tab label="Flights" {...a11yProps(0)} />
          {/* <Tab label="Hotels" {...a11yProps(1)} /> */}
          {/* <Tab label="Hotels + Flights" {...a11yProps(2)} /> */}
          <div className={styles.searchformbtn}>
          <Link href="/holidays">Hotels + Flights</Link>
          </div>
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <div className={styles.banner__form}>
          <div className={styles.flexVerical}>
            <Autocomplete
              fullWidth
              sx={{ width: '280px' }}
              size="small"
              id="free-solo-2-demo"
              disableClearable
              autoHighlight
              // onFocusCapture={() => getData()}
              renderOption={(props, option) => (
                <Typography component="li" sx={{ fontSize: '12px' }} {...props}>
                  {option}
                </Typography>
              )}
              options={
                data
                  ? data.filter(item => item.country === "united-kingdom").map(
                      (deptt, i) =>
                        `${convertString(deptt.city)} - (${deptt.airportCode})
                          - ${convertString(deptt.airport)} - 
                          ${convertString(deptt.country)}`,
                    )
                  : ['']
              }
              onChange={(event, value) => {
                setSelectedDept(value);
              }}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  {...params}
                  label="Departure"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
            <Autocomplete
              fullWidth
              // freeSolo
              sx={{ width: '280px' }}
              size="small"
              id="free-solo-2-demo"
              autoHighlight
              disableClearable
              // onFocusCapture={() => getData()}
              renderOption={(props, option) => (
                <Typography component="li" sx={{ fontSize: '12px' }} {...props}>
                  {option}
                </Typography>
              )}
              options={
                data
                  ? data.map(
                      (destt, i) =>
                        `${convertString(destt.city)} - (${
                          destt.airportCode
                        }) - ${convertString(destt.airport)} - ${convertString(
                          destt.country,
                        )}`,
                    )
                  : ['']
              }
              onChange={(event, value) => {
                setSelectedDest(value);
              }}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  {...params}
                  label="Destination"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
            <div className={styles.airlineSearch}>
              <Autocomplete
                fullWidth
                // freeSolo
                sx={{ width: '280px' }}
                size="small"
                id="free-solo-2-demo"
                autoHighlight
                disableClearable
                // onFocusCapture={() => getData()}
                renderOption={(props, option) => (
                  <Typography
                    component="li"
                    sx={{ fontSize: '12px' }}
                    {...props}
                  >
                    {option}
                  </Typography>
                )}
                options={
                  airlines
                    ? airlines.map(
                        (airline, i) =>
                          `${convertString(airline.name)} - ${
                            airline.airlineCode
                          }`,
                      )
                    : ['']
                }
                onChange={(event, value) => {
                  setAirline(value);
                }}
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    label="Airline"
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                  />
                )}
              />
            </div>
          </div>

          <Stack direction="column" spacing={2}>
            <Stack className={styles.flexVercal} direction="row" spacing={2}>
              <TextField
                size="small"
                label="Departure Date"
                type="date"
                sx={{ width: '132px' }}
                onChange={(e) => setDeptDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                sx={{ width: '132px' }}
                size="small"
                onChange={(e) => setArriveDate(e.target.value)}
                label="Return Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>
            <div className={styles.counts}>
              <TextField
                onChange={(e) => handleChange('infants', e.target.value)}
                type="number"
                label="Infants"
                size="small"
                sx={{ width: '80px' }}
              />
              <TextField
                onChange={(e) => handleChange('childs', e.target.value)}
                type="number"
                label="Childs"
                size="small"
                sx={{ width: '80px' }}
              />
              <TextField
                onChange={(e) => setForm({ ...form, adult: e.target.value })}
                type="number"
                label="Adults"
                size="small"
                value={form.adult}
                sx={{ width: '80px' }}
              />
            </div>
          </Stack>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2}>
              <TextField
                size="small"
                label="Name"
                sx={{ width: '132px' }}
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
              />
              <TextField
                size="small"
                label="Email"
                sx={{ width: '132px' }}
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
              />
            </Stack>
            <MuiPhoneNumber
              value={form.phone}
              size="small"
              defaultCountry={'gb'}
              onChange={(value) => handleChange('phone', value)}
              variant="outlined"
              label="Phone Number"
            />
          </Stack>
          {/* <Link href={route || '/'}> */}
          <LoadingButton
            loading={loading}
            onClick={() => handleSearch()}
            variant="contained"
            sx={{ height: 'fit-content' }}
            disableElevation
          >
            Inquire Us
          </LoadingButton>
          {/* </Link> */}
        </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div className={styles.banner__form}>
          <div className={styles.flexVerical}>
            <Autocomplete
              fullWidth
              sx={{ width: '280px' }}
              size="small"
              id="free-solo-2-demo"
              disableClearable
              autoHighlight
              // onFocusCapture={() => getData()}
              renderOption={(props, option) => (
                <Typography component="li" sx={{ fontSize: '12px' }} {...props}>
                  {option}
                </Typography>
              )}
              options={
                data
                  ? data.filter(item => item.country === "united-kingdom").map(
                      (deptt, i) =>
                        `${convertString(deptt.city)} - (${deptt.airportCode})
                          - ${convertString(deptt.airport)} - 
                          ${convertString(deptt.country)}`,
                    )
                  : ['']
              }
              onChange={(event, value) => {
                setSelectedDept(value);
              }}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  {...params}
                  label="Departure"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
            <Autocomplete
              fullWidth
              // freeSolo
              sx={{ width: '280px' }}
              size="small"
              id="free-solo-2-demo"
              autoHighlight
              disableClearable
              // onFocusCapture={() => getData()}
              renderOption={(props, option) => (
                <Typography component="li" sx={{ fontSize: '12px' }} {...props}>
                  {option}
                </Typography>
              )}
              options={
                data
                  ? data.map(
                      (destt, i) =>
                        `${convertString(destt.city)} - (${
                          destt.airportCode
                        }) - ${convertString(destt.airport)} - ${convertString(
                          destt.country,
                        )}`,
                    )
                  : ['']
              }
              onChange={(event, value) => {
                setSelectedDest(value);
              }}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  {...params}
                  label="Destination"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
            <div className={styles.airlineSearch}>
              <Autocomplete
                fullWidth
                // freeSolo
                sx={{ width: '280px' }}
                size="small"
                id="free-solo-2-demo"
                autoHighlight
                disableClearable
                // onFocusCapture={() => getData()}
                renderOption={(props, option) => (
                  <Typography
                    component="li"
                    sx={{ fontSize: '12px' }}
                    {...props}
                  >
                    {option}
                  </Typography>
                )}
                options={
                  airlines
                    ? airlines.map(
                        (airline, i) =>
                          `${convertString(airline.name)} - ${
                            airline.airlineCode
                          }`,
                      )
                    : ['']
                }
                onChange={(event, value) => {
                  setAirline(value);
                }}
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    label="Airline"
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                  />
                )}
              />
            </div>
          </div>

          <Stack direction="column" spacing={2}>
            <Stack className={styles.flexVercal} direction="row" spacing={2}>
              <TextField
                size="small"
                label="Departure Date"
                type="date"
                sx={{ width: '132px' }}
                onChange={(e) => setDeptDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                sx={{ width: '132px' }}
                size="small"
                onChange={(e) => setArriveDate(e.target.value)}
                label="Return Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>
            <div className={styles.counts}>
              <TextField
                onChange={(e) => handleChange('infants', e.target.value)}
                type="number"
                label="Infants"
                size="small"
                sx={{ width: '80px' }}
              />
              <TextField
                onChange={(e) => handleChange('childs', e.target.value)}
                type="number"
                label="Childs"
                size="small"
                sx={{ width: '80px' }}
              />
              <TextField
                onChange={(e) => setForm({ ...form, adult: e.target.value })}
                type="number"
                label="Adults"
                size="small"
                value={form.adult}
                sx={{ width: '80px' }}
              />
            </div>
          </Stack>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2}>
              <TextField
                size="small"
                label="Name"
                sx={{ width: '132px' }}
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
              />
              <TextField
                size="small"
                label="Email"
                sx={{ width: '132px' }}
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
              />
            </Stack>
            <MuiPhoneNumber
              value={form.phone}
              size="small"
              defaultCountry={'gb'}
              onChange={(value) => handleChange('phone', value)}
              variant="outlined"
              label="Phone Number"
            />
          </Stack>
          {/* <Link href={route || '/'}> */}
          <LoadingButton
            loading={loading}
            onClick={() => handleSearch()}
            variant="contained"
            sx={{ height: 'fit-content' }}
            disableElevation
          >
             Inquire Us
          </LoadingButton>
          {/* </Link> */}
        </div>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <div className={styles.banner__form}>
          <div className={styles.flexVerical}>
            <Autocomplete
              fullWidth
              sx={{ width: '280px' }}
              size="small"
              id="free-solo-2-demo"
              disableClearable
              autoHighlight
              // onFocusCapture={() => getData()}
              renderOption={(props, option) => (
                <Typography component="li" sx={{ fontSize: '12px' }} {...props}>
                  {option}
                </Typography>
              )}
              options={
                data
                  ? data.filter(item => item.country === "united-kingdom").map(
                      (deptt, i) =>
                        `${convertString(deptt.city)} - (${deptt.airportCode})
                          - ${convertString(deptt.airport)} - 
                          ${convertString(deptt.country)}`,
                    )
                  : ['']
              }
              onChange={(event, value) => {
                setSelectedDept(value);
              }}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  {...params}
                  label="Departure"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
            <Autocomplete
              fullWidth
              // freeSolo
              sx={{ width: '280px' }}
              size="small"
              id="free-solo-2-demo"
              autoHighlight
              disableClearable
              // onFocusCapture={() => getData()}
              renderOption={(props, option) => (
                <Typography component="li" sx={{ fontSize: '12px' }} {...props}>
                  {option}
                </Typography>
              )}
              options={
                data
                  ? data.map(
                      (destt, i) =>
                        `${convertString(destt.city)} - (${
                          destt.airportCode
                        }) - ${convertString(destt.airport)} - ${convertString(
                          destt.country,
                        )}`,
                    )
                  : ['']
              }
              onChange={(event, value) => {
                setSelectedDest(value);
              }}
              renderInput={(params) => (
                <TextField
                  fullWidth
                  {...params}
                  label="Destination"
                  InputProps={{
                    ...params.InputProps,
                    type: 'search',
                  }}
                />
              )}
            />
            <div className={styles.airlineSearch}>
              <Autocomplete
                fullWidth
                // freeSolo
                sx={{ width: '280px' }}
                size="small"
                id="free-solo-2-demo"
                autoHighlight
                disableClearable
                // onFocusCapture={() => getData()}
                renderOption={(props, option) => (
                  <Typography
                    component="li"
                    sx={{ fontSize: '12px' }}
                    {...props}
                  >
                    {option}
                  </Typography>
                )}
                options={
                  airlines
                    ? airlines.map(
                        (airline, i) =>
                          `${convertString(airline.name)} - ${
                            airline.airlineCode
                          }`,
                      )
                    : ['']
                }
                onChange={(event, value) => {
                  setAirline(value);
                }}
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    {...params}
                    label="Airline"
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                  />
                )}
              />
            </div>
          </div>

          <Stack direction="column" spacing={2}>
            <Stack className={styles.flexVercal} direction="row" spacing={2}>
              <TextField
                size="small"
                label="Departure Date"
                type="date"
                sx={{ width: '132px' }}
                onChange={(e) => setDeptDate(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                sx={{ width: '132px' }}
                size="small"
                onChange={(e) => setArriveDate(e.target.value)}
                label="Return Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>
            <div className={styles.counts}>
              <TextField
                onChange={(e) => handleChange('infants', e.target.value)}
                type="number"
                label="Infants"
                size="small"
                sx={{ width: '80px' }}
              />
              <TextField
                onChange={(e) => handleChange('childs', e.target.value)}
                type="number"
                label="Childs"
                size="small"
                sx={{ width: '80px' }}
              />
              <TextField
                onChange={(e) => setForm({ ...form, adult: e.target.value })}
                type="number"
                label="Adults"
                size="small"
                value={form.adult}
                sx={{ width: '80px' }}
              />
            </div>
          </Stack>
          <Stack direction="column" spacing={2}>
            <Stack direction="row" spacing={2}>
              <TextField
                size="small"
                label="Name"
                sx={{ width: '132px' }}
                onChange={(e) =>
                  setDetails({ ...details, name: e.target.value })
                }
              />
              <TextField
                size="small"
                label="Email"
                sx={{ width: '132px' }}
                onChange={(e) =>
                  setDetails({ ...details, email: e.target.value })
                }
              />
            </Stack>
            <MuiPhoneNumber
              value={form.phone}
              size="small"
              defaultCountry={'gb'}
              onChange={(value) => handleChange('phone', value)}
              variant="outlined"
              label="Phone Number"
            />
          </Stack>
          {/* <Link href={route || '/'}> */}
          <LoadingButton
            loading={loading}
            onClick={() => handleSearch()}
            variant="contained"
            sx={{ height: 'fit-content' }}
            disableElevation
          >
             Inquire Us
          </LoadingButton>
          {/* </Link> */}
        </div>
      </TabPanel>

      <Dialog open={showDialog} keepMounted onClose={() => showDialog(false)}>
        <DialogTitle>{showDialog.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{showDialog.msg}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowDialog(false)}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}
