import { View, Button, StyleSheet } from 'react-native';

const ViewCreateScreen = ({
    navigation,
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button style={styles.button}
                    title="Create Appeal"
                    //onPress={() => navigation.navigate("CreateAppeal")}  
                />
                <Button style={styles.button}
                    title="View"
                    onPress={() => navigation.navigate("AppealList")} />
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
    buttonContainer: {
        width: '80%',
    },
    button: {
        marginBottom: 50
        // why doesn't this thing work
    }
});


export default ViewCreateScreen;