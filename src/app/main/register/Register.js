import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import _ from '@lodash';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { setUser } from '../../redux/actions/authActions';
import { getCountries, registerUser } from '../../services/auth/auth.service';


const useStyles = makeStyles(theme => ({
	root: {
		background: 'linear-gradient(to right, #523c8a 0%, rgb(242 150 28) 100%)',
		color: theme.palette.primary.contrastText
	},
	leftSection: {},
	rightSection: {
		backgroundImage: 'url("assets/images/backgrounds/register-bg.gif")',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
	}
}));

const defaultValues = {
	firstName: '',
	lastName: '',
	email: '',
	companyName: '',
	phoneNumber: '',
	countryCode: '',
	// email: '',
	// password: '',
	// passwordConfirm: ''
};

const schema = yup.object().shape({
	firstName: yup.string().required('You must enter first name'),
	lastName: yup.string().required('You must enter last name'),
	email: yup.string().email('You must enter a valid email').required('You must enter a email'),
	companyName: yup.string().required('You must enter company name'),
	phoneNumber: yup.string().required('You phone number'),
	countryCode: yup.string().required('You must select country code'),
	// password: yup
	// 	.string()
	// 	.required('Please enter your password.')
	// 	.min(8, 'Password is too short - should be 8 chars minimum.'),
	// passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});

function Register() {
	const classes = useStyles();
    const [countries, setCountries] = useState(null);
    const [selectedCountryCode, setselectedCountryCode] = useState(null);
    const dispatch = useDispatch();

    const { control, formState, handleSubmit, reset, setError } = useForm({
		mode: 'onChange',
		defaultValues,
		resolver: yupResolver(schema)
	});

    useEffect(() => {
        getCountriesList();
    }, [])

    const getCountriesList = async () => {
        let _countries = await getCountries();
        setCountries(_countries);
    }

    const handleInputChange = (event) => setselectedCountryCode(event.target.value);
    const handleCountryChange = (event) => setselectedCountryCode(event.target.value);

    const onSubmit = async (data) => {
        console.log('data', data)
        let _data = {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            company_name: data.companyName,
            phone_number: data.phoneNumber,
            country_code: data.countryCode,
        }
        let user = await registerUser(_data);
        if(user) dispatch(setUser(user));
    }
	const { isValid, dirtyFields, errors } = formState;

    console.log('selectedCountryCode', selectedCountryCode)
    console.log('schema', schema)
    console.log('control', control)
	return (
		<div
			className={clsx(
				classes.root,
				'flex flex-col flex-auto items-center justify-center flex-shrink-0 p-16 md:p-24'
			)}
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.6 }}
				animate={{ opacity: 1, scale: 1 }}
				className="flex w-full max-w-400 md:max-w-3xl rounded-20 shadow-2xl overflow-hidden"
			>
                <div className={clsx(classes.rightSection, 'hidden md:flex flex-1 items-center justify-center p-64')}>
					<div className="max-w-320"></div>
				</div>
                <Card
					className={clsx(
						classes.leftSection,
						'flex flex-col w-full max-w-sm items-center justify-center shadow-0'
					)}
					square
				>
					<CardContent className="flex flex-col items-center justify-center w-full py-96 max-w-320">
						<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.2 } }}>
							<div className="flex items-center justif-center mb-32">
								<img className="logo-icon" src="assets/images/logos/lyftron-logo-big.png" alt="logo" />
							</div>
						</motion.div>

						<>
                            <div className="w-full">
                                <form className="flex flex-col justify-center w-full" 
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <Controller
                                        name="firstName"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                className="mb-16"
                                                type="text"
                                                label="First Name"
                                                error={!!errors.firstName}
                                                helperText={errors?.firstName?.message}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Icon className="text-20" color="action">
                                                                person
                                                            </Icon>
                                                        </InputAdornment>
                                                    )
                                                }}
                                                variant="outlined"
                                                required
                                            />
                                        )}
                                    />

                                    <Controller
                                        name="lastName"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                className="mb-16"
                                                type="text"
                                                label="Last Name"
                                                error={!!errors.lastName}
                                                helperText={errors?.lastName?.message}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Icon className="text-20" color="action">
                                                                person
                                                            </Icon>
                                                        </InputAdornment>
                                                    )
                                                }}
                                                variant="outlined"
                                                required
                                            />
                                        )}
                                    />

                                    <Controller
                                        name="email"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                className="mb-16"
                                                type="text"
                                                error={!!errors.email}
                                                helperText={errors?.email?.message}
                                                label="Email"
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Icon className="text-20" color="action">
                                                                email
                                                            </Icon>
                                                        </InputAdornment>
                                                    )
                                                }}
                                                variant="outlined"
                                                required
                                            />
                                        )}
                                    />

                                    <Controller
                                        name="companyName"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                className="mb-16"
                                                type="text"
                                                label="Company Name"
                                                error={!!errors.companyName}
                                                helperText={errors?.companyName?.message}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Icon className="text-20" color="action">
                                                                person
                                                            </Icon>
                                                        </InputAdornment>
                                                    )
                                                }}
                                                variant="outlined"
                                                required
                                            />
                                        )}
                                    />

                                    <Controller
                                        name="phoneNumber"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                className="mb-16"
                                                type="number"
                                                label="Phone Number"
                                                error={!!errors.phoneNumber}
                                                helperText={errors?.phoneNumber?.message}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Icon className="text-20" color="action">
                                                                person
                                                            </Icon>
                                                        </InputAdornment>
                                                    )
                                                }}
                                                variant="outlined"
                                                required
                                            />
                                        )}
                                    />

                                    <Controller
                                        name="countryCode"
                                        control={control}
                                        render={({ field }) => (
                                            <>
                                                <InputLabel id="demo-simple-select-label">Country Code</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={selectedCountryCode?selectedCountryCode:''}
                                                    onChange={handleCountryChange}

                                                    {...field}
                                                    error={!!errors.phoneNumber}
                                                    helperText={errors?.phoneNumber?.message}

                                                > 
                                                {countries ? countries.map((country, index) => {
                                                    return <MenuItem key={index} value={country.code}>{country.name} - {country.code}</MenuItem>
                                                }) : <MenuItem value={0}></MenuItem>}
                                                </Select>
                                            </>
                                        )}
                                    />

                                    {/* <FormControl className={classes.formControl}>
                                        <InputLabel id="demo-simple-select-label">Country Code</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={selectedCountryCode?selectedCountryCode:''}
                                            onChange={handleCountryChange}
                                        > 
                                        {countries ? countries.map((country, index) => {
                                            return <MenuItem key={index} value={country.code}>{country.name} - {country.code}</MenuItem>
                                        }) : <MenuItem value={0}></MenuItem>}
                                        </Select>
                                    </FormControl> */}

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        className="w-full mx-auto mt-16"
                                        aria-label="REGISTER"
                                        disabled={_.isEmpty(dirtyFields) || !isValid}
                                        value="legacy"
                                    > Register
                                    </Button>

                                    {/* <Controller
                                        name="password"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                className="mb-16"
                                                type="password"
                                                label="Password"
                                                error={!!errors.password}
                                                helperText={errors?.password?.message}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Icon className="text-20" color="action">
                                                                vpn_key
                                                            </Icon>
                                                        </InputAdornment>
                                                    )
                                                }}
                                                variant="outlined"
                                                required
                                            />
                                        )}
                                    />

                                    <Controller
                                        name="passwordConfirm"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                className="mb-16"
                                                type="password"
                                                label="Confirm Password"
                                                error={!!errors.passwordConfirm}
                                                helperText={errors?.passwordConfirm?.message}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Icon className="text-20" color="action">
                                                                vpn_key
                                                            </Icon>
                                                        </InputAdornment>
                                                    )
                                                }}
                                                variant="outlined"
                                                required
                                            />
                                        )}
                                    /> */}

                                </form>
                            </div>
                        </>
					</CardContent>

					<div className="flex flex-col items-center justify-center pb-32">
						<div>
							<span className="font-normal mr-8">Already have an account?</span>
							<Link className="font-normal" to="/login">
								Login
							</Link>
						</div>
						<Link className="font-normal mt-8" to="/dashboard">
							Back to Dashboard
						</Link>
					</div>
				</Card>
            </motion.div>
		</div>
	);
}

export default Register;
