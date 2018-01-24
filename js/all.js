function dialog() {

    var date = new Date();
    var minute = date.getMinutes();

    if (minute < 10) {
        minute = '0'+ minute;
    }

    var array = ['<p class="cloud-text">私のおっぱい好き？</p>\n' + '<span class="cloud-time">'+date.getHours()+':'+minute+'</span>\n',
        '<img src="assets/pictures/png/test.png">' + '<span class="cloud-time">'+date.getHours()+':'+minute+'</span>\n',
        '<p class="cloud-text">トロント付近に住んでいるなら、ぜひ会いに来て！</p>' + '<span class="cloud-time">'+date.getHours()+':'+minute+'</span>\n',
        '<p class="cloud-text"><a href="http://adbomb.pro/click.php?lp=1">私のプロフィールを見てみて</a></p>\n' + '<span class="cloud-time">'+date.getHours()+':'+minute+'</span>\n',
        '<p class="cloud-text">連絡先を登録して、お近づきになりましょう</p>\n' + '<span class="cloud-time">'+date.getHours()+':'+minute+'</span>\n',
        '<p class="cloud-text">アナルプレーもできるわ。どうやって私をイカせてくれるのか教えて？</p>\n' + '<span class="cloud-time">'+date.getHours()+':'+minute+'</span>\n',
        '<p class="cloud-text">私の身体の上で、男性が満足するのを見るのが本当に好きなの…</p>\n' + '<span class="cloud-time">'+date.getHours()+':'+minute+'</span>\n',
        '<p class="cloud-text">セックスしたくてたまらない。写真を撮って <a href="http://adbomb.pro/click.php?lp=1">に載せるから見てみて！</a></p>\n' + '<span class="cloud-time">'+date.getHours()+':'+minute+'</span>\n',
        '<p class="cloud-text">すぐまたあとでチャットしましょうxx</p>\n' + '<span class="cloud-time">'+date.getHours()+':'+minute+'</span>\n']


    var article_0 = document.createElement('article');
    article_0.className = "cloud";

    var article_1 = document.createElement('article');
    article_1.className = "cloud";


    var container = document.getElementById('messages');

    setTimeout(function () {
        article_0.innerHTML = array[0];
        container.appendChild(article_0);
        setTimeout(function () {
            article_1.innerHTML = array[1];
            container.appendChild(article_1);
        },2000)
    },1000)
}

setTimeout(dialog, 1000);


var counter = 0;

function addComment() {

    counter++;
    console.log(counter);

}
