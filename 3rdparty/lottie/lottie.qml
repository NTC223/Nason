import QtQuick 2.0
import Qt.labs.lottieqt 1.0

LottieAnimation {
 source: ""
 quality: LottieAnimation.MediumQuality
 autoPlay: true
 loops: LottieAnimation.Infinite
 onStatusChanged: {
    console.log("Lottie Status changed");
    if (status === LottieAnimation.Ready) {
        gotoAndPlay(0);
        console.log("Lottie Status Ready");
    }
    if (status === LottieAnimation.Error) {
        console.log("Lottie Status Error");
    }
    if (status === LottieAnimation.Loading) {
        console.log("Lottie Status Loading");
    }
 }
 onFinished: {
    console.log("Lottie Finished Playing")
 }
}
