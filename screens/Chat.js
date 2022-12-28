import React, { useState, useEffect, useLayoutEffect, useCallback } from "react";
import { TouchableOpacity, Text } from "react-native";
import { collection, addDoc, orderBy, query, onSnapshot } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, database } from "../config/firebase.config";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import colors from "../colors";
import { GiftedChat } from "react-native-gifted-chat";

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();

    const onSignOut = () => {
        signOut(auth).catch(error => console.log(error));
    };

    useLayoutEffect(
        () => {
            navigation.setOptions({
                headerRight: () => (
                    <TouchableOpacity onPress={onSignOut} style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{color:'#000',paddingRight:10}}>Logout</Text>
                        <Icon name="logout" size={24} color={colors.gray} style={{ marginRight: 10 }} />
                    </TouchableOpacity>
                )
            });
        }, [navigation]
    );

    useLayoutEffect(() => {
        const mesCollection = collection(database, 'chats');
        const q = query(mesCollection, orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, snapshot => {
            console.log('snapshot');
            setMessages(
                snapshot.docs.map(doc => ({
                    _id: doc.id,
                    createdAt: doc.data().createdAt.toDate(),
                    text: doc.data().text,
                    user: doc.data().user
                }))
            );
        });
        return () => unsubscribe();
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMess => GiftedChat.append(previousMess, messages));

        const { _id, createdAt, text, user } = messages[0];
        addDoc(collection(database, 'chats'), {
            _id,
            createdAt,
            text,
            user
        });
    }, []);

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            showAvatarForEveryMessage={false}
            user={{
                _id: auth?.currentUser?.email,
                avatar: 'https://i.pravatar.cc/300'
            }}
            textInputStyle={{
                backgroundColor: '#fff',
                borderRadius: 20,
                color: '#000'
            }}
            messagesContainerStyle={{
                backgroundColor: colors.white
            }}
        />
    );
}

export default Chat;