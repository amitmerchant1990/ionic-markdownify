import { Component, ViewChild  } from '@angular/core';
import { Content } from 'ionic-angular';

import { NavController } from 'ionic-angular';
import marked from 'marked';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController) {
    //console.log(marked('I am using __markdown__.'));
  }
  
  convert(this) {
    console.log(this.toggleVal);
    if(this.toggleVal==true){
      if(this.plainText && this.plainText!=''){
        let plainText = this.plainText

        this.markdownText = marked(plainText.toString())
        this.content = this.markdownText
      }else{
        this.toggleVal=false
      }
    }
  }
}
