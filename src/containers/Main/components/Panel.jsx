import React, { memo } from 'react'
import { Card, Typography, Button, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import { CardPanelContentStyled, ItemStyled } from './style'

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country }) {
    const { recovered } = data

    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt={`País-${country.label}`} />
            </ItemStyled>
        </MenuItem>
    )

    const textCovid19 = `País: ${country} - recuperados: ${recovered}`

    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19)
    }

    const shareInfo = () => {
        navigator.share({
            title: `Dados do Covid19 - ${country}`,
            text: textCovid19,
            url: 'https://covid19dio.netlify.app/'
        })
    }

    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
      </Button>
        </div>
    )

    const renderCopyButton = (
        <div>
            <Button variant="contained" color="primary" onClick={copyInfo}>
                Copiar
      </Button>
        </div>
    )

    return (
        <Card>
            <CardPanelContentStyled>
                <div className="container">
                    <Typography variant="h5" component="span" color="primary">Painel Coronavírus</Typography>
                    <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
                    <div className="pt-2">
                        <Select onChange={onChange} value={country}>
                            {COUNTRIES.map(renderCountries)}
                        </Select>
                    </div>
                </div>
                <div className="api">
                    <h3>Dados fornecidos por uma Api pública:</h3>
                    <a href="https://github.com/javieraviles/covidAPI">https://github.com/javieraviles/covidAPI</a>
                </div>

                {navigatorHasShare ? renderShareButton : renderCopyButton}
            </CardPanelContentStyled>
        </Card>
    )
}

export default memo(Panel)