import { EditorState } from "https://esm.sh/@codemirror/state";
import { EditorView, basicSetup } from "https://esm.sh/codemirror";
import { javascript } from "https://esm.sh/@codemirror/lang-javascript";
import { css } from "https://esm.sh/@codemirror/lang-css";
import { html } from "https://esm.sh/@codemirror/lang-html";
import { oneDark } from "https://esm.sh/@codemirror/theme-one-dark";






// Update the preview iframe
let activeIframe = 'iframeA';
function updatePreview() {
    const jsContent = jsEditor.state.doc.toString();
    const cssContent = cssEditor.state.doc.toString();
    const htmlContent = htmlEditor.state.doc.toString();

    const fullHTML = `
        <html style="overflow: auto;">
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

    const nextIframe = activeIframe === 'iframeA' ? 'iframeB' : 'iframeA';
    const current = document.getElementById(activeIframe);
    const next = document.getElementById(nextIframe);

    
    next.srcdoc = fullHTML;

    
    next.onload = () => {
        current.style.display = 'none';
        next.style.display = 'block';
        activeIframe = nextIframe;
    };
}

// JavaScript Editor
const jsEditor = new EditorView({
    state: EditorState.create({
        doc: `const mySplitText = new SplitText('body', {type:"chars", position: "relative" }); 
// gsap.to(mySplitText.chars, {fontWeight: 900, duration: 5})
setTimeout(() => {
  gsap.timeline({ yoyo: true, repeat: -1, repeatDelay: 0.5, delay: 1})
    .to(mySplitText.chars, { 
      duration: .2,
      fontWeight: 900, 
      color: '#146EF5', 
      scale:.7,
      y: 6,
      ease: 'power2.in',
      rotation: '360deg',
      stagger:{ 
        grid: [14,14], 
        amount: .8, 
        from: 'center',
      } 
    })
    .to(mySplitText.chars, { 
      duration: .4,
      fontWeight: 200,  
      color: '#fff',
      scale: 1,
      y: 0,
      rotation: '720deg',
      ease: 'power3.inOut',
      stagger:{ 
        grid: [14,14], 
        amount: .8, 
        from: 'center'
      } 
    }, '-=.3')
}, 500)
`,
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
        doc: `@font-face {
  font-family: "LeagueSpartanVariable";
  src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/2101521/LeagueSpartanVariable.ttf");

  font-weight: 200 900;
}

@font-face {
	font-family: 'Anybody';
	src: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/61488/ETCAnybodyPB.woff2') format('woff2-variations');
	font-display: block;
	font-weight: 200 900;
	font-stretch: 10% 400%;
}

body {
  height: 100vh;
  width: 370px;
  left: 0;
  right: 0;
  margin: auto;
  background: #111;
  color: #fff;
  line-height: 15px;
  font-size: 30px;
  font-family: 'LeagueSpartanVariable', Courier, monospace;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  
}

div {
  width: 25px;
  height: 25px;
  text-align: center;
  // font-variation-settings: "wght" var(--wt);
  font-weight: 200;
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
        doc: `GSAP &times;SPLITTEXTGSAP&times;SPLITTEXTGSAP&times;SPLITTEXTGSAP&times;SPLITTEXTGSAP&times;SPLITTEXTGSAP&times;SPLITTEXTGSAP&times;SPLITTEXTGSAP&times;SPLITTEXTGSAP&times;SPLITTEXTGSAP&times;SPLITTEXTGSAP&times;SPLITTEXTGSAP&times;SPLITTEXTGSAP&times;SPLITTEXT
        <script src='https://unpkg.com/gsap@3/dist/gsap.min.js'></script>
        <script src='https://unpkg.com/gsap@3/dist/SplitText.min.js'></script>`,
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

    navigator.clipboard.writeText(content)
        .then(() => {
            showCopyPopup();
        })
        .catch(err => {
        });
};

function showCopyPopup() {
    const popup = document.createElement("div");
    popup.innerText = "✅ Copied!";
    popup.style.position = "fixed";
    popup.style.top = "20px";
    popup.style.right = "20px";
    popup.style.background = "#4caf50";
    popup.style.color = "#fff";
    popup.style.padding = "10px 15px";
    popup.style.borderRadius = "5px";
    popup.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
    popup.style.fontSize = "16px";
    popup.style.zIndex = "9999";
    popup.style.opacity = "1";
    popup.style.transition = "opacity 1s ease-out";

    document.body.appendChild(popup);

    // Fade out after 1.5 seconds
    setTimeout(() => {
        popup.style.opacity = "0";
        setTimeout(() => document.body.removeChild(popup), 1000);
    }, 1500);
}

//Expand
const expandBtn = document.getElementById('expand');
const frames = [document.getElementById('iframeA'), document.getElementById('iframeB')];

let isExpanded = false;

const expandIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-expand" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707"/>
</svg>`;
const contractIcon = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-contract" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707"/>
</svg>`;
expandBtn.addEventListener('click', function () {
    frames.forEach(frame => {
        if (!isExpanded) {
            // Expand view
            frame.classList.remove('top-50', 'h-50', 'w-100');
            frame.classList.add('vw-100', 'vh-100', 'top-0', 'z-0');
        } else {
            // Collapse view (return to original state)
            frame.classList.remove('vw-100', 'vh-100', 'top-0', 'z-0');
            frame.classList.add('top-50', 'h-50', 'w-100');
        }
    });

    // Toggle button icon
    expandBtn.innerHTML = isExpanded ? expandIcon : contractIcon;

    isExpanded = !isExpanded;
});
frames.forEach(frame => {
    frame.addEventListener('mouseenter', () => {
        frame.classList.remove('top-50', 'h-50', 'w-100');
        frame.classList.add('vw-100', 'vh-100', 'top-0', 'z-0');
        expandBtn.innerHTML = contractIcon;
        isExpanded = true
    });

    frame.addEventListener('mouseleave', () => {
        frame.classList.remove('vw-100', 'vh-100', 'top-0', 'z-0');
        frame.classList.add('top-50', 'h-50', 'w-100');
        expandBtn.innerHTML = expandIcon;
        isExpanded = false
    });
});

// About
document.getElementById('aboutLink').addEventListener('click', function(){
    let about = document.getElementById('about')
    about.style.pointerEvents = 'all';
    about.style.opacity = 1
})

document.getElementById('closeAbout').addEventListener('click', function (){
    let about = document.getElementById('about')
    setTimeout(function () {
        about.style.pointerEvents = 'none'
    }, 1500);
    about.style.opacity = 0
})

// Run preview initially on page load
window.addEventListener('load', updatePreview);
