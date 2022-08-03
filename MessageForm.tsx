import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

function MessageForm() {
  // 타입 유추 가능할 경우 생략가능
  // 유추 어렵거나 여러 타입인 경우 설정
  //   const [text, setText] = useState<string>('');
  const [text, setText] = useState('');
  const [lastMessage, setLastMessage] = useState<{
    message: string;
    date: Date;
  } | null>(null);

  const onPress = () => {
    setLastMessage({
      message: text,
      date: new Date(),
    });
    setText('');
  };

  return (
    <View>
      <TextInput value={text} onChangeText={setText} />
      <Button title="press" onPress={onPress} />
      {lastMessage && (
        <View>
          <Text>
            마지막 메시지 : {lastMessage.message} (
            {lastMessage.date.toLocaleString()})
          </Text>
        </View>
      )}
    </View>
  );
}

export default MessageForm;
