$(document).ready(
    function(){
        $("#cmd").click(
            function (){
                $("#caixa").load("dados.txt", function(responseTxt, statusTxt, xhr){
                    if(statusTxt == "success")
                    {
                        alert("Aconteceu uma comunicação com sucesso");
                    }
                    if(statusTxt == "error")
                    {
                        alert("Aconteceu uma comunicação com erro");
                    }
                });
            }
        );
    }
);