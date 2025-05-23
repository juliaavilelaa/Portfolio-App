import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Navbar from './components/navbar';

const skills = [
  'C++', 'C', 'Java', 'Python', 'HTML', 'CSS',
  'JavaScript', 'Typescript', 'React', 'React Native', 'MySQL', 'Git', 'VSCode'
];

export default function Experiencias() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Navbar current="experiencias" />
        <Text style={styles.title}>experiências</Text>
      </View>
      <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 32 }}>
        {/* Skills */}
        <Text style={styles.sectionTitle}>Linguagens e Ferramentas</Text>
        <View style={styles.skillsContainer}>
          {skills.map(skill => (
            <TouchableOpacity
              key={skill}
              style={[
                styles.skillBox,
                hoveredSkill === skill && styles.skillBoxSelected
              ]}
              activeOpacity={0.7}
              onPressIn={() => setHoveredSkill(skill)}
              onPressOut={() => setHoveredSkill(null)}
            >
              <Text
                style={[
                  styles.skillText,
                  hoveredSkill === skill && styles.skillTextSelected
                ]}
              >
                {skill}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Experiência Acadêmica */}
        <Text style={styles.sectionTitle}>Experiência Acadêmica</Text>
        <View style={styles.expBox}>
          <Text style={styles.expText}>
            • Graduação em Ciência da Computação - UNICAP {"\n"}
            • Iniciação científica em projetos de lógica e criatividade {"\n"}
            • Monitoria em disciplinas de programação
          </Text>
        </View>

        {/* Experiência Profissional */}
        <Text style={styles.sectionTitle}>Experiência Profissional</Text>
        <View style={styles.expBox}>
          <Text style={styles.expText}>
            • Estágio em desenvolvimento de software {"\n"}
            • Projetos pessoais e colaborativos {"\n"}
            • Participação em hackathons e eventos de tecnologia
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#D0D5CE' },
  header: {
    backgroundColor: '#959D90',
    paddingTop: 90,
    paddingBottom: 16,
    paddingHorizontal: 0,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'Platypi-ExtraBold',
    fontSize: 32,
    color: '#222',
    marginLeft: 24,
    marginTop: 8,
  },
  content: {
    padding: 24,
  },
  sectionTitle: {
    fontFamily: 'Platypi-ExtraBold',
    fontSize: 22,
    color: '#192524',
    marginTop: 18,
    marginBottom: 10,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 0,
    marginBottom: 10,
  },
  skillBox: {
    backgroundColor: '#3C5759',
    borderRadius: 22,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginRight: 10,
    marginBottom: 10,
  },
  skillBoxSelected: {
    backgroundColor: '#192524',
  },
  skillText: {
    fontFamily: 'Platypi-ExtraBold',
    fontSize: 17,
    color: '#fff',
  },
  skillTextSelected: {
    color: '#fff',
  },
  expBox: {
    backgroundColor: '#f5f7f4',
    borderRadius: 12,
    padding: 16,
    marginBottom: 18,
  },
  expText: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 16,
    color: '#222',
  },
});