
export default defineEventHandler(async (event) => {
    const roomId = getRouterParam(event, 'roomId') as string
    
    const test = await useStorage('rooms').getItem(roomId)

    return test
})