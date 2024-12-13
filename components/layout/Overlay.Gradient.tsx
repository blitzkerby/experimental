import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface GradientOverlayProps {
    children: React.ReactNode;
    colors?: string[]; // Make colors optional
}

const GradientOverlay: React.FC<GradientOverlayProps> = ({
    children,
    colors = ["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]
}) => {
    return (
        <LinearGradient colors={colors} style={styles.gradient}>
            {children}
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});

export default GradientOverlay;
