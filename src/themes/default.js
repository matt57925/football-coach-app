/**
 * Thème par défaut de l'application Football Coach
 * 
 * Ce fichier centralise toutes les valeurs de style pour assurer
 * la cohérence visuelle à travers l'application.
 */

import { DefaultTheme } from 'react-native-paper';

const colors = {
  // Couleurs principales
  gazon: '#357a38',
  gazonClair: '#4caf50',
  gazonPale: '#a5d6a7',
  blanc: '#ffffff',
  noir: '#212121',
  
  // Couleurs secondaires
  arbitreRouge: '#e53935',
  arbitreJaune: '#ffeb3b',
  sifflet: '#607d8b',
  ligne: '#f5f5f5',
  victoire: '#1e88e5',
  
  // Couleurs fonctionnelles
  error: '#e53935',
  warning: '#ffb74d',
  success: '#43a047',
  info: '#29b6f6',
  
  // Gradients de couleurs (pour utilisation dans les composants)
  gradients: {
    terrain: ['#357a38', '#4caf50'],
    score: ['#4caf50', '#1e88e5'],
  }
};

const spacing = {
  nano: 2,
  tiny: 4,
  xsmall: 8,
  small: 12,
  medium: 16,
  large: 24,
  xlarge: 32,
  xxlarge: 48,
  huge: 64,
};

const typography = {
  fontFamily: {
    regular: 'Roboto-Regular',
    medium: 'Roboto-Medium',
    light: 'Roboto-Light',
    thin: 'Roboto-Thin',
    bold: 'Roboto-Bold',
    heading: 'Montserrat-SemiBold',
    mono: 'RobotoMono-Regular',
  },
  sizes: {
    display: 32,
    title1: 24,
    title2: 20,
    body1: 16,
    body2: 14,
    caption: 12,
    small: 10,
  },
  weights: {
    light: '300',
    regular: '400',
    medium: '500',
    bold: '700',
  }
};

const borderRadius = {
  small: 4,
  medium: 8,
  large: 12,
  round: 999,
};

const shadows = {
  subtle: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  light: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  strong: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 8,
  }
};

const animations = {
  timing: {
    fade: 200,
    slide: 300,
    scale: 150,
    bounce: 400,
  },
  easing: {
    // Ces valeurs seront utilisées avec les fonctions d'animation
    // comme Animated.timing
    bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  }
};

/**
 * Thème React Native Paper personnalisé
 * Étend le thème par défaut avec nos propres couleurs et styles
 */
export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.gazon,
    accent: colors.gazonClair,
    background: colors.blanc,
    surface: colors.blanc,
    text: colors.noir,
    error: colors.error,
    onSurface: colors.noir,
  },
  // Ajoute nos propres propriétés au thème
  spacing,
  typography,
  borderRadius,
  shadows,
  animations,
  colors, // La palette complète
};

/**
 * Styles communs réutilisables dans l'application
 */
export const commonStyles = {
  container: {
    flex: 1,
    backgroundColor: colors.blanc,
  },
  screenContainer: {
    flex: 1,
    backgroundColor: colors.blanc,
    padding: spacing.medium,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    ...shadows.light,
    borderRadius: borderRadius.medium,
    backgroundColor: colors.blanc,
    padding: spacing.medium,
    marginVertical: spacing.small,
  },
  button: {
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.medium,
    borderRadius: borderRadius.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.ligne,
    borderRadius: borderRadius.medium,
    padding: spacing.small,
    marginVertical: spacing.small,
  },
  heading: {
    fontSize: typography.sizes.title1,
    fontWeight: typography.weights.bold,
    marginBottom: spacing.medium,
  },
  subheading: {
    fontSize: typography.sizes.title2,
    fontWeight: typography.weights.medium,
    marginBottom: spacing.small,
  },
  paragraph: {
    fontSize: typography.sizes.body1,
    marginBottom: spacing.medium,
    lineHeight: typography.sizes.body1 * 1.5,
  },
  caption: {
    fontSize: typography.sizes.caption,
    color: colors.sifflet,
  }
};

export default {
  theme,
  commonStyles,
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
  animations,
};
