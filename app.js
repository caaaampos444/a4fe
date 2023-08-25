'use strict'
const botaoMostrarNumeros=document.getElementById('botao-mostrar-numeros')
const botaoMostrarNumerosPares=document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarNumerosDobro=document.getElementById('botao-mostrar-numeros-dobro')
const botaoMostrarNumerosProximoPar=document.getElementById('botao-mostrar-numeros-proximo-par')
const botaoMostrarNumeros3e5=document.getElementById('botao-mostrar-numeros-3e5')
const botaoMostrarNumeros3ou5=document.getElementById('botao-mostrar-numeros-3ou5')
const botaoMostrarNumerosPrimos=document.getElementById('botao-mostrar-numeros-primos')
function mostrarNumeros(){
    const numeros=document.getElementById('numeros').value.split(',')
    const container=document.getElementById('container-mostrar-numeros')
    const ultimoIndice=numeros.length
    container.replaceChildren('')
    for(let contador=0;contador<ultimoIndice;contador++){
        const novoSpan=document.createElement('span')
        novoSpan.textContent=numeros[contador]
        container.appendChild(novoSpan)
    }
}
function mostrarNumerosPares(){
    const numeros=document.getElementById('numeros').value.split(',')
    const container=document.getElementById('container-mostrar-numeros-pares')
    const ultimoIndice=numeros.length
    container.replaceChildren('')
    for(let contador=0;contador<ultimoIndice;contador++){
        if(numeros[contador]%2==0){
            const novoSpan=document.createElement('span')
            novoSpan.textContent=numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}
function mostrarNumerosDobro(){
    const numeros=document.getElementById('numeros').value.split(',')
    const container=document.getElementById('container-mostrar-numeros-dobro')
    const ultimoIndice=numeros.length
    container.replaceChildren('')
    for(let contador=0;contador<ultimoIndice;contador++){
        const novoSpan=document.createElement('span')
        novoSpan.textContent=Number(numeros[contador])*2
        container.appendChild(novoSpan)
    }
}
function mostrarNumerosProximoPar(){
    const numeros=document.getElementById('numeros').value.split(',')
    const container=document.getElementById('container-mostrar-numeros-proximo-par')
    const ultimoIndice=numeros.length
    container.replaceChildren('')
    for(let contador=0;contador<ultimoIndice;contador++){
        if(numeros[contador]%2==0){
            const novoSpan=document.createElement('span')
            novoSpan.textContent=Number(numeros[contador])+2
            container.appendChild(novoSpan)
        }else{
            const novoSpan=document.createElement('span')
            novoSpan.textContent=Number(numeros[contador])+1
            container.appendChild(novoSpan)
        }
    }
}
function mostrarNumeros3e5(){
    const numeros=document.getElementById('numeros').value.split(',')
    const container=document.getElementById('container-mostrar-numeros-3e5')
    const ultimoIndice=numeros.length
    container.replaceChildren('')
    for(let contador=0;contador<ultimoIndice;contador++){
        if(numeros[contador]%3==0&&numeros[contador]%5==0){
            const novoSpan=document.createElement('span')
            novoSpan.textContent=numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}
function mostrarNumeros3ou5(){
    const numeros=document.getElementById('numeros').value.split(',')
    const container=document.getElementById('container-mostrar-numeros-3ou5')
    const ultimoIndice=numeros.length
    container.replaceChildren('')
    for(let contador=0;contador<ultimoIndice;contador++){
        if(numeros[contador]%3==0||numeros[contador]%5==0){
            const novoSpan=document.createElement('span')
            novoSpan.textContent=numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}
function mostrarNumerosPrimos(){
    const numeros=document.getElementById('numeros').value.split(',')
    const container=document.getElementById('container-mostrar-numeros-primos')
    const ultimoIndice=numeros.length
    container.replaceChildren('')
    for(let contador=0;contador<ultimoIndice;contador++){
        if(numeros[contador]%1==0||numeros[contador]%numeros[contador]==0){
            const novoSpan=document.createElement('span')
            novoSpan.textContent=numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}
botaoMostrarNumeros.addEventListener('click',mostrarNumeros)
botaoMostrarNumerosPares.addEventListener('click',mostrarNumerosPares)
botaoMostrarNumerosDobro.addEventListener('click',mostrarNumerosDobro)
botaoMostrarNumerosProximoPar.addEventListener('click',mostrarNumerosProximoPar)
botaoMostrarNumeros3e5.addEventListener('click',mostrarNumeros3e5)
botaoMostrarNumeros3ou5.addEventListener('click',mostrarNumeros3ou5)
botaoMostrarNumerosPrimos.addEventListener('click',mostrarNumerosPrimos)