import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const NAV_OPTIONS = [
  { href: '/', label: 'home', key: 'index' },
  { href: '/sobre-mim', label: 'sobre mim', key: 'sobre-mim' },
  { href: '/experiencias', label: 'experiências', key: 'experiencias' },
  { href: '/projetos', label: 'projetos', key: 'projetos' },
  { href: '/jogo-da-senha', label: 'jogo da senha', key: 'jogo-da-senha' },
];

type NavbarProps = {
  current: string;
};

export default function Navbar({ current }: NavbarProps) {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVisible(true)} style={styles.dots}>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.dot}>•</Text>
        <Text style={styles.dot}>•</Text>
      </TouchableOpacity>
      <Modal
        transparent
        visible={visible}
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity style={styles.overlay} onPress={() => setVisible(false)}>
          <View style={styles.menu}>
            {NAV_OPTIONS.filter(opt => opt.key !== current).map(opt => (
              <Link
                key={opt.key}
                href={opt.href as any}
                asChild
              >
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => setVisible(false)}
                >
                  <Text style={styles.menuText}>{opt.label}</Text>
                </TouchableOpacity>
              </Link>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    left: 24,
    zIndex: 10,
  },
  dots: {
    flexDirection: 'row',
    gap: 0,
  },
  dot: {
    color: '#222',
    fontSize: 25,
    marginHorizontal: 0,
    fontWeight: 'bold',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.15)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  menu: {
    backgroundColor: '#3C5759',
    borderRadius: 10,
    marginTop: 90,
    marginLeft: 25,
    padding: 16,
    minWidth: 180,
    elevation: 5,
  },
  menuItem: {
    marginVertical: 8,
  },
  menuText: {
    color: '#fff',
    fontFamily: 'Quicksand-Regular',
    fontSize: 18,
  },
});