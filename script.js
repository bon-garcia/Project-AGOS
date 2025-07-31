const mapObject = document.getElementById("svg-map");
let scale = 1;

mapObject.addEventListener("load", () => {
  const svgDoc = mapObject.contentDocument;
  const svgElement = svgDoc.querySelector("svg");

  svgDoc.addEventListener("wheel", (e) => {
    e.preventDefault();

    // Zoom in or out
    const zoomAmount = e.deltaY < 0 ? 1.1 : 0.9;
    scale *= zoomAmount;

    svgElement.style.transform = `scale(${scale})`;
    svgElement.style.transformOrigin = "center center";
  });
});

