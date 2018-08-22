import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { DataService } from './data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	user: { name: string };
	isLoggedIn = false;
	data: string;


	constructor(private userService: UserService, private dataService: DataService) { }

	ngOnInit() {
		this.user = this.userService.user;
		this.dataService.getDetails().then(
			(data: string) => this.data = data)
	}
}
