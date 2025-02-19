import { NgModel } from "@angular/forms";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
        declarations: [AppComponent, HeaderComponent,UserInputComponent,InvestmentResultsComponent],
    imports: [FormsModule, BrowserModule],
    bootstrap: [AppComponent]
    })
export class AppModule {
}