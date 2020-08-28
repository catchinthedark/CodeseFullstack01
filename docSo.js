const d1 = ["khong", "mot", "hai", "ba", "bon", "nam", "sau", "bay", "tam", "chin", "muoi"];
const d2 = ["mot", "hai", "ba", "bon", "lam", "sau", "bay", "tam", "chin", "muoi"];
const d3 = ["tram", "nghin", "trieu", "ti"];

const convert_num = async(str, num) => {
    const num1 = Math.trunc(num / 10);
    const num2 = Math.trunc(num % 10 - 1);
    if (num <= 10) str += d1[num];
    else if (num % 10 === 0) str += d1[num1] + " muoi";
    else if (num < 20) {
        if (num === 11) str += d1[10] + " mot";
        else str += d1[10] + " " + d2[num2];
    } else str += d1[num1] + " muoi " + d2[num2];
    return str;
}

const docSo = async(n) => {
    let cnt = 0;
    let ans = "";
    while (n > 0) {
        let str = "";
        let strr = "";
        const cur = Math.trunc(n % 100);
        n = Math.trunc(n / 100);
        const curr = Math.trunc(n % 10);
        n = Math.trunc(n / 10);
        cnt++;
        if (cur === 0 && curr === 0) continue;
        if (cur === 0 && curr != 0) str += d1[curr] + " " + d3[0];
        else {
            const cn = await convert_num(str, cur);
            str = cn.slice(0, cn.length);
        }
        if (n === 0) {
            if (cur === 0 || curr === 0) {
                if (cnt === 1) ans = str.slice(0, str.length);
                else {
                    const tmp_ans = ans.slice(0, ans.length);
                    ans = str.slice(0, str.length);
                    ans += " " + d3[cnt - 1] + " " + tmp_ans;
                }
            } else {
                strr += d1[curr] + " " + d3[0] + " ";
                if (cur > 9) strr += str;
                else strr += "linh " + str;
                if (cnt > 1) {
                    const tmp_ans = ans.slice(0, ans.length);
                    ans = strr.slice(0, strr.length);
                    ans += " " + d3[cnt - 1] + " " + tmp_ans;
                } else ans = strr.slice(0, strr.length);
            }
        } else {
            if (cur === 0) {
                const tmp_ans = ans.slice(0, ans.length);
                ans = str.slice(0, str.length);
                ans += " " + d3[cnt - 1] + " " + tmp_ans;
            } else {
                strr += d1[curr] + " " + d3[0] + " ";
                if (cur > 9) strr += str;
                else strr += "linh " + str;
                if (cnt > 1) {
                    const tmp_ans = ans.slice(0, ans.length);
                    ans = strr.slice(0, strr.length);
                    ans += " " + d3[cnt - 1] + " " + tmp_ans;
                } else {
                    strr += ans;
                    ans = strr.slice(0, strr.length);
                }
            }
        }
    }
    return ans;
}

const test = async(num) => {
    const data = await docSo(num);
    console.log(data);
}

test(123456789);