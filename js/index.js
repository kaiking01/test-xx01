window.onload = function () {
    // alert(123)
    const boxDom = document.getElementById('contentWrap')
    const containDom = document.createElement('div')
    const heardDom = document.createElement('h1')
    const listDom = document.createElement('div')
    // heardDom.style.position = 'sticky'
    // heardDom.style.top = '0'
    // heardDom.style.left = '0'
    // heardDom.style.width = '100%'
    listDom.style.display = 'none'
    listDom.style.background = '#ddd'
    heardDom.innerHTML = '目录(打开目录)'
    let isShow = false
    heardDom.addEventListener('click', function () {
        isShow = !isShow
        if (isShow) {
            listDom.style.display = 'block'
            heardDom.innerHTML = '目录(关闭目录)'
        } else {
            listDom.style.display = 'none'
            heardDom.innerHTML = '目录(打开目录)'
        }
    })

    const list = [
        '1.备考三步走：制订计划——安排复习——刷题',
        '2.文科生如何把高中教材用到极致？ ',
        '3.高考冲刺在即，如何最大限度利用最后的黄金时期？',
        '4.语文：如何增强实力，突破 130 分？',
        '5.数学：进阶学霸的必备刷题方法',
        '6.文综：如何用一张图优雅地考到 270？',
        '7.历史：高考历史如何高效提分',
        '8.作文：高考作文怎样达到 55+？',
        '9.地理：如何学好高中地理？',
        '10.英语：高考作文的最强武学秘籍',
        '11.数学：高考前三轮刷题，高效提分',
    ]
    let listStr = '<ul>'
    list.forEach(o => {
        listStr += `<li style="padding:6px 4px;"><a href="${o}.html">${o}</a></li>`
    })
    listStr += '</ul>'

    listDom.innerHTML = listStr
    containDom.appendChild(heardDom)
    containDom.appendChild(listDom)

    boxDom.insertBefore(containDom, boxDom.firstChild)
    
    
}