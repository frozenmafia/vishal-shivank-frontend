import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { ElementRef, NgZone, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {MatChipInputEvent, MatChipList} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import { map, startWith, take } from 'rxjs/operators';
import { CustomValidators } from '../Error-Validator/custom-validators';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit {

  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  questionForm:FormGroup;

  constructor(
    private fb:FormBuilder,
    private _ngZone:NgZone
  ) { 
    
  }
  ngOnInit(): void {
    this.questionForm = this.fb.group({
      title:['',[
        Validators.minLength(10)
      ]],
      body:['',[
        Validators.minLength(15)
      ]],
      tags: this.fb.array(this.data.tag_list, [
        CustomValidators.validateArrayNotEmpty
      ])
    });
  
    this.questionForm.get('tags').statusChanges.subscribe(
      status => this.chipList.errorState = status === 'INVALID'
    );
  }

  @ViewChild('chipList') chipList: MatChipList;

  // name chips
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  // data
  data = {
    tag_list: []
  }


  initName(name: string): FormControl {
    return this.fb.control(name);
  }

  validateArrayNotEmpty(c: FormControl) {
    if (c.value && c.value.length === 0) {
      return {
        validateArrayNotEmpty: { valid: false }
      };
    }
    return null;
  }

  add(event: MatChipInputEvent, form: FormGroup): void {
    const input = event.input;
    const value = event.value;

    // Add name
    if ((value || '').trim()) {
      const control = <FormArray>form.get('tags');
      control.push(this.initName(value.trim()));
      console.log(control);
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(form, index) {
    console.log(form);
    form.get('tags').removeAt(index);
  }
  @ViewChild('autosize') autosize:CdkTextareaAutosize;

  triggerResize(){
    this._ngZone.onStable.pipe(take(1))
      .subscribe(()=>this.autosize.resizeToFitContent(true))
  }



}
