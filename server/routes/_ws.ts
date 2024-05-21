export default defineWebSocketHandler({
  open(peer) {
    const roomId = getRoomId(peer)
    peer.subscribe(roomId)

    createRoom(roomId)
    addUser(roomId, peer.id)
  },

  close(peer) {
    const roomId = getRoomId(peer)
    removeUser(roomId, peer.id)
  },

  error(peer, _) {
    const roomId = getRoomId(peer)
    removeUser(roomId, peer.id)
  },

  message(peer, message) {

    if (message.text() === "ping") {
      peer.send("pong")
    }

    const roomId = getRoomId(peer)


    peer.publish(roomId, rooms)
  }
})

const rooms: any = {}

const createRoom = (roomId: string) => {
  if (!rooms[roomId]) {
    rooms[roomId] = {}
  }
}

const addUser = (roomId: string, peerId: string) => {
  rooms[roomId][peerId] = {}
}

const removeUser = (roomId: string, peerId: string) => {
  delete rooms[roomId][peerId]
}

const getRoomId = (peer: any): string => {
  return new URL(peer.ctx.node.req.url, `https://${peer.ctx.node.req.headers.host}`)
    .searchParams.get('room')!
}