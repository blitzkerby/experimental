import common from '@/styles/common';
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface ContentProps {
    children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({
    children
}) => {
    return (
        <SafeAreaView
            style={common.screen}
        >
            { children }
        </SafeAreaView>
    )
}

export default Content