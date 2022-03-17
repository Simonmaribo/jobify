import { MantineProvider } from '@mantine/core';

import '../styles/globals.css';

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: "Roboto, sans-serif",
          colorScheme: 'light',
          primaryColor: 'primary',
          colors: {
            'white': ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
            'primary': ["#C3D6FF", "#99BAFF", "#73A0FF", "#5088FF", "#3173FF", "#145FFF", "#0050FF", "#0046EB", "#003FD4", "#0039BF", "#0033AB", "#002E9A", "#00298B" ],
          }
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}