import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

export default function HistoryScreen({ route, navigation }) {
    const { data } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>History</Text>
            <FlatList
                style={styles.text}
                data={data}
                renderItem={({ item }) => <Text>{item.key}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'afff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5

    }, text: {
        fontSize: 25,
    }
});