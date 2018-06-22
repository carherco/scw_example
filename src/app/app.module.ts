import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';
import { MenuComponent } from './components/menu/menu.component';
import { Solution1Component } from './components/solution1/solution1.component';
import { Solution2Component } from './components/solution2/solution2.component';
import { Solution3Component } from './components/solution3/solution3.component';
import { Solution4Component } from './components/solution4/solution4.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    MenuComponent,
    Solution1Component,
    Solution2Component,
    Solution3Component,
    Solution4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
