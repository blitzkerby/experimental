import { View, Text, StyleSheet, TextProps } from 'react-native'

interface BlockText {
    children: React.ReactNode
}

const BlockText: React.FC<BlockText> = ({
    children
}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            { children }
        </View>
    )
}

export default BlockText