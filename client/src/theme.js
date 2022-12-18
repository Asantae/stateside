export const tokensDark = {
    grey: {
        0: "#ffffff",
        10: "#f6f6f6",
        50: "#f0f0f0",
        100: "#dbdad8",
        200: "#b8b5b1",
        300: "#94908a",
        400: "#716b63",
        500: "#4d463c",
        600: "#3e3830",
        700: "#2e2a24",
        800: "#1f1c18",
        900: "#0f0e0c",
        1000: "#000000"
    },

    primary: {
        // purpleish
        100: "#d6d2df",
        200: "#ada6c0",
        300: "#8479a0",
        400: "#5b4d81",
        500: "#322061",
        600: "#191F45",
        700: "#1e133a",
        800: "#140d27",
        900: "#0a0613"
    },

    secondary: {
        // orangeish
        50: "#f0f0f0",
        100: "#fbecd6",
        200: "#f7d9ae",
        300: "#f3c785",
        400: "#efb45d",
        500: "#eba134",
        600: "#bc812a",
        700: "#8d611f",
        800: "#5e4015",
        900: "#2f200a"
    },

}

// function that reverses the color palette
function reverseTokens(tokensDark) {
    const reversedTokens = {};
    Object.entries(tokensDark).forEach(([key, val]) => {
      const keys = Object.keys(val);
      const values = Object.values(val);
      const length = keys.length;
      const reversedObj = {};
      for (let i = 0; i < length; i++) {
        reversedObj[keys[i]] = values[length - i - 1];
      }
      reversedTokens[key] = reversedObj;
    });
    return reversedTokens;
  }
  export const tokensLight = reverseTokens(tokensDark);
  
  // mui theme settings
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                ...tokensDark.primary,
                main: tokensDark.primary[400],
                light: tokensDark.primary[400],
              },
              secondary: {
                ...tokensDark.secondary,
                main: tokensDark.secondary[300],
              },
              neutral: {
                ...tokensDark.grey,
                main: tokensDark.grey[500],
              },
              background: {
                default: tokensDark.primary[600],
                alt: tokensDark.primary[500],
              },
            }
          : {
              // palette values for light mode
              primary: {
                ...tokensLight.primary,
                main: tokensDark.grey[50],
                light: tokensDark.grey[100],
              },
              secondary: {
                ...tokensLight.secondary,
                main: tokensDark.secondary[600],
                light: tokensDark.secondary[700],
              },
              neutral: {
                ...tokensLight.grey,
                main: tokensDark.grey[500],
              },
              background: {
                default: tokensDark.grey[0],
                alt: tokensDark.grey[50],
              },
            }),
      },
      typography: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Inter", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };


