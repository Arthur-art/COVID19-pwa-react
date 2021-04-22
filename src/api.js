const path = 'https://coronavirus-19-api.herokuapp.com/countries'

const headers = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

//Retorna os dados setando apenas o pais
function getCountry(country) {
    return fetch(`${path}/${country}`, headers)
        .then((response) => response.json())
}

export default {
    getCountry
}