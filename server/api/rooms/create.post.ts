import { v4 as uuidv4 } from 'uuid';

export default defineEventHandler(async (event) => {
    const roomId = uuidv4()

    const body = await readBody(event)

    await useStorage('rooms').setItem(roomId, {
        pokerType: body.pokerType,
        players: {
            [body.playerId]: {
                isModerator: true
            }
        }
    })

    return roomId
})