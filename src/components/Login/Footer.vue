<template>
  <div class="copyright-container">
    <div class="copyright-box w">
      <div class="links">
        <ul>
          <li>
            <dl>
              <dt>关于我们</dt>
              <dd><router-link to="">了解我们</router-link></dd>
              <dd><router-link to="">加入我们</router-link></dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>联系我们</dt>
              <dd><router-link to="">新浪微博</router-link></dd>
              <dd><router-link to="">官方微信</router-link></dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>服务支持</dt>
              <dd><router-link to="">自助服务</router-link></dd>
              <dd><router-link to="">售后政策</router-link></dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>商家入驻</dt>
              <dd><router-link to="">合作热线</router-link></dd>
              <dd><router-link to="">投资者关系</router-link></dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>线下门店</dt>
              <dd><router-link to="">凤航之家</router-link></dd>
              <dd><router-link to="">服务网点</router-link></dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>特色服务</dt>
              <dd><router-link to="">礼物码</router-link></dd>
              <dd><router-link to="">防伪查询</router-link></dd>
            </dl>
          </li>
        </ul>
      </div>
      <div class="right-box">
        <span class="phone-number">820-8823</span><br />
        <span>8:00-22:00(仅收市话费)</span><br />
        <button class="phone-btu">
          <span class="icon iconfont icon-weixin"></span>人工客服</button
        ><br />
        <span class="follow"
          >关注凤航：<span class="icon iconfont icon-xinlangweibo"></span
          ><span class="icon iconfont icon-douyin"></span
        ></span>
      </div>
      <div class="buttom-box">
        地址：莆田学院 邮编：350001 电话：123456 传真：789456 邮箱:
        nihaoxian.com 闽ICP备08001421号 闽公网安备110108007702
      </div>
    </div>
  </div>
</template>

<script>
// import '../../assets/image/icomoom/style'
export default {};
</script>

<style lang="less" scoped>
.copyright-container {
   font: 12px/1.5 Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, '\5B8B\4F53', sans-serif;
  background: linear-gradient(180deg, rgb(255, 255, 255), #ffffff);
  color: #757575;
  min-width: 1170px;
    .copyright-box {
      position: relative;
      height: 200px;
      min-width: 1170px;
      margin: 0 auto;
      padding-top: 40px;
      background: linear-gradient(180deg, rgb(255, 255, 255), #ffffff);
      .links {
        position: absolute;
        display: inline-block;
        height: 120px;
        line-height: 20px;
        left: 0;
        ul {
          li {
            float: left;
            padding-right: 80px;
            dl {
              text-align: left;
              dt {
                font-size: 14px;
                padding-bottom: 2rem;
              }
              dd {
                padding-bottom: 0.5rem;
                a {
                  color: #757575;
                  &:hover {
                    color: #ffa500;
                  }
                }
              }
            }
          }
        }
      }
      .right-box {
        position: absolute;
        display: inline-block;
        margin: 0 auto;
        height: 150px;
        width: 200px;
        padding: 0 46px;
        border-left: 1px solid #000;
        right: 0;
        text-align: center;
        .phone-number {
          color: #ffa500;
          font-size: 22px;
        }
        .phone-btu {
          color: #ffa500;
          background: rgba(0, 0, 0, 0);
          border: 1px solid #ffa500;
          padding: 0.3rem 2rem;
          transition: all 0.5s ease;
          cursor: pointer;
          &:hover {
            background-color: #ffa500;
            color: #fff;
            transition: all 0.5s ease;
          }
        }
        .follow {
          display: inline-block;
          margin-top: 1rem;
          span {
            cursor: pointer;
            margin-right: 0.5rem;
            &:first-child {
              margin-left: 0.4rem;
            }
            &:hover {
              color: #ffa500;
            }
          }
        }
      }
      .buttom-box {
        position: absolute;
        height: 20px;
        width: 100%;
        text-align: center;
        bottom: 0;
      }
    }
  }
</style>
