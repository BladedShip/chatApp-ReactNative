import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, Statusbar, Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase.config";

const bgImg = require("../assets/bgimg.jpg");

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = () => {
        if (email !== "" && password !== "") {
            createUserWithEmailAndPassword(auth, email, password).then(() => { console.log("Successfully Signed up") }).catch((err) => Alert.alert("Error Signing up", err.message));
        }
    }

    return (
        <View style={styles.container}>
            <Image source={bgImg} style={styles.backImage} />
            <View style={styles.whiteSheet} />
            <SafeAreaView style={styles.form}>
                <Text style={styles.title}>Signup</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    color="#000"
                    autoFocus={true}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    placeholderTextColor="#95B8D1"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType="password"
                    color="#000"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    placeholderTextColor="#95B8D1"
                />
                <TouchableOpacity style={styles.button} onPress={handleSignup}>
                    <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 18 }}>Signup</Text>
                </TouchableOpacity>
                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                    <Text style={{ color: 'gray', fontWeight: '600', fontSize: 14 }}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                        <Text style={{ color: '#95B8D1', fontWeight: '600', fontSize: 14 }}> Login</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: "#809BCE",
        alignSelf: "center",
        paddingBottom: 24,
    },
    input: {
        backgroundColor: "#F6F7FB",
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
    },
    backImage: {
        width: "100%",
        height: 340,
        position: "absolute",
        top: 0,
        resizeMode: 'cover',
    },
    whiteSheet: {
        width: '100%',
        height: '75%',
        position: "absolute",
        bottom: 0,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    button: {
        backgroundColor: '#809BCE',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
});
export default Signup;