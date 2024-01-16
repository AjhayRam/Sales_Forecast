import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './authguard.service';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { PredictionResultComponent } from './components/prediction-result/prediction-result.component';
import { SavedPredictionsComponent } from './components/saved-predictions/saved-predictions.component';
import { LoggedInAuthGuard } from './loggedInAuthGuard.service';
import { PredictionResultAuthGuard } from './predictionResultAuthGuard.service';
import { PredictDataComponent } from './components/predict-data/predict-data.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'predict-dataset',
    component: PredictDataComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'saved-predictions',
    component: SavedPredictionsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'prediction-result',
    component: PredictionResultComponent,
    canActivate: [PredictionResultAuthGuard],
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [LoggedInAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
