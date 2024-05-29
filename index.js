const funcionarios = [
    {
        login: 'victor',
        pass: 'victor'
    },
    {
        login: 'julio',
        pass: 'julio'
    },
    {
        login: 'paulo',
        pass: 'paulo'
    }
]

const adms = [
    {
        login: 'lucas',
        pass: 'lucas'
    },
    {
        login: 'joao',
        pass: 'joao'
    },
    {
        login: 'bruno',
        pass: 'bruno'
    }
]


    

function logar() {
    var usuario = document.getElementById('user1').value;
    var senha = document.getElementById('pass1').value;
    
    
    
    for(let i in funcionarios){
        if (usuario == funcionarios[i].login && senha == funcionarios[i].pass) {
            event.preventDefault();
            location.href="gerente.html"; 
            alert('Acesso concedido');            
        } 
    }
}

function logarA() {
    var usuario = document.getElementById('user2').value;
    var senha = document.getElementById('pass2').value;
    
    
    
    for(let i in funcionarios){
        if (usuario == adms[i].login && senha == adms[i].pass) {
            event.preventDefault();
            location.href="adm.html"; 
            alert('Acesso concedido');
            
        }
        
    }
}



