import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CtmButton({theme}) {
    return (
        <View>
            <View style={styles.subContainer}>
                <Pressable onPress={theme}>
                    <Text style={styles.text}>CTM</Text>
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

    text : {
        color : 'white'
    }
})