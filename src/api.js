const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

//Retorna os dados da api path setando apenas o pais(country)
export const getCountry = (country) => {
    return fetch(`${path}/${country}`, headers)
        .then((response) => response.json())
}
