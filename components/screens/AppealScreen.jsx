import { View, Text, StyleSheet } from 'react-native';

const AppealScreen = ({
    navigation,
    route
}) => {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.detailText}>Type: {item.type.charAt(0).toUpperCase() + item.type.slice(1)}</Text>
            <Text style={styles.detailText}>Description: {item.description.charAt(0).toUpperCase() + item.description.slice(1)}</Text>
            <Text style={styles.detailText}>Status: {item.isSolved ? "Solved" : "Pending"}</Text>
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