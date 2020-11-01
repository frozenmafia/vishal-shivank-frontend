//import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, OnInit,NgZone, ViewChild,Input,HostBinding,ChangeDetectionStrategy  } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatChipInputEvent, MatChipList} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {take } from 'rxjs/operators';
import { CustomValidators } from '../Error-Validator/custom-validators';
//import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as Editor from 'ckeditor5/build/ckeditor';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class AskQuestionComponent implements OnInit {
  title = "ckeditor2"
  public Editor = Editor;
  public model ={
  }

  editorConfig = {
    toolbar: {
      items: ['Autoformat',
      'Heading',
      'Paragraph',
      'FontSize',
      'FontColor',
      'Underline',
      'Bold',
      'Italic',
      'BlockQuote',
      'Highlight',
      '|',
      'List',
      'Indent',
      'HorizontalLine',
      'undo',
      'redo',
      '|',
      'MediaEmbed',
      'Link',
      'Mention',
	    'CKFinder',
	    'CKFinderUploadAdapter',
	'Essentials',
  'CodeBlock',
  'MathType',
  'ChemType',
	'SpecialCharacters',
	'SpecialCharactersArrows',
	'SpecialCharactersEssentials',
	'SpecialCharactersMathematical',
  'SpecialCharactersText',
  'PasteFromOffice',
	'Table',
	'TableToolbar',
	'TextTransformation',
  'WordCount',
  
  'math',
  'mathematics',

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
    math: {
      engine: 'mathjax', // or katex or function. E.g. (equation, element, display) => { ... }
      lazyLoad: undefined, // async () => { ... }, called once before rendering first equation if engine doesn't exist. After resolving promise, plugin renders equations.
      outputType: 'script', // or span
      forceOutputType: false, // forces output to use outputType
      enablePreview: true // Enable preview view
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
  url="./assets/img/";

  onselectFile(e){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }

  }
}
