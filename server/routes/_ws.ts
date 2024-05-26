export default defineWebSocketHandler({
  open(peer) {
    const params = getParams(peer)

    peer.subscribe(params.roomId)

    if (!params.idiot) {
      addUser(params.roomId, peer.id, params.userId)
    }
  },

  close(peer) {
    const params = getParams(peer)

    // removeUser(params.roomId, params.userId)
  },

  async message(peer, message) {
    if (message.text() === "ping") {
      peer.send("pong")
    }

    const params = getParams(peer)
    const users = await getUsers(params.roomId)

    peer.publish(params.roomId, users)
  }
})

const storage = () => {
  return useStorage('rooms')
}

const getUsers = async (roomId: string) => {
  const store = storage()
  const users = await store.getItem<any>(roomId)

  return JSON.stringify(Object.values(users))
}

const addUser = async (roomId: string, peerId: string, userId: string) => {
  const store = storage()
  const hasRoom = await store.hasItem(roomId)

  if (hasRoom) {
    const users = await store.getItem<any>(roomId)
    const userCount = Object.keys(users).length

    users[userId] = {
      id: userCount + 1,
      moderator: false,
      ...users[userId],
      status: 'connected',
    }

    await store.setItem(roomId, users)
  } else {
    await store.setItem<any>(roomId, {
      [userId]: {
        id: 1,
        moderator: true,
        status: 'connected',
      }
    })
  }
}

const removeUser = async (roomId: string, userId: string) => {
  const store = storage()
  const users = await store.getItem<any>(roomId)

  delete users[userId]

  await store.setItem(roomId, users)
}

const getParams = (peer: any) => {
  const url = new URL(peer.ctx.node.req.url, `https://${peer.ctx.node.req.headers.host}`)

  return {
    roomId: url.searchParams.get('roomId')!,
    userId: url.searchParams.get('userId')!,
    idiot: url.searchParams.get('idiot') !== null,
  }
}