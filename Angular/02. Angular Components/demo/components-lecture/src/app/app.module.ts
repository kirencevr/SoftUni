import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { AnotherTestComponent } from './another-test/another-test.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserService } from './user.service';

export const myStringInjectionToken = new InjectionToken('myString');

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AnotherTestComponent,
    UserListComponent,
    UserListItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: UserService,
      useClass: UserService
    }, {
      provide: myStringInjectionToken,
      useValue: 'Hello World!'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
