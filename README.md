# Angular Graph Editor

This web application is an Angular project that allows users to create, edit, and visualize graphs using Graphviz. It provides an intuitive interface for editing graph code and dynamically rendering the graph visualization.

## Features

- **Graph Editing**: Users can enter graph code directly into the editor textarea. The code is then parsed and rendered as a graph visualization.
- **Graph Rendering**: The application uses D3.js and Graphviz to render the graph visualization in real-time based on the input code.
- **Sample Graphs**: Users can load pre-defined sample graphs to experiment with different graph structures and layouts.
- **Download Graph**: Users can download the rendered graph as either a JPG or PNG image file.
- **Engine Selection**: Users can choose the rendering engine for Graphviz, allowing for different graph layout algorithms.


### Graph Editor Component

- Contains the main functionality of the application, including the graph editor, viewer, and menu.
- Renders a textarea for entering graph code.
- Dynamically updates the graph visualization based on the input code.
- Provides options for loading sample graphs, downloading the graph, and selecting the rendering engine.
- Utilizes D3.js and Graphviz for rendering the graph visualization.
- Implements platform detection to ensure certain operations (e.g., downloading the graph) only occur in the browser environment.

## Usage

To run the Angular Graph Editor:

1. Clone the repository.
2. Install dependencies using npm or yarn.
3. Run the application using the Angular CLI (`ng serve`).

## License

This project is licensed under the [MIT License](LICENSE).

For more information, please refer to the [Graphviz Documentation](https://graphviz.org/documentation/) or [report any issues](https://github.com/ellson/graphviz/issues).