import React, { Fragment } from 'react'
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import GlobalStyle from './commons/styles/global-style'
import Main from './containers/Main/index'

const App = () => {
    return (
        <Fragment>
            <StylesProvider>
                <CssBaseline />
                <GlobalStyle />
                <Main />
            </StylesProvider>
        </Fragment>
    )
}

export default App;