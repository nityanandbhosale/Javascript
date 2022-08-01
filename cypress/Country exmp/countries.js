// ************ Countries info example ****************

let contain = document.querySelector('#container')
// console.log(contain)

function Indlangauge(obj){
    return Object.values(obj).join(',')
}

function getcurrn(rs){
    return Object.values(rs).join(',')
}




function renderCountry(infocoun){
    // console.log(country.capital[0])
    // console.log(getcurrn(country.currencies.INR))
    // console.log(Indlangauge(country.languages))
    // console.log(country.continents[0])
    // console.log(country.independent)
    // console.log(country.landlocked)

    let html = `
    <div class ="country">
    <h1>${infocoun.name.common}</h1>
    <h1>${infocoun.name.official}</h1>
    <p>Languages :${Indlangauge(infocoun.languages)}}</p>
    <p>Capital :${infocoun.capital}</p>
    <p>Continent :${infocoun.continents[0]}</p>
    <p>Independent :${infocoun.independent}</p>
    <p>Landlocked :${infocoun.landlocked}</p>
    <img src="${infocoun.flags.png}"/>
    
    </div>`
    // console.log(html)


    //contain.insertAdjacentHTML('beforeEnd',html)
    contain.insertAdjacentHTML('beforeend',html)
}



function NeighbourCountry(counName){

    fetch(`https://restcountries.com/v3.1/name/${counName}`)
    .then(function(response){
        // console.log(response.json())
        return response.json()
    }).then(function(data){
        let info = data[0]
        // console.log(info)
        // console.log(info.name.common)

        renderCountry(info)
        
    })
}

function getCountry(countryName){
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(function(response){
        // console.log(response)
        return response.json()
    }).then(function(rs){
        // console.log(rs)
        country = rs[rs.length-1]
         console.log(country)
        renderCountry(country)
         return country
     }).then(function(rs){
        // console.log(rs)

        let bordercoun = rs.borders[5]
        // console.log(bordercoun)
        NeighbourCountry(bordercoun)
     })
}

getCountry('India')