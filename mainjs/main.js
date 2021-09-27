for (i = 1920; i <= 2020; i++) {
  document.getElementById("sYear").innerHTML += "<option>" + i + "</option>";
}

for (i = 1; i <= 31; i++) {
  document.getElementById("sDay").innerHTML += "<option>" + i + "</option>";
}

var toDay = new Date();
var d = toDay.getDate();
var m = toDay.getMonth() + 1;
var y = toDay.getFullYear();
//
var str = toDay.toLocaleDateString("en", { month: "numeric" });
console.log(str);
//
var mAr = [];
for (x = 0; x < 12; x++) {
  var myD = new Date(2020, x);
  var str = myD.toLocaleDateString("ar", { month: "numeric" });
  mAr.push(str);
}
for (i = 0; i < mAr.length; i++) {
  console.log(mAr[i]);
  document.getElementById("sMonth").innerHTML +=
    "<option>" + mAr[i] + "</option>";
}

function calcu() {
  var pYear = document.getElementById("sYear").value,
    pMonth = document.getElementById("sMonth").value,
    pDay = document.getElementById("sDay").value;

  var r1 = y - pYear,
    r2 = m - pMonth,
    r3 = d - pDay;

  window.rYear.innerHTML = r1;
  window.rMonth.innerHTML = r2;
  window.rDay.innerHTML = r3;

  //-------------month-----------------//

  if (r2 <= 0) {
    r1 = r1 - 1;
    var rtow = 12 + r2;
    window.rMonth.innerHTML = rtow;
    window.rYear.innerHTML = r1;
  }
  //--------------day------------------//
  var rThree = 30;
  if (r3 <= 0) {
    rtow = r2 - 1;
    rThree + r3;
    window.rDay.innerHTML = rThree;
    window.rMonth.innerHTML = rtow;
  }

  if ((pMonth == "12" && pDay >= "22") || (pMonth == "1" && pDay <= "19")) {
    window.h.innerHTML = "برج الجدي";
    window.p.innerHTML =
      "عمليّ، وعقلانيّ، وصاحب روح مرحة، يتّسم بالصبر، ومنظّم على الصّعيد الاجتماعيّ، وبطيء في علاقاته الاجتماعيّة.";
  } else if (
    (pMonth == "1" && pDay >= "20") ||
    (pMonth == "2" && pDay <= "18")
  ) {
    window.h.innerHTML = "برج الدّلو";
    window.p.innerHTML =
      "ودود، ومبتكر، وصادق، ويتميّز بالأصالة والمثاليّة، وهو عاشق وميّال للمرح، وفي العاطفة يحاول أن يقدّم الكثير لإرضاء شريكه ممّا يجعل شخصيته جذّابة.";
  } else if (
    (pMonth === "2" && pDay >= "19") ||
    (pMonth === "3" && pDay <= "20")
  ) {
    window.h.innerHTML = "برج الحوت";
    window.p.innerHTML =
      "حسّاس وعاطفيّ، لا تهمّه ماديّات الحياة، كما أنّه غير أنانيّ، وفي العاطفة يحتاج بأن يشعر بأن الآخرين بحاجة له.";
  } else if (
    (pMonth === "3" && pDay >= "21") ||
    (pMonth === "4" && pDay <= "19")
  ) {
    window.h.innerHTML = "برج الحمل";
    window.p.innerHTML =
      "السّرعة في البديهة، والثّقة العالية بالنّفس، والشّجاعة، وحبّ المغامرة، ومن النّاحية العاطفية فهم أشخاص ذوو حماس واندفاع في الحبّ، ويسعون دوماً إلى الاستقرار والتّميز في الحبّ.";
  } else if (
    (pMonth === "4" && pDay >= "20") ||
    (pMonth === "5" && pDay <= "20")
  ) {
    window.h.innerHTML = "برج الثور";
    window.p.innerHTML =
      "الإصرار والعزيمة، ويُعتمد عليه كثيراً، وعاطفيّ من الدّرجة الأولى، ومخلص كثيراً، ويفضّل أيضاً العلاقات طويلة المدى";
  } else if (
    (pMonth === "5" && pDay >= "21") ||
    (pMonth === "6" && pDay <= "20")
  ) {
    window.h.innerHTML = "برج الجوزاء";
    window.p.innerHTML =
      "ذكيّ، وموهوب، واجتماعي، ومغامر، ولديه رغبة في مناقشة التّفاصيل الحياتيّة، وصبور.";
  } else if (
    (pMonth === "6" && pDay >= "21") ||
    (pMonth === "7" && pDay <= "22")
  ) {
    window.h.innerHTML = "برج السرطان";
    window.p.innerHTML =
      "يتسم بالخيال الواسع، كما أنّه عاطفيّ، ويضع البيت والأسرة في سلّم أولويّاته، كما أنّه حسّاس كثيراً في حال تمّ تجاهله، وغالباً ما يترك مشاكله الخاصّة ليساعد الآخرين على حلّ مشاكلهم، واجتماعي.";
  } else if (
    (pMonth === "7" && pDay >= "23") ||
    (pMonth === "8" && pDay <= "22")
  ) {
    window.h.innerHTML = "برج الاسد";
    window.p.innerHTML =
      "الإبداع، والكرم، وسعة العقل، كما أنه مليء بالدفء والتّفاؤل، ولا يخاف، وذو طاقة كبيرة في الإنجاز.";
  } else if (
    (pMonth === "8" && pDay >= "23") ||
    (pMonth === "9" && pDay <= "22")
  ) {
    window.h.innerHTML = "برج العذراء";
    window.p.innerHTML =
      "عمليّ، ومجتهد، وذكيّ، ومتواضع، وخجول، ويمكن الاعتماد عليه، ويتكيّف بسهولة، ويحب الاستقرار والتّنظيم في حياته.";
  } else if (
    (pMonth === "9" && pDay >= "23") ||
    (pMonth === "10" && pDay <= "23")
  ) {
    window.h.innerHTML = "برج الميزان";
    window.p.innerHTML =
      "رومانسيّ، وساحر، ودبلوماسيّ في التّعامل، ومؤدّب، وله مبادئ ومسلمات وهي البيت والزّواج، كما أنه محبوب.";
  } else if (
    (pMonth === "10" && pDay >= "24") ||
    (pMonth === "11" && pDay <= "21")
  ) {
    window.h.innerHTML = "برج العقرب";
    window.p.innerHTML =
      "العاطفيّة، والقوّة، والإثارة، وله شخصيّة جذّابة، وذو عزيمة، ويكتم الأسرار.";
  } else if (
    (pMonth === "11" && pDay >= "22") ||
    (pMonth === "12" && pDay <= "21")
  ) {
    window.h.innerHTML = "برج القوس";
    window.p.innerHTML =
      "فيه روح المرح الجميلة، والتّفاؤل، وحبّ الحرية، والمرح، والصّدق، والذّكاء من بين كل الأبراج، ولا يخاف من خوض المغامرات.";
  }

  if (r1 >= 20 && r1 <= 25) {
    window.tall.innerHTML = " 163 ";
    window.weigh.innerHTML = "70 ";
  }
}
