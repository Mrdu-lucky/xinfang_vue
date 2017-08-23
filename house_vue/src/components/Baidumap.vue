<template>
  <div class="baidumapdiv">
    <div id="container"></div>
    <ul class="btnList">
      <li class="btn0">公交</li>
      <li class="btn1">地铁</li>
      <li class="btn2">医院</li>
      <li class="btn3">银行</li>
      <li class="btn4">商场</li>
      <li class="btn5">学校</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {
      centerpoint: {
        default: "116.316577,40.045025"
      },
      centername: {
        default: "星河新房"
      },
      zoom: {
        type: Object,
        default() {
          return {
            minZoom: 13,
            maxZoom: 20,
            nowZoom: 16
          }
        }
      }
    },
    mounted() {
      this.showmap()
    }
    ,
    methods: {
      showmap() {
        //地图
        let map = new BMap.Map("container", {
          minZoom: this.zoom.minZoom,
          maxZoom: this.zoom.maxZoom
        });
        let mapArr = this.centerpoint.split(",");
        let point = new BMap.Point(mapArr[0], mapArr[1]);
        let buildName = this.centername;
        let myIcon = new BMap.Icon(require("../assets/images/aboutus/aboutUs-logo.png"), new BMap.Size(60, 68));
        let myIcon1 = new BMap.Icon(require("../assets/images/mappic/1.png"), new BMap.Size(20, 40));
        let myIcon2 = new BMap.Icon(require("../assets/images/mappic/2.png"), new BMap.Size(20, 40));
        let myIcon3 = new BMap.Icon(require("../assets/images/mappic/3.png"), new BMap.Size(20, 40));
        let myIcon4 = new BMap.Icon(require("../assets/images/mappic/4.png"), new BMap.Size(20, 40));
        let myIcon5 = new BMap.Icon(require("../assets/images/mappic/5.png"), new BMap.Size(20, 40));
        let myIcon6 = new BMap.Icon(require("../assets/images/mappic/6.png"), new BMap.Size(20, 40));
        let searchArr = [{
          icon: myIcon1,
          name: "公交"
        }, {
          icon: myIcon2,
          name: "地铁"
        }, {
          icon: myIcon3,
          name: "医院"
        }, {
          icon: myIcon4,
          name: "银行"
        }, {
          icon: myIcon5,
          name: "商场"
        }, {
          icon: myIcon6,
          name: "学校"
        }];
        map.centerAndZoom(point, this.zoom.nowZoom);
        map.enableScrollWheelZoom(true);
        let marker = new BMap.Marker(point, {
          icon: myIcon
        });
        let sContent = "<h4>" + buildName + "</h4></div>";
        let infoWindow = new BMap.InfoWindow(sContent); // 创建信息窗口对象
        map.addOverlay(marker);

        marker.addEventListener("click", function () {
          this.openInfoWindow(infoWindow);
        });

        function searchSthing(thing, icon, n) {
          let local = new BMap.LocalSearch(map, {
            pageCapacity: 10,
            renderOptions: {
              panel: "results",
            },
            onSearchComplete: function (results) {
              //console.log(results);
              // 随机向地图添加25个标注
              for (let i = 0; i < results.vr.length; i++) {
                let vr_i = results.vr[i];
                let point = new BMap.Point(vr_i.point.lng, vr_i.point.lat);
                let tags = "";
                if (vr_i.tags) {
                  for (let j = 0; j < vr_i.tags.length; j++) {
                    if (j != vr_i.tags.length - 1) {
                      tags += vr_i.tags[j] + "、";
                    } else {
                      tags += vr_i.tags[j];
                    }
                  }
                }
                let content = '<div>地址：' + vr_i.address + '<br/>电话：' + (vr_i.phoneNumber ? vr_i.phoneNumber : "暂无") + '<br/>标签：' + (tags == "" ? "暂无" : tags) + '</div>';
                //创建检索信息窗口对象
                let searchInfoWindow = null;
                searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
                  title: vr_i.title, //标题
                  width: 290, //宽度
                  height: 80, //高度
                  panel: "panel", //检索结果面板
                  enableAutoPan: true, //自动平移
                  searchTypes: [
                    //							BMAPLIB_TAB_SEARCH, //周边检索
                    BMAPLIB_TAB_TO_HERE, //到这里去
                    BMAPLIB_TAB_FROM_HERE //从这里出发
                  ]
                });

                addMarker(point, icon, searchInfoWindow, n);
              }
            }
          });
          if (thing != null && thing != "" && typeof(thing) != "undefined") {
            local.searchNearby(thing, point, 2000);
          }
        };

        function searchClick(index,btn) {
          if(btn.getAttribute("search")) {
            let marklist = map.getOverlays();

            if(btn.getAttribute("show") == 1) {
              btn.className=btn;
              for(let i = 0; i < marklist.length; i++) {
                if(marklist[i].z) {
                  if(marklist[i].z.title == "btn" + index) {
                    marklist[i].hide();
                    btn.setAttribute("show", 0);
                  };
                }
              }

            } else if(btn.getAttribute("show") == 0) {
              btn.className=btn+" ac";
              for(let i = 0; i < marklist.length; i++) {
                if(marklist[i].z) {
                  if(marklist[i].z.title == "btn" + index) {
                    marklist[i].show();
                    btn.setAttribute("show", 1);
                  };
                }
              }

            }

          } else {
            searchSthing(searchArr[index].name, searchArr[index].icon, "btn" + index);
            btn.setAttribute("search", true);
            btn.setAttribute("show", 1);
            btn.className=btn+" ac";
          }
        }
        // 编写自定义函数,创建标注
        function addMarker(point, icon, msg, n) {
          let marker = new BMap.Marker(point, {
            icon: icon,
            title: n
          });
          map.addOverlay(marker);
          marker.addEventListener("click", function (e) {
            msg.open(marker);
          })
        }

        let btn0=document.querySelector(".btn0");
        let btn1=document.querySelector(".btn1");
        let btn2=document.querySelector(".btn2");
        let btn3=document.querySelector(".btn3");
        let btn4=document.querySelector(".btn4");
        let btn5=document.querySelector(".btn5");
        btn0.addEventListener("click", function(){
          searchClick(0,btn0)
        });
        btn1.addEventListener("click", function(){
          searchClick(1,btn1)
        });
        btn2.addEventListener("click", function(){
          searchClick(2,btn2)
        });
        btn3.addEventListener("click", function(){
          searchClick(3,btn3)
        });
        btn4.addEventListener("click", function(){
          searchClick(4,btn4)
        });
        btn5.addEventListener("click", function(){
          searchClick(5,btn5)
        });
      }
    }
  }
</script>
<style scoped>

  .baidumapdiv {
    height: 90vh;
    position: relative;
  }

  #container {
    height: 100%;
  }

  .btnList {
    position: absolute;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  .btnList li {
    list-style: none;
    font-size: 15px;
    width: calc(100% / 6);
    text-align: center;
    line-height: 44px;
    cursor: pointer;
  }

  .btnList li.ac {
    background: #F9F9F9;
    color: #000;
    font-weight: bold;
  }

  div img {
    width: 100%;
  }
</style>
