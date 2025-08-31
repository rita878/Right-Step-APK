import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProfileHome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Profile</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/profile/dashboard')}>
        <Text style={styles.buttonText}>Go to Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/profile/login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/profile/register')}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1f5f9' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2563eb', marginBottom: 20 },
  button: {
    backgroundColor: '#2563eb',
    padding: 14,
    marginBottom: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16 },
});
