import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Image, Button, Alert } from 'react-native';
import circleRed from "../../assets/circle-red.png"
import circleGreen from "../../assets/circle-green.png"

const AppealListScreen = ({
    navigation,
}) => {
    const [appeals, setAppeals] = useState([]);

    useEffect(() => {
        fetchAppeals();
    }, []);

    const fetchAppeals = async () => {
        try {
            const response = await fetch('https://fc7f-188-163-103-97.ngrok-free.app/appeals', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                console.log(response);
                throw new Error('Failed fetch');
            }

            const data = await response.json();
            console.log(data);
            setAppeals(data);

        } catch (error) {
            console.error('Error:', error);
            Alert.alert('Error', 'Something went wrong while fetching appeals. Please try again!');
        }
    };


    const handleAppealPress = (item) => {
        navigation.navigate("Appeal", { item: item });
    }


    const renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Button title={item.name} onPress={() => handleAppealPress(item)} />
                <Image style={styles.image} 
                    source={
                    item.isSolved == "approved"
                        ? circleGreen
                        : circleRed
                } />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList style={styles.list}
                data={appeals}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    item: {
        flexDirection: 'row',
        marginBottom: 30,
        gap: 20,
    },
    itemText: {
        marginLeft: 10,
    },
    image: {
        width: 30,
        height: 30,
    },
});

export default AppealListScreen;