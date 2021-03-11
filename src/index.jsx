import React from 'react'
import { render } from 'react-dom'
import Index from './pages'
import 'tailwindcss/tailwind.css'
import reportWebVitals from '@/fb/reportWebVitals'
import firebase from 'firebase'
import firebaseConfig from '@/fb/firebase'
firebase.initializeApp(firebaseConfig)
render(<Index />, document.getElementById('root'))

reportWebVitals()
