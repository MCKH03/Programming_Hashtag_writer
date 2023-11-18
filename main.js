"use strict";

const form = document.querySelector(".form");
const input = document.querySelector(".input");
const body = document.querySelector("body");
const message = document.querySelector(".success");

const hashtags =
  "#توسعه_وب #برنامه_نویسی #چالش_کد #توسعه_جلوی_صفحه #توسعه_عقب_صفحه #کدنویسی #توسعه_نرم_افزار #طراحی_کاربری #یادگیری_ماشین #توسعه_بازی #جاوااسکریپت #اچ_تی_ام_ال #سی_شارپ #سی_پلاس_پلاس #واقعیت_مجازی #هوش_مصنوعی #ممز_برنامه_نویسی #زندگی_برنامه_نویسان #عادات_برنامه_نویسان #UI #UX #زبانهای_برنامه_نویسی #جاوااسکریپت #اچ_تی_ام_ال #سی_شارپ #سی_پلاس_پلاس #پایتون #جاوا #ریکت #آندروید #گیم_دووپ #برنامه_نویسی_وب #فرانت_اند_دولوپر #بک_اند_دولوپر #برنامه_نویس_وب #کدنویس #طراحی_وب #طراحی_کاربری #توسعه_وب_ایران #توسعه_نرم_افزار_ایران #برنامه_نویس_ایران #زبان_برنامه_نویسی #آموزش_برنامه_نویسی #بازی_سازی #توسعه_بازی_ایران #توسعه_بازی_ویدیویی #بازی_الکترونیکی #آموزش_بازی_سازی #هوش_مصنوعی #یادگیری_عمیق #شبکه_عصبی #الگوریتم #هوش_مصنوعی_ایران #آموزش_هوش_مصنوعی #برنامه_نویسی_هوش_مصنوعی #ممز_برنامه_نویسی #هکر #عصر_ممز #ممز_هکر #میم_برنامه_نویسی #میم_کامپیوتری #میم_برنامه_نویسان";

const arrHashtags = hashtags.split(" ");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const hashNum = +input.value;
  const selectedHashtagsArr = [];

  if (hashNum === 0 || hashNum >= arrHashtags.length) {
    input.value = "";
    return;
  }
  for (let i = 0; i < hashNum; i++) {
    selectedHashtagsArr.push(arrHashtags[randomNumGenerator(arrHashtags)]);
  }

  const selectedHashtags = selectedHashtagsArr.join(" ");

  const resultBox = document.querySelector(".result-box");
  if (resultBox) {
    resultBox.innerHTML = `
    <p class="result">${selectedHashtags}</p>
    <button class="btn btn-copy">Copy hashtags</button>
    `;

    return;
  }

  const html = `
   <div class="result-box">
      <p class="result">${selectedHashtags}</p>
      <button class="btn btn-copy">Copy hashtags</button>
    </div>
  `;
  body.insertAdjacentHTML("beforeend", html);

  document.querySelector(".btn-copy").addEventListener("click", function (e) {
    navigator.clipboard.writeText(selectedHashtags);
    message.classList.toggle("closed");

    setTimeout(() => {
      message.classList.toggle("closed");
    }, 1000);
  });
});

function randomNumGenerator(arr) {
  const random = Math.floor(Math.random() * arr.length);
  return random;
}
