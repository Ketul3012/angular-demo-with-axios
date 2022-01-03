import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { PostComponent } from "./post/post.component"
import { PostsComponent } from "./posts/posts.component"

const routes: Routes = [
  { path: "posts", component: PostsComponent },
  { path: "post/:postId", component: PostComponent },
  { path: "", redirectTo: "/posts", pathMatch: "full" },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
