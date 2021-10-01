import React from 'react';

import { FlatList, View, Image, Text } from 'react-native';

import { styles } from '../../../pages/Feed/styles';
import { posts } from '../../../utils/posts';
import { Post } from '../../organisms/Post';

export function Posts() {
  return (
    <FlatList
      data={posts}
      style={styles.posts}
      showsVerticalScrollIndicator={false}
      keyExtractor={post => post.id}
      renderItem={({ item }) => <Post data={item} />}
    />
  );
}
