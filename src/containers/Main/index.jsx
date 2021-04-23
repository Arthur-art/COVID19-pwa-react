import React, { memo, useState, useCallback, useEffect, Fragment } from 'react'
import Api from '../../api'
import Board from './components/Board'
import Panel from './components/Panel'
import { ContainerStyled } from './style'

function Main() {

    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')
    const updateAt = new Date().toLocaleString()

    //pegando os dados da function exportada da api
    const getCovidData = useCallback((country) => {
        Api.getCountry(country).then((data) => {
            setData(data)
            console.log(data)
        })
    }, [])

    //Quando houver uma alteração no getCovidData(troca de pais(country)) useEffect ira atualizar os dados
    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    const handleChange = ({ target }) => {
        const country = target.value
        setCountry(country)
    }



    return (
        <ContainerStyled>
            <div className="mb-2">
                <Panel
                    data={data}
                    updateAt={updateAt}
                    onChange={handleChange}
                    country={country}
                    getCovidData={getCovidData}
                />
            </div>
            <Board data={data} />

        </ContainerStyled>
    )
}

export default memo(Main)

