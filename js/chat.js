$(function () {
    resetui(); //该方法定义在scroll.js中，作用：每发送一次消息滚轮都回到底部位置

    // 点击发送  发送消息
    $('#btnSend').on('click', function () {
        var text = $('#iptSend').val().trim();
        if (text.length <= 0)
            return $('#iptSend').val("");
        // 输入成功则添加
        $('#talk_list').append('<li class="right_word"><img src="img/person02.png" /><span>' + text + '</span></li>');
        $('#iptSend').val("");
        resetui();
        // 调用机器人消息
        getMessage(text);
    });

    // 机器人回消息
    function getMessage(text) {
        $.ajax({
            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/robot',
            data: {
                spoken: text
            },
            success: function (res) {
                if (res.message === 'success') {
                    var msg = res.data.info.text
                    $('#talk_list').append(' <li class="left_word"><img src="img/person01.png" /> <span>' + msg + '</span></li>')
                    resetui();

                    // 调用语言
                    getVoice(msg);
                }

            }
        })
    }

    // 把文字转换为语言
    function getVoice(text) {
        $.ajax({
            method: 'GET',
            url: 'http://www.liulongbin.top:3006/api/synthesize',
            data: {
                text: text
            },
            success: function (res) {
                if (res.status == 200) {
                    $("#voice").attr('src', res.voiceUrl);
                }
            }
        });
    }

    // 为文本框绑定敲击回车发送消息
    $('#iptSend').on('keyup', function (e) {
        if (e.keyCode === 13) {
            $('#btnSend').click();
        }
    })
})