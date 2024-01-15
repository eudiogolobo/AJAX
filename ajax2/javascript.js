// javaScript
function ajaxF(url, funcao){
    
    let pedido = new XMLHttpRequest;
    
    // resposta
    pedido.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
            funcao(pedido);

        }

    }

    // enviar pedido
    pedido.open('GET',url, true);
    pedido.send();
}

//------------------------------------------------------------

function comando1(p)
{
    document.getElementById('caixa1').innerHTML = p.responseText;
}
//------------------------------------------------------------

function comando2(p)
{
    document.getElementById('caixa2').innerHTML = p.responseText;
}