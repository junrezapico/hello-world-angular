import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { localStorageSync } from 'ngrx-store-localstorage';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextinputComponent } from './components/atoms/textinput/textinput.component';
import { TodolistComponent } from './components/molecules/todolist/todolist.component';
import { CounterFormComponent } from './components/molecules/counter-form/counter-form.component';
import { CounterCardComponent } from './components/molecules/counter-card/counter-card.component';
import { LoginComponent } from './components/pages/login/login.component';
import { TodoComponent } from './components/pages/todo/todo.component';
import { reducers } from './store/reducers';
import { RegistrationComponent } from './components/pages/registration/registration.component';

const localStorageSyncReducer = (
  reducer: ActionReducer<any>
): ActionReducer<any> => {
  return localStorageSync({
    keys: [
      {
        auth: {
          // NOTE: use this function when we have to map and override serialization
          // deserialize: (state) => {
          //   try {
          //   return JSON.parse(state);
          //   } catch {}
          //   return {};
          // },
        },
      },
    ],
    rehydrate: true,
    removeOnUndefined: true,
  })(reducer);
};

@NgModule({
  declarations: [
    AppComponent,
    TextinputComponent,
    TodolistComponent,
    CounterFormComponent,
    CounterCardComponent,
    LoginComponent,
    TodoComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers: [localStorageSyncReducer] }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
  dataEncapsulation: false,
});
