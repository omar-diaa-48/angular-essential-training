import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FavoriteDirective } from "./favorite.directive";
import { MediaItemComponent } from "./media-item.component";

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        MediaItemComponent,
        FavoriteDirective
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }