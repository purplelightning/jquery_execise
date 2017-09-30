/**
 * Created by wind on 17-9-17.
 */
$('body > p').css({
    color: '#ff0000',
    background: '#0d0dfd'
});
//even:偶数 odd:奇数

选择器:
    $('.submenu')
$('.submenu').hide()
$('#navBar')
$('#navBar a')
$('body>p') //body中包含p的
$('h2 + div')//h2的兄弟
$('img[alt]') //有alt属性的
$('input[type=text]')//选择特定属性拥有一个具体值的一个元素
$('a[href^="http://"]')//以什么属性开头
$('a[href*="missingmanuals.com"]')//任意位置包含一个特定的元素
$('tr:even')
$('p:first')
$('a:not(.navButton)')
$('a:not[href^="http://"]')
$('li:has(a)')//选择包含a的<li>
$('#popUp').width(300).height(300)

$('#span').remove()
$('#span.error').remove()//删除所有使用error类的<span>标签


//DOM不能和jquery一起工作

$('input[type=button]').click(function () {
    setTimeout(function () {
        $('img').replaceWith('<img src="./img/blue.jpg">');
    }, 3000)
});

$('p:last').toggleClass('more');//只要添加类名 'more'
$('p:last').addClass('more');
$('p:last').removeClass('more');

//设置css三种方式
var bgColor = $('p').css('background-color');
$('p:last').css('font-size', '150%').css('border', '3px solid red');

//CSS - 如何使一个按钮居中？

//解决这个问题比较好的方式，就是为所有需要相对父容器居中对齐的块级元素设置“margin: auto;
//并且还要设置父容器的 "text-align: center;"。

//改变多行代码
$('#changeStyle').click(function () {
    $('p:first').css({
        'background-color': '#349290',
        'color': '#992200',
        'padding': 20
    })
});

//匿名函数
$('selector').each(function () {
    //code goes here

});
//应该使用document.ready()函数来确保浏览器执行任何JavaScript之前,页面的HTML已经载入了
$(this).before(quote);//在节点前添加一个元素

//jquery方式使用事件
//1.选择元素
//2.分配事件
//3.给事件传递一个函数,常用匿名函数
$('a').mouseover(function () {

});

//jQuery的ready函数:等待直到HTML已经载入浏览器之后才运行的脚本,而不是依赖一个load事件
// 来触发一个JavaScript程序,通常是脚本第一行或最后一行
$(document).ready(function () {

});
//简写方式:
$(function () {

});

$('#selector').hover(function1, function2);//常和两个匿名函数一起用

/*toggle事件和hover事件类似,响应的是click事件  ~~~~~~~~~~~~~~~~~~~
 toggle方法在jquery 1.9之后就已经被弃用了，在之前是可以对同一元素实现不同的事件*/
var count = 0;//只能用count代替了
$('#btn2').click(function () {
        if (count % 3 == 0) {
            $('form').css({
                'background-color': '#6BF948'
            })
        } else if (count % 3 == 1) {
            $('form').css({
                'background-color': '#65f0ee'
            })
        } else {
            $('form').css({
                'background-color': '#ffff00'
            })
        }
        count++;
    }
);

/*  pageX:窗口左边界到光标
 pageY:窗口上边界到光标
 screenX:屏幕左边界到光标
 screenY:屏幕上边界到光标*/

//阻止默认事件
e.preventDefault()
//删除事件
$('#btn2').unbind('click');
//阻止事件冒泡,传递到祖先元素上
$('#btn2').unbind('click');

//bind使用                对象直接量或其变量,数据可以省略
$('#selector').bind('click', myData, functionName);

$('#selector').bind('click', functionName);

$('#selector').click(functionName);

var linkVar = {message: "Hello from a link"};
var showMessage = function (e) {
    alert(e.data.message);
};

$('#btn1').bind('click keypress', linkVar, showMessage);//绑定多个事件

$('#btn').bind({
    'click': function () {

    },
    'mouseover': function () {

    }
});

//效果函数的速度
//fast,normal,slow
$('element').fadeOut('slow');
$('element').fadeOut(2000);

//jquery动画  图片设置为relative才能使用位移动画
//默认swing动态 linear线性

$('#dashboard').hover(
    function () {
        $(this).stop().animate({
                left: '0',
                backgroundColor: 'rgb(255,255,255)'
            },
            500,
            'easeInSine'
        );
    },
    function () {
        $(this).stop().animate({//加了stop之后可以防止动画重复
                left: '-92px',
                backgroundColor: 'rgb(110, 138, 195)'
            },
            1500,
            'easeOutBounce'
        )
    }
);
//.stop()函数在开始一个新的动画之前就直接结束了div上的任何动画,并且防止多个动画放入一个队列中
//切换图片src
$('#i1').attr('src', 'img/blue.jpg');

//fadeIn(),fadeOut(),SlideUp(),SlideDown(),SlideToggle(),fadeTo()
var homePath = $('#homeLink').attr('href');
//获取链接文本
alert($('a').html());
$('a').html("百度一下");

//禁止默认事件
$('a').click(function (e) {//1
    e.preventDefault();
});

