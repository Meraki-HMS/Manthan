'use client';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Keyboard,
} from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address1: '',
    address2: '',
    country: '',
    state: '',
    city: '',
    zip: '',
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleRegister = () => {
    console.log('Registering user:', form);
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      address1: '',
      address2: '',
      country: '',
      state: '',
      city: '',
      zip: '',
    });
    Keyboard.dismiss();
  };

  const fields = [
    ['firstName', 'First Name'],
    ['lastName', 'Last Name'],
    ['email', 'Email'],
    ['phone', 'Phone'],
    ['password', 'Password'],
    ['confirmPassword', 'Confirm Password'],
    ['address1', 'Address Line 1'],
    ['address2', 'Address Line 2'],
    ['country', 'Country'],
    ['state', 'State'],
    ['city', 'City'],
    ['zip', 'Zip Code'],
  ];

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.title}>Register</Text>

      {fields.map(([key, label]) => (
        <TextInput
          key={key}
          placeholder={label}
          style={styles.input}
          value={form[key] || ''}
          onChangeText={(value) => handleChange(key, value)}
          secureTextEntry={key.toLowerCase().includes('password')}
          keyboardType={key === 'phone' || key === 'zip' ? 'numeric' : 'default'}
        />
      ))}

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Text style={styles.bottomText}>
        Already have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9ff',
    flexGrow: 1,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    marginBottom: 16,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4B00F5',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  bottomText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#444',
  },
  link: {
    color: '#4B00F5',
    fontWeight: '600',
  },
});

export default RegisterScreen;
