# Iniciando Projeto
- yarn create react-app covid-pwa

(/*
# Dependencies
- npm i styled-components
- npm i --save-dev customize-cra
- npm i --save-dev react-app-rewired

# Criacao dos components
- npm install @material-ui/core

# Styles
- npm i styled-components

*/)

# Passando caminho relativo das pastas com jsconfig
- criando arquivo jsconfig.json
- adicionando codigo (

    {
  "compilerOptions": {
    "target": "es6",
    "baseUrl": "src",
    "jsx": "react",
    "paths": {
      "components/*": [
        "./components/*"
      ],
      "containers/*": [
        "./containers/*"
      ],
      "assets/*": [
        "./assets/*"
      ],
      "resources/*": [
        "./resources/*"
      ],
      "commons/*": [
        "./commons/*"
      ]
    }
  },
  "exclude": [
    "node_modules",
    "build"
  ]
}

)


# Criando arquivo config-overrides.js para sobreescrever a configuracao do react
- (
    const { useBabelRc, override } = require('customize-cra')
module.exports = override(useBabelRc())
)
