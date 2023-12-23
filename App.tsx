import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { TasksContextProvider } from './src/context/tasks';

export default function App() {
  return (
    <TasksContextProvider>
      <Home />
    </TasksContextProvider>
  );
}

