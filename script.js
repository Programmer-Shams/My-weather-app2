
const btn = document.querySelector('.btn')
const input = document.querySelector('.city')
btn.addEventListener('click', (e) =>{
    e.preventDefault()
    const city = input.value 
    const ApiKey = 'c60bdded100d484d9cc142045231209'
    const ApiURL = `http://api.weatherapi.com/v1/current.json?key=${ApiKey}&q=${city}&aqi=yes`
    const fetcher  = async () => {
        const response = await fetch(ApiURL)
        const data = await response.json()
       console.log(data)

        const name = document.querySelector('.name')
        name.innerHTML = data.location.name

        document.querySelector('.temp').innerHTML = `${data.current.temp_f}°`
        document.querySelector('.RF').innerHTML = `${data.current.feelslike_c}°`
        document.querySelector('.Wind').innerHTML = `${data.current.wind_kph} km/h`
        document.querySelector('.humidity').innerHTML = `${data.current.humidity}%`
        document.querySelector('#img').src = `${data.current.condition.icon}`
        



        // forecast api
        const ApiKey2 = `http://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${city}&days=1&aqi=yes&alerts=no`
        const fetcher2 = async () =>{
            const response = await fetch(ApiKey2)
            const data = await response.json()
            console.log(data)

            document.querySelector('.h1').innerHTML = `${data.forecast.forecastday[0].hour[6].temp_f}°`
            document.querySelector('.h2').innerHTML = `${data.forecast.forecastday[0].hour[9].temp_f}°`
            document.querySelector('.h3').innerHTML = `${data.forecast.forecastday[0].hour[12].temp_f}°`
            document.querySelector('.h4').innerHTML = `${data.forecast.forecastday[0].hour[15].temp_f}°`
            document.querySelector('.h5').innerHTML = `${data.forecast.forecastday[0].hour[18].temp_f}°`
            document.querySelector('.h6').innerHTML = `${data.forecast.forecastday[0].hour[21].temp_f}°`

            document.querySelector('#img1').src = `${data.forecast.forecastday[0].hour[6].condition.icon}`
            document.querySelector('#img2').src = `${data.forecast.forecastday[0].hour[9].condition.icon}`
            document.querySelector('#img3').src = `${data.forecast.forecastday[0].hour[12].condition.icon}`
            document.querySelector('#img4').src = `${data.forecast.forecastday[0].hour[15].condition.icon}`
            document.querySelector('#img5').src = `${data.forecast.forecastday[0].hour[18].condition.icon}`
            document.querySelector('#img6').src = `${data.forecast.forecastday[0].hour[21].condition.icon}`
        }
        fetcher2()

        const ApiKey3 = `http://api.weatherapi.com/v1/forecast.json?key=${ApiKey}&q=${city}&days=7&aqi=no&alerts=no`
        const fetcher3 = async () =>{
            const response = await fetch(ApiKey3)
            const data  = await response.json()
            console.log(data)
            document.querySelector('#imgg1').src = `${data.forecast.forecastday[0].day.condition.icon}`
            document.querySelector('#imgg2').src = `${data.forecast.forecastday[1].day.condition.icon}`
            document.querySelector('#imgg3').src = `${data.forecast.forecastday[2].day.condition.icon}`
            document.querySelector('#imgg4').src = `${data.forecast.forecastday[3].day.condition.icon}`
            document.querySelector('#imgg5').src = `${data.forecast.forecastday[4].day.condition.icon}`
            document.querySelector('#imgg6').src = `${data.forecast.forecastday[5].day.condition.icon}`
            document.querySelector('#imgg7').src = `${data.forecast.forecastday[6].day.condition.icon}`


            document.querySelector('.par11').textContent = `${Math.floor(data.forecast.forecastday[0].day.maxtemp_f)}/`
            document.querySelector('#par12').textContent = `${Math.floor(data.forecast.forecastday[0].day.mintemp_f)}`
            document.querySelector('#p1').innerHTML = `${data.forecast.forecastday[0].day.condition.text}`


            document.querySelector('.par21').innerHTML = `${Math.floor(data.forecast.forecastday[1].day.maxtemp_f)}/`
            document.querySelector('#par22').innerHTML = `${Math.floor(data.forecast.forecastday[1].day.mintemp_f)}`
            document.querySelector('#p2').innerHTML = `${data.forecast.forecastday[1].day.condition.text}`


            document.querySelector('.par31').innerHTML = `${Math.floor(data.forecast.forecastday[2].day.maxtemp_f)}/`
            document.querySelector('#par32').innerHTML = `${Math.floor(data.forecast.forecastday[2].day.mintemp_f)}`
            document.querySelector('#p3').innerHTML = `${data.forecast.forecastday[2].day.condition.text}`

            document.querySelector('.par41').innerHTML = `${Math.floor(data.forecast.forecastday[3].day.maxtemp_f)}/`
            document.querySelector('#par42').innerHTML = `${Math.floor(data.forecast.forecastday[3].day.mintemp_f)}`
            document.querySelector('#p3').innerHTML = `${data.forecast.forecastday[3].day.condition.text}`

            document.querySelector('.par51').innerHTML = `${Math.floor(data.forecast.forecastday[4].day.maxtemp_f)}/`
            document.querySelector('#par52').innerHTML = `${Math.floor(data.forecast.forecastday[4].day.mintemp_f)}`
            document.querySelector('#p4').innerHTML = `${data.forecast.forecastday[4].day.condition.text}`

            document.querySelector('.par61').innerHTML = `${Math.floor(data.forecast.forecastday[5].day.maxtemp_f)}/`
            document.querySelector('#par62').innerHTML = `${Math.floor(data.forecast.forecastday[5].day.mintemp_f)}`
            document.querySelector('#p5').innerHTML = `${data.forecast.forecastday[5].day.condition.text}`

            document.querySelector('.par71').innerHTML = `${Math.floor(data.forecast.forecastday[6].day.maxtemp_f)}/`
            document.querySelector('#par72').innerHTML = `${Math.floor(data.forecast.forecastday[6].day.mintemp_f)}`
            document.querySelector('#p6').innerHTML = `${data.forecast.forecastday[6].day.condition.text}`

            

        }
        fetcher3()
    }
    fetcher()
    
})
