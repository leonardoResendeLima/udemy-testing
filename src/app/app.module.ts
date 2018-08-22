import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { DataService } from './data.service';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule
	],
	providers: [UserService, DataService],
	bootstrap: [AppComponent]
})
export class AppModule { }
