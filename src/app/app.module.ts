import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextinputComponent } from './atoms/textinput/textinput.component';
import { TodolistComponent } from './molecules/todolist/todolist.component';
import { CounterFormComponent } from './molecules/counter-form/counter-form.component';
import { CounterCardComponent } from './molecules/counter-card/counter-card.component';

@NgModule({
  declarations: [AppComponent, TextinputComponent, TodolistComponent, CounterFormComponent, CounterCardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
  dataEncapsulation: false,
});
