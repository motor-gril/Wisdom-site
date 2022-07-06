window.addEventListener("load", function () {
    // 1. 获取所有按钮元素
    var btns = document.getElementsByTagName('button');
    for (var i = 0; i < btns.length; i++) {
        btns[i].onclick = function () {
            // 1. 先把所有的颜色先清空
            for (var i = 0; i < btns.length; i++) {
                btns[i].style.backgroundColor = '';
                btns[i].className='';
            }
            // 2. 添加我们的样式
            this.className = 'current_color';
        }
    }
})