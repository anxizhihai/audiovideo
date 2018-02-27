$(function() {
    $("#daohangspan1").css("background", "#F9BE04");
    var O_showbox = $('div.showbox');
    var O_imgbox = $('div.showbox div.imgbox');
    var O_imgs = $('div.showbox div.imgbox img');
    var O_pre = $('div.showbox div.pre');
    var O_aft = $('div.showbox div.aft');
    var O_lis = $('div.showbox ul.odot ul.lis li');
    var timer = null;
    var O_index = 1;
    var oshow_width = O_showbox.width();
    var O_imgs_len = O_imgs.length;
    O_imgs.each(function() {
        $(this).css('width', oshow_width + 'px');
    });
    O_imgbox.css('width', oshow_width * O_imgs_len + 'px');

    O_imgbox.css('left', '-' + oshow_width + 'px');
    O_aft.on('click', function() {
        O_index++;
        var target_left = -O_index * oshow_width;
        O_imgbox.stop(false, true).animate({ 'left': target_left + 'px' }, function() {
            if (O_index >= O_imgs_len - 1) {
                O_index = 1;
                O_imgbox.css('left', '-' + oshow_width + 'px');
            };
            O_lis.removeClass('active').removeClass('changtai');
            O_lis.eq(O_index - 1).addClass('active').siblings().addClass('changtai');
        });
    });
    O_pre.on('click', function() {
        O_index--;
        var target_left = -O_index * oshow_width;
        O_imgbox.stop(false, true).animate({ 'left': target_left + 'px' }, function() {
            if (O_index <= 0) {
                O_index = O_imgs_len - 2;
                O_imgbox.css('left', '-' + oshow_width * O_index + 'px');
            };
            O_lis.removeClass('active').removeClass('changtai');
            O_lis.eq(O_index - 1).addClass('active').siblings().addClass('changtai');
        });
    });

    function aoto_play() {
        timer = setInterval(function() {
            O_aft.click();
        }, 1500)
    };
    aoto_play();
    O_lis.on('click', function() {
        var index = $(this).index();
        O_index = index + 1;
        var target_left = -O_index * oshow_width;
        O_imgbox.stop(false, true).animate({ 'left': target_left + 'px' });
        O_lis.removeClass('active').removeClass('changtai');
        O_lis.eq(O_index - 1).addClass('active').siblings().addClass('changtai');
    });
    O_showbox.hover(function() {
        clearInterval(timer);
    }, function() {
        aoto_play();
    });

    // 自适应
    var Oz_width = 1903; //初始状态的宽度
    var Oz_height = 800; //初始状态的高度
    // var Oz_ratio = Oz_height / Oz_width; // 自适应高宽比率
    var Oz_ratio = 0.8;

    function zishiying() {
        // var curwidth = $(document.body).width();
        //初始化
        // 设定显示divbox的宽为视窗宽度，高度为宽度按比例缩放
        O_showbox.width('430' + 'px');
        O_showbox.height(parseInt('430' * Oz_ratio) + 'px');
        //设置图片的高度和宽度
        O_imgs.each(function() {
            $(this).css('width', oshow_width + 'px');
            $(this).css('height', parseInt('430' * Oz_ratio) + 'px');
        });
        // 设定imgbox的高度和宽度
        // O_imgbox.css('width', curwidth * O_imgs_len + 'px');
        O_imgbox.css('height', parseInt('430' * Oz_ratio) + 'px');

    }
    zishiying();
    $(window).resize(function() {
        zishiying();
        //  window.location.reload();
    });
});

$("#headerspan1").mouseenter(function() {
    $("#headerspan1").css({ "color": "#F9BE04", "border-bottom": "2px solid #F9BE04" });
    $("#headerspan2").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan3").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan6").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan4").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan5").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $(".change2").hide();
    $(".change1").show();
    $(".change3").hide();
});

