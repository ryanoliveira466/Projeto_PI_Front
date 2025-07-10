import { EditorState } from "https://esm.sh/@codemirror/state";
import { EditorView, basicSetup } from "https://esm.sh/codemirror";
import { javascript } from "https://esm.sh/@codemirror/lang-javascript";
import { css } from "https://esm.sh/@codemirror/lang-css";
import { html } from "https://esm.sh/@codemirror/lang-html";

// Update the preview iframe
function updatePreview() {
    const jsContent = jsEditor.state.doc.toString();
    const cssContent = cssEditor.state.doc.toString();
    const htmlContent = htmlEditor.state.doc.toString();

    const fullHTML = `
        <html style="overflow: scroll;">
            <head>
                <style>${cssContent}</style>
            </head>
            <body>
                ${htmlContent}
                <script>
                    ${jsContent}
                <\/script>
            </body>
        </html>`;

    const iframe = document.getElementById("live-preview");
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(fullHTML);
    iframeDoc.close();
}

// JavaScript Editor
const jsEditor = new EditorView({
    state: EditorState.create({
        doc: `function greet(name) {
    document.getElementById("output").innerText = "Hello, " + name + "!";
}
greet("CodeMirror");`,
        extensions: [basicSetup, javascript()]
    }),
    parent: document.getElementById("js-editor"),
    dispatch: (tr) => {
        jsEditor.update([tr]);
        if (tr.docChanged) updatePreview();
    }
});

// CSS Editor
const cssEditor = new EditorView({
    state: EditorState.create({
        doc: `body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 50px;
}
#output {
    color: blue;
    font-size: 24px;
    margin-top: 20px;
}`,
        extensions: [basicSetup, css()]
    }),
    parent: document.getElementById("css-editor"),
    dispatch: (tr) => {
        cssEditor.update([tr]);
        if (tr.docChanged) updatePreview();
    }
});

// HTML Editor
const htmlEditor = new EditorView({
    state: EditorState.create({
        doc: `<h1>Welcome!</h1>
<div id="output"></div>`,
        extensions: [basicSetup, html()]
    }),
    parent: document.getElementById("html-editor"),
    dispatch: (tr) => {
        htmlEditor.update([tr]);
        if (tr.docChanged) updatePreview();
    }
});

// Optional: make content accessible via buttons
window.getText = function (editorId) {
    let editor;
    if (editorId === "js-editor") editor = jsEditor;
    else if (editorId === "css-editor") editor = cssEditor;
    else if (editorId === "html-editor") editor = htmlEditor;

    const content = editor.state.doc.toString();
    alert(content);
    console.log(content);
};

// Run preview initially on page load
window.addEventListener('load', updatePreview);
