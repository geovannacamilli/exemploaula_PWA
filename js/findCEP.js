$(document).ready(function(){
    $('.btn-find').click(function(e){
        e.preventDefault()

        var cep = $('#cep').val()

        var find = `https://viacep.com.br/ws/`+cep+`/json/`

        console.log(find)

        $.ajax({
           dataType: 'JSON',
           type: 'GET',
           url: find,
           success: function(dados) {
             $('#logradouro').val(dados.logradouro)
             $('#bairro').val(dados.bairro)
             $('#localidade').val(dados.localidade)
             $('#uf').val(dados.uf)

            }
        })
    })
})