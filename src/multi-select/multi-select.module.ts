import { NgModule } from '@angular/core';

//Declarations
import { MultiSelectComponent } from './components/multi-select/multi-select';

//Imports
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [MultiSelectComponent],
    imports: [CommonModule, FormsModule],
    exports: [MultiSelectComponent]
})
export class MultiSelectModule
{
}
