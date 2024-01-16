import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PredictDataComponent } from './components/predict-data/predict-data.component';
import { PredictionResultComponent } from './components/prediction-result/prediction-result.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VisualizationComponent } from './components/visualization/visualization.component';
import { SavedPredictionsComponent } from './components/saved-predictions/saved-predictions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './authguard.service';
import { LoggedInAuthGuard } from './loggedInAuthGuard.service';
import { PredictionResultAuthGuard } from './predictionResultAuthGuard.service';
import { BootstrapModalComponent } from './bootstrap-modal/bootstrap-modal.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PredictDataComponent,
    PredictionResultComponent,
    HomeComponent,
    AccountComponent,
    NavbarComponent,
    VisualizationComponent,
    SavedPredictionsComponent,
    BootstrapModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
 
    BrowserAnimationsModule,

  ],
  providers: [AuthGuard, LoggedInAuthGuard, PredictionResultAuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [BootstrapModalComponent],
})
export class AppModule { }
