import { View, Text, StyleSheet, FlatList, Pressable, ImageBackground } from 'react-native'
import { StatusBar } from 'expo-status-bar'

/* components */
import Content from '@/components/layout/Content'
import GradientOverlay from '@/components/layout/Overlay.Gradient'
import common from '@/styles/common'
/* hooks */
import { showAlert } from '@/hooks/showAlert'
/* styles */
import fontSizes from '@/styles/fontSize'
/* static data */
import MEDITATION_IMAGES from "@/constants/Mediation-images"
import { MEDITATION_DATA } from '@/constants/Meditation-data'

const natureMeditate = () => {
  return (
    <GradientOverlay colors={["#161b2e", "#0a4d4a", "#766e67"]}>
      <Content>
        <View style={styles.content}>
          <Text style={StyleSheet.compose(styles.text, fontSizes.h1)}>
            Welcome Kerby
          </Text>
          <Text style={StyleSheet.compose(styles.text, fontSizes.h2)}>
            Start your meditation practice today
          </Text>
        </View>
        <View>
          <FlatList
            data={MEDITATION_DATA}
            style={styles.flatlist}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <Pressable onPress={showAlert} style={styles.listItem}>
                  <ImageBackground
                    source={MEDITATION_IMAGES[item.id - 1]}
                    resizeMode="cover"
                    style={styles.imageBackground}
                  >
                    <View style={styles.textContainer}>
                      <Text style={StyleSheet.compose(styles.text, styles.textList)}>
                        {item.title}
                      </Text>
                    </View>
                  </ImageBackground>
                </Pressable>
              )
            }}
          />
        </View>


        <StatusBar style="light" />
      </Content>
    </GradientOverlay>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 10,
    width: "100%",
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    padding: 5,
  },
  flatlist: {
    marginVertical: 20,
    marginBottom: 200,
  },
  listItem: {
    height: 500,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
  },
  imageBackground:{
    flex: 1,
  },
  textList: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    textAlign: 'center',
    lineHeight: 25,
    textTransform: 'uppercase',
    letterSpacing: 1,
  }
})

export default natureMeditate