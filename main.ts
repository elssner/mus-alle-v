input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Click), function () {
    music.playMelody("C E G C5 A C5 A G ", 120)
    music.playMelody("F G E C D D C C ", 120)
    music.playMelody("G G F F E G E D ", 120)
    music.playMelody("F F E E D F D C ", 120)
    music.playMelody("C E G C5 A C5 A G ", 120)
    music.playMelody("F G E C D D C C ", 120)
})
function Alle_Vögel_sind_schon_da () {
    music.playTone(262, music.beat(BeatFraction.Whole) * 1.5)
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Double))
    music.playTone(349, music.beat(BeatFraction.Whole) * 1.5)
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Double))
    music.playTone(262, music.beat(BeatFraction.Double))
}
input.onGesture(Gesture.Shake, function () {
    basic.showString("Alle Vögel sind schon da")
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Click), function () {
    Alle_Vögel_sind_schon_da()
    for (let index = 0; index < 2; index++) {
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(349, music.beat(BeatFraction.Whole))
        music.playTone(330, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Double))
    }
    Alle_Vögel_sind_schon_da()
})
