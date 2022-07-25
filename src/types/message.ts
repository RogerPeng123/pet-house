interface MessageProps {
    list: MessageItem[]
}

interface MessageItem {
    yourSelf: boolean
    content: string
    type: number
}


export type {
    MessageItem,
    MessageProps
}