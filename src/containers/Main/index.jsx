import React, { memo, useCallback, useState, useEffect, Fragment } from 'react'
import Api from './../../api'
import { ContainerStyled } from './style'

function Main() {

    const [data, setData] = useState({})
    const [country, setCountry] = useState('germany')

    //pegando os dados da function exportada da api
    const getCovidData = useCallback((country) => {
        Api.getCountry(country).then(data => console.log(data))
    }, [])

    //Quando houver uma alteração no getCovidData(troca de pais(country)) useEffect ira atualizar os dados
    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])




    return (
        <Fragment>
            <ContainerStyled>
                <div className="mb-2">

                </div>
            </ContainerStyled>
        </Fragment>
    )
}

export default memo(Main)