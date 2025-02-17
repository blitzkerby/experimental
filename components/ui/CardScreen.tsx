import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { ImageSourcePropType } from 'react-native';

interface CardScreenProps {
  imageUri?: string;
  title?: string;
  description?: string;
  onCancelPress?: () => void;
  onOkPress?: () => void;
}

const CardScreen: React.FC<CardScreenProps> = ({
  imageUri = 'https://i.pinimg.com/736x/7a/0e/55/7a0e557f57730ba81597dc1c091b4bdc.jpg',
  title = 'Card Title',
  description = 'This is an example of a card using React Native Paper.',
  onCancelPress,
  onOkPress,
  hasActions,
}) => {
  return (
    <View style={styles.container}>
      <Card elevation={4} mode="outlined" style={styles.cardContainer}>
        <Card.Cover 
          source={{ uri: imageUri }} 
          resizeMode="cover"
          style={styles.cardCover}
        />
        <Card.Content style={styles.cardContent}>
          <Title style={styles.title}>{title}</Title>
          <Paragraph style={styles.paragraph}>{description}</Paragraph>
        </Card.Content>
        
        {hasActions && (
          <Card.Actions>
            <Button 
              mode="outlined" 
              onPress={onCancelPress}
            >
              Cancel
            </Button>
            <Button 
              mode="contained" 
              onPress={onOkPress}
            >
              Ok
            </Button>
          </Card.Actions>
        )}
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    overflow: 'hidden',
  },
  cardCover: {
    borderRadius: 0
  },
  cardContent: {
    padding: 16,
    gap: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragraph: {
    color: '#666',
  },
});

export default CardScreen;