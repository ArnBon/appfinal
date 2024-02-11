import { NgModule, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';

import { environment } from 'environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './componentes/login/login.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { ClienteServicio } from './servicios/cliente.service';


@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    TableroComponent,
    ClientesComponent,
    EditarClienteComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NoEncontradoComponent,
    PiePaginaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp( environment.firestore, 'control-clientes' )),
    provideFirestore(() => getFirestore()),

  ],
  providers: [
    ClienteServicio,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
