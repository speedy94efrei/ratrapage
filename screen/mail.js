import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Linking, KeyboardAvoidingView, Platform, Alert } from 'react-native';

function About() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email) => {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
  };

  const sendEmail = () => {
    if (!email || !subject || !message) {
      Alert.alert('Attention', 'Veuillez remplir tous les champs.');
    } else if (!validateEmail(email)) {
      Alert.alert('Attention', "Veuillez saisir une adresse email valide se terminant par '@gmail.com'.");
    } else {
      const mailtoLink = `mailto:contact@lox.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
      Linking.openURL(mailtoLink);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : null} keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>The Legend of Xefi</Text>
          <Text style={styles.formLabel}>Formulaire de Contact</Text>
        </View>
        <View style={styles.centeredView}>
          <TextInput
            style={styles.input}
            placeholder="Votre email *"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            required
          />
          <TextInput
            style={styles.input}
            placeholder="Objet *"
            value={subject}
            onChangeText={setSubject}
            required
          />
          <TextInput
            style={[styles.input, styles.messageInput]}
            placeholder="Votre message *"
            value={message}
            onChangeText={setMessage}
            multiline
            required
          />
          <TouchableOpacity onPress={sendEmail} style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Envoyer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  titleContainer: {
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3B5998',
  },
  formLabel: {
    fontSize: 15,
    textAlign: 'left',
    color: '#3B5998',
    fontWeight: 'bold',
    marginTop: 20, // Espace supplémentaire pour séparer le titre du formulaire
    marginLeft: -90, // Aligné à gauche
  },
  centeredView: {
    width: '80%',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#3B5998', // Couleur bleue pour la bordure
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  messageInput: {
    height: 150, // Hauteur augmentée pour la zone de message
  },
  sendButton: {
    backgroundColor: '#3B5998', // Fond bleu
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10, // Coins arrondis
    alignItems: 'center',
    alignSelf: 'flex-end', // Aligné à droite
  },
  sendButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default About;
