import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { DatePipe } from "@angular/common";

@NgModule({
        declarations: [CardComponent],
        exports: [CardComponent],
    })
export class ShareModule {
}