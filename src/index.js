import app from './server'
import config from './config'

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`)
})
