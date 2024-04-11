// //let immagini = []

// function setup() {
// 	createCanvas(windowWidth, windowHeight)
// 	const intervallo = 8
// 	for(let i=0; 1<i<100/intervallo; i++){
// 		immagini[i] = loadImage("./frames_Z/" + i + ".png")
// 	}
// }

// function draw() {
// 	background(200)
// 	const colonne = 18
// 	const spazio = 0
// 	for(let i=0; i<immagini.length; i++) {
// 		const x = (i % colonne) * (32 + spazio)
// 		const y = Math.floor(i / colonne) * (18 + spazio)
// 		image(immagini[i], x, y, 32, 18)
// 	}
// }

// function windowResized() {
// 	resizeCanvas(windowWidth, windowHeight)
// }