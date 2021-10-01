import React from 'react';

import { FlatList, View, Image, Text, ImageProps } from 'react-native';
import {
  CommentIcon,
  FavoriteIcon,
  MessengerIcon,
  ProfileIcon,
  SaveIcon,
} from '../../../global/styles/icons';

import { styles } from '../../../pages/Feed/styles';
import { posts } from '../../../utils/posts';
import { PostAbout } from '../../atoms/PostAbout';
import { PostDescription } from '../../atoms/PostDescription';
import { PostOptions } from '../../atoms/PostOptions';
import { PostPhoto } from '../../atoms/PostPhoto';
import { PostHeader } from '../../molecules/PostHeader';

type Profile = {
  id: string;
  name: string;
  avatar: ImageProps;
};

export type PostProps = {
  id: string;
  likes: string;
  user: string;
  location: string;
  cover: ImageProps;
  description: string;
  lastLiked: Profile;
};
type Props = {
  data: PostProps;
};
export function Post({ data }: Props) {
  return (
    <View style={styles.post}>
      <PostHeader user={data.user} location={data.location} />

      <PostPhoto source={data.cover} />

      <View style={styles.postFooter}>
        <PostOptions />
        <PostAbout avatar={data.lastLiked.avatar} likes={data.likes} />
        <PostDescription description={data.description} />
      </View>
    </View>
  );
}
