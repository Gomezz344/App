import { StyleSheet, Text, View } from "react-native";

export default function Count({contador, dark}) {
    return( 
        <View>
            <View style={styles.subContainer}>
                <Text style={dark ? styles.textDark : styles.textLight}>{contador}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    text : {
        fontSize : '4em'
    },

    textLight : {
        color : 'black',
        fontSize : 40
    },

    textDark : {
        color : 'white',
        fontSize : 40
    }
})