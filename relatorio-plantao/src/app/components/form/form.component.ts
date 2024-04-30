import { Component } from '@angular/core';
import { TechnicalComponent } from "../technical/technical.component";
import { FormularioComponent } from "../formulario/formulario.component";

@Component({
    selector: 'app-form',
    standalone: true,
    templateUrl: './form.component.html',
    styleUrl: './form.component.css',
    imports: [TechnicalComponent, FormularioComponent]
})
export class FormComponent {

}
