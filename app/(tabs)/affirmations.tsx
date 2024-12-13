import Content from '@/components/layout/Content';
import GradientOverlay from '@/components/layout/Overlay.Gradient'
import BlockText from '@/components/ui/Block.Text';
import common from '@/styles/common'
import fontSizes from '@/styles/fontSize';
import { View, Text, StyleSheet } from 'react-native'

const affirmations = () => {
    return (
        <View style={common.container}>
            <GradientOverlay colors={["#2e1f58", "#54426b", "#a790af"]}>
                <Content>
                    <Text style={StyleSheet.compose(fontSizes.h1, styles.text)}>Affirmations</Text>
                    {/* Affirmations go here */}
                    <BlockText>
                        <Text>Test</Text>
                    </BlockText>
                </Content>
            </GradientOverlay>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 28,
        letterSpacing: -0.25,
        textTransform: 'uppercase',
        fontFamily: 'Poppins-Bold'
    }
})

export default affirmations