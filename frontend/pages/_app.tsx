import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import createI18n from '../locales/i18n'
import { I18nextProvider, useTranslation } from 'react-i18next'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../assets/styles/global'
import Theme from '../assets/styles/theme'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => {
    const { locale } = pageProps
    const i18n = React.useMemo(() => createI18n({ locale }), [locale])
    const { t } = useTranslation()

    return (
        <>
            <Head>
                <title>{t(`label:siteTitle`)}</title>
                <meta name="viewport" content="width=device-width" />
            </Head>
            <I18nextProvider i18n={i18n}>
              <GlobalStyle />
              <ThemeProvider theme={Theme}>
                  <Layout>
                      <Component {...pageProps} />
                  </Layout>
              </ThemeProvider>
            </I18nextProvider>
        </>
    )
}

export default App