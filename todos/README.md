
Input

The program starts by showing a text input box where users can type their to-do items. Once the user enters a task, they can press the "Submit" button to add the task to their list. The app uses a controlled input, which means the text typed is stored in the app’s state.

Process

When the user clicks "Submit," the app saves the entered task into an array called todos. Each task is displayed on the screen with two buttons: "Done" to mark it complete and "Delete" to remove it. The program updates the list immediately after a task is added, marked as done, or deleted. The app uses simple React Native components like View, TextInput, TouchableOpacity, and ScrollView to manage the layout.

Output

The app displays the to-do items in a clean list. Users can see all their tasks, mark them complete, or delete them. Completed tasks can also be undone if needed. Tabs for "All," "Active," and "Complete" are shown at the bottom for future filtering options.
