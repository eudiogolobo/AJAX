window.onload = function(){

    document.getElementById('btnClicar').addEventListener('click', btnClick)
}

function btnClick()
{
    // document.getElementById('caixa').innerHTML = 'Este é o texto alterado'

    // Ajax

    // criei o objeto
    let pedido = new XMLHttpRequest();

    // defini a função que vai atuar a resposta
    pedido.onreadystatechange = function(){
        document.getElementById('caixa').innerHTML = this.responseText;

        if (pedido.readyState == 4 && pedido.status == 200)
    {
        document.getElementById('caixa').innerHTML += '<br>PEDIDO REALIZADO'
    } else
    {
        document.getElementById('caixa').innerHTML = '<br>Tente novamente mais tarde.'
    }

    }

    // fazer pedido
    pedido.open("GET", "processar.php?a=joao&b=lobo", true);

    // enviar pedido
    pedido.send();

    
    
}