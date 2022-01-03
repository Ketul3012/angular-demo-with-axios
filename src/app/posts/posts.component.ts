import { Component, OnInit } from "@angular/core"
import getPosts, { Posts } from "src/apiService/posts/Posts"
import Globals from "../../utils/globals/Globals"

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
})
export class PostsComponent implements OnInit {
  constructor() {}

  posts: Array<Posts> = []
  ngOnInit(): void {
    getPosts()
      .then((res) => {
        if (res.data instanceof Array) {
          this.posts = res.data
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
