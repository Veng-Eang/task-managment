import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ShareModule } from "./share/share.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule,ShareModule,TasksModule],
})
export class AppModule {
}