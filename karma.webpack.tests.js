import 'babel/polyfill'
import chai from 'chai'
import chaiImmutable from 'chai-immutable'

chai.use(chaiImmutable)

const context = require.context('./src/', true, /\.spec\.(js|jsx)$/)
context.keys().forEach(context)
