function consultaEndereco() {
    let cep = document.querySelector('#cep').value;
    let mensagemEndereco = document.querySelector('.endereco');

    if (cep.length !== 8) {
        mensagemEndereco.style.color = "red";
        mensagemEndereco.innerHTML = "Verifique a quantidade de caracteres!";
        return;
    } else {
        mensagemEndereco.style.color = "#838383";
        let url = `https://viacep.com.br/ws/${cep}/json/`;

       
        try {
            fetch(url)
                .then(function (response) {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(function (data) {
                    if(data.erro) {
                        mensagemEndereco.innerHTML = `<h4>Endereço não encontrado.</h4>`
                    }else{
                        mensagemEndereco.innerHTML = `<h6>Endereço consultado:</h6> 
                            <p>CEP: <span>${data.cep}</span></p>
                            <p>Logradouro: <span>${data.logradouro}</span></p>
                            <p>Complemento: <span>${data.complemento}</span></p>
                            <p>Bairro: <span>${data.bairro}</span></p>
                            <p>Cidade: <span>${data.localidade} - </span><span>${data.uf}</span></p>`;
                        }
                })
                .catch(function (error) {
                    
                    mensagemEndereco.style.color = "red";
                    mensagemEndereco.innerHTML = `Erro ao consultar o endereço: ${error.message}`;
                });
        } catch (error) {
            // Lidar com exceções gerais
            mensagemEndereco.style.color = "red";
            mensagemEndereco.innerHTML = `Erro ao consultar o endereço: ${error.message}`;
        }
    }
}


//     function consultaEndereco() {

    
//         let cep = document.querySelector('#cep').value;
//         let mensagemEndereco = document.querySelector('.endereco');

//         if(cep.length !== 8) {
//             mensagemEndereco.style.color = "red";
//             mensagemEndereco.innerHTML = "Verifique a quantidade de caracteres!";
//             return;
//         } else {

//             mensagemEndereco.style.color = "#838383";
//             let url = `https://viacep.com.br/ws/${cep}/json/`;

//             fetch(url)
//                 .then(function(response){
//                 response.json().then(function(data){  
                    
                        
                    
//                         if(data.complemento) {    
                        
//                             mensagemEndereco.innerHTML = `  <h6>Endereço consultado:</h6> 
//                                                         <p>CEP: <span> ${data.cep}</span></p>  
//                                                         <p>Logradouro: <span> ${data.logradouro}</span> </p>
//                                                         <p> Complemento:  <span>${data.complemento}</span> </p>
//                                                         <p>Bairro:  <span>${data.bairro}</span> </p>
//                                                         <p> Cidade: <span> ${data.localidade} - </span> <span>${data.uf} </span></p>`;
//                             } else {
//                                 mensagemEndereco.innerHTML =`   <h6>Endereço consultado:</h6> 
//                                                                 <p>CEP: <span> ${data.cep}</span></p>  
//                                                                 <p>Logradouro: <span> ${data.logradouro}</span> </p>                                                        
//                                                                 <p>Bairro:  <span>${data.bairro}</span> </p>
//                                                                 <p> Cidade: <span> ${data.localidade} - </span> <span>${data.uf} </span></p>`;
//                             }
                    

//                 });
//             });

//         }
       
    
// }
// consultaEndereco();