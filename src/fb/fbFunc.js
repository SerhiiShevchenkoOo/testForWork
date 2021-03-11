import firebase from 'firebase/app'

export function writeUserData(userId, name, email, imageUrl) {
	firebase
		.database()
		.ref('users/' + userId)
		.set({
			username: name,
			email: email,
			profile_picture: imageUrl,
		})
}

export const getProducts = e => {
	let data = firebase
		.database()
		.ref('/products')
		.get()
		.then(data => e(Object.entries(data.val())))
}
export const deleteProduct = productId => {
	firebase
		.database()
		.ref(`products/${productId}`)
		.remove()
		.then(() => console.log('product was removed'))
}
export const putProduct = payload => {
	let newProductRef = firebase.database().ref('products').push()
	newProductRef.set({
		...payload,
	})
}

export const createComment = ({ productId, description, UTCSeconds }) => {
	let newCommentRef = firebase
		.database()
		.ref(`products/${productId}/comments`)
		.push()
	newCommentRef.set({
		description,
		UTCSeconds,
	})
}

export const updateProduct = (productId, payload) => {
	firebase
		.database()
		.ref(`products/${productId}`)
		.update({
			...payload,
		})
}
