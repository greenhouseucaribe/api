const SmeeClient = require('smee-client')

const smee = new SmeeClient({
  source: 'https://smee.io/PIazH2eLGkGYiKyC',
  target: 'http://localhost:3000/events',
  logger: console
})

const events = smee.start()

// Stop forwarding events
// events.close()
//aaaa