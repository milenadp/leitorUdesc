import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: any;
  constructor(private barcodeScanner: BarcodeScanner) { }



  // a função scan pode ter um objeto options nela, vide: scan({options})... Essa opções podem ser:

  // preferFrontCamera: true, // iOS and Android
  // showFlipCameraButton: true, // iOS and Android
  // showTorchButton: true, // iOS and Android
  // torchOn: true, // Android, launch with the torch switched on (if   available)
  // saveHistory: true, // Android, save scan history (default false)
  // prompt: "Place a barcode inside the scan area", // Android
  // resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
  // formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
  // orientation: "landscape", // Android only (portrait|landscape), default unset so it rotates with the device

  scan() {
    this.data = null;
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.data = barcodeData;
    }).catch(err => {
      console.log('Error', err);
    });
  }
}