const middleware = {}

middleware['admin'] = require('../middleware/admin.js')
middleware['admin'] = middleware['admin'].default || middleware['admin']

middleware['authenticated'] = require('../middleware/authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['issuer'] = require('../middleware/issuer.js')
middleware['issuer'] = middleware['issuer'].default || middleware['issuer']

export default middleware
