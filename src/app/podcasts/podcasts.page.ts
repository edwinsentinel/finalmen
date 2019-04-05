import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/File/ngx';
import {Router} from '@angular/router';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.page.html',
  styleUrls: ['./podcasts.page.scss'],
})
export class PodcastsPage implements OnInit {
vid = 'https://www.youtube.com/embed/wyVM1evRxNw';
  data: { 'heading': string; 'Date': string; 'Activity': string; };
  constructor(private router: Router, public navctrl: NavController,
     private dom: DomSanitizer, private platform: Platform, private file: File,
// tslint:disable-next-line: deprecation
    private ft: FileTransfer, private fileOpener: FileOpener, private document: DocumentViewer, ) {

  }
sanitize(vid) {
return this.dom.bypassSecurityTrustResourceUrl(vid);
}
// local pdf
openLocalPdf() {
const filePath = this.file.applicationDirectory + 'www/assets';
if (this.platform.is('android')) {
  const fakeName = Date.now();
  this.file.copyFile(filePath, 'men.pdf', this.file.dataDirectory, `${fakeName}.pdf`).then(result => {
    this.fileOpener.open(result.nativeURL, 'application/pdf')
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error opening file', e));
  });
} else {
  // Use Document viewer for iOS for a better UI
  const options: DocumentViewerOptions = {
    title: 'My PDF'
  };
  this.document.viewDocument(`${filePath}/men.pdf`, 'application/pdf', options);
}
}
// download pdf
downloadAndOpenPdf() {
  const downloadUrl = 'https://devdactic.com/html/5-simple-hacks-LBT.pdf';
  const path = this.file.dataDirectory;
  const transfer = this.ft.create();

  transfer.download(downloadUrl, path + 'myfile.pdf').then(entry => {
    const url = entry.toURL();

    if (this.platform.is('ios')) {
      this.document.viewDocument(url, 'application/pdf', {});
    } else {
      this.fileOpener.open(url, 'application/pdf')
        .then(() => console.log('File is opened'))
        .catch(e => console.log('Error opening file', e));
    }
  });
}

addition() {
  this.router.navigate(['/additionalmaterials']);
}


ngOnInit() {
  setTimeout(() => {
    this.data = {
      'heading': 'Schedule',
      'Date': '02/11/2019',
      'Activity': 'Service.'
    };
  }, 5000);
}

}
