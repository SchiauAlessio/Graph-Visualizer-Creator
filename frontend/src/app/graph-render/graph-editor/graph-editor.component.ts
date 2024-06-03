import {Component, Inject, PLATFORM_ID} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Engine, graphviz} from 'd3-graphviz';
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

  downloadGraph(format: string): void {

    if (isPlatformBrowser(this.platformId)) {

      const graph = document.getElementById('graph');
      if (graph) {

        const svgElement: SVGSVGElement | null = graph.querySelector('svg');
        if (svgElement) {

          const svgString = new XMLSerializer().serializeToString(svgElement);
          const canvas: HTMLCanvasElement = document.createElement('canvas');
          const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
          const img: HTMLImageElement = new Image();

          img.onload = () => {

            canvas.width = img.width;
            canvas.height = img.height;
            ctx?.drawImage(img, 0, 0);
            canvas.toBlob(blob => {

              if (blob) {

                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `graph.${format}`;
                a.click();
                URL.revokeObjectURL(url);
              }
            }, `image/${format}`);
          };

          img.src = 'data:image/svg+xml;base64,' + btoa(svgString);
        }
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
