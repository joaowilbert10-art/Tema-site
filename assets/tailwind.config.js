/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './templates/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './assets/*.js',
    './assets/*.css'
  ],
  theme: {
    extend: {
      colors: {
        // Cores customizadas do tema
        'base-900': 'var(--color-base-900)',
        'base-800': 'var(--color-base-800)',
        'base-050': 'var(--color-base-050)',
        'accent-700': 'var(--color-accent-700)',
        'cta-600': 'var(--color-cta-600)',
        'cta-700': 'var(--color-cta-700)',
        'cta-500': 'var(--color-cta-500)',
        'cta-100': 'var(--color-cta-100)',
        'warm-200': 'var(--color-warm-200)',
      },
      fontFamily: {
        'heading': ['var(--font-heading-family)', 'system-ui', 'sans-serif'],
        'body': ['var(--font-body-family)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': 'var(--text-xs)',
        'sm': 'var(--text-sm)',
        'base': 'var(--text-base)',
        'lg': 'var(--text-lg)',
        'xl': 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
        '6xl': 'var(--text-6xl)',
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
      },
      transitionDuration: {
        'fast': 'var(--transition-fast)',
        'normal': 'var(--transition-normal)',
        'slow': 'var(--transition-slow)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    // Plugin para utilitários customizados
    function({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          'background': 'linear-gradient(135deg, var(--color-cta-600), var(--color-accent-700))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.bg-gradient': {
          'background': 'linear-gradient(135deg, var(--color-cta-600), var(--color-accent-700))',
        },
        '.bg-gradient-warm': {
          'background': 'linear-gradient(135deg, var(--color-warm-200), var(--color-base-050))',
        },
        '.section-padding': {
          'padding': 'var(--spacing-4xl) 0',
        },
        '.section-padding-sm': {
          'padding': 'var(--spacing-3xl) 0',
        },
        '.section-padding-lg': {
          'padding': 'var(--spacing-4xl) 0',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
