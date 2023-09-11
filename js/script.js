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

            mensagemEndereco.innerHTML = `  <h6>Aqui está o endereço consultado:</h6> 
                                            <p>CEP:${cep} </p> 
                                            <p>Logradouro: <span>${logradouro} </span>\n</p>
                                           <p> Complemento:${complemento} \n</p>
                                            <p>Bairro: ${bairro}\n </p>
                                            <p>Cidade: ${cidade} - ${data.uf}</p>`;

        });
    });


    
}
// consultaEndereco();