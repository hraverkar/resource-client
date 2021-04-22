import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { DataService } from '../service/data.service';

class Signup {
  constructor(public name: string = '',
    public contactpersonname: string = '',
    public contact: string = '',
    public altercontact: string = '',
    public email: string = '',
    public website: string = '',
    public address: string = '',
    public city: string = '',
    public state: string = '',
    public country: string = '',
    public typeid: string = '',) {
  }
}


@Component({
  selector: 'app-new-resources',
  templateUrl: './new-resources.component.html',
  styleUrls: ['./new-resources.component.scss']
})
export class NewResourcesComponent implements OnInit {
  public resourceValue: any;
  model: Signup = new Signup();
  @ViewChild('f') form: any;

  constructor(private _dataService: DataService) { }

  ngOnInit(): void {
    this.getResourceType();
  }

  getResourceType(): void {
    this._dataService.getResourcesType().subscribe((res) => {
      this.resourceValue = res.body;
      console.log(this.resourceValue);
    })
  }

  langs: string[] = [
    'English',
    'French',
    'German',
  ];

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      try {
        this._dataService.addNewResources(this.form.value);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Form Submitted!");
        this.form.reset();
      }
    }
  }

  queryParameters = {};
  handleUser(res: any) {
    console.log(res);
    if (res.message !== undefined) {
      window.alert("New resources added");
      // authorized user response:
      //   this.toastrService.success(res.message);
    }
  }
}
