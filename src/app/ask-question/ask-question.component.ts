import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit,NgZone, ViewChild,Input,HostBinding,ChangeDetectionStrategy  } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatChipInputEvent, MatChipList} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {take } from 'rxjs/operators';
import { CustomValidators } from '../Error-Validator/custom-validators';
import * as ClassicEditor from 'D:/Angular/Project_Vishal_Shivank/vishal-shivank-frontend-2/vishal-shivank-frontend/src/app/ckeditor5/build/ckeditor.js';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class AskQuestionComponent implements OnInit {

  public Editor = ClassicEditor;

  editorConfig = {
    toolbar: {
      items: [
        'heading',
        'bold',
        'italic',
        'underline',
        'MathType',
        'ChemType',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'indent',
        'outdent',
        '|',
        'imageUpload',
        'blockQuote',
        'insertTable',
        'undo',
        'redo',

      ]
    },
    indentBlock: {
      classes: [
          'custom-block-indent-a', // First step - smallest indentation.
          'custom-block-indent-b',
          'custom-block-indent-c'  // Last step - biggest indentation.
      ]
  },
    image: {
      toolbar: [
        'imageStyle:full',
        'imageStyle:side',
        '|',
        'imageTextAlternative'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells'
      ]
    },
    // This value must be kept in sync with the language defined in webpack.config.js.
    language: 'en'
  };  



  @ViewChild('chipList') chipList: MatChipList;
  @ViewChild('autosize') autosize:CdkTextareaAutosize;


  questionForm:FormGroup;
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
      editor:[''],
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
  triggerResize(){
    this._ngZone.onStable.pipe(take(1))
      .subscribe(()=>this.autosize.resizeToFitContent(true))
  }
}
