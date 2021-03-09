import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { ImageService } from '../services/image.service';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentImage: any;
  imageResponse: any;
  options: any;
  constructor(public image1: ImageService, private imagePicker: ImagePicker) {}


  ngOnInit(){
    this.image1.load1();
  }


}
