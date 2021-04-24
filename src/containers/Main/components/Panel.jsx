import React, { memo } from 'react'
import { Card, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import { CardPanelContentStyled, ItemStyled } from './style'


function Panel({ onChange, country }) {


    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt={`País-${country.label}`} />
            </ItemStyled>
        </MenuItem>
    )

    return (
        <Card>
            <CardPanelContentStyled>
                <div className="pt-2">
                    <Select onChange={onChange} value={country}>
                        {COUNTRIES.map(renderCountries)}
                    </Select>
                </div>
            </CardPanelContentStyled>
        </Card>
    )
}

export default memo(Panel)