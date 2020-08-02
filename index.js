const banckAcount = () => {
    let saveCoins = 0
    const countCoins = (coins, currencyText) => {
        saveCoins += coins;
        alert(`${currencyText}
        Saldo actual: $${saveCoins}`)
    }
    return countCoins
}

let codMoney = banckAcount()
let usdMoney = banckAcount()
let option = 0
while (option != 3) {
    option = prompt(`¿Donde quieres depositar dinero?
    1. Pesos Colombianos (COP)
    2. Dolares (USD)
    3. Salir`)    
    switch (option) {
        case '1':
            const cop = prompt(`¿Cuanto desea ingresar en COP?`)
            currencyText = 'Cuenta Pesos Colombianos(COP)'
            codMoney(parseInt(cop), currencyText)
            break;
        case '2':
            const usd = prompt(`¿Cuanto desea ingresar en USD?`)
            currencyText = 'Cuenta Dolares(USD)'
            usdMoney(parseInt(usd), currencyText)
            break;
        case '3':
                alert('Chao!!')            
            break;
        default:
            alert('Si desea Salir, digite el número 3')
            break;
    }    
}