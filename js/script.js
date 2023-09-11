function consultaEndereco() {
    let cep = document.querySelector('#cep').value;
    let mensagemEndereco = document.querySelector('.endereco');

    if(cep.length !== 8) {
        mensagemEndereco.style.color = "red";
        mensagemEndereco.innerHTML = "Verifique a quantidade de caracteres!";
        return;
    } 
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(function(response){
        response.json().then(function(data){
            let cep = data.cep;
            let logradouro  = data.logradouro;
            let complemento = data.complemento;
            let bairro = data.bairro;
            let cidade = data.localidade;

            mensagemEndereco.innerHTML = `  <h3>Aqui está o endereço consultado:</h3> 
                                            <p>CEP:${cep} </p> 
                                            <p>Logradouro: ${logradouro}\n</p>
                                           <p> Complemento:${complemento} \n</p>
                                            <p>Bairro: ${bairro}\n </p>
                                            <p>Cidade: ${cidade} - ${data.uf}</p>`;

        });
    });


    
}
// consultaEndereco();