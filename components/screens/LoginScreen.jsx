import { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const LoginScreen = ({
    navigation,
}) => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setMail("");
        setPassword("")
    }, []);


    const handleSubmit = async () => {
        if (!mail || !password) {
            Alert.alert('Error', 'Username and password are required.');
            return;
        }
        try {
            const response = await fetch('https://fc7f-188-163-103-97.ngrok-free.app/user_login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ mail: mail, pass: password.toString() })
                });

            if (!response.ok) {
                console.log("Responce: " + response);
                throw new Error("");
            }

            const data = await response.json();
            console.log(data);

            if (data.failed == false) {
                navigation.navigate("ViewCreate");
            } else {
                throw new Error('Incorrect email or password!');
            }
        }
        catch (error) {
            if (error.message == "")
                Alert.alert('Error', 'Something went wrong. Try again!');
            else
                Alert.alert(error.message);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log In</Text>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={mail}
                    onChangeText={text => setMail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={text => setPassword(text)}
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