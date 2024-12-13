import { Alert } from "react-native";

export const showAlert = () => {
    Alert.alert(
        'Button pressed',
        'You have pressed the button',
        [
            { 
                text: 'Cancel',
                onPress: () => { console.log("Cancel Pressed")},
                style: 'cancel' 
            },
            { 
                text: 'OK',
                onPress: () => { console.log("OK Pressed")},
            },
        ],
        { cancelable: true } // This option should be outside the array
    );
};
