import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { submitRegister } from 'app/auth/store/registerSlice';
import * as yup from 'yup';
import _ from '@lodash';

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
	displayName: '',
	email: '',
	password: '',
	passwordConfirm: ''
};

const schema = yup.object().shape({
	displayName: yup.string().required('You must enter display name'),
	email: yup.string().email('You must enter a valid email').required('You must enter a email'),
	password: yup
		.string()
		.required('Please enter your password.')
		.min(8, 'Password is too short - should be 8 chars minimum.'),
	passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});

function Register() {
	const classes = useStyles();
	const [selectedTab, setSelectedTab] = useState(0);

    const { control, formState, handleSubmit, reset, setError } = useForm({
		mode: 'onChange',
		defaultValues,
		resolver: yupResolver(schema)
	});

	const { isValid, dirtyFields, errors } = formState;

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
                                    // onSubmit={handleSubmit(onSubmit)}
                                >
                                    <Controller
                                        name="displayName"
                                        control={control}
                                        render={({ field }) => (
                                            <TextField
                                                {...field}
                                                className="mb-16"
                                                type="text"
                                                label="Display name"
                                                error={!!errors.displayName}
                                                helperText={errors?.displayName?.message}
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
                                    />

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        className="w-full mx-auto mt-16"
                                        aria-label="REGISTER"
                                        disabled={_.isEmpty(dirtyFields) || !isValid}
                                        value="legacy"
                                    >
                                        Register
                                    </Button>
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
