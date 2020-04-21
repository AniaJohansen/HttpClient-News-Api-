import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

// Tutorial found on:
// https://www.techiediaries.com/angular/angular-8-7-tutorial-example-rest-api-httpclient-get-ngfor/

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articles;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
  }

}