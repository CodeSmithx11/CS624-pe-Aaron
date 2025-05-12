import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import ProfileCard from './ProfileCard';
import styles from './styles';

const USERS = [
  {
    name: 'Aaron J. Smith',
    title: 'Full-Stack Developer',
    description:
      'Aaron is a passionate developer focused on building modern solutions. He excels in React Native and loves creating seamless mobile experiences.',
  },
  {
    name: 'Brianna Lee',
    title: 'UX/UI Designer',
    description: 'Brianna focuses on intuitive design and user-friendly experiences in cross-platform apps.',
  },
  {
    name: 'Carlos Rivera',
    title: 'Backend Engineer',
    description: 'Carlos specializes in scalable APIs and microservices using Python and Express.js.',
  },
  {
    name: 'Danielle Kim',
    title: 'Mobile Developer',
    description: 'Danielle crafts native-feeling apps for Android and iOS using React Native.',
  },
  {
    name: 'Ethan Zhao',
    title: 'AI/ML Specialist',
    description: 'Ethan implements intelligent solutions and recommendation engines using machine learning.',
  },
  {
    name: 'Fatima Ahmed',
    title: 'QA Analyst',
    description: 'Fatima ensures software stability through automated and manual testing across platforms.',
  },
];

export default function App() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <View style={styles.container}>
      {/* 👇 Title text always visible */}
      <Text style={styles.headingText}>Tap a card to view full profile</Text>

      <FlatList
        data={USERS}
        numColumns={2}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.cardList}
        renderItem={({ item, index }) => (
          <ProfileCard
            user={item}
            isExpanded={expandedIndex === index}
            onPress={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          />
        )}
      />
    </View>
  );
}
