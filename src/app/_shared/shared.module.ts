import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from "@angular/router";
import { MaterialModule } from "./modules/material";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent
],
    imports: [
      RouterModule,
      MaterialModule,
      NgxSpinnerModule
    ],
    exports: [
      FormsModule,
      ReactiveFormsModule,
      HeaderComponent,
      FooterComponent,
      MaterialModule,
      NgxSpinnerModule
    ],
    providers: [NgxSpinnerService],
    entryComponents: [
    ],
})
export class SharedModule { }