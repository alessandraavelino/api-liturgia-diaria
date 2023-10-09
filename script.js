async function getData() {
    try {
        const response = await fetch("https://liturgia.up.railway.app/")
        if (!response.ok) {
            console.log("Ocorreu um erro!")
        } 
        const data = await response.json();
        console.log(data)
        
        const dataDoDia = document.querySelector('.data')
        dataDoDia.textContent = data.data
        
        const refPrimeiraLeitura = document.querySelector('.refPrimeiraLeitura')
        refPrimeiraLeitura.textContent = data.primeiraLeitura.referencia
        
        const tituloPrimeiraLeitura = document.querySelector('.tituloPrimeiraLeitura')
        tituloPrimeiraLeitura.textContent = data.primeiraLeitura.titulo
        
        const primeiraLeitura = document.querySelector('.primeiraLeitura')
        primeiraLeitura.textContent = data.primeiraLeitura.texto
        
        const refSegundaLeitura = document.querySelector('.refSegundaLeitura')
        refSegundaLeitura.textContent = data.segundaLeitura.referencia


        const tituloSegundaLeitura = document.querySelector('.tituloSegundaLeitura')
        tituloSegundaLeitura.textContent = data.segundaLeitura.titulo

        const segundaLeitura = document.querySelector('.segundaLeitura')
        segundaLeitura.textContent = data.segundaLeitura

        const refSalmo = document.querySelector('.refSalmo')
        refSalmo.textContent = data.salmo.referencia

        const salmo = document.querySelector('.salmo')
        salmo.textContent = data.salmo.texto
        

        const refEvangelho = document.querySelector('.refEvangelho')
        refEvangelho.textContent = data.evangelho.referencia
        
        const textoEvangelho = document.querySelector('.textoEvangelho')
        textoEvangelho.textContent = data.evangelho.texto

    } catch {
        console.log()
    }
}

getData()
