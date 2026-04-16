window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});<!-- 1. 强制覆盖层：立即屏蔽所有视觉内容 -->
<div id="loading-mask" style="position:fixed; top:0; left:0; width:100%; height:100%; background:white; z-index:999999; display:flex; align-items:center; justify-content:center; font-family:sans-serif;">
    正在进入游戏...
</div>

<script>
(function() {
    function doAutoClick() {
        // 查找包含“0.1外网测试服”的文本节点
        const targetText = "0.1外网测试服";
        // 获取所有 input 标签（单选框）和文本标签
        const labels = document.querySelectorAll('label, span, input, div');
        
        let found = false;
        for (let el of labels) {
            if (el.innerText && el.innerText.includes(targetText)) {
                // 尝试点击该元素及其前一个兄弟节点（通常是 radio 按钮本身）
                el.click();
                if (el.previousElementSibling && el.previousElementSibling.type === 'radio') {
                    el.previousElementSibling.click();
                }
                found = true;
                break;
            }
        }

        if (found) {
            console.log("已选中外网测试服");
            // 2. 点击成功后，移除屏蔽层
            const mask = document.getElementById('loading-mask');
            if (mask) mask.remove();
        } else {
            // 如果还没加载出来，50毫秒后再次尝试
            setTimeout(doAutoClick, 50);
        }
    }

    // 确保在页面资源加载时就开始尝试
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', doAutoClick);
    } else {
        doAutoClick();
    }
})();
</script>

window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })
