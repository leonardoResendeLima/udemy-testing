import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { DataService } from './data.service';
describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent
			],
			providers: [UserService, DataService]
		}).compileComponents();
	}));

	it('should create the app', async(() => {
		let fixture = TestBed.createComponent(AppComponent);
		let app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));

	it('should use the user name from the service', () => {
		let fixture = TestBed.createComponent(AppComponent);
		let app = fixture.debugElement.componentInstance;
		let userService = fixture.debugElement.injector.get(UserService);
		fixture.detectChanges();
		expect(app.user.name).toEqual(userService.user.name);
	})

	it('should display the user name if user is logger in', () => {
		let fixture = TestBed.createComponent(AppComponent);
		let app = fixture.debugElement.componentInstance;
		app.isLoggedIn = true;
		fixture.detectChanges();
		let compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('p').textContent).toContain(app.user.name);
	})

	it('should not display the user name if user is logger in', () => {
		let fixture = TestBed.createComponent(AppComponent);
		let app = fixture.debugElement.componentInstance;
		fixture.detectChanges();
		let compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
	})

	it('should not fetch data successfully if not called assynchronously', () => {
		let fixture = TestBed.createComponent(AppComponent);
		let app = fixture.debugElement.componentInstance;
		let dataService = fixture.debugElement.injector.get(DataService);
		let syp = spyOn(dataService, 'getDetails')
			.and.returnValue(Promise.resolve('Data'));
		fixture.detectChanges();
		expect(app.data).toBe(undefined);
	})

	it('should fetch data successfully if not called assynchronously', async(() => {
		let fixture = TestBed.createComponent(AppComponent);
		let app = fixture.debugElement.componentInstance;
		let dataService = fixture.debugElement.injector.get(DataService);
		let syp = spyOn(dataService, 'getDetails')
			.and.returnValue(Promise.resolve('Data'));
		fixture.detectChanges();
		fixture.whenStable().then(() => {
			expect(app.data).toBe('Data');
		});
	}))

});
