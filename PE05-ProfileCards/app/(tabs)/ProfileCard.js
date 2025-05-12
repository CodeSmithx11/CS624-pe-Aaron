import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const ProfileCard = ({ user, isExpanded, onPress }) => {
  const isAaron = user.name === 'Aaron J. Smith';

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.cardContainer, isExpanded && styles.cardContainerExpanded]}>
        <View style={styles.cardImageContainer}>
          <Image
            style={styles.cardImage}
            source={
              isAaron
                ? require('../../assets/images/AJS_photo.jpg') // ✅ Your image
                : require('../../assets/images/user.png')      // 👤 Others
            }
          />
        </View>

        {/* Always visible */}
        <Text style={styles.nameText}>{user.name}</Text>
        <Text style={styles.titleText}>{user.title}</Text>

        {/* Only visible when expanded */}
        {isExpanded && (
          <Text style={styles.descriptionText}>{user.description}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProfileCard;
