$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Animação
    var typed = new Typed(".typing", {
        strings: ["Web Developer &", "Junior .NET/C# Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer &", "Junior .NET/C# Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});
let form = $('.formulario');
//console.log(form)

form.validate({
    errorElement: 'span', //por padrão, o error é 'label' mas span é mais visível 
    rules: { //regras de validação: 
        name: 'required', //required = é necessário!
        email: {
            required: true,  //objeto sempre passa pelo menos dois valores.
            email: true     // quando tem mais de um requisito, cria-se um objeto
        },
        phone: 'required',
        text: 'required'
    },
    messages: { //mensagens que estarão no span
        name: 'Por favor, informe seu nome',
        email: {
            required: 'Por favor, digite seu e-mail',
            email: 'Por favor, digite um e-mail válido'
        },
        phone: 'Por favor, digite seu número de contato',
        text: 'Por favor, escreva sua mensagem'
    }
});