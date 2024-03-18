import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'blog',
    loadComponent: () => import('./components/blog/blog.component').then(c => c.BlogComponent)
  },
  {
    path: 'blog/:id',
    loadComponent: () => import('./components/blog-post/blog-post.component').then(c => c.BlogPostComponent)
  }
];
