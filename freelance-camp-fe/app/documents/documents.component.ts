import { Component } from '@angular/core';
import { Document } from './document';


@Component ({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
  documents: Document[] = [
    {
      title: "My first doc",
      description: "asdfasdfasdf asdfasdf asdf",
      file_url: 'http://google.com',
      updated_at: '2/16/18',
      image_url: 'http://google.com'
    },
    {
      title: "My second doc",
      description: "asdfasdfasdf asdfasdf asdf",
      file_url: 'http://google.com',
      updated_at: '2/16/18',
      image_url: 'http://google.com'
    },
    {
      title: "My last doc",
      description: "asdfasdfasdf asdfasdf asdf",
      file_url: 'http://google.com',
      updated_at: '2/16/18',
      image_url: 'http://google.com'
    },
  ]
}
