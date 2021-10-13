import { NgModule } from '@angular/core';

//#region component
import { CommonModule } from '@angular/common';
import { contadorComponent } from './contador/contador.component';
//#endregion

@NgModule({
    declarations: [
        contadorComponent
    ],
    imports: [ CommonModule ],
    exports: [contadorComponent]
})
export class ContadorModule {}