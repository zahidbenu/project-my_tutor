/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      './docs/**/*.html',
      './docs/**/*.{html,js}',
    ],
    theme: {
      extend: {
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
          inter: ['Inter', 'sans-serif'],
          source: ['"Source Sans 3"', 'sans-serif'],
        },
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1326px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xs: '480px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1326px'
        },
      },
    }
  };
  
  