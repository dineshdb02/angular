import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, output, SimpleChanges } from '@angular/core';
import { AuthModule } from '../auth/auth-module';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-life-demo',
  standalone:false,
  templateUrl: './life-demo.html',
  styleUrl: './life-demo.scss',
})
export class LifeDemo implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() value: number = 0;

  formControl! : FormGroup;

  name: any = "Dinesh";
  constructor() {
    this.value = 9;
    console.log('1. constructor', this.value);
  }

  ngOnInit() {
    console.log('2. ngOnInit');
  }

    change() {
    console.log('emit works');
    
  }

  ngOnChanges() {
    console.log(`ngOnChangesworks --> @input value changes to ${this.value}`);
  }

  ngAfterViewInit() {
    console.log('3. ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('4. ngOnDestroy');
  }



}
