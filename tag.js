// Tag.js v1.0.2 by zerocls | Synsth Tag
(function () {
    // Create and append the CSS for the overlay
    const style = document.createElement("style");
    style.textContent = `
        #tagOverlay {
            position: fixed;
            bottom: 10px;
            right: 10px;
            background: #1a202c;
            color: white;
            padding: 8px 16px;
            display: flex;
            align-items: center;
            font-family: Arial, sans-serif;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, opacity 0.3s ease;
            transform: translateX(100%);
            opacity: 0;
            border-radius: 8px; /* Smooth corners */
        }
        #tagOverlay img {
            height: 20px;
            margin-right: 8px;
        }
        #tagOverlay span {
            font-size: 14px;
            margin-right: 8px;
        }
        #tagOverlay button {
            background: none;
            border: none;
            color: white;
            font-size: 14px;
            cursor: pointer;
            padding: 0;
            margin: 0;
        }
        #tagOverlay.visible {
            transform: translateX(0);
            opacity: 1;
        }
    `;
    document.head.appendChild(style);

    // Create the tag overlay element
    const overlay = document.createElement("div");
    overlay.id = "tagOverlay";
    overlay.innerHTML = `
        <img src="https://res.cloudinary.com/derlsdmci/image/upload/v1733756067/glerg9esrtlc1slnhrxg.png" alt="Logo">
        <span>Powered By Synsth API 👑</span>
        <button id="toggleButton">&lt;</button>
    `;
    document.body.appendChild(overlay);

    // Add toggle functionality
    const toggleButton = overlay.querySelector("#toggleButton");
    toggleButton.addEventListener("click", () => {
        const isVisible = overlay.classList.toggle("visible");
        toggleButton.textContent = isVisible ? ">" : "<";
    });
})();
