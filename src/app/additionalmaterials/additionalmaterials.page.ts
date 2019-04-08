import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/File/ngx';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';

import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
@Component({
  selector: 'app-additionalmaterials',
  templateUrl: './additionalmaterials.page.html',
  styleUrls: ['./additionalmaterials.page.scss'],
})
export class AdditionalmaterialsPage implements OnInit {
  options: InAppBrowserOptions = {
    location : 'yes', // Or 'no'
    hidden : 'no', // Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes', // Android only ,shows browser zoom controls
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', // Android only
    closebuttoncaption : 'Close', // iOS only
    disallowoverscroll : 'no', // iOS only
    toolbar : 'yes', // iOS only
    enableViewportScale : 'no', // iOS only
    allowInlineMediaPlayback : 'no', // iOS only
    presentationstyle : 'pagesheet', // iOS only
    fullscreen : 'yes', // Windows only
};

  constructor( private platform: Platform, private file: File,
    // tslint:disable-next-line: deprecation
        private ft: FileTransfer, private fileOpener: FileOpener, private document: DocumentViewer,
        private theInAppBrowser: InAppBrowser ) { }

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
  public openWithSystemBrowser(url: string) {
    const target = '_system';
    this.theInAppBrowser.create(url, target, this.options);
}
 openWithInAppBrowser(url: string) {
    const target = '_blank';
    this.theInAppBrowser.create(url, target, this.options);
}
public openWithCordovaBrowser(url: string) {
    const target = '_self';
    this.theInAppBrowser.create(url, target, this.options);
}


  ngOnInit() {
  }

}
