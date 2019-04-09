import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/File/ngx';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {
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

  constructor(private platform: Platform, private file: File,
    // tslint:disable-next-line: deprecation
        private ft: FileTransfer, private fileOpener: FileOpener, private document: DocumentViewer,
        private theInAppBrowser: InAppBrowser) { }


      openWithSystemBrowser(url: string) {
          const target = '_system';
          this.theInAppBrowser.create(url, target, this.options);
      }
     openWithInAppBrowser(url: string) {
          const target = '_blank';
          this.theInAppBrowser.create(url, target, this.options);
      }
     openWithCordovaBrowser(url: string) {
          const target = '_self';
          this.theInAppBrowser.create(url, target, this.options);
      }

  ngOnInit() {
  }

}
