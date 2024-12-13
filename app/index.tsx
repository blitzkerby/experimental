import { ImageBackground } from "expo-image";
import { Text, View, StyleSheet, Image, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/* assets */
import common from "@/styles/common";
import Button from "@/components/common/CustomButton";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
/* components */
import GradientOverlay from "@/components/layout/Overlay.Gradient";
import Content from "@/components/layout/Content";


const HomeScreen = () => {
    const router = useRouter();

    return (
        <View style={common.container}>
            <ImageBackground
                source={
                    "https://i.pinimg.com/736x/90/4b/e1/904be18bb4840cea3e6abf5387e43b6c.jpg"
                }
                contentFit="cover"
                style={styles.image}
            >
                <GradientOverlay>
                    <Content>
                        <View style={styles.textBlock}>
                            <Text style={StyleSheet.compose(styles.text, styles.title)}>
                                Simple Meditation
                            </Text>
                            <Text style={StyleSheet.compose(styles.text, styles.subtitle)}>
                                Simple Meditation for Everyone
                            </Text>
                        </View>

                        <View>
                            <Button
                                title={"Get Started"}
                                onPress={() => router.push("./nature-meditate")}
                            />
                        </View>

                        <StatusBar style="light" />
                    </Content>
                </GradientOverlay>
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
    }
});

export default HomeScreen;
