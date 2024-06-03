import { Routes } from '@angular/router';
import {GraphEditorComponent} from "./graph-render/graph-editor/graph-editor.component";

export const routes: Routes = [

  {path: '', redirectTo: 'graph-editor', pathMatch: 'full'},
  {path: 'graph-editor', component: GraphEditorComponent},
];
