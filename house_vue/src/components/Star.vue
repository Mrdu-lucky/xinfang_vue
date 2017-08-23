<template>
    <div>
      <div id="stars" class=""></div>
      <div id="stars2" class=""></div>
      <div id="stars3" class=""></div>
    </div>
</template>
<script>
    export default {
        props: [],
        data() {
            return {}
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>
<style scoped>
  #stars {
    background: 0 0;
    -webkit-animation: animStar 50s linear infinite;
    animation: animStar 50s linear infinite
  }

  #stars:after {
    background: 0 0
  }

  #stars2 {
    background: 0 0;
    -webkit-animation: animStar 100s linear infinite;
    animation: animStar 100s linear infinite
  }

  #stars2:after {
    background: 0 0
  }

  #stars3 {
    -webkit-animation: animStar 150s linear infinite;
    animation: animStar 150s linear infinite
  }

  .pause-animation {
    -webkit-animation-play-state: paused!important;
    animation-play-state: paused!important
  }

  @-webkit-keyframes animStar {
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0)
    }
    to {
      -webkit-transform: translate3d(0, -2000px, 0);
      transform: translate3d(0, -2000px, 0)
    }
  }

  @keyframes animStar {
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0)
    }
    to {
      -webkit-transform: translate3d(0, -2000px, 0);
      transform: translate3d(0, -2000px, 0)
    }
  }

  #stars,
  #stars:after {
    width: 1px;
    height: 1px;
    box-shadow: 867px 1537px #fdd35a, 477px 122px #fdd35a, 77px 1846px #fdd35a, 497px 1961px #fdd35a, 1505px 1411px #fdd35a, 656px 1620px #fdd35a, 1472px 288px #fdd35a, 1564px 1814px #fdd35a, 1890px 663px #fdd35a, 1516px 301px #fdd35a, 674px 1833px #fdd35a, 864px 706px #fdd35a, 1533px 525px #fdd35a, 491px 1069px #fdd35a, 451px 657px #fdd35a, 1661px 1977px #fdd35a, 996px 1757px #fdd35a, 1859px 375px #fdd35a, 1168px 734px #fdd35a, 63px 803px #fdd35a, 123px 778px #fdd35a, 212px 354px #fdd35a, 1037px 1625px #fdd35a, 582px 1444px #fdd35a, 1702px 83px #fdd35a, 1305px 734px #fdd35a, 1883px 992px #fdd35a, 1282px 1012px #fdd35a, 595px 144px #fdd35a, 714px 1695px #fdd35a, 470px 1795px #fdd35a, 929px 1200px #fdd35a, 47px 946px #fdd35a, 322px 327px #fdd35a, 948px 411px #fdd35a, 1808px 1259px #fdd35a, 543px 917px #fdd35a, 883px 1381px #fdd35a, 16px 1459px #fdd35a, 1927px 1904px #fdd35a, 1750px 155px #fdd35a, 907px 392px #fdd35a, 2000px 382px #fdd35a, 1933px 1186px #fdd35a, 612px 1259px #fdd35a, 1446px 197px #fdd35a, 600px 228px #fdd35a, 23px 1643px #fdd35a, 647px 1872px #fdd35a, 496px 530px #fdd35a, 1755px 880px #fdd35a, 1726px 595px #fdd35a, 828px 639px #fdd35a, 1590px 638px #fdd35a, 1995px 542px #fdd35a, 1720px 1370px #fdd35a, 1087px 1152px #fdd35a, 1259px 1597px #fdd35a, 598px 1063px #fdd35a, 1537px 665px #fdd35a, 192px 1340px #fdd35a, 495px 1567px #fdd35a, 605px 60px #fdd35a, 883px 1544px #fdd35a, 41px 1474px #fdd35a, 421px 1418px #fdd35a, 1945px 517px #fdd35a, 1547px 1873px #fdd35a, 709px 1368px #fdd35a, 796px 1429px #fdd35a, 1203px 603px #fdd35a, 1425px 1043px #fdd35a, 1043px 532px #fdd35a, 532px 871px #fdd35a, 1618px 1385px #fdd35a, 1805px 1729px #fdd35a, 186px 1189px #fdd35a, 1158px 1364px #fdd35a, 247px 1329px #fdd35a, 1488px 516px #fdd35a, 1863px 720px #fdd35a, 1299px 1714px #fdd35a, 1617px 1708px #fdd35a, 1357px 1729px #fdd35a, 1601px 744px #fdd35a, 1447px 736px #fdd35a, 1088px 77px #fdd35a, 1069px 1800px #fdd35a, 1212px 1205px #fdd35a, 1018px 1143px #fdd35a, 1265px 1923px #fdd35a, 394px 632px #fdd35a, 1879px 1694px #fdd35a, 734px 1999px #fdd35a, 424px 1965px #fdd35a, 1323px 1685px #fdd35a, 286px 80px #fdd35a, 383px 538px #fdd35a, 189px 251px #fdd35a, 1689px 256px #fdd35a, 1330px 1655px #fdd35a, 1000px 348px #fdd35a, 408px 1294px #fdd35a
  }

  #stars2,
  #stars2:after {
    width: 2px;
    height: 2px;
    box-shadow: 780px 1322px #fdd35a, 562px 101px #fdd35a, 1113px 1151px #fdd35a, 422px 852px #fdd35a, 1744px 80px #fdd35a, 713px 570px #fdd35a, 1829px 1217px #fdd35a, 764px 998px #fdd35a, 1239px 1138px #fdd35a, 313px 1628px #fdd35a, 1450px 1975px #fdd35a, 750px 1221px #fdd35a, 1627px 18px #fdd35a, 1916px 1784px #fdd35a, 193px 213px #fdd35a, 1523px 1271px #fdd35a, 959px 804px #fdd35a, 1907px 880px #fdd35a, 1637px 1905px #fdd35a, 418px 622px #fdd35a, 1673px 1064px #fdd35a, 1559px 1202px #fdd35a, 999px 356px #fdd35a, 1244px 951px #fdd35a, 1681px 929px #fdd35a, 1185px 1026px #fdd35a, 1491px 1596px #fdd35a, 1631px 540px #fdd35a, 673px 1015px #fdd35a, 311px 772px #fdd35a, 1998px 1620px #fdd35a, 961px 1406px #fdd35a, 848px 497px #fdd35a, 1882px 1882px #fdd35a, 1251px 811px #fdd35a, 1430px 758px #fdd35a, 1856px 1212px #fdd35a, 1924px 1644px #fdd35a, 1963px 543px #fdd35a, 1588px 1085px #fdd35a, 48px 702px #fdd35a, 947px 1040px #fdd35a, 577px 570px #fdd35a, 1808px 1401px #fdd35a, 945px 1040px #fdd35a, 933px 280px #fdd35a, 38px 1130px #fdd35a, 109px 1610px #fdd35a, 1043px 555px #fdd35a, 1346px 1098px #fdd35a, 1329px 651px #fdd35a, 68px 1033px #fdd35a, 311px 1187px #fdd35a, 1958px 263px #fdd35a
  }

  #stars2:after,
  #stars3:after,
  #stars:after {
    content: "";
    top: 100vh;
    position: absolute
  }

  #stars3,
  #stars3:after {
    width: 3px;
    height: 3px;
    background: 0 0;
    box-shadow: 466px 1377px #fdd35a, 1223px 744px #fdd35a, 1710px 1997px #fdd35a, 883px 291px #fdd35a, 1070px 250px #fdd35a, 1745px 1424px #fdd35a, 1228px 815px #fdd35a, 363px 1431px #fdd35a, 1125px 1530px #fdd35a, 1148px 349px #fdd35a, 298px 392px #fdd35a, 1009px 422px #fdd35a, 3px 992px #fdd35a, 787px 962px #fdd35a, 619px 104px #fdd35a, 1033px 205px #fdd35a, 1499px 1517px #fdd35a, 81px 616px #fdd35a, 928px 1760px #fdd35a, 416px 821px #fdd35a, 1171px 1830px #fdd35a, 1930px 1013px #fdd35a, 1961px 1969px #fdd35a
  }

  #stars,
  #stars2,
  #stars3 {
    position: fixed;
  }
</style>
