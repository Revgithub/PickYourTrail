import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent} from './app.component';
import { TestserviceService } from './testservice.service';



@NgModule({
  declarations: [
    AppComponent,
   
    

  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [TestserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
