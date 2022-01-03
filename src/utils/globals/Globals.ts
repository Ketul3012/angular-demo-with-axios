import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject"

Injectable({
  providedIn: "root",
})
export default class Globals {
  loading = new BehaviorSubject(false)

  setLoading(loading: boolean): void {
    this.loading.next(loading)
  }
}
