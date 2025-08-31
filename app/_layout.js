// ✅ FIXED: app/_layout.js (No conditional <Tabs.Screen>, no warning)

import React, { useEffect, useState } from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ActivityIndicator, View } from 'react-native';

export default function Layout() {
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, () => {
      setCheckingAuth(false);
    });
    return unsubscribe;
  }, []);

  if (checkingAuth) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  const getIcon = (routeName) => {
    switch (routeName) {
      case 'index':
        return 'home-outline';
      case 'suggestions':
        return 'bulb-outline';
      case 'universities':
        return 'school-outline';
      case 'profile':
        return 'person-outline';
      default:
        return 'ellipse-outline';
    }
  };

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => (
          <Ionicons name={getIcon(route.name)} size={size} color={color} />
        ),
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: 'gray',
        headerStyle: { backgroundColor: '#2563eb' },
        headerTintColor: '#fff',
        tabBarLabelStyle: { fontSize: 12 },
      })}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="suggestions" options={{ title: 'Suggestions' }} />
      <Tabs.Screen name="universities" options={{ title: 'Universities' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', headerShown: false }} />
    </Tabs>
  );
}
