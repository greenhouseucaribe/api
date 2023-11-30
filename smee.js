const SmeeClient = require('smee-client')

const smee = new SmeeClient({
  source: 'https://smee.io/x7jyxSM7Lo3plrF',
  target: 'http://localhost:3000/events',
  logger: console
})

const events = smee.start()

// Stop forwarding events
// events.close()