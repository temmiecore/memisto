import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({
    navigation,
}) => {
    const handleSubmit = () => {
        // Handle user input. Check entry in DB or whatever
        // If all good:
        navigation.navigate("ViewCreate");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log In</Text>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                // onChangeText={...}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                // onChangeText={...}
                />
                <Button title="Submit" onPress={handleSubmit} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    formContainer: {
        width: '80%',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
    },
});

export default LoginScreen;