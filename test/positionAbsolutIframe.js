const wrapper = document.getElementById("image-wrapper");

    const iframe = document.createElement("iframe");
    iframe.className = "position-absolute top-0 start-0 w-100 h-100 border-0 rounded";
    iframe.style.zIndex = "2";

    const cssContent = `
      body {
        background-color: blue;
        font-family: sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }

      #showDivBtn {
        padding: 10px 20px;
        font-size: 16px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-bottom: 20px;
      }

      #box {
        width: 200px;
        height: 200px;
        background-color: #3498db;
        border-radius: 10px;
        opacity: 0;
        transform: scale(0.5);
        box-shadow: none;
        transition: all 0.5s ease;
      }

      #box.show {
        opacity: 1;
        transform: scale(1);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
      }
    `;

    const jsContent = `
      document.getElementById('showDivBtn').addEventListener('click', function () {
        document.getElementById('box').classList.add('show');
      });
    `;

    const htmlContent = `
      <button id="showDivBtn">Show Box</button>
      <div id="box"></div>
    `;

    const fullHTML = `
      <html>
        <head><style>${cssContent}</style></head>
        <body>
          ${htmlContent}
          <script>${jsContent}<\/script>
        </body>
      </html>
    `;

    iframe.srcdoc = fullHTML;
    wrapper.appendChild(iframe);