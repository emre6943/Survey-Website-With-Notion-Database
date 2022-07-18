import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndComponent } from './pages/end/end.component';
import { ExperimentC1Component } from './pages/experiment-c1/experiment-c1.component';
import { ExperimentC2Component } from './pages/experiment-c2/experiment-c2.component';
import { StartComponent } from './pages/start/start.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  {path : "", component: StartComponent },
  {path : "c1/:name", component: ExperimentC1Component },
  {path : "c2/:name", component: ExperimentC2Component },
  {path : "done", component: EndComponent },
  {path : "test", component: TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
