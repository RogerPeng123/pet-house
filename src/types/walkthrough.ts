import { ImageSourcePropType } from "react-native"
import { NavigationNavigate } from "./navigation"

interface WalkthroughItemProps {
    nextClick: () => void
    title: string
    littleTitle: string
    WalkthroughImg: ImageSourcePropType
    nextIcon: ImageSourcePropType
}

interface WalkthroughProps extends NavigationNavigate {

}

export type {
    WalkthroughProps,
    WalkthroughItemProps
}