import React, { useContext, useEffect, useState } from 'react'
import { Context } from '@/components/Context'
import { putProduct, getProducts } from '@/fb/fbFunc'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Cards from './Cards'
const useStyles = makeStyles(theme => ({
	root: {
		paddingTop: 20,
		flexGrow: 1,
		height: '100%',
	},
	card: {
		margin: theme.spacing(1, 2),
	},
}))

export default function Main() {
	const classes = useStyles()
	const { initialField } = useContext(Context)
	const [field, setField] = initialField
	useEffect(() => {
		getProducts(setField)
	}, [])
	return (
		<Grid container className={classes.root} spacing={2}>
			<Grid container justify='center' className={classes.card} spacing={2}>
				{field.map((item, index) => {
					if (field.lenght === 0) return
					let key = item[0]
					let product = item[1]
					return (
						<Grid item xs={12} key={key}>
							<Cards
								imgUrl={product.imageUrl}
								name={product.name}
								cont={product.count}
								productWidth={product.size.width}
								productHeight={product.size.height}
								info={product.info}
								id={key}
							/>
						</Grid>
					)
				})}
			</Grid>
		</Grid>
	)
}
