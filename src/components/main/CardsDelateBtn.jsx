import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Popper from '@material-ui/core/Popper'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'
import Paper from '@material-ui/core/Paper'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(theme => ({
	root: {
		width: 500,
	},
	typography: {
		padding: theme.spacing(2),
	},
}))

export default function PositionedPopper() {
	const [anchorEl, setAnchorEl] = React.useState(null)
	const [open, setOpen] = React.useState(false)
	const [placement, setPlacement] = React.useState()
	const classes = useStyles()

	const handleClick = newPlacement => event => {
		setAnchorEl(event.currentTarget)
		setOpen(prev => placement !== newPlacement || !prev)
		setPlacement(newPlacement)
	}

	return (
		<>
			<IconButton
				onClick={handleClick('left')}
				aria-label='delete'
				color='secondary'
				className={classes.margin}>
				<DeleteIcon />
			</IconButton>

			<Popper open={open} anchorEl={anchorEl} placement={placement} transition>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps} timeout={350}>
						<Paper>
							<Typography className={classes.typography}>
								The content of the Popper.
							</Typography>
						</Paper>
					</Fade>
				)}
			</Popper>
		</>
	)
}
