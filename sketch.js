// global variables
let hsize = 100;
let buts = [];
let lbl = ['Home','News','APRS','Links','About'];
let pg = ['index.html','news.html','aprs.html','links.html','about.html'];
const bstyle = {
  normal: "color: yellow; background-color: green; font-size: 32px; position: fixed; top: 0;",
  pressed: "color: white; background-color: blue; font-size: 32px; position: fixed; top: 0;",
  act: "color: white; background-color: darkgreen; font-size: 32px; position: fixed; top: 0;"
}
let index, span;

function setup() {
  let uu = document.title;
  let bwidth = windowWidth/lbl.length;
  for(let i=0; i<lbl.length; i++) {
    buts[i] = createButton(lbl[i]);
    buts[i].position(i*bwidth,0);
    buts[i].size(bwidth,hsize);
    buts[i].style(bstyle.normal);
    buts[i].url = pg[i];
    if(lbl[i] == uu) {
      buts[i].style(bstyle.act);
      index = i;
    }
    buts[i].sel = 0;
    buts[i].index = i;
    buts[i].mousePressed(loadURL);
    buts[i].mouseOver(butHover);
    buts[i].mouseOut(butReset);
  }
  span = createSpan();
  span.style("background-color: black;position:fixed;top:0;");
  span.size(buts[index].width, 10);
  span.position(buts[index].x, hsize+10);

  document.title = "mobile - " + uu;
  noLoop();
}

function butHover() {
  span.position(this.x, 0);
}
function butReset() {
  span.position(windowWidth, hsize+10);
}

// load in a new URL
async function loadURL() {
  window.location.href = this.url;
} 

// window resized
function windowResized() {
  let bw = windowWidth/lbl.length;
  for(let i=0; i<lbl.length; i++) {
    buts[i].position(i*bw,0);
    buts[i].size(bw,hsize);    
  }
  span.size(buts[index].width, 10);
  span.position(buts[index].x, hsize+10);
  butReset();
}
