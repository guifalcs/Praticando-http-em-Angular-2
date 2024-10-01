import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  form: FormGroup;
  submitted = false

  constructor(private fb: FormBuilder, private service: CursosService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      nome: [null,[Validators.required]]
    })

  }

  onSubmit(){
    this.submitted = true
    if(this.form.valid){
      console.log('submit')
      this.service.create(this.form.value).subscribe(
        success => console.log('sucesso'),
        error => console.error(error),
        () => console.log('request ok')
      )
    }
  }

  onCancel(){
    this.form.reset()
  }

}
