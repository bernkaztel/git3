$(document).ready(function () {
  //Vista splash
  splash(1000);
  //Select con banderas
  $("#phone").intlTelInput();
  //Borrar campos
  $('#phone').val('');
  $('#code').val('');
  $('#mail').val('');
  $('#name').val('');
  $('#lastname').val('');
  //Funcion splash (pintar intro)
  function splash(param) {
    var time = param;
    var newcode = '';
    setTimeout(function () {
      $('#splashscreen').hide();
      $('#defaultpage').attr('class', 'visible');
    }, time);
  } //final de splash

  //Hace click en boton sign up
  $("#singup").click(function () {
    $('#defaultpage').attr('class', 'hidden');
    $('#secondpage').attr('class', 'visible');
  }); //final de boton 1 (singup)

  //Regresa a la vista default
  $("#back1").click(function () {
    $('#defaultpage').attr('class', 'visible');
    $('#secondpage').attr('class', 'hidden');
  }); //final de back1(singup)
  //Regresa a la vista default
  $("#back2").click(function () {
    $('#thirdpage').attr('class', 'visible');
    $('#secondpage').attr('class', 'visible');
  }); //final de back1(singup)
  $("#back3").click(function () {
    $('#thirdpage').attr('class', 'visible');
    $('#fourthpage').attr('class', 'hidden');
  }); //final de back1(singup)

//Cuando se termina de llenar el telefono
  $("#phone").keypress(function () {
    console.log((this.value).length);
    if ((this.value).length === 9) {
      $('#next1').attr('class', ' btn btn-success  btnall center-block enabled');
    } else if ((this.value).length !== 10) {
      $('#next1').attr('class', ' btn btn-danger btnall center-block disabled');
    }
  }); //final de funcion de colocar telefono (phone)

    //Se buscan los numeros de codigo
    var randomNumber1 = (Math.floor((Math.random() * 9) + 1).toString());
    var randomNumber2 = (Math.floor((Math.random() * 9) + 1).toString());
    var randomNumber3 = (Math.floor((Math.random() * 9) + 1).toString());
    var randomNumbers = randomNumber1 + randomNumber2 + randomNumber3;

    //Cuando se hace click en el boton next se envia el codigo y se habilita boton
  $("#next1").click(function () {
    console.log(randomNumbers);
    var newcode = 'LAB' + randomNumbers;
    console.log(newcode);
    alert('Tu codigo es: ' + newcode);
    $('#secondpage').attr('class', 'hidden');
    $('#thirdpage').attr('class', 'visible');
    $("#sendcode").click(function () {
      alert('Tu codigo es: ' + newcode);
    }); //final de boton 1 (entrega de codigo) 
  }); //final de boton 2 (entrega de codigo) 

//Cuando se introduce el codigo
  $("#code").keyup(function (newcode) {
    console.log(this.value);
    console.log(randomNumbers);
    if ((this.value) === randomNumbers) {
      console.log('yay');
      $('#next2').attr('class', 'btn btn-success btnall enabled center-block');
    } else if ((this.value) !== randomNumbers){
      $('#next2').attr('class', 'btn btn-danger btnall disabled center-block');
    }
  }); //final de boton codigo


 //Cuando hace click en next
 $("#next2").click(function () {
  $('#thirdpage').attr('class', 'hidden');
  $('#fourthpage').attr('class', 'visible');
}); //final de boton 1 (singup)


//Cuando se introduce el último campo checa que no esté vacíp
$("#check").click(function (newcode) {
if( $('#mail').val().length === 0 && $('#name').val().length === 0 && $('#lastname').val().length  === 0) {
  $('#next3').attr('class', 'btn btn-danger btnall disabled center-block m20');
} else {
  $('#next3').attr('class', 'btn btn-success btnall enabled center-block m20');
}
}); //final de checar input

 //Cuando hace click en next
 $("#next3").click(function () {
  $('#lastpage').attr('class', 'visible');
  $('#fourthpage').attr('class', 'hidden');
}); //final de boton 1 (singup)


});