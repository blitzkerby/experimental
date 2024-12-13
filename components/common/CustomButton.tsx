import { View, Text, TouchableOpacity, StyleSheet, StyleProp, TextStyle, ViewStyle } from 'react-native'
import React from 'react'
import { showAlert } from '@/hooks/showAlert';

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    textStyles?: StyleProp<TextStyle>;
    containerStyles?: StyleProp<TextStyle>;
}

const CustomButton = ({
    onPress = showAlert,
    title,
    textStyles = "",
    containerStyles,
}: CustomButtonProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={StyleSheet.compose(styles.buttonContainer, containerStyles)}
            onPress={onPress}
        >
            <Text style={StyleSheet.compose(styles.buttonText, textStyles)}>
                CustomButton
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#F5F5F5',
        borderRadius: 5,
        minHeight: 62,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})

export default CustomButton