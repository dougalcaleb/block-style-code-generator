const dimensions = {
   height: 720,
   width: 1280
};

const colors = {
   all: ["#82579e", "#4cb9d6", "#dcdcaa", "#ce9178"],
   struct: "#82579e",
   val: "#4cb9d6",
   func: "#dcdcaa",
   str: "#ce9178"
};

const settings = {
   minLength: 30,
   maxLength: 100,
   height: 30,
   lineSpace: 20,
   blockSpace: 10,
   indent: 30,
   minBlocks: 3,
   maxBlocks: 5,
   lines: 20
};

const probabilities = {
   isStruct: 4
};

const canvas = document.querySelector(".wrap");
const context = canvas.getContext("2d");

function generate() {
   let x = 0, y;
   let indent = 0;

   for (let a = 0; a < settings.lines; a++) { // line
      let lineBlockCount = Math.floor(Math.random() * (settings.maxBlocks - settings.minBlocks + 1) + settings.minBlocks);
      for (let b = 0; b < lineBlockCount; b++) { // block
         if (b == 0 && Math.floor(Math.random() * probabilities.isStruct) == 0) {
            console.log("Creating a STRUCTURE block");
            x = createBlock(0, x, a);
         } else {
            console.log("Creating another block");
            x = createBlock(Math.floor(Math.random() * 3) + 1, x, a);
         }
      }
   }
}

function createBlock(type, x, line) {
   let color = colors.all[type];
   let length = Math.floor(Math.random() * (settings.maxLength - settings.minLength + 1) + settings.minLength);
   let y = line * (settings.height + settings.lineSpace);

   console.log(`Color is ${color}, length is ${length}, x is ${x}, y is ${y}`);

   context.beginPath();
   context.moveTo(x, y);
   context.lineTo(x + length, y);
   context.lineTo(x + length, y + settings.height);
   context.lineTo(x, y + settings.height);
   context.closePath();
   context.fillStyle = color;
   context.fill();


   // return x;
}

function setup() {
   canvas.setAttribute("width", dimensions.width);
   canvas.setAttribute("height", dimensions.height);
   generate();
}

setup();