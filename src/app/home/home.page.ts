import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    console.log("AppComponent: Constructor");
  }


  ngOnChanges() {
    console.log("AppComponent: OnChanges");
  }

  ngOnInit() {
    console.log("AppComponent: OnInit");
  }

  ngDoCheck() {
    console.log("AppComponent: DoCheck");
  }

  ngAfterContentInit() {
    console.log("AppComponent: AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AppComponent: AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AppComponent: AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AppComponent: AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("AppComponent: OnDestroy");
  }
  title: string = 'Mi nueva pagina';

  hazmeClic(): void{
    alert("Hiciste clic!");
  }

  imgUrl: string = 'https://external-preview.redd.it/dorohedoro-sequel-anime-announced-v0-s3Li1y5z3X_pKf-XjsM83NGTlMSzU5cl9xC6nODiTdc.jpg?width=640&crop=smart&auto=webp&s=c629f94249595f6c3fd7735a5b0cd06cafb672b9'
  
}
