import { Component, OnInit } from "@angular/core"
import axios from "axios"
import Globals from "../../utils/globals/Globals"

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.css"],
})
export class LoaderComponent {
  isLoading = false
  constructor(private globals: Globals) {
    axios.interceptors.request.use((req) => {
      this.globals.setLoading(true)
      return req
    })
    axios.interceptors.response.use((res) => {
      this.globals.setLoading(false)
      return res
    })
    this.globals.loading.subscribe((state) => {
      this.isLoading = state
    })
  }
}
