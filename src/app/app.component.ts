import { Component } from "@angular/core";

@Component({
    selector: 'mw-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    firstMediaItem = {
        id: 1,
        name: 'Firebug',
        medium: 'Series',
        category: 'Science Fiction',
        year: 2010,
        watchedOn: 1294166565384,
        isFavorite: false
    };

    mediaItems = [
        {
            id: 1,
            name: 'Firebug',
            medium: 'Series',
            category: 'Science Fiction',
            year: 2010,
            watchedOn: 1294166565384,
            isFavorite: false
        },
        {
            id: 2,
            name: 'The Small Tall',
            medium: 'Movies',
            category: 'Comedy',
            year: 2015,
            watchedOn: null,
            isFavorite: true
        }
    ]

    onMediaItemDelete(mediaItem) {
        console.log(mediaItem);
    }
}