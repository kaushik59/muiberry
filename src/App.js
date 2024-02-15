import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import Login from './Login3';
import themes from './themes';
import Customization from './Customization';

const App = () => {
  // State for customization
  const [customization, setCustomization] = useState({
    borderRadius: 8, // Default value for border radius
    fontFamily: 'Roboto' // Default value for font family
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <Customization
          customization={customization}
          setCustomization={setCustomization}
        />
        <Login />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