$("#headerspan2").mouseenter(function() {
    $("#headerspan2").css({ "color": "#F9BE04", "border-bottom": "2px solid #F9BE04" });
    $("#headerspan1").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan3").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan6").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan4").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan5").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $(".change1").hide();
    $(".change2").show();
    $(".change3").hide();
});
// $("#headerspan2").mouseleave(function() {
//     $("#headerspan2").css({ "color": "#FFFFFF", "border-bottom": "none" });
// });
$("#headerspan3").mouseenter(function() {
    $("#headerspan3").css({ "color": "#F9BE04", "border-bottom": "2px solid #F9BE04" });
    $("#headerspan1").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan2").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan6").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan4").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan5").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $(".change1").hide();
    $(".change3").show();
    $(".change2").hide();
});
$("#headerspan4").mouseenter(function() {
    $("#headerspan4").css({ "color": "#F9BE04", "border-bottom": "2px solid #F9BE04" });
    $("#headerspan1").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan2").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan3").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan6").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan5").css({ "color": "#FFFFFF", "border-bottom": "none" });
});
$("#headerspan5").mouseenter(function() {
    $("#headerspan5").css({ "color": "#F9BE04", "border-bottom": "2px solid #F9BE04" });
    $("#headerspan1").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan2").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan3").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan4").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan6").css({ "color": "#FFFFFF", "border-bottom": "none" });
});
$("#headerspan6").mouseenter(function() {
    $("#headerspan6").css({ "color": "#F9BE04", "border-bottom": "2px solid #F9BE04" });
    $("#headerspan1").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan2").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan3").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan4").css({ "color": "#FFFFFF", "border-bottom": "none" });
    $("#headerspan5").css({ "color": "#FFFFFF", "border-bottom": "none" });
});

$("#daohangspan1").mouseenter(function() {
    $("#daohangspan1").css("background", "#F9BE04");
    $("#daohangspan2").css("background", "");
    $("#daohangspan3").css("background", "");
    $("#daohangspan4").css("background", "");
    $("#daohangspan5").css("background", "");
    $("#daohangspan6").css("background", "");
    $("#daohangspan7").css("background", "");
    $("#daohangspan8").css("background", "");
    $(".dahangli1").show();
    $(".dahangli2").hide();
    $(".dahangli3").hide();
});
$("#daohangspan2").mouseenter(function() {
    $("#daohangspan2").css("background", "#F9BE04");
    $("#daohangspan1").css("background", "");
    $("#daohangspan3").css("background", "");
    $("#daohangspan4").css("background", "");
    $("#daohangspan5").css("background", "");
    $("#daohangspan6").css("background", "");
    $("#daohangspan7").css("background", "");
    $("#daohangspan8").css("background", "");
    $(".dahangli1").hide();
    $(".dahangli2").show();
    $(".dahangli3").hide();
});
$("#daohangspan3").mouseenter(function() {
    $("#daohangspan3").css("background", "#F9BE04");
    $("#daohangspan1").css("background", "");
    $("#daohangspan2").css("background", "");
    $("#daohangspan4").css("background", "");
    $("#daohangspan5").css("background", "");
    $("#daohangspan6").css("background", "");
    $("#daohangspan7").css("background", "");
    $("#daohangspan8").css("background", "");
    $(".dahangli1").hide();
    $(".dahangli2").hide();
    $(".dahangli3").show();
});
$("#daohangspan4").mouseenter(function() {
    $("#daohangspan4").css("background", "#F9BE04");
    $("#daohangspan1").css("background", "");
    $("#daohangspan2").css("background", "");
    $("#daohangspan3").css("background", "");
    $("#daohangspan5").css("background", "");
    $("#daohangspan6").css("background", "");
    $("#daohangspan7").css("background", "");
    $("#daohangspan8").css("background", "");
});
$("#daohangspan5").mouseenter(function() {
    $("#daohangspan5").css("background", "#F9BE04");
    $("#daohangspan1").css("background", "");
    $("#daohangspan2").css("background", "");
    $("#daohangspan4").css("background", "");
    $("#daohangspan3").css("background", "");
    $("#daohangspan6").css("background", "");
    $("#daohangspan7").css("background", "");
    $("#daohangspan8").css("background", "");
});
$("#daohangspan6").mouseenter(function() {
    $("#daohangspan6").css("background", "#F9BE04");
    $("#daohangspan1").css("background", "");
    $("#daohangspan2").css("background", "");
    $("#daohangspan4").css("background", "");
    $("#daohangspan5").css("background", "");
    $("#daohangspan3").css("background", "");
    $("#daohangspan7").css("background", "");
    $("#daohangspan8").css("background", "");
});
$("#daohangspan7").mouseenter(function() {
    $("#daohangspan7").css("background", "#F9BE04");
    $("#daohangspan1").css("background", "");
    $("#daohangspan2").css("background", "");
    $("#daohangspan4").css("background", "");
    $("#daohangspan5").css("background", "");
    $("#daohangspan6").css("background", "");
    $("#daohangspan3").css("background", "");
    $("#daohangspan8").css("background", "");
});
$("#daohangspan8").mouseenter(function() {
    $("#daohangspan8").css("background", "#F9BE04");
    $("#daohangspan1").css("background", "");
    $("#daohangspan2").css("background", "");
    $("#daohangspan4").css("background", "");
    $("#daohangspan5").css("background", "");
    $("#daohangspan6").css("background", "");
    $("#daohangspan7").css("background", "");
    $("#daohangspan3").css("background", "");
});