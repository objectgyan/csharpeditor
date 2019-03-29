import { Component } from "@angular/core";
import { CodeanalyzerService } from "./codeanalyzer.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "csharpeditor";
  code: string;
  output: string;

  constructor(private codeAnalyzer: CodeanalyzerService) {}

  executeCode() {
    this.codeAnalyzer
      .executeCode(JSON.stringify(this.code))
      .subscribe(response => {
        this.output = response.result;
      });
  }
}
