import { NgModule } from '@angular/core';

//Declarations
import { AppComponent } from './app.component';

//Imports
import { BrowserModule } from '@angular/platform-browser';
import { MultiSelectModule } from 'ngx-forms-plus-plus';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
