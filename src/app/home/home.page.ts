import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  title: string = 'Mi nueva pagina';

  hazmeClic(): void{
    alert("Hiciste clic!");
  }

  imgUrl: string = 'https://external-preview.redd.it/dorohedoro-sequel-anime-announced-v0-s3Li1y5z3X_pKf-XjsM83NGTlMSzU5cl9xC6nODiTdc.jpg?width=640&crop=smart&auto=webp&s=c629f94249595f6c3fd7735a5b0cd06cafb672b9'
  
}
