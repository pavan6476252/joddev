export type RoomChatMSG = {
    uid: string,
    name: string,
    email: string,
    photo: string,
    dataTime: string,
    roomId: string,
    message: string,
}

export type RoomType = {
    _id: string,
    ownerId: string,
    publid: boolean,
    title: string,
    subTitle: string,
    thumbnail: string,
    startTime: string,
    createdAt: string,
}

