import { StyleSheet, Text, View } from "react-native";

export default function Name({nombre}) {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.text}>{nombre}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'black'
    },
    subContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text : {
        color : 'white',
        fontSize : '2em'
    }


})