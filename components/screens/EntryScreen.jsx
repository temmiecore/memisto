import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const EntryScreen = ({
    navigation,
}) => {
    const [startUp, setStartUp] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setStartUp(true);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.logoText}>MeMisto</Text>
            <View style={styles.buttonContainer}>
                <Button title="Log In" onPress={() => navigation.navigate('Login')} />
                <Button title="Sign Up" onPress={() => navigation.navigate('Signup')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoText: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    buttonContainer: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

export default EntryScreen;