import { Component } from '@angular/core';
import { TechnicalComponent } from "../technical/technical.component";

@Component({
    selector: 'app-formulario',
    standalone: true,
    templateUrl: './formulario.component.html',
    styleUrl: './formulario.component.css',
    imports: [TechnicalComponent]
})
export class FormularioComponent {

}
