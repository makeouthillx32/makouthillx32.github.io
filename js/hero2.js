document.addEventListener('DOMContentLoaded', function() {
    const hero2 = document.querySelector('.hero2');
    if (hero2) {
        console.log('Hero2 element found:', hero2);

        const modelViewerContainer = document.createElement('div');
        modelViewerContainer.className = 'model-viewer-container';
        console.log('Model Viewer Container created:', modelViewerContainer);

        const modelViewer = document.createElement('model-viewer');
        modelViewer.src = 'images/unenterlogom.glb3'; // Update the path if necessary
        modelViewer.setAttribute('alt', '3D model of an object');
        modelViewer.setAttribute('auto-rotate', '');
        modelViewer.setAttribute('camera-controls', '');
        modelViewer.classList.add('model-viewer'); // Use for specific styling
        console.log('Model Viewer created:', modelViewer);

        modelViewerContainer.appendChild(modelViewer);
        hero2.appendChild(modelViewerContainer);
        console.log('Elements appended to Hero2:', hero2);
    } else {
        console.error('Hero2 element not found');
    }
});
