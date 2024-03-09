import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

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
      <View style={styles.divider} />
      <View style={styles.textContainer}>
        <Text style={styles.label}>Type:</Text>
        <Text style={styles.text}>{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.label}>Description:</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>{item.description.charAt(0).toUpperCase() + item.description.slice(1)}</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>Status:</Text>
        <View style={styles.statusList}>
          {status.map((statusItem, index) => (
            <Text key={index} style={styles.statusText}>{index + 1}: {statusItem.status.charAt(0).toUpperCase() + statusItem.status.slice(1)}</Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  textContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  descriptionContainer: {
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    flex: 1,
    textAlign: 'right',
  },
  statusList: {
    marginLeft: 20,
  },
  statusText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default AppealScreen;