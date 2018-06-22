import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './components/example/example.component';
import { Solution1Component } from './components/solution1/solution1.component';
import { Solution2Component } from './components/solution2/solution2.component';
import { Solution3Component } from './components/solution3/solution3.component';
import { Solution4Component } from './components/solution4/solution4.component';

const routes: Routes = [
  {path: '',  redirectTo: '/example', pathMatch: 'full' },
  {path: 'example', component: ExampleComponent},
  {path: 'solution1', component: Solution1Component},
  {path: 'solution2', component: Solution2Component},
  {path: 'solution3', component: Solution3Component},
  {path: 'solution4', component: Solution4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
