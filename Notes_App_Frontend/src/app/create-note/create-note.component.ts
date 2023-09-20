import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit{

  noteForm: FormGroup;

  constructor(private service: ServicesService, private formBuilder: FormBuilder) {
    this.noteForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, this.allowedCharactersValidator()]]
    });
  }
  allowedCharactersValidator() {
    return (control: FormControl) => {
      const regex = /^[a-zA-Z0-9@;&*,.'+\-\s]*$/;
      const valid = regex.test(control.value);
      return valid ? null : { invalidCharacters: true };
    };
  }

  noteData = { title: '', description: '' };
  router: any;

  // constructor(private service: ServicesService) {}
  ngOnInit(): void {
    
  }


 
  // createNote(addPostForm: NgForm) {
  //   let newPost = {
  //     title: addPostForm.value.title,
  //     description: addPostForm.value.description,
  //     id: this.service.getUser().id
  //   };
  
  //   this.service.createNote(newPost).subscribe( 
  //     () => {
        
  //     console.log('Note created:', this.noteData);
  //     addPostForm.resetForm();
  //     // Handle success or show a message to the user
  //   });
  // }
  
  createNote() {
    if (this.noteForm.valid) {
      const newPost = {
        title: this.noteForm.get('title')?.value,
        description: this.noteForm.get('description')?.value,
        id: this.service.getUser().id
      };

      this.service.createNote(newPost).subscribe(() => {
        console.log('Note created:', newPost);
        this.noteForm.reset();
      
        // Handle success or show a message to the user
      });
    }

  }
}