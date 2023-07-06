const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();
  
    requestAnimationFrame(renderLoop);
};
  