import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recaptcha',
  templateUrl: './recaptcha.component.html',
  styleUrls: ['./recaptcha.component.css']
})
export class RecaptchaComponent implements OnInit {


  protected aFormGroup: FormGroup;
  siteKey: string;
  @ViewChild('captchaElem', { static: false }) captchaElem: any;

  registerForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [Validators.minLength(7), Validators.required]),
    recaptcha: new FormControl(null, [Validators.required])
  })

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
    this.siteKey = '6LfEG6UeAAAAAE6VuP0SkW_mgjrn7M-sBbusrdnU'
  }

  onSubmit() {
    console.log(this.captchaElem.currentResponse)
    this.registerForm.reset()
  }
}
