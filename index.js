let html = document.querySelector("#html");
let style = document.querySelector("#style");
console.log('11')
let string = `/* 你好，我叫adam
 * 接下来我来做一个会动的代码,请欣赏
 * 首先我要准备一个div
 **/
#div1 {
    border: 1px solid pink;
    width: 200px;
    height: 200px;
}
/* 接下来我把div 变成一个八卦图
 * 注意看好了
 * 先把一个div 变成一个圆圈
 **/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba( 0, 0, 0, 0.5);
    border: none;
}
/* 八卦是一黑一白的
 * 阴阳两级
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1:before {
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`
let newString = ''
let count = 0;
let step = () => {
    if(string[count] === '\n') {
        newString +='<br>'
    } else if(string[count] === '') {
        newString += '&nbsp'
    } else {
        newString += string[count]
    }
   
    html.innerHTML = newString;
    style.innerHTML = string.substring(0, count);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    setTimeout(() => {
        if(count < string.length - 1) {
            count +=1;
            step()
        }
    }, 10)
}

step();