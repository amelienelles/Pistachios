const images = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10"
]

const extension = ".jpg"
const imgPath = "./"

const imgSetup = {
  "0100": ["4x3", "3x2", "16x9", "235x100", "3x1", "4x1"],
  "0480": ["4x3", "3x2", "16x9", "235x100", "3x1", "4x1"],
  "0800": ["4x3", "3x2", "16x9", "235x100", "3x1", "4x1"],
  "1200": ["4x3", "3x2", "16x9", "235x100", "3x1", "4x1"],
  "1440": ["4x3", "3x2", "16x9", "235x100", "3x1", "4x1"],
  "1920": ["4x3", "3x2", "16x9", "235x100", "3x1", "4x1"]
}

let resolutions = Object.keys(imgSetup)

let img = {}

for (let i = 0; i < images.length; i++) {
  img[images[i]] = {}
  for (let r = 0; r < resolutions.length; r++) {
    img[images[i]][resolutions[r]] = {}
    let aspectRatios = imgSetup[resolutions[r]]
    for (let a = 0; a < aspectRatios.length; a++) {
      img[images[i]][resolutions[r]][aspectRatios[a]] = require(imgPath +
        resolutions[r] +
        "/" +
        aspectRatios[a] +
        "/" +
        images[i] +
        extension)
    }
  }
}

img.resolutions = resolutions

console.log(img)

export default img
