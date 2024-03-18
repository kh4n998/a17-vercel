import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { BlogService } from "../../services/blog.services";
import { Blog } from "../../models/blog.type";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterModule],
  template: `    <ul>
  @for (item of listBlog; track $index) {
    <li>
      <a [routerLink]="item.id.toString()">{{item.title}}</a>
    </li>
  }
</ul>`,

})
export class BlogComponent implements OnInit {
  listBlog: Blog[] = [];
  constructor(
    private blogService: BlogService,
  ) {}
  ngOnInit(): void {
    this.blogService.getListPosts().subscribe({
      next: value => {
        this.listBlog = value
      }
    });
  }
}
