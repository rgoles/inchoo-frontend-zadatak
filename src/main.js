import Alpine from 'alpinejs'
import bookstoreApp from './alpine/bookstoreApp.js'

window.Alpine = Alpine
Alpine.data('bookstoreApp', bookstoreApp)
Alpine.start()