//create local time
var date = new Date();
var minute = date.getMinutes();
if (minute < 10) {
    minute = '0'+ minute;
}

function scrollDown() {
    window.scrollTo(0, document.body.scrollHeight);
}

//companion's phrases
function dialog() {

    //take parent's container
    var container = document.getElementById('messages');

    var array = ['<div class="avatar"></div>'+'<p class="cloud-text">私のおっぱい好き？</p>\n' + '<span class="cloud-time">'+date.getHours()+':'+minute+'</span>\n',
        '<div class="avatar"></div>'+'<img src="assets/pictures/png/girl.png" class="girl" />' + '<span class="cloud-time">'+date.getHours()+':'+minute+'</span>\n',
        '<div class="avatar"></div>'+'<p class="cloud-text">トロント付近に住んでいるなら、ぜひ会いに来て！</p>' + '<span class="cloud-time">'+date.getHours()+':'+minute+'</span>\n',
        '<div class="avatar"></div>'+'<p class="cloud-text"><a href="http://adbomb.pro/click.php?lp=1">私のプロフィールを見てみて</a></p>\n' + '<span class="cloud-time">'+date.getHours()+':'+minute+'</span>\n',
        '<div class="avatar"></div>'+'<p class="cloud-text">連絡先を登録して、お近づきになりましょう</p>\n' + '<span class="cloud-time">'+date.getHours()+':'+minute+'</span>\n',
        '<div class="avatar"></div>'+'<p class="cloud-text">アナルプレーもできるわ。どうやって私をイカせてくれるのか教えて？</p>\n' + '<span class="cloud-time">'+date.getHours()+':'+minute+'</span>\n',
        '<div class="avatar"></div>'+'<p class="cloud-text">私の身体の上で、男性が満足するのを見るのが本当に好きなの…</p>\n' + '<span class="cloud-time">'+date.getHours()+':'+minute+'</span>\n',
        '<div class="avatar"></div>'+'<p class="cloud-text">セックスしたくてたまらない。写真を撮って <a href="http://adbomb.pro/click.php?lp=1">に載せるから見てみて！</a></p>\n' + '<span class="cloud-time">'+date.getHours()+':'+minute+'</span>\n',
        '<div class="avatar"></div>'+'<p class="cloud-text">すぐまたあとでチャットしましょうxx</p>\n' + '<span class="cloud-time">'+date.getHours()+':'+minute+'</span>\n'];


    var article_0 = document.createElement('article');
    article_0.className = "cloud";

    var article_1 = document.createElement('article');
    article_1.className = "cloud";

    var article_2 = document.createElement('article');
    article_2.className = "cloud";

    var article_3 = document.createElement('article');
    article_3.className = "cloud";

    var article_4 = document.createElement('article');
    article_4.className = "cloud";

    var article_5 = document.createElement('article');
    article_5.className = "cloud";

    var article_6 = document.createElement('article');
    article_6.className = "cloud";

    var article_7 = document.createElement('article');
    article_7.className = "cloud";

    var article_8 = document.createElement('article');
    article_8.className = "cloud";

    setTimeout(function () {
        article_0.innerHTML = array[0];
        container.appendChild(article_0);
        setTimeout(function () {
            article_1.innerHTML = array[1];
            container.appendChild(article_1);
            setTimeout(function () {
                article_2.innerHTML = array[2];
                container.appendChild(article_2);
                scrollDown();
                setTimeout(function () {
                    article_3.innerHTML = array[3];
                    container.appendChild(article_3);
                    scrollDown();
                    setTimeout(function () {
                        article_4.innerHTML = array[4];
                        container.appendChild(article_4);
                        scrollDown();
                        setTimeout(function () {
                            article_5.innerHTML = array[5];
                            container.appendChild(article_5);
                            scrollDown();
                            setTimeout(function () {
                                article_6.innerHTML = array[6];
                                container.appendChild(article_6);
                                scrollDown();
                                setTimeout(function () {
                                    article_7.innerHTML = array[7];
                                    container.appendChild(article_7);
                                    scrollDown();
                                    setTimeout(function () {
                                        article_8.innerHTML = array[8];
                                        container.appendChild(article_8);
                                        scrollDown();
                                    },2800)
                                },5700)
                            },5000)
                        },5400)
                    },3700)
                },8000)
            },4000)
        },2000)
    },1000)

}

//duration
setTimeout(dialog, 1000);

//add user comment
function addComment() {

    //take parent's container
    var container = document.getElementById('messages');

    var article = document.createElement('article');
    article.className = "my-cloud";

    var phrase = document.getElementById('field').value;
    if (phrase.length > 0) {

        article.innerHTML = '<div class="cloud-wrapper">\n' + '<span class="my-cloud-time">'+date.getHours()+':'+minute+'</span>\n' +
            '<p class="my-cloud-text">'+phrase+'</p>\n' + '</div>';
        container.appendChild(article);
        document.getElementById('field').value = '';
        scrollDown();
    }
    else {
        return false;
    }
}

//if press 'enter'
document.onkeyup = function (e) {
    e = e || window.event;
    if (e.keyCode === 13) {
        addComment();
    }
    return false;
};


