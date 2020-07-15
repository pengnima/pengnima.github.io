$(function() {
  let timer, resumeTimer;
  let duration = 50;
  let $code = $("code:eq(0)");
  let $speedStatus = $(".speedStatus");
  let $speedText = $(".speedText");
  let $skip_resume = $(".skip_resume");
  let $skip_anime = $(".skip_anime");
  const IMG = "./img/head.jpg";

  let STOP = false; //作为暂停 写代码 的标志

  (async () => {
    //写入样式代码 -> codeJS_css
    await writeCode(codeJS_css, $code, "");

    //写入简历代码 -> codeJS_resume
    await writeResumeCode(codeJS_resume, $(".resume"));

    //调整简历 ->  codeJS_marked
    await adjustResume();

    printResume();
  })();

  //===================================================================================================================

  //点击更换速度的按钮
  $speedStatus.on("click", function() {
    speedChange($(this).html());
  });

  $("#printResume").on("click", function() {
    $("body").html($(".resume_paper").html());
    $("body").css("background", "white");
    window.print();
  });

  //跳过调整简历
  function skipAnime(resolve) {
    if ($skip_anime.css("display") == "none") {
      setTimeout(() => {
        $skip_anime.css("display", "inline-block");
      }, 800);
    }
    $skip_anime.on("click", function() {
      if (STOP) {
        alert("要跳过动画，请别暂停~");
      } else {
        clearTimeout(timer); //先清除上方的writeCode
        $skip_anime.remove();
        addHeadImg();
        let allCss = codeJS_css + codeJS_marked + codeJS_cssResume + codeJS_img;
        $("#styleTag").html(allCss);
        $code.html(Prism.highlight(allCss, Prism.languages.css));
        $(".resume").css("whiteSpace", "normal");
        resolve();
      }
    });
  }

  //调整简历
  function adjustResume() {
    let precode = codeJS_css;
    return new Promise(resolve => {
      writeCode(codeJS_marked, $code, precode).then(() => {
        $(".resume").scrollTop(0);
        //调整右边简历的结构
        $(".resume").html(marked(codeJS_resume));
        //插入新DOM
        addDom();
        //写入简历的样式代码
        writeCode(codeJS_cssResume, $code, codeJS_css + codeJS_marked).then(
          () => {
            $(".resume").css("whiteSpace", "normal"); //去除大间隙
            $skip_anime.remove();
            addHeadImg();
            writeCode(
              codeJS_img,
              $code,
              codeJS_css + codeJS_marked + codeJS_cssResume
            ).then(resolve);
          }
        );
        //上面的写入代码是异步的，下面做快速动画
        skipAnime(resolve);
      });
    });
  }

  //插入新DOM到简历上
  function addDom() {
    $(".resume").prepend(
      '<div class="introduce"></div>',
      '<div class="skill"></div>',
      '<div class="exprience"></div>'
    );
    $(".introduce").append($("h1"), $("p"));
    $(".skill").append($("h2:contains('专业技能')"), $("ul").eq(0));
    $(".exprience").append($("h2:contains('项目经验')"));
    for (let i = 0; i < $("h3").length; ++i) {
      $(".exprience").append($("h3").eq(i), $("ul").eq(i + 1));
    }
  }

  //写css的函数
  function writeCode(code, selector, precode) {
    return new Promise((resolve, reject) => {
      let num = 0;
      let _content = "";
      //为什么用setTimeout？ => 因为调整速度时，必须要重新进入一次定时器，才会以不同的速度运行
      timer = setTimeout(write, duration);
      function write() {
        //利用STOP作为标志，只有当其为false的时候，才++num并写东西
        if (!STOP) {
          num++;
          _content = precode + code.substring(0, num);

          $("#styleTag").html(_content);
          selector.html(
            //Prism的css高亮函数，利用span标签，给code 的样式名加上标签并弄上颜色
            Prism.highlight(_content, Prism.languages.css)
          );
          selector.scrollTop(selector[0].scrollHeight);
        }

        if (num >= code.length) {
          clearTimeout(timer);
          resolve();
        } else {
          clearTimeout(timer);
          timer = setTimeout(write, duration);
        }
      }
    });
  }

  //写简历的函数
  function writeResumeCode(code, selector) {
    let OVER = false;
    //开启简历，过800毫秒后，添加跳过按钮
    if ($skip_resume.css("display") == "none") {
      setTimeout(() => {
        $skip_resume.css("display", "inline-block");
      }, 800);
    }
    //跳过按钮点击监听
    $skip_resume.on("click", function() {
      if (STOP) {
        alert("要跳过动画，请别暂停~");
      } else {
        OVER = true;
        $skip_resume.remove();
      }
    });
    return new Promise((resolve, reject) => {
      let num = 0;
      let _content = "";
      resumeTimer = setTimeout(write, duration);

      //循环写简历的函数
      function write() {
        if (!STOP) {
          num++;
          if (OVER == true) {
            num = code.length;
          }
          _content = code.substring(0, num);
          selector.html(_content);
          selector.scrollTop(selector[0].scrollHeight);
        }

        if (num >= code.length) {
          clearTimeout(resumeTimer);
          $skip_resume.remove(); //在没有跳过的情况下，这里移除跳过按钮
          resolve();
        } else {
          clearTimeout(resumeTimer);
          resumeTimer = setTimeout(write, duration);
        }
      }
    });
  }

  //=================================================================================================================

  //改变速度
  function speedChange(ch) {
    switch (ch) {
      case "🏃":
        $speedStatus.html("🚗");
        $speedText.html("还想再快，继续点~");
        duration = 10;
        break;
      case "🚗":
        $speedStatus.html("🚀");
        $speedText.html("极限！！！！！！");
        duration = 0;
        break;
      case "🚀":
        $speedStatus.html("🏃");
        $speedText.html("龟速运行中~点击加速");
        duration = 50;
        break;
      default:
        break;
    }
  }

  //按钮暂停/开始
  $("#btn").on("click", function() {
    if ($(this).hasClass("stop")) {
      $(this).text("开始");
      STOP = true;
    } else {
      $(this).text("暂停");
      STOP = false;
    }
    $(this).toggleClass("stop");
  });

  //添加头像
  function addHeadImg() {
    $img = $("<img>");
    $(".introduce").append($img);
    $img.attr("src", IMG);
    $img.attr("class", "avatar");
  }

  //打印
  function printResume() {
    $(".resume_code pre").css("height", "85%");
    $("#printResume").css("display", "inline-block");
    setTimeout(() => {
      let num = $("#printResume").css("height");
      console.log($("#printResume").css("height"));
      $("#printResume").css("line-height", num);
      $code.scrollTop(3000);
    }, 300);
  }
});
