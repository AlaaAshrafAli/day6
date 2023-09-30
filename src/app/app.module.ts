import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [AppComponent, RegisterComponent , FooterComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}





