var MOD = 998244353;
var interval = [0, 1];
var i = 0;
for (i in range(2, 80000 + 1)){
    interval.append((MOD - MOD / Math.floor(i)) * interval[MOD % i] % MOD)
};

function height(n, m){
    var h = 0;
    var t = 1;
    var m = m %= MOD;
    for (i in range(1, n + 1)){
        t = t * (m - i + 1) * interval[i] % MOD;
        h = (h + t) % MOD;
    };
    return h % MOD
}

console.log(height(1,51))