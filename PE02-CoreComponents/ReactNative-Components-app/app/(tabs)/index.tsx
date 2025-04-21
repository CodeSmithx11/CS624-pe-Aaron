import React from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';

// This is our main screen component
export default function CourseScreen() {
  return (
    // ScrollView allows the content below to scroll if needed
    <ScrollView style={styles.container}>

      {/* 1. A placeholder box for where an image might go */}
      <View style={styles.imagePlaceholder}>
        {/* You could put an <Image> component here later */}
      </View>

      {/* 2. The input section */}
      <Text style={styles.label}>Which course did you like?</Text>
      <TextInput
        style={styles.input}
        placeholder="ex. CS624" // Placeholder text shown before typing
      />

      {/* 3. Core Requirements Section */}
      {/* Header View with yellow background */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Core Requirements (24 Credits)</Text>
      </View>
      {/* List of courses using individual Text components */}
      <View style={styles.courseListContainer}>
        <Text style={styles.courseItem}>CS 504 Software Engineering</Text>
        <Text style={styles.courseItem}>CS 506 Programming for Computing</Text>
        <Text style={styles.courseItem}>CS 519 Cloud Computing Overview</Text>
        <Text style={styles.courseItem}>CS 533 Computer Architecture</Text>
        <Text style={styles.courseItem}>CS 547 Secure Systems and Programs</Text>
        <Text style={styles.courseItem}>CS 622 Discrete Math and Algorithms for Computing</Text>
        <Text style={styles.courseItem}>DS 510 Artificial Intelligence for Data Science</Text>
        <Text style={styles.courseItem}>DS 620 Machine Learning & Deep Learning</Text>
      </View>


      {/* 4. Depth of Study Section */}
      {/* Header View with yellow background */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Depth of Study (6 Credits)</Text>
      </View>
      {/* List of courses using individual Text components */}
      <View style={styles.courseListContainer}>
        <Text style={styles.courseItem}>CS 624 Full-Stack Development - Mobile App</Text>
        <Text style={styles.courseItem}>CS 628 Full-Stack Development - Web App</Text>
      </View>

    </ScrollView> // End of ScrollView
  );
}

// 5. Styles - This is like CSS for React Native
const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the ScrollView fill the screen height
    padding: 20, // Add space around the edges of the screen content
    backgroundColor: '#fff', // White background for the whole screen area
  },
  imagePlaceholder: {
    height: 150, // How tall the placeholder is
    width: '90%', // How wide it is (90% of screen width)
    backgroundColor: '#e0e0e0', // Light gray background color
    alignSelf: 'center', // Center the box horizontally
    marginBottom: 20, // Add space below the box
    borderWidth: 1, // Add a thin border
    borderColor: '#cccccc', // Color of the border
  },
  label: {
    fontSize: 16, // Font size for the label
    marginBottom: 5, // Space below the label text
    color: '#333', // Dark gray color for text
  },
  input: {
    borderWidth: 1, // Add a border around the input box
    borderColor: '#aaa', // Color of the border
    padding: 10, // Add space inside the input box
    fontSize: 16, // Font size for the text typed inside
    marginBottom: 25, // Add space below the input box
    borderRadius: 5, // Slightly round the corners
  },
  sectionHeader: {
    backgroundColor: 'yellow', // Yellow background for the header
    padding: 10, // Space inside the yellow box
    marginTop: 10, // Add some space above the yellow header
  },
  sectionTitle: {
    fontSize: 45, // Big font size for the title
    fontWeight: 'bold', // Make the text bold
    color: 'black', // Black text color
  },
  courseListContainer: {
    marginTop: 8, // Add space between the yellow header and the course list
    marginBottom: 20, // Add space after the list of courses
  },
  courseItem: {
    fontSize: 16, // Font size for course names
    color: '#333', // Dark gray color
    marginVertical: 4, // Add a little space above and below each course name
  },
});