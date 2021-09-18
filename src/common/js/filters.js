// export default {	
// 	number(data){
//         return (data*1).toFixed(2)
//     },
//     totalPrice(num, flag) {
//         console.log(num)
//         console.log(flag)
//         if ((num + "").indexOf(".") != -1) {
//           let splitPrice = (num + "").split(".");
//           if (flag) {
//             return splitPrice[0];
//           } else {
//             return splitPrice[1];
//           }
//         } else {
//           if (flag) {
//             return num;
//           } else {
//             return "00";
//           }
//         }
//     }
// }
// 保留两位小数
function number(data){
    return (data*1).toFixed(2)
}
// 金额小数点前后大小不一致
function totalPrice(num, flag) {
    if ((num + "").indexOf(".") != -1) {
      let splitPrice = (num + "").split(".");
      if (flag) {
        return splitPrice[0];
      } else {
        return splitPrice[1];
      }
    } else {
      if (flag) {
        return num;
      } else {
        return "00";
      }
    }
}
// 过滤金额
function Formats(value=0,f=0, isarr="人") { 
        try {
            f = f || 1;
            var v = value;
            if (v >= 100000000) {
            v = (v / 100000000).toFixed(f) + '亿'+isarr
            return v
            } else if (v >= 10000000) {
            v = (v / 10000000).toFixed(f) + '千万'+isarr
            return v
            } else if (v >= 10000000) {
            v = (v / 10000000).toFixed(f) + '百万'+isarr
            return v
            } else if (v >= 10000) {
            v = (v / 10000).toFixed(f) + '万'+isarr
            return v
            } else {
            return v +''+isarr
            }
        } catch (e) {
            return 0;
        }
}
module.exports = {
	number:number,
    totalPrice:totalPrice,
    Formats:Formats
}