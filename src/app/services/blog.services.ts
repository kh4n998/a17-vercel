import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Blog } from "../models/blog.type";

@Injectable({
  providedIn: 'root',
})

export class BlogService {
  readonly url = 'https://jsonplaceholder.typicode.com'
  constructor(private http: HttpClient){}

  getListPosts(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.url + '/posts')
  }
  getBlogById(id: string): Observable<Blog> {
    return this.http.get<Blog>(this.url + '/posts/' + id)
  }
}
