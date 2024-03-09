import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppealScreen = ({
  navigation,
  route
}) => {
  const { item } = route.params;
  const [status, setStatus] = useState([]);

  useEffect(() => {
    fetchStatus();
  }, []);

  const fetchStatus = async () => {
    try {
      const response = await fetch('https://fc7f-188-163-103-97.ngrok-free.app/appeal_statuses',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ id: item.id })
        });

      if (!response.ok) {
        console.log(response);
        throw new Error('Failed fetch');
      }

      const data = await response.json();
      setStatus(data);
      console.log(data);

    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Something went wrong while fetching appeals. Please try again!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.text}>Type: {item.type.charAt(0).toUpperCase() + item.type.slice(1)}</Text>
      <Text style={styles.text}>Description: {item.description.charAt(0).toUpperCase() + item.description.slice(1)}</Text>
      <Text style={styles.text}>Status:</Text>
      <View style={styles.styleList}>
        {status.map((item, index) => (
          <Text key={index} style={styles.statusText}>{index+1}: {item.status.charAt(0).toUpperCase() + item.status.slice(1)}</Text>
        ))}
      </View>
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
  text: {
    fontSize: 16,
    marginBottom: 5,
  },  
  styleList: {
    flex: 1,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default AppealScreen;