import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
selector: 'app-home',
templateUrl: 'home.page.html',
styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

validations_form: FormGroup;


validation_messages = {
  'dni': [
  { type: 'required', message: 'El dni debe ser introducido.' },
  { type: 'minlength', message: 'Tiene que haber 9 caracteres' },
  { type: 'maxlength', message: 'Tiene que haber 9 caracteres' },
  { type: 'pattern', message: 'El dni solo acepta 8 numeros y 1 letra mayuscula' }
  //para cuando se implementen los array asociativos 
  //{ type: 'validUsername', message: 'Your username has already been taken.' }

  ],
  'Iban': [
    { type: 'required', message: 'El IBAN debe ser introducido.' },
    { type: 'minlength', message: 'Tiene que haber 24 caracteres' },
    { type: 'maxlength', message: 'Tiene que haber 24 caracteres' },
    { type: 'pattern', message: 'El Iban solo acepta 2 letras y 22 numeros' }
  ],
  
  };

constructor(
public formBuilder: FormBuilder,
private navCtrl: NavController
) { }

ngOnInit() {

this.validations_form = this.formBuilder.group({
//DNI valdiaciones
dni: new FormControl('15407349V', Validators.compose([
Validators.maxLength(9),
Validators.minLength(9),
Validators.pattern('^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$'),
Validators.required
])),
//IBAN validaciones
Iban: new FormControl('ES1231123112311231123122', Validators.compose([
Validators.maxLength(24),
Validators.minLength(24),
Validators.pattern('[E][S][0-9]{22}'),
Validators.required

])),


});
}

//Aqui iría la validacion del dni con el iban . 

validDni(fc: FormControl){
  if(fc.value.toLowerCase() === "abc123" || fc.value.toLowerCase() === "cba321"){
          return ({validUsername: true});
  } else {
               return (null);
  }
  }

/*Al pulsar el botón submit se llama a este método que recibe como parámetro todos los valores introducidos en el formulario.
Para pasar estos valores a la siguiente página se crea un objeto de la clase NavigationExtras.
Este objeto es un array asociativo donde definimos un campo queryParams, que a su vez es otro array asociativo.
Dentro de queryParams creamos una pareja clave-valor para cada parámetro que queramos pasar a la otra página
El valor asociado a 'user' es un objeto. Siempre que queramos pasar un objeto como parámetro tenemos que pasarlo a JSON.
*/
onSubmit(values){
console.log(values);
let navigationExtras: NavigationExtras = {
queryParams: {
  //nombre que se le da al array en este caso
  user: JSON.stringify(values),
numero: 2
}
};

//aqui es donde se pasa la información a la otra página
this.navCtrl.navigateForward('/user', navigationExtras);
}

}//end_class