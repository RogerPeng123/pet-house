import { ScrollView } from "react-native"

interface MessageProps {
    list: MessageItem[]
    scrollRef: React.MutableRefObject<ScrollView | null>
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