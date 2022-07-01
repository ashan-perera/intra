import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from "@angular/router";
import { MaterialModule } from "./modules/material";

@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent
],
    imports: [
      RouterModule,
      MaterialModule
    ],
    exports: [
      FormsModule,
      ReactiveFormsModule,
      HeaderComponent,
      FooterComponent,
      MaterialModule
    ],
    providers: [],
    entryComponents: [
    ],
})
export class SharedModule { }