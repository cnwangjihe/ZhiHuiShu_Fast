// 代码改编自https://github.com/jiajiayao/ZhiHuiShu_2020_New ,去除习惯分,增加80%,以达到最快刷课速度
// 智慧树自动刷课脚本,请打开播放页面,并按F12,选中Console栏,粘贴本代码并回车,看到有monitor online即表明运行正常
// 会自动切换1.5倍速,观看80%后自动下一个视频,自动跳过弹窗题目
// 仅适用于浏览器,不适用于app
// 可设置持续时间

if (!/1\.5/.test($('.speedBox').attr('style'))) {
  console.log('enable 1.5x speed')
  $('.speedTab15').click()
}
if ($('.volumeBox').find('.passVolume').height() != 0) {
  console.log('set volume to 0')
  $('.volumeIcon').click()
}
(function () {
  const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))

  time = 30 * 60 // 脚本持续时间,默认30min
  const start = async function () {
    while (true) {
      console.log('monitor online')

      $('.el-dialog__wrapper,.dialog-test').css("display", "none")
      $('.v-modal').css("z-index", "-1")
      if (time > 0) {
        console.log("Time left: " + time + "s")
        time = time - 10
      } else {
        $('.playButton').click()
        break
      }

      if ($(".current_play").find(".time_icofinish").length == 1) {
        console.log('turn to next')
        $('#nextBtn').click()
        await sleep(10000)
        time = time - 10
        if (!/1\.5/.test($('.speedBox').attr('style'))) {
          console.log('enable 1.5x speed')
          $('.speedTab15').click()
        }
        if ($('.volumeBox').find('.passVolume').height() != 0) {
          console.log('set volume to 0')
          $('.volumeIcon').click()
        }
      } else {
        if (String($('.playButton').click()).length == 65) {
          console.log('continue to play')
          $('.playButton').click()
        }
      }
      await sleep(10000)
    }

  }

  start()

}())
