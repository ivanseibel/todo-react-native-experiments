import { Home } from './src/screens/Home';
import { TasksContextProvider } from './src/context/tasks';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'; 
import { useCallback } from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TasksContextProvider>
      <Home />
    </TasksContextProvider>
  );
}

