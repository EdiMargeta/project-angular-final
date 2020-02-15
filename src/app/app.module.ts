import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WorksheetAdminComponent } from './worksheet-admin/worksheet-admin.component';
import { WorksheetCreateComponent } from './worksheet-create/worksheet-create.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DisplayComponent } from './components/display/display.component';
import { WeatherDataService } from '../app/services/weatherdata.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    BoardAdminComponent,
    BoardUserComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    WorksheetAdminComponent,
    WorksheetCreateComponent,
    ProfileComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    OrderModule
  ],
  providers: [authInterceptorProviders, WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
