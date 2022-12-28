import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from '../colors';
import { Icon } from "@rneui/themed";


const imageMdj = require("../assets/mdj.jpg");

const Home = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Icon name="search" size={24} color={colors.gray} style={{ marginLeft: 15 }} />
            ),
            headerRight: () => (
                <Image
                    source={imageMdj}
                    style={{
                        width: 40,
                        height: 40,
                        marginRight: 15,
                    }}
                />
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={{color:'#000',alignSelf:'center'}}>Let's talk some shit about people</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Chat")}
                style={styles.chatButton}
            >
                <Text style={styles.bttext}>Shit Talk</Text>
                <Icon name="chat" size={24} color={colors.lightGray} />
            </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: "#fff",
    },
    chatButton: {
        backgroundColor: colors.primary,
        height: 50,
        borderRadius: 25,
        flexDirection:'row',
        alignSelf:'center',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .9,
        shadowRadius: 8,
        marginBottom: 50,
        paddingRight:20,
        marginTop:20
    },
    bttext:{
        pading:20,
        marginLeft:20,
        marginRight:10,
        fontWeight:'600',
        color:'#fff',
        fontSize:16

    }
});