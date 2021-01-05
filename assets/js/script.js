let email = 'joao@hcode.com.br';

email = 'glaucio@hcode;com.br'

console.log(email);
console.log('O seu email é: ' + email);
console.log(`O seu email é: ${email}`);


document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('O botão foi clicado!');

});

document.getElementById('form-login').addEventListener('mouseenter', e => {

    console.log('O mouse está sobre o formulário.');

});

document.querySelector('#form-login').addEventListener('mouseleave', e => {

    console.log('O mouse está fora do formulário.');

});

document.querySelector('#form-login').addEventListener('submit' , e => {

    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;


    let json = {
        email: email,
        password: password
    };

    if (json.email !== "") {

        console.log('O campo foi preenchido!');

    }

    if (!json.email) {

       console.error('O campo e-mail deve ser preenchido!');

    } else if (!json.password){

        console.error('O campo password deve ser preenchido!');

    } else {
        
        console.info('Dados validados com sucesso!');
    
    }

    /*
    console.log(json);

    let stringJSON = JSON.stringify(json);

    console.log(stringJSON);

    let jsonParse = JSON.parse(stringJSON);

    console.log(jsonParse);
    */
});