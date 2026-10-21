import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CtnButton({change}) {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Pressable 
                style={styles.pressable}
                onPress={change}>
                    <Text style={styles.text}>CTN</Text>
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    subContainer : {
        backgroundColor : 'gray',
        borderRadius : '15px',
        padding : '15px',
        width : '150px',
        justifyContent : 'center',
        alignItems : 'center',
        margin : '10px'
    },

    pressable : {
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center'
    },

    text : {
        color : 'white'
    }
})