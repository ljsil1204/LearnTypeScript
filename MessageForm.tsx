import React, {useEffect, useRef, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

function MessageForm() {
  // 타입 유추 가능할 경우 생략가능
  // 유추 어렵거나 여러 타입인 경우 설정
  //   const [text, setText] = useState<string>('');
  const [text, setText] = useState('');
  const [lastMessage, setLastMessage] = useState<{
    id: number;
    message: string;
    date: Date;
  } | null>(null);
  const nextId = useRef<number>(1);
  const inputRef = useRef<TextInput | null>(null);

  const onPress = () => {
    setLastMessage({
      id: nextId.current,
      message: text,
      date: new Date(),
    });
    setText('');
    nextId.current += 1;
  };

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  return (
    <View>
      <TextInput value={text} onChangeText={setText} ref={inputRef} />
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
