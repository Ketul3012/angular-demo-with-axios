import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppComponent } from "./app.component"
import { AppRoutingModule } from "./app-routing.module"
import { PostComponent } from "./post/post.component"
import { PostsComponent } from "./posts/posts.component"

import Globals from "../utils/globals/Globals"
import { LoaderComponent } from "./loader/loader.component"
import { HashLocationStrategy, LocationStrategy } from "@angular/common"

@NgModule({
  declarations: [AppComponent, PostComponent, PostsComponent, LoaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [Globals, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
