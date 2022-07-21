
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

const navigate = (name: string, params?: object) => {
    if (navigationRef.isReady()) {
        if (params !== undefined) {
            navigationRef.navigate(name as never, params as never);
        } else {
            navigationRef.navigate(name as never);
        }
    }
}


export {
    navigate
}