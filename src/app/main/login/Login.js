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

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';

const schema = yup.object().shape({
	email: yup.string().email('You must enter a valid email').required('You must enter a email'),
	password: yup
		.string()
		.required('Please enter your password.')
		.min(4, 'Password is too short - should be 4 chars minimum.')
});

const useStyles = makeStyles(theme => ({
	root: {
		background: 'linear-gradient(to right, #77679b 0%, rgb(217 181 129) 100%)',
		color: theme.palette.primary.contrastText
	},
	leftSection: {},
	rightSection: {
		backgroundImage: 'url("assets/images/backgrounds/login-bg.gif")',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
	}
}));

const defaultValues = {
	email: '',
	password: ''
};

function Login() {
	const classes = useStyles();
	const [selectedTab, setSelectedTab] = useState(0);

    const [showPassword, setShowPassword] = useState(false);

    const { control, setValue, formState, handleSubmit, reset, trigger, setError } = useForm({
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

                <div className={clsx(classes.rightSection,'hidden md:flex flex-1 items-center justify-center p-64')}>
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
							<div className="flex items-center mb-48">
								<img className="logo-icon" src="assets/images/logos/lyftron-logo-big.png" alt="logo" />
							</div>
						</motion.div>

						<>
                        <div className="w-full">
                            <form className="flex flex-col justify-center w-full" 
                                // onSubmit={handleSubmit(onSubmit)}
                            >
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
                                                            user
                                                        </Icon>
                                                    </InputAdornment>
                                                )
                                            }}
                                            variant="outlined"
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
                                            label="Password"
                                            type="password"
                                            error={!!errors.password}
                                            helperText={errors?.password?.message}
                                            variant="outlined"
                                            InputProps={{
                                                className: 'pr-2',
                                                type: showPassword ? 'text' : 'password',
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                                                            <Icon className="text-20" color="action">
                                                                {showPassword ? 'visibility' : 'visibility_off'}
                                                            </Icon>
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                            required
                                        />
                                    )}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className="w-full mx-auto mt-16"
                                    aria-label="LOG IN"
                                    disabled={_.isEmpty(dirtyFields) || !isValid}
                                    value="legacy"
                                >
                                    Login
                                </Button>
                            </form>

                            <table className="w-full mt-32 text-center">
                                <thead className="mb-4">
                                    <tr>
                                        <th>
                                            <Typography className="font-semibold text-11" color="textSecondary">
                                                Role
                                            </Typography>
                                        </th>
                                        <th>
                                            <Typography className="font-semibold text-11" color="textSecondary">
                                                Email
                                            </Typography>
                                        </th>
                                        <th>
                                            <Typography className="font-semibold text-11" color="textSecondary">
                                                Password
                                            </Typography>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <Typography className="font-medium text-11" color="textSecondary">
                                                Admin
                                            </Typography>
                                        </td>
                                        <td>
                                            <Typography className="text-11">admin@fusetheme.com</Typography>
                                        </td>
                                        <td>
                                            <Typography className="text-11">admin</Typography>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <Typography className="font-medium text-11" color="textSecondary">
                                                Staff
                                            </Typography>
                                        </td>
                                        <td>
                                            <Typography className="text-11">staff@fusetheme.com</Typography>
                                        </td>
                                        <td>
                                            <Typography className="text-11">staff</Typography>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        </>
					</CardContent>

					<div className="flex flex-col items-center justify-center pb-32">
						<div>
							<span className="font-normal mr-8">Don't have an account?</span>
							<Link className="font-normal" to="/register">
								Register
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

export default Login;
