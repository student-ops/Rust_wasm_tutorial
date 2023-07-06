import { Universe } from "wasm-game-of-life";

const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new();

let lastRenderTime = Date.now();

const renderLoop = () => {
    const currentTime = Date.now();
    const deltaTime = currentTime - lastRenderTime;

    if (deltaTime >= 100) {
        pre.textContent = universe.render();
        universe.tick();
        lastRenderTime = currentTime;
    }

    requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);

// const pre = document.getElementById("game-of-life-canvas");
// const universe = Universe.new();

// const renderLoop = () => {
//     pre.textContent = universe.render();
//     universe.tick();
// };

// setInterval(renderLoop, 500);

