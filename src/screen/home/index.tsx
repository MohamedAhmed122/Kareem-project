import {SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CommonInput} from '../../ui/common-input';
import {CommonButton} from '../../ui/commn-button';
import {Post} from './type';

export default function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const onCreatePost = () => {
    const postObj = {
      title,
      desc,
      imageUrl,
    };
    setPosts([postObj, ...posts]);
  };

  return (
    <React.Fragment>
      <SafeAreaView />

      <View style={{margin: 20}}>
        <Text>Create a Post</Text>
        <CommonInput
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
        />
        <CommonInput
          value={desc}
          onChangeText={setDesc}
          placeholder="Description"
        />
        <CommonInput
          value={imageUrl}
          onChangeText={setImageUrl}
          placeholder="ImageUrl"
        />
        <CommonButton title="Create Post" onPress={onCreatePost} />
      </View>
    </React.Fragment>
  );
}
