<template>
  <div class="copyright-container">
    <div class="copyright-box">
      <div class="w">
        <div class="links">
          <ul>
            <li>
              <dl>
                <dt>关于我们</dt>
                <dd>了解我们</dd>
                <dd>加入我们</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>联系我们</dt>
                <dd>新浪微博</dd>
                <dd>官方微信</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>服务支持</dt>
                <dd>自助服务</dd>
                <dd>售后政策</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>商家入驻</dt>
                <dd>合作热线</dd>
                <dd>投资者关系</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>线下门店</dt>
                <dd>凤航之家</dd>
                <dd>服务网点</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>特色服务</dt>
                <dd>礼物码</dd>
                <dd>防伪查询</dd>
              </dl>
            </li>
          </ul>
        </div>
        <div class="right-box">
          <span class="phone-number">400-100-1672</span><br>
          <span>8:00-22:00(仅收市话费)</span><br>
          <button class="phone-btu"><span class="icon iconfont">&#xea8e;</span>人工客服</button><br>
          <span>关注凤航：<span class="icon iconfont">&#xea96;</span><span class="icon iconfont">&#xeaad;</span><span class="icon iconfont">&#xeaba;</span></span>
        </div>
        <div class="buttom-box">地址：莆田学院 邮编：350001 电话：123456 传真：789456 邮箱: nihaoxian.com 闽ICP备08001421号 闽公网安备110108007702</div>
      </div>
    </div>
  </div>
</template>

<script>
// import '../../assets/image/icomoom/style'
export default {
}
</script>

<style lang="less">
.copyright-box {
  font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, '\5B8B\4F53', sans-serif;
  background: linear-gradient(180deg, rgb(255, 255, 255), #ffffff);
  color: black;
  width: 100vw;
  min-width: 504px;
  .w {
    position: relative;
    height: 200px;
    width: 113vh;
    margin: 0 auto;
    padding-top: 40px;
    background: linear-gradient(180deg, rgb(255, 255, 255), #ffffff);
    .links {
      position: absolute;
      display: inline-block;
      height: 120px;
      line-height: 20px;
      left: 0;;
      ul {
        li{
          float: left;
          padding-right: 8vh;
          dl{
            text-align: left;
            dt{
              font-size: 14px;
              padding-bottom: 2vh;
            }
            dd{
              padding-bottom: .5vh;
            }
          }
        }
      }
    }
    .right-box {
      position: absolute;
      display: inline-block;
      margin: 0 auto;
      height: 10vh;
      width: 25vh;
      padding:0 5vh 0 3vh;
      border-left: 1px solid #000;
      right: 0;
      text-align: center;
      font-family: 'iconfont' !important;
      .phone-number {
        color: #ffa500;
        font-size: 22px;
      }
      .phone-btu {
        color: #ffa500;
        background:rgba(0,0,0,0);
        font-family: 'iconfont' !important;
      }
    }
    .buttom-box {
      position: absolute;
      display: inline-block;
      height: 20px;
      width: 115vh;
      bottom: 0;
    }
  }
}
</style>
