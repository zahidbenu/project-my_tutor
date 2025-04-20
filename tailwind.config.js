/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
      './public/**/*.html',
      './src/**/*.{html,js}',
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
       '2xl': '1536px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xs: '480px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1326px',
         '2xl': '1536px',
        },
      },
    }
  };
  
  