# Input

This app gets information from two places:

1.  **User Typing:** You can type your favorite course name into the input box. The app remembers what you type.
2.  **App's Code:** The app already knows the list of courses (Core, Depth, Capstone) and where to find the picture (`icon.png`) because they are written directly in the code and stored in the project files.

# Process

The app takes the information it has (the typed text, the course lists, the picture) and uses React Native's basic building blocks to put everything together:

*   It uses `ScrollView` to make sure you can scroll if the content is too long.
*   It uses `Image` to show the picture file (`icon.png`).
*   It uses `TextInput` to create the box where you type.
*   It uses `Text` to display all the words (labels, course names).
*   It uses `View` to group things together and arrange them on the screen.
*   It uses `StyleSheet` to add colors, sizes, and spacing to make it look organized.

# Output

What you see on your phone screen is the output:

*   The input box is shown, displaying any text you have typed.
*   Below that, you see the lists of Core, Depth of Study, and Capstone courses, each with a title and arranged neatly.
*   The whole screen can be scrolled up and down.