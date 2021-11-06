import React from "react";
import "../styles/about.css";
import History from "../assets/history.jpg";

function about() {
  return (
    <div className="about">
      <div
        className="aboutbackground"
        style={{ backgroundImage: `url(${History})` }}
      ></div>
      <div className="aboutwords">
        <h1> 關於我們 </h1>
        <p>
          Pizza Hut 國際品牌故事<br/>
          <p>&nbsp;</p>
          每間成功企業背後總有一個有趣故事，全球最大及最成功的薄餅連鎖餐廳 Pizza
          Hut 當然也不例外。<br/>
          這一切始源自 1958
          年，當時在美國堪薩斯州威奇塔市的兩位大學生兄弟，與家族友人商量後，
          萌起在住所附近開設一家薄餅店的念頭。雖然薄餅對當時大部份的美國人來說是較新的餐飲文化，
          但是這對兄弟深信這門生意具發展潛力，因此決定一試。他們向母親借了 $600
          美元作為創業本金，
          然後在市內繁忙地段租了一幢細小的店舖，開始在那裡售賣薄餅。他們萬萬也想不到，Pizza
          Hut 會 在半個世紀後成為一個以薄餅、意粉及各款美食而享譽國際的品牌。
          <br/>
          <p>&nbsp;</p>
          Pizza Hut 的名字由來純粹是巧合。由於餐廳外的招牌只足夠排列 9
          個位的英文字母， 而兩兄弟又想在名稱中包含 Pizza
          一字，所以最終決定將餘下的 3 個空位填上 Hut ， 以配合這第一間 Pizza
          Hut 薄餅店舖的外觀。<br/>
          <p>&nbsp;</p>
          Pizza Hut 是百勝全球餐飲集團 (YUM! Brands Inc.)
          旗下餐廳品牌，至今全美設有逾 6,000 間分店，並在全球 94 個國家設有逾
          5,600 間分店。<br/>
          <p>&nbsp;</p>
          <p>
            請按
            <a href="https://www.yum.com">
              <span>https://www.yum.com</span>
            </a>{" "}
            了解更多百勝全球餐飲集團相關資訊 。
          </p>
        </p>
      </div>
      <div className="aboutwords">
        <h1> About Us </h1>
          <p>Pizza Hut Worldwide Story</p><br/>
          <p>Just like any other successful enterprise, there’s always an
          interesting story to tell for each. Pizza Hut - the largest and the
          most successful pizza restaurant chain in the world - certainly has
          one of its own. <br/><p>&nbsp;</p>

          <p>In short, in 1958, two college students from Wichita,
          Kansas, were approached by a family friend about opening a pizza
          parlor in their neighborhood. Running a pizza business back then was
          still relatively fresh in America, but the two brothers saw the
          potential and decided to give it a try. So they borrowed US$600 from
          their mother as a start-up capital. They then rented a small building
          located in a busy district and started selling pizzas. But little did
          they know Pizza Hut would become a world-known brand for pizzas, pasta
          and many gourmet delights after half a century later.</p><br/>

          <p>How the name Pizza Hut came about was nothing more than a coincidence. 
          As the length of the restaurant signboard was good for 9 characters only
          , and the two brothers wanted to use “Pizza” in the name, so they decided to
          fill up the 3 letters room with “Hut” to tie in with the looks of the
          building where their first “Pizza Hut” was established.</p><br/>

          <p>Pizza Hut, a subsidiary of Yum! Brands Inc., has more than 6,000 outlets across the
          United States and over 5,600 outlets in 94 countries around the globe
          today.</p><br/>
          <p>
          For more information on Yum Brands, click on: 
            <a href="https://www.yum.com">
              <span>https://www.yum.com</span>
            </a>
          </p>{" "}
        </p>
      </div>
    </div>
  );
}

export default about;
