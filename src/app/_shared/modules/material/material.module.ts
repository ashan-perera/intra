import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";

const modules: any[] = [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatListModule
];

@NgModule({
    declarations: [],
    imports: [...modules],
    exports: [...modules]
})
export class MaterialModule { }