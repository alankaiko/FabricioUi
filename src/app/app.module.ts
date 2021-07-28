import { TabelaDeCarrosComponent } from './catalogo/tabela-de-carros/tabela-de-carros.component';
import { CardCarroComponent } from './catalogo/card-carro/card-carro.component';
import { RodapeComponent } from './base/rodape/rodape.component';
import { NavbarComponent } from './base/navbar/navbar.component';
import { MenupesquisaComponent } from './base/menupesquisa/menupesquisa.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MenubarModule} from 'primeng/menubar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {AccordionModule} from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {DataViewModule} from 'primeng/dataview';
import { CadastroCarroComponent } from './cadastro-carro/cadastro-carro.component';
import {FileUploadModule} from 'primeng/fileupload';
import { MarcaCarroComponent } from './marca-carro/marca-carro.component';
import { ModeloCarroComponent } from './modelo-carro/modelo-carro.component';

@NgModule({
  declarations: [
    AppComponent,
    MenupesquisaComponent,
    NavbarComponent,
    RodapeComponent,
    CardCarroComponent,
    TabelaDeCarrosComponent,
    CardCarroComponent,
    CadastroCarroComponent,
    MarcaCarroComponent,
    ModeloCarroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FieldsetModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    InputTextModule,
    DropdownModule,
    AccordionModule,
    ButtonModule,
    RatingModule,
    DataViewModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
