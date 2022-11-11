input.onButtonPressed(Button.A, function () {
    最大タイマー時間＿分 += 1
    if (タイマー時間＿分 > 最小タイマー時間＿分) {
        最大タイマー時間＿分 = 最小タイマー時間＿分
    }
})
input.onButtonPressed(Button.AB, function () {
    動作中 = false
    演奏中 = false
})
input.onButtonPressed(Button.B, function () {
    スタート時の稼働時間＿ミリ秒 = input.runningTime()
    最大タイマー時間＿分 = タイマー時間＿分 * 60 * 1000
    動作中 = true
    演奏中 = false
})
function お風呂 () {
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(587, music.beat(BeatFraction.Half))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
}
let 経過時間＿ミリ秒 = 0
let スタート時の稼働時間＿ミリ秒 = 0
let 演奏中 = false
let 動作中 = false
let タイマー時間＿分 = 0
let 最大タイマー時間＿分 = 0
let 最小タイマー時間＿分 = 0
最小タイマー時間＿分 = 1
最大タイマー時間＿分 = 9
タイマー時間＿分 = 3
動作中 = false
演奏中 = false
basic.forever(function () {
    if (動作中) {
        経過時間＿ミリ秒 = input.runningTime() - スタート時の稼働時間＿ミリ秒
        if (経過時間＿ミリ秒 < 最大タイマー時間＿分) {
            led.plotBarGraph(
            最大タイマー時間＿分 - 経過時間＿ミリ秒,
            最大タイマー時間＿分
            )
            basic.pause(500)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(500)
        } else {
            動作中 = false
            演奏中 = true
            basic.showIcon(IconNames.EigthNote)
            while (演奏中) {
                お風呂()
                basic.pause(5000)
            }
        }
    } else {
        basic.showNumber(タイマー時間＿分)
    }
})
