import { View, FlatList, StyleSheet, Image, Button } from 'react-native';

const appeals = [
    { appealName: 'Appeal 1', appealStatus: 'approved', appealType: 'Broken road', appealDesc: 'Some description.' },
    { appealName: 'Appeal 2', appealStatus: 'approved', appealType: 'Broken road, again', appealDesc: 'Some description 2.' },
    { appealName: 'Appeal 3', appealStatus: 'rejected', appealType: 'Feral dogs', appealDesc: 'Some description 3.' },
    { appealName: 'Appeal 4', appealStatus: 'approved', appealType: 'No trashcans!!!', appealDesc: 'Some description prequel.' },
];

const AppealListScreen = ({
    navigation,
}) => {
    const handleAppealPress = (item) => {
        navigation.navigate("Appeal", { item: item });
    }


    const renderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Button title={item.appealName} onPress={() => handleAppealPress(item)} />
                <Image source={
                    item.appealStatus == "approved"
                        ? null //approved.png
                        : null //rejected.png
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