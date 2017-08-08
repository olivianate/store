import index from '../views/index'
import cart from '../views/goods/cart'

import signinIndex from '../views/signin/index'
import signin from '../views/signin/signin'
import signinPwdFind from '../views/signin/signin_pwdfind'
import signinPwdCode from '../views/signin/signin_pwdcode'
import signinPwdReg from '../views/signin/signin_pwdreg'
import signinPwdReset from '../views/signin/signin_pwdreset'

import personal from '../views/personal/personal'
import myorder from '../views/personal/myorder'
import myorderStatus from '../views/personal/myorder_status'
import myorderStatusTake from '../views/personal/myorder_status_take'
import myorderStatusPay from '../views/personal/myorder_status_pay'
import logistical from '../views/personal/logistical'
import address from '../views/personal/address'
import addressEdit from '../views/personal/address_edit'
import coupon from '../views/personal/coupon'
import goodsDetail from '../views/goods/goods_detail'
import myorderConfirm from '../views/goods/myorder_confirm'
import myorderPay from '../views/goods/myorder_pay'

import searchIndex from '../views/search/index'
import goodsCategory from '../views/search/search_category'
import goodsHot from '../views/search/search_hot'
import goodsResult from '../views/search/search_result'

import activity from '../views/activity/activity'
import service from '../views/service/service'
import returnRefund from '../views/service/returnRefund'
import exchange from '../views/service/exchange'
import logistics from '../views/service/logistics'
import negotiation from '../views/service/negotiation'
import negotiationRefused from '../views/service/negotiation_refused'
import negotiationResult from '../views/service/negotiation_result'
import negotiationResult2 from '../views/service/negotiation_result2'
import negotiationResult3 from '../views/service/negotiation_result3'
import PageNotFound from '../views/404'

export const routes = {
    //默认
    '/': {
        name: 'index',
        component: index,
      },
      '/cart': {
        name: 'cart',
        component: cart,
      },

      '/signinIndex': {//登录index
        name: 'signinIndex',
        component: signinIndex,
        // add a subRoutes map under /foo
        subRoutes: {
          '/': {//登录
            name: 'signin',
            component: signin
          },
          '/signinPwdFind': {
            name: 'signinPwdFind',
            component:signinPwdFind,
          },
          '/signinPwdCode': {//搜索结果集
            name: 'signinPwdCode',
            component:signinPwdCode
          },
          '/signinPwdReg': {//搜索结果集
            name: 'signinPwdReg',
            component:signinPwdReg
          },
          '/signinPwdReset': {
            name: 'signinPwdReset',
            component: signinPwdReset,
          },
        }
      },


    //   '/signin': {
    //     name: 'signin',
    //     component: signin,
    //   },
    //   '/signinPwdFind': {
    //     name: 'signinPwdFind',
    //     component: signinPwdFind,
    //   },
    // '/signinPwdCode': {
    //     name: 'signinPwdCode',
    //     component: signinPwdCode,
    //   },
    // '/signinPwdReg': {
    //     name: 'signinPwdReg',
    //     component: signinPwdReg,
    //   },
    //   '/signinPwdReset': {
    //     name: 'signinPwdReset',
    //     component: signinPwdReset,
    //   },

    
        '/personal': {
        name: 'personal',
        component: personal,
      },
        '/personal/myorder': {
        name: 'myorder',
        component: myorder,
      },
      '/personal/logistical': {
        name: 'logistical',
        component: logistical,
      },
      '/personal/address': {
        name: 'address',
        component: address,
      },
        '/personal/address/:id/edit': {
        name: 'addressEdit',
        component: addressEdit,
      },
            '/coupon': {
        name: 'coupon',
        component: coupon,
      },

          '/goodsDetail': {
        name: 'goodsDetail',
        component: goodsDetail,
      },
        '/myorderConfirm': {
        name: 'myorderConfirm',
        component: myorderConfirm,
      },
        '/myorderPay': {
        name: 'myorderPay',
        component: myorderPay,
      },
        '/personal/myorderStatus': {
        name: 'myorderStatus',
        component: myorderStatus,
      },
        '/personal/myorderStatusTake': {
        name: 'myorderStatusTake',
        component: myorderStatusTake,
      },
        '/personal/myorderStatusPay': {
        name: 'myorderStatusPay',
        component: myorderStatusPay,
      },
    '/searchIndex': {//搜索index
        name: 'searchIndex',
        component: searchIndex,
        // add a subRoutes map under /foo
        subRoutes: {
          '/': {//商品分类
            name: 'goodsCategory',
            component: goodsCategory
          },
          '/goodsHot': {//热搜
            name: 'goodsHot',
            component:goodsHot,
          },
          '/goodsResult': {//搜索结果集
            name: 'goodsResult',
            component:goodsResult
          },
        }
    },

      '/activity': {
        name: 'activity',
        component: activity,
      },
      '/service': {
        name: 'service',
        component: service,
      },
      '/returnRefund': {
        name: 'returnRefund',
        component: returnRefund,
      },
      '/logistics': {
        name: 'logistics',
        component: logistics,
      },
      '/negotiation': {
        name: 'negotiation',
        component: negotiation,
      },
      '/negotiationRefused': {
        name: 'negotiationRefused',
        component: negotiationRefused,
      },
      '/negotiationResult2': {
        name: 'negotiationResult2',
        component: negotiationResult2,
      },
      '/negotiationResult3': {
        name: 'negotiationResult3',
        component: negotiationResult3,
      },
      '/negotiationResult': {
        name: 'negotiationResult',
        component: negotiationResult,
      },
      '/exchange': {
        name: 'exchange',
        component: exchange,
      },
     '/404': {
        name: '404error',
        component: PageNotFound,
      },
}

export const redirections = {
  '*': '/404',
};
