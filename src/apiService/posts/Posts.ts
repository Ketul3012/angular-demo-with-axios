import { ApiEndPoints } from "../ApiEndPoints"
import { getRequest } from "../NetworkManager"

export default function getPosts(id: number | undefined = undefined) {
  return getRequest<Array<Posts> | Posts>(id !== undefined ? ApiEndPoints.GET_POSTS + "/" + id : ApiEndPoints.GET_POSTS)
}

export class Posts {
  userId: number = 0
  id: number = 0
  title: string = ""
  body: string = ""
}
