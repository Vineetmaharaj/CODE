var i = 0;
var txt1 =
  "Hi Buggu MY besto FrnDO.....!  <<               Now I want to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < You seems something Special to me.  <<                  As the days goes < we get closer to eachOthers....! <<    WE become besties we enjoy , we talk more, we care, we proities each others , you are the bestest bestie one could ever have ...!             <<  but things getting diffrent lately,life not be the same all the time  you are not liking me anymore,its not taunt, anyone can notice that so do i . whatever i do you r not understanding anymore ...!                <<         you dont like a single thing about me anymore, but thats oky  ...!                     << i always count you as my one and only besttest friend no matter what happend , we split, i always consider you as my bff...!                                    <<<       hehe i know these things didnt matter or surprise u anymore, i still rember that first day when i sent you something like that. you just send me tons of texts voice notes cute texts....!                >>never settle for low princess(love emoji),cuz thats not who you are. my bestu is literally a princess i wish you can see your self with my eyes, And your cuteness ohh god you r the cutest person I ve ever met bestu....!                    << And let's not forget that adorable mole on your face, which is like a little beauty mark that adds to your  unique charm , litrelly i love that mole buggu....!                             >thats all bestu , this message is getting too long , i can lite. write a whole book on you , and i will in future...!                                >I Love U <BUGGU.....! PRINCESS of THIS EARTH               <  ...!   by vinny";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
