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
import { PostAvatar } from '../../atoms/PostAvatar';

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
  user: string;
  location: string;
};
export function PostHeader({ user, location }: Props) {
  return (
    <View style={styles.postHeader}>
      <PostAvatar source={ProfileIcon} />
      <View>
        <Text style={styles.postUsername}>{user}</Text>
        <Text style={styles.postLocation}>{location}</Text>
      </View>
    </View>
  );
}
