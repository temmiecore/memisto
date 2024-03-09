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
                <Button style={styles.button} title="Log In" onPress={() => navigation.navigate('Login')} />
                <Button style={styles.button} title="Sign Up" onPress={() => navigation.navigate('Signup')} />
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
      marginBottom: 50,
    },
    buttonContainer: {
      width: '60%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

export default EntryScreen;