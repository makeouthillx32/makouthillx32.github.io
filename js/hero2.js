document.addEventListener('DOMContentLoaded', function() {
    const hero2 = document.querySelector('.hero2');
    if (hero2) {
        const modelViewerContainer = document.createElement('div');
        modelViewerContainer.className = 'model-viewer-container';

        const modelViewer = document.createElement('model-viewer');
        modelViewer.src = 'images/unenterlogom.glb'; // Update the path if necessary
        modelViewer.setAttribute('alt', '3D model of an object');
        modelViewer.setAttribute('auto-rotate', '');
        modelViewer.setAttribute('camera-controls', '');
        modelViewer.classList.add('model-viewer'); // Use for specific styling

        modelViewerContainer.appendChild(modelViewer);
        hero2.appendChild(modelViewerContainer);
    }
});
