import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap } from "rxjs";
import { BlogService } from "../../services/blog.services";
import { Blog } from "../../models/blog.type";

@Component({
  selector: 'app-blog-post',
  standalone: true,
  template: `
  @if(blogPost) {
    <h4 style="font-weight: 700; margin-bottom: 1rem">{{blogPost.title}}</h4>
    <div [innerHTML]="blogPost.body"></div>
  }`,
  imports: []
})
export class BlogPostComponent implements OnInit {
  blogPost: Blog | null = null;
  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ){}
  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(param => param.get('id') || ""),
      switchMap(id => this.blogService.getBlogById(id))
    ).subscribe(blog => {
      console.log(blog);
      this.blogPost = blog;
    })
  }
}
