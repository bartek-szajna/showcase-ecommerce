import { createGlobalStyle } from 'styled-components';

interface GlobalStyleProps {
  theme: {
    lightMode: boolean;
    fontFamilies: {
      textFont: "Poppins"
    }
    body: {
      background: string;
      secondaryColor: string;
    }
    navbar: {
      primaryColor: string;
      secondaryColor: string;
    }
    fontWeights: {
      bold: string;
      normal: string
    }

  };
}
const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
  font-family: ${({ theme }) => theme.fontFamilies.textFont}, "sans-serif";
}


.app-container {
  position: relative;
  min-height: calc(100vh - 15rem);
  padding-top: 10rem;
  background-color: ${({ theme }) => theme.body.background};
}

a {
  text-decoration: none;
  color: ${({ theme }) => theme.navbar.secondaryColor};
}

.activeLink {
    color: ${({ theme }) => theme.navbar.primaryColor};
    font-weight: ${({ theme }) =>
      theme.lightMode ? theme.fontWeights.bold : theme.fontWeights.normal};

    .activeLinkIcon {
      background-position-y: ${({ theme }) =>
        theme.lightMode ? 'top' : 'bottom'};
    }
  }

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

@media (min-width: 768px) {
  .app-container {
    min-height: calc(100vh - 10rem);
  }
}

/* Chrome fix for changing input styling upon autocomplete suggestions applied*/
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus {
  -webkit-text-fill-color:${({ theme }) => theme.body.secondaryColor};
  transition: background-color 0s ease-in-out 5000s;
}

`;

export default GlobalStyle;
