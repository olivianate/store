<template>
    <header class="ui-header">
        <i class="ui-icon-return" onclick="history.back()"></i>
        <h1>物流查询</h1>
    </header>
    <section class="ui-container logistical">
        <ul class="ui-tab-nav ui-border-b ui-tab-fixed">
            <li class="current">包裹1</li>
            <li class="">包裹2</li>
        </ul>
        <ul class="ui-list ui-list-item">
            <li class="ui-border-t">
                <div class="ui-list-img">
                    <span style="background-color:#ccc"></span>
                </div>
                <div class="ui-list-info">
                    <p class="ui-nowrap">物流状态：<a>正在派送</a></p>
                    <p class="ui-nowrap">承运公司：中通快递</p>
                    <p class="ui-nowrap">运单号码：201248799625</p>
                </div>
            </li>
        </ul>
        <div class="track-rcol">
            <h5>物流跟踪</h5>
            <div class="track-list">
                <ul>
                    <li class="first">
                        <i class="node-icon"></i>
                        <div class="listl">
                            <span class="txt">已派送至速递易，请凭提取码前往速递易提取包裹，欢迎下次使用。</span>
                            <span class="time">2016-03-10 18:07:15</span>
                        </div>
                        
                    </li>
                    <li>
                        <i class="node-icon"></i>
                        <div class="listl">
                            <span class="txt">【杭州市】滨江长河公司派件员， 某某13587456985 正在派件</span>
                            <span class="time">2016-03-10 18:07:15</span>
                        </div>
                    </li>
                    <li>
                        <i class="node-icon"></i>
                        <div class="listl">
                            <span class="txt">【杭州市】滨江长河公司已收入</span>
                            <span class="time">2016-03-10 18:07:15</span>
                        </div>
                    </li>
                    <li>
                        <i class="node-icon"></i>
                        <div class="listl">
                            <span class="txt">【宁波市】快件已到达宁波江东分部</span>
                            <span class="time">2016-03-10 18:07:15</span>
                        </div>
                    </li>
                    <li>
                        <i class="node-icon"></i>
                        <div class="listl">
                            <span class="txt">【宁波市】快件已到达宁波江东分部</span>
                            <span class="time">2016-03-10 18:07:15</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        data () {
            return {
            };
        },
        ready () {
        },
        methods :{
        }
    };
</script>
