import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextinputComponent } from './components/atoms/textinput/textinput.component';
import { TodolistComponent } from './components/molecules/todolist/todolist.component';
import { CounterFormComponent } from './components/molecules/counter-form/counter-form.component';
import { CounterCardComponent } from './components/molecules/counter-card/counter-card.component';
import { StoreModule } from '@ngrx/store';
import { LoginComponent } from './components/pages/login/login.component';
import { TodoComponent } from './components/pages/todo/todo.component';
import { reducers } from './store/reducers';
@NgModule({
  declarations: [
    AppComponent,
    TextinputComponent,
    TodolistComponent,
    CounterFormComponent,
    CounterCardComponent,
    LoginComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
  dataEncapsulation: false,
});
