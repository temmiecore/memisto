import { View, Text, StyleSheet } from 'react-native';

const AppealScreen = ({
    navigation,
    route
}) => {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.appealName}</Text>
            <Text style={styles.detailText}>Type: {item.appealType}</Text>
            <Text style={styles.detailText}>Description: {item.appealDesc}</Text>
            <Text style={styles.detailText}>Status: {item.appealStatus}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    detailText: {
      fontSize: 16,
      marginBottom: 5,
    },
  });

export default AppealScreen;