$('a').click(function () {//2   必须要让return false作为语句最后一行,否则会提前返回
    //some code
    return false;
});
//新窗口
$('a').attr('target', '_blank');

//超链接的悬停文字使用title表示的
/*
 <a href="http://www.baidu.com" title="你想打开百度吗?">百度一下</a>
 */

//打开新窗口....   弹出窗口
open(URL, name, properties);
var newWin = open('http://www.baidu.com', 'theWin', 'height=200,width=200');

newWin.close();
newWin.blur();
newWin.focus();//很强大

//使用iframe设置弹出式窗口

//管理导航,引入navPlugin插件
$('#navigation').navPlugin({
    'itemWidth': 150,
    'itemHeight': 30
});

//输入框 type:多选框 id:用于别的元素的查找 name:属于哪一个集合下 value:此选项的值
// <input type="checkbox" id="helisking" name="hobby" value="helisking">
//         <label for="helisking">Heli-skiing</label>

// <input type="radio" name="spam" id="yes" value="yes" checked="checked">
//         <label for="yes">Yes</label>
//表单元素的选择
// :input    :radio   :checkbox   :submit   :image  :reset
//     :text    :password    :button  :file    :hidden

var amount = $('#qua').val();//get value
var total = amount * unitCost;
$('#total').val(total)//set value

if ($('#yes').attr('checked')) {
    alert("Y");
} else {
    alert("N");
}

$('#signup :text:first').focus();
$('#planet').attr('disabled', true);//禁用


//阻止表单多次提交
$('form').submit(function () {
    $('input[type=submit]').attr('disabled', true);
});

//一次用多个选择器

$('#visa,#mastercard').click(function () {
    $('#cardNumber,#expiration').attr('disabled', false).css('background-color', '');
    $('#creditCard label,#expiration label').css('color', '');
});

//表单插件 Validation插件 http://bassistance.de/jquery-plugins/jquery-plugin-validation/
//可以在html中验证,也可以在js中验证,不过感觉js好一些
$('#signup').validate({
    rules: {
        email: {
            required: true,
            email: true
        }
    }
});
//当在一个事件处理程序的匿名函数内部时,$(this)引用为其添加事件的元素,可以把$(this)保存到一个变量中
//执行较少的函数,提高运行效率

//标签页和面板

//幻灯片插件: AnythingSlider

//css精灵用于图像处理
//jquery提供了.width()和 .height()获得窗口的高度

// height,width: 771  实际宽高
// innerHeight,innerWidth: 831 +padding
// outerHeight,outerWidth: 851  +padding+border
//如果是outerHeight(true)则会把 margin也考虑进去
$('#output').html("窗口的宽度是:" + winW + ",窗口的高度是:" + winH +
    "<br>" + "文档的宽度是:" + docW + ",文档的高度是:" + docH + "<br>" +
    "width: " + r.width() + "<br>" +
    "innderWidth: " + r.innerWidth() + "<br>" +
    "outerWidth: " + r.outerWidth() + "<br>" +
    "outerWidth(true): " + r.outerWidth(true) + "<br>" +
    "(imgPos.x,imgPos.y): " + imgPos.left + "," + imgPos.top
);

//offset返回的对象相对于文档,position返回的对象相对于距离其最近的祖先元素的左上角的相对位置  !!!!!!!!!!!

$(document).scrollTop();
$(document).scrollLeft();


//当把一个jQuery选择存储到一个变量中时,常见做法是:在变量名前加$   提醒
var $banner = $('banner');


//jquery工具提示插件
//qTip2 http://craigsworks.com/projects/qtip2
//jQuery Tools Tooltip  http://flowplayer.org/tools/tooltip/index.html


$('#headlines').load('todays_news.html');

$.get(url, data, callback);
$.post(url, data, callback);

$get('rateMovie.php', 'rating=5');
$post('rateMovie.php', 'rating=5');
$post('rateMovie.php', {rating: 5});
$post('rateMovie.php', 'rating=5&user=Bob');
//空格:%20  &:%26      =: %3D

//转义字符串
var queryString = 'favFood=' + encodeURIComponent('Mac & Cheese');
$post('rateMovie.php', queryString);


//把表单数据转换成get()和post()函数可以使用的数据
var formData = $('#login').serialize();
$.get('login.php', formData, loginResults);

$('#open').click(function () {
    $('form').slideToggle();
    $(this).toggleClass('close');
});

//连续动作
$('#shen').fadeIn(1000, function () {
    $('#e').slideDown(1000);
});

$(this).parent().siblings().each(function () {
    alert($(this).text());// 此时this的值变了   this相当于each前面的元素

});


$('ul :first').css('background', 'red');
$('ul').children().first().css('background', 'red');

//滚动公告,用dom,尽量避免
setInterval(function () {
    var newLi = $('ul>:first').clone(true);
    $('ul').append(newLi);
    $('ul>:first').remove();
}, 1500);


$('#sel').click(function (evt) {
    evt.stopPropagation();//阻止冒泡,不传递到document
    $('ul').show();
});
$('ul li').click(function () {
    $('#sel').text($(this).text());
    $('ul').hide();
});
$(document).click(function () {
    $('ul').hide();
});


















