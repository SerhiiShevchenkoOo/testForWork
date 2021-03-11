import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import Popper from '@material-ui/core/Popper'
import Fade from '@material-ui/core/Fade'
import CardsDelateBtn from './CardsDelateBtn'
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		margin: 'auto',
		maxWidth: 500,
		background: '#333',
		color: 'white',
	},
	image: {
		width: 128,
		height: 128,
	},
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	},
	margin: {
		margin: theme.spacing(1),
	},
	typography: {
		padding: theme.spacing(2),
	},
}))

export default function ComplexGrid({
	imgUrl,
	name,
	cont,
	productWidth,
	productHeight,
	info,
	id,
}) {
	const classes = useStyles()
	return (
		<div className={classes.root}>
			{/* <div>{product.imageUrl}</div> */}

			<Paper className={classes.paper}>
				<Grid container spacing={2}>
					<Grid item>
						<ButtonBase className={classes.image}>
							<img
								className={classes.img}
								alt='complex'
								src='http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg'
							/>
						</ButtonBase>
					</Grid>
					<Grid item xs={12} sm container>
						<Grid item xs container direction='column' spacing={2}>
							<Grid item xs>
								<Typography gutterBottom variant='subtitle1'>
									{name}
								</Typography>
								<Typography variant='body2' gutterBottom>
									productWidth:{productWidth}
								</Typography>
								<Typography variant='body2' gutterBottom>
									productHeight:{productHeight}
								</Typography>
								<Typography variant='body2'>cont:{cont}</Typography>
							</Grid>
							<Grid item>
								<Typography variant='body2' style={{ cursor: 'pointer' }}>
									Remove
								</Typography>
							</Grid>
						</Grid>
						<Grid item>
							<CardsDelateBtn id={id} />
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</div>
	)
}
