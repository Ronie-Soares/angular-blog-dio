import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from "../../data/datas";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  content_title: string = "";
  content_cover: string = "";
  content_description: string = "";
  private id:string|null = "0"

  constructor(private route:ActivatedRoute){}

  ngOnInit():void{
    this.route.paramMap.subscribe(
      value=>{
        this.id = value.get("id")
      }
    )

    this.setvaluesComponent(this.id)
  }

  setvaluesComponent(id:string | null){
    const result = dataFake.filter(article => article.id.toString() === id)[0]
    this.content_title = result.title;
    this.content_cover = result.photo;
    this.content_description = result.description;

  }
}
