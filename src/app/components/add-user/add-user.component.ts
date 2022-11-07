import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  id: number = 0;
  userform: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    //**************Create Reactive Form with validation********************* */
    this.userform = this.fb.group({
      name: ['', [Validators.required]],
      mobile: ['', []],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      gender: ['', [Validators.required]],
      // dob: [null, [Validators.required]],
      id: [0, [Validators.required]],
      isActive: [true],
      // range: [[0, 10]],
      userType: ['', [Validators.required]],
    });

  }

  ngOnInit(): void {
    //**************Get User ID On Edit********************* */

    const id: number = this.route.snapshot.params['id'];
    this.getUserById(id);

    this.userService.getUsersByID(this.id);
  }
  getUserById(id: number) {
    this.userService.getUsersByID(id).subscribe(
      (response) => {
        console.log(response);
        this.userform.get('Id')?.setValue(['id']);
        this.userform.patchValue(response);
      }
    )
  }

  save() {
    if (this.userform.invalid) // true if any form validation fail
      return

    if (this.userform.get('id')?.value === 0) {
      // on Create New User
      this.userService.addUser(this.userform.value).subscribe(
        (response) => { }
      )
      this.router.navigate(['/user']);
    } else {
      // on Update User info
      console.log("estou aqui");
      this.userService.updateUser(this.userform.value.id, this.userform.value).subscribe(
        (response) => {
        }, (erro) => {
          console.log(erro);
        }
      )

    }
    //Redirecting to user List page after save or update
    this.router.navigate(['/user']);

  }

}
