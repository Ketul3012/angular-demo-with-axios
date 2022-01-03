import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import getPosts, { Posts } from "src/apiService/posts/Posts"
import Globals from "../../utils/globals/Globals"

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"],
})
export class PostComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  post: Posts | undefined

  ngOnInit(): void {
    this.getPostDetails()
  }

  getPostDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get("postId"))
    getPosts(id).then((res) => {
      if (!(res.data instanceof Array)) {
        this.post = res.data
      }
    })
  }
}
