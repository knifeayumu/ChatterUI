import { ReactNode } from 'react'
import { GestureResponderEvent, TouchableOpacity, StyleSheet } from 'react-native'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'

type FadeScreenProps = {
    handleOverlayClick?: (e: GestureResponderEvent) => void
    children?: ReactNode
}

const FadeBackrop: React.FC<FadeScreenProps> = ({ handleOverlayClick, children }) => {
    const onBackdropPress = (e: GestureResponderEvent) => {
        if (handleOverlayClick && e.target === e.currentTarget) handleOverlayClick(e)
    }

    return (
        <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.absolute}>
            <TouchableOpacity activeOpacity={1} onPress={onBackdropPress} style={styles.absolute}>
                {children}
            </TouchableOpacity>
        </Animated.View>
    )
}

export default FadeBackrop

const styles = StyleSheet.create({
    absolute: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})