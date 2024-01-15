function submeterFomulario(id_formulario)
{
    let frm = $('#'+id_formulario);

    frm.submit(
        function(e){
            // impede a submissão tradicional
            e.preventDefault();

            // submissão do formulário em Ajax
            $.ajax({
                type: frm.attr('method'), 
                url:  frm.attr('action'),
                data: frm.serialize(),
                //sucesso
                success: function(info){
                    console.log("Dados submitidos com sucesso");
                    console.log(info);
                },
                //erro
                error: function(){
                    console.log("Aconteceu um erro");
                }
            })

          
        }
    );
}