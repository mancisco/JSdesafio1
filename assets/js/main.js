const precio = 890000
message = 'El precio es: ' + precio
document.querySelector('#precio').innerHTML = message
//
const onCompra = (frmCompra) => {
    let cantidad = frmCompra.cantidad.value
    let color = frmCompra.color.value
    let total = cantidad * precio
    console.log('cantidad', cantidad, 'color', color, 'total', total);
    if(cantidad=='' || color==''){
        alert('Debe ingresar una cantidad y un color')
        return false
    }
    if(color=='negro'){
        message='negro'
        document.querySelector('#coluor').innerHTML = message
        document.querySelector('#coluor').style.backgroundColor = 'black'
    }
    if(color=='rojo'){
        message='rojo'
        document.querySelector('#coluor').innerHTML = message
        document.querySelector('#coluor').style.backgroundColor = 'red'
    }
    if(color=='azul'){
        message='azul'
        document.querySelector('#coluor').innerHTML = message
        document.querySelector('#coluor').style.backgroundColor = 'blue'
    }
    if(color=='amarillo'){
        message='amarillo'
        document.querySelector('#coluor').innerHTML = message
        document.querySelector('#coluor').style.backgroundColor = 'yellow'
    }
    message=`El precio es: ${precio} la cantidad es: ${cantidad} total es: ${total}`
    document.querySelector('#res').innerHTML = message
    return false
}
