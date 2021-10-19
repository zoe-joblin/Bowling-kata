// Score 64:
// const frames = [
//   [2, 0], [4, 2], [6, 0], [2, 4], [1, 5], [7, 0], [5, 2], [7, 0], [2, 6], [8, 1]
// ]
//
// Score 119:
const frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
]
//
// Score 141:
// const frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]
//
// Score 300:
// const frames = [
//  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10],
// ]

function scoreAFrame (frame) {
  return frame[0] + frame[1]
}
function scoreASpare (frame) {
  const rawScore = scoreAFrame(frame)
  const total = rawScore + 
}

function framesSum (framesArray) {
  var sum = 0
  for (let i = 0; i < framesArray.length; i++) {
    sum += framesArray[i]
  }
  return sum
  // console.log(sum)
}

function addAllFrames (frames) {
  const framesArray = frames.map(frame => scoreAFrame(frame))
  const score = framesSum(framesArray)
  console.log(score)
}

const scoreGame = (frames) => {
  frames.map((frame) => {
    if (frame[0] === 10) {

    } else if (frame === 10) {
      scoreASpare(frame)
    } else {

    })
}

addAllFrames(frames)
// scoreAGame()
// framesSum([
//   2, 6, 6, 6, 6,
//   7, 7, 7, 8, 9
// ])
