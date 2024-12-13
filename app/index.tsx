import { ImageBackground } from "expo-image";
import { Text, View, StyleSheet, Image, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

/* hooks */ 
import { showAlert } from "@/hooks/showAlert";
/* assets */
import common from "@/styles/common";
import Button from "@/components/common/CustomButton";
import { StatusBar } from "expo-status-bar";


const HomeScreen = () => {
    return (
        <View style={common.container}>
            <ImageBackground
                source={"https://i.pinimg.com/736x/90/4b/e1/904be18bb4840cea3e6abf5387e43b6c.jpg"}
                contentFit="cover"
                style={styles.image}
            >
                <LinearGradient
                    colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}
                    style={styles.gradient}
                >
                    <SafeAreaView style={common.screen}>
                        <View style={styles.textBlock}>
                            <Text style={StyleSheet.compose(
                                styles.text,
                                styles.title
                            )}>
                                Simple Meditation
                            </Text>
                            <Text style={StyleSheet.compose(
                                styles.text,
                                styles.subtitle
                            )}>
                                Simple Meditation for Everyone
                            </Text>
                        </View>

                        <View>
                            <Button title={"Get Started"} />
                        </View>

                        <StatusBar style="light"/>
                    </SafeAreaView>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    textBlock: {
        marginTop: 30,
    },
    text: {
        width: "100%",
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
    },
    title: {
        fontSize: 20,
    },
    subtitle: {
        fontSize: 18,
    },
    image: {
        flex: 1,
        width: "100%",
    },
    gradient: {
        flex: 1,
        width: "100%",
        justifyContent: "center", // Center the text vertically and horizontally
        alignItems: "center",
    },
});

export default HomeScreen;
