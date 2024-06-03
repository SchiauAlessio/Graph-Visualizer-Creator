import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Engine, graphviz} from 'd3-graphviz';
import { Graphviz } from 'd3-graphviz';
import {isPlatformBrowser, NgForOf} from "@angular/common";
import {samples} from "../util/samples";

@Component({
  selector: 'app-graph-editor',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf

  ],
  templateUrl: './graph-editor.component.html',
  styleUrl: './graph-editor.component.css'
})
export class GraphEditorComponent {
  graphvizCode: string = 'digraph { a -> b }';
  engine: Engine = "dot";
  samples = samples;


  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    this.renderGraph();
  }

  renderGraph(): void {
    if (isPlatformBrowser(this.platformId)) {
      const graph = document.getElementById('graph');
      if (graph) {
        graphviz(graph).engine(this.engine).renderDot(this.graphvizCode);
      }
    }

  }

  sampleKeys(): string[] {
    return Object.keys(this.samples);
  }

  loadSample(key: string): void {
    this.graphvizCode = this.samples[key];
    this.renderGraph();
  }

  setEngine(engine: Engine): void {
    this.engine = engine;
    this.renderGraph();
  }
}
