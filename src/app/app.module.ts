import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './pages/start/start.component';
import { ExperimentC1Component } from './pages/experiment-c1/experiment-c1.component';
import { ExperimentC2Component } from './pages/experiment-c2/experiment-c2.component';
import { EndComponent } from './pages/end/end.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './pages/test/test.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ExperimentC1Component,
    ExperimentC2Component,
    EndComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
