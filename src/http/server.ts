import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import websocket from '@fastify/websocket'
import { pollResults } from './ws/poll-results'
const app = fastify()

app.register(cookie, {
    secret: '7b6937ad-bee7-4264-9cb7-9216027c42b2',
    hook: 'onRequest',
})

app.register(websocket)

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)
app.register(pollResults)


app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
})