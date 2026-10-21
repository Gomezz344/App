import { Pressable, StyleSheet, Text, View } from "react-native";

export default function RestButton({process}) {
    return (
        <View>
            <View style={styles.subContainer}>
                <Pressable
                onPress={process} 
                style={styles.pressable}
                >
                    <Text style={styles.text}>-1</Text>
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    subContainer : {
        backgroundColor : 'gray',
        borderRadius : '20px',
        padding : '10px',
        width : '150px',
        margin : '15px',
        justifyContent : 'center',
        alignItems : 'center'
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