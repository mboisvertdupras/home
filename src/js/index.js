import Alpine from 'alpinejs'

import app from './app'
import '../css/app.css'

window.Alpine = Alpine

Alpine.data('app', app)

Alpine.start()
