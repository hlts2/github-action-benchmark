window.BENCHMARK_DATA = {
  "lastUpdate": 1619166219515,
  "repoUrl": "https://github.com/hlts2/github-action-benchmark",
  "entries": {
    "Go Benchmark": [
      {
        "commit": {
          "author": {
            "email": "hiroto.funakoshi.hiroto@gmail.com",
            "name": "hlts2",
            "username": "hlts2"
          },
          "committer": {
            "email": "hiroto.funakoshi.hiroto@gmail.com",
            "name": "hlts2",
            "username": "hlts2"
          },
          "distinct": true,
          "id": "0a54c5fa8fada6d330266de6f1cc688a2a09891b",
          "message": "fix: delete unnecessary file\n\nSigned-off-by: hlts2 <hiroto.funakoshi.hiroto@gmail.com>",
          "timestamp": "2021-04-23T15:23:29+09:00",
          "tree_id": "174a2ae2f78434526ee6de06edd35b4ec35dc67d",
          "url": "https://github.com/hlts2/github-action-benchmark/commit/0a54c5fa8fada6d330266de6f1cc688a2a09891b"
        },
        "date": 1619159832008,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkString",
            "value": 16086,
            "unit": "ns/op\t    9603 B/op\t     136 allocs/op",
            "extra": "100000 times\n2 procs"
          },
          {
            "name": "BenchmarkGet",
            "value": 4452,
            "unit": "ns/op\t    1328 B/op\t      19 allocs/op",
            "extra": "300000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_String",
            "value": 12892,
            "unit": "ns/op\t    7119 B/op\t     129 allocs/op",
            "extra": "100000 times\n2 procs"
          },
          {
            "name": "BenchmarkDetail_String",
            "value": 8210,
            "unit": "ns/op\t    5445 B/op\t     106 allocs/op",
            "extra": "200000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_Get",
            "value": 3225,
            "unit": "ns/op\t    1280 B/op\t      18 allocs/op",
            "extra": "500000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_prepare",
            "value": 3.86,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "300000000 times\n2 procs"
          },
          {
            "name": "BenchmarkStackTrace_String",
            "value": 304,
            "unit": "ns/op\t     248 B/op\t       5 allocs/op",
            "extra": "5000000 times\n2 procs"
          },
          {
            "name": "BenchmarkUint32",
            "value": 17.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_0",
            "value": 19.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_10",
            "value": 18.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_100",
            "value": 18.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_MaxUint64",
            "value": 19.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_0",
            "value": 37.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_10",
            "value": 38,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_100",
            "value": 37.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_MaxUint32",
            "value": 36.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_0",
            "value": 70.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_10",
            "value": 71.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_100",
            "value": 69.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_MaxUint32",
            "value": 66.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20000000 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hiroto.funakoshi.hiroto@gmail.com",
            "name": "Hiroto Funakoshi",
            "username": "hlts2"
          },
          "committer": {
            "email": "hiroto.funakoshi.hiroto@gmail.com",
            "name": "Hiroto Funakoshi",
            "username": "hlts2"
          },
          "distinct": true,
          "id": "e2467c66a4798894f2d2c4528ef0855600754193",
          "message": "Set theme jekyll-theme-cayman",
          "timestamp": "2021-04-23T15:45:28+09:00",
          "tree_id": "459cc7eb9a1906c04c2b7b958ec741927e90d680",
          "url": "https://github.com/hlts2/github-action-benchmark/commit/e2467c66a4798894f2d2c4528ef0855600754193"
        },
        "date": 1619160387528,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkString",
            "value": 15923,
            "unit": "ns/op\t    9603 B/op\t     136 allocs/op",
            "extra": "100000 times\n2 procs"
          },
          {
            "name": "BenchmarkGet",
            "value": 4542,
            "unit": "ns/op\t    1328 B/op\t      19 allocs/op",
            "extra": "300000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_String",
            "value": 12929,
            "unit": "ns/op\t    7118 B/op\t     129 allocs/op",
            "extra": "100000 times\n2 procs"
          },
          {
            "name": "BenchmarkDetail_String",
            "value": 8378,
            "unit": "ns/op\t    5446 B/op\t     106 allocs/op",
            "extra": "200000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_Get",
            "value": 3288,
            "unit": "ns/op\t    1280 B/op\t      18 allocs/op",
            "extra": "500000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_prepare",
            "value": 3.95,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "300000000 times\n2 procs"
          },
          {
            "name": "BenchmarkStackTrace_String",
            "value": 305,
            "unit": "ns/op\t     248 B/op\t       5 allocs/op",
            "extra": "5000000 times\n2 procs"
          },
          {
            "name": "BenchmarkUint32",
            "value": 17.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_0",
            "value": 19.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_10",
            "value": 18.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_100",
            "value": 18.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_MaxUint64",
            "value": 19.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_0",
            "value": 35.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_10",
            "value": 35.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_100",
            "value": 35.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_MaxUint32",
            "value": 33.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_0",
            "value": 66.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_10",
            "value": 69.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_100",
            "value": 68,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_MaxUint32",
            "value": 68.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20000000 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hiroto.funakoshi.hiroto@gmail.com",
            "name": "hlts2",
            "username": "hlts2"
          },
          "committer": {
            "email": "hiroto.funakoshi.hiroto@gmail.com",
            "name": "hlts2",
            "username": "hlts2"
          },
          "distinct": true,
          "id": "637514503cba7fbf1a19d5e781796fbaa6d52d86",
          "message": "feat: add other workflow\n\nSigned-off-by: hlts2 <hiroto.funakoshi.hiroto@gmail.com>",
          "timestamp": "2021-04-23T15:51:11+09:00",
          "tree_id": "3766dc9f1a4ff155cba84ca8a08176b7ca9c63c6",
          "url": "https://github.com/hlts2/github-action-benchmark/commit/637514503cba7fbf1a19d5e781796fbaa6d52d86"
        },
        "date": 1619160764213,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkString",
            "value": 14171,
            "unit": "ns/op\t    9602 B/op\t     136 allocs/op",
            "extra": "100000 times\n2 procs"
          },
          {
            "name": "BenchmarkGet",
            "value": 3854,
            "unit": "ns/op\t    1328 B/op\t      19 allocs/op",
            "extra": "300000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_String",
            "value": 11345,
            "unit": "ns/op\t    7118 B/op\t     129 allocs/op",
            "extra": "200000 times\n2 procs"
          },
          {
            "name": "BenchmarkDetail_String",
            "value": 7615,
            "unit": "ns/op\t    5446 B/op\t     106 allocs/op",
            "extra": "200000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_Get",
            "value": 3028,
            "unit": "ns/op\t    1280 B/op\t      18 allocs/op",
            "extra": "500000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_prepare",
            "value": 3.84,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "500000000 times\n2 procs"
          },
          {
            "name": "BenchmarkStackTrace_String",
            "value": 287,
            "unit": "ns/op\t     248 B/op\t       5 allocs/op",
            "extra": "5000000 times\n2 procs"
          },
          {
            "name": "BenchmarkUint32",
            "value": 16,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_0",
            "value": 17,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_10",
            "value": 17.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_100",
            "value": 16.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_MaxUint64",
            "value": 17.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_0",
            "value": 30.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_10",
            "value": 29.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_100",
            "value": 31.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_MaxUint32",
            "value": 28.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_0",
            "value": 55.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_10",
            "value": 58.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_100",
            "value": 56.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_MaxUint32",
            "value": 54.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30000000 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hiroto.funakoshi.hiroto@gmail.com",
            "name": "hlts2",
            "username": "hlts2"
          },
          "committer": {
            "email": "hiroto.funakoshi.hiroto@gmail.com",
            "name": "hlts2",
            "username": "hlts2"
          },
          "distinct": true,
          "id": "1b8a9d1422ca55a8a4ae8ffb80bf0170b6f543ea",
          "message": "fix: cpu error\n\nSigned-off-by: hlts2 <hiroto.funakoshi.hiroto@gmail.com>",
          "timestamp": "2021-04-23T15:54:11+09:00",
          "tree_id": "bfbdd9bcb08b5e9ccc1fae6489b73f9bf65e6c00",
          "url": "https://github.com/hlts2/github-action-benchmark/commit/1b8a9d1422ca55a8a4ae8ffb80bf0170b6f543ea"
        },
        "date": 1619160911708,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkString",
            "value": 15252,
            "unit": "ns/op\t    9602 B/op\t     136 allocs/op",
            "extra": "100000 times\n2 procs"
          },
          {
            "name": "BenchmarkGet",
            "value": 4135,
            "unit": "ns/op\t    1328 B/op\t      19 allocs/op",
            "extra": "300000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_String",
            "value": 11828,
            "unit": "ns/op\t    7118 B/op\t     129 allocs/op",
            "extra": "100000 times\n2 procs"
          },
          {
            "name": "BenchmarkDetail_String",
            "value": 8037,
            "unit": "ns/op\t    5446 B/op\t     106 allocs/op",
            "extra": "200000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_Get",
            "value": 2917,
            "unit": "ns/op\t    1280 B/op\t      18 allocs/op",
            "extra": "500000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_prepare",
            "value": 4.01,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "300000000 times\n2 procs"
          },
          {
            "name": "BenchmarkStackTrace_String",
            "value": 270,
            "unit": "ns/op\t     248 B/op\t       5 allocs/op",
            "extra": "5000000 times\n2 procs"
          },
          {
            "name": "BenchmarkUint32",
            "value": 16.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_0",
            "value": 18,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_10",
            "value": 17.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_100",
            "value": 17.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_MaxUint64",
            "value": 18.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_0",
            "value": 34.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_10",
            "value": 34,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_100",
            "value": 32.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_MaxUint32",
            "value": 32.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_0",
            "value": 61.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_10",
            "value": 62.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_100",
            "value": 60.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_MaxUint32",
            "value": 61.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30000000 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hiroto.funakoshi.hiroto@gmail.com",
            "name": "hlts2",
            "username": "hlts2"
          },
          "committer": {
            "email": "hiroto.funakoshi.hiroto@gmail.com",
            "name": "hlts2",
            "username": "hlts2"
          },
          "distinct": true,
          "id": "ef875b4f7fad366b5c3b462340c72772d5dca52b",
          "message": "fix: test directory configuration\n\nSigned-off-by: hlts2 <hiroto.funakoshi.hiroto@gmail.com>",
          "timestamp": "2021-04-23T16:14:35+09:00",
          "tree_id": "6de4963ffd9950c023d1566f5317775d1a753036",
          "url": "https://github.com/hlts2/github-action-benchmark/commit/ef875b4f7fad366b5c3b462340c72772d5dca52b"
        },
        "date": 1619162146528,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkString",
            "value": 18134,
            "unit": "ns/op\t    9602 B/op\t     136 allocs/op",
            "extra": "100000 times\n2 procs"
          },
          {
            "name": "BenchmarkGet",
            "value": 4618,
            "unit": "ns/op\t    1328 B/op\t      19 allocs/op",
            "extra": "300000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_String",
            "value": 13395,
            "unit": "ns/op\t    7118 B/op\t     129 allocs/op",
            "extra": "100000 times\n2 procs"
          },
          {
            "name": "BenchmarkDetail_String",
            "value": 8605,
            "unit": "ns/op\t    5446 B/op\t     106 allocs/op",
            "extra": "200000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_Get",
            "value": 3375,
            "unit": "ns/op\t    1280 B/op\t      18 allocs/op",
            "extra": "500000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_prepare",
            "value": 4.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "300000000 times\n2 procs"
          },
          {
            "name": "BenchmarkStackTrace_String",
            "value": 304,
            "unit": "ns/op\t     248 B/op\t       5 allocs/op",
            "extra": "5000000 times\n2 procs"
          },
          {
            "name": "BenchmarkUint32",
            "value": 18.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_0",
            "value": 18.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_10",
            "value": 19.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_100",
            "value": 18.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_MaxUint64",
            "value": 19.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_0",
            "value": 36.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_10",
            "value": 37.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_100",
            "value": 37.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_MaxUint32",
            "value": 37.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_0",
            "value": 70.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_10",
            "value": 71.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_100",
            "value": 71.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_MaxUint32",
            "value": 70.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20000000 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hiroto.funakoshi.hiroto@gmail.com",
            "name": "hlts2",
            "username": "hlts2"
          },
          "committer": {
            "email": "hiroto.funakoshi.hiroto@gmail.com",
            "name": "hlts2",
            "username": "hlts2"
          },
          "distinct": true,
          "id": "2bcd1a6eaa3d0b8232400d9e551f7347731432d7",
          "message": "fix: add subdirectory configuration\n\nSigned-off-by: hlts2 <hiroto.funakoshi.hiroto@gmail.com>",
          "timestamp": "2021-04-23T16:19:39+09:00",
          "tree_id": "197cee9de41c209b09da9ccfcb7e819a9d6c14a7",
          "url": "https://github.com/hlts2/github-action-benchmark/commit/2bcd1a6eaa3d0b8232400d9e551f7347731432d7"
        },
        "date": 1619162437640,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkString",
            "value": 13906,
            "unit": "ns/op\t    9603 B/op\t     136 allocs/op",
            "extra": "100000 times\n2 procs"
          },
          {
            "name": "BenchmarkGet",
            "value": 3801,
            "unit": "ns/op\t    1328 B/op\t      19 allocs/op",
            "extra": "300000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_String",
            "value": 12184,
            "unit": "ns/op\t    7118 B/op\t     129 allocs/op",
            "extra": "200000 times\n2 procs"
          },
          {
            "name": "BenchmarkDetail_String",
            "value": 7459,
            "unit": "ns/op\t    5446 B/op\t     106 allocs/op",
            "extra": "200000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_Get",
            "value": 2927,
            "unit": "ns/op\t    1280 B/op\t      18 allocs/op",
            "extra": "500000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_prepare",
            "value": 3.87,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "500000000 times\n2 procs"
          },
          {
            "name": "BenchmarkStackTrace_String",
            "value": 263,
            "unit": "ns/op\t     248 B/op\t       5 allocs/op",
            "extra": "5000000 times\n2 procs"
          },
          {
            "name": "BenchmarkUint32",
            "value": 16.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_0",
            "value": 18.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_10",
            "value": 17.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_100",
            "value": 18.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_MaxUint64",
            "value": 17.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_0",
            "value": 28.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_10",
            "value": 29.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_100",
            "value": 28.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_MaxUint32",
            "value": 26.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_0",
            "value": 53.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_10",
            "value": 54,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_100",
            "value": 54.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_MaxUint32",
            "value": 53.2,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30000000 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hiroto.funakoshi.hiroto@gmail.com",
            "name": "hlts2",
            "username": "hlts2"
          },
          "committer": {
            "email": "hiroto.funakoshi.hiroto@gmail.com",
            "name": "hlts2",
            "username": "hlts2"
          },
          "distinct": true,
          "id": "c3f9642d449b432762397525dfde93ce50336c30",
          "message": "fix: conflict\n\nSigned-off-by: hlts2 <hiroto.funakoshi.hiroto@gmail.com>",
          "timestamp": "2021-04-23T17:22:34+09:00",
          "tree_id": "50416f036688664f723398d1b73dcb9421069c4e",
          "url": "https://github.com/hlts2/github-action-benchmark/commit/c3f9642d449b432762397525dfde93ce50336c30"
        },
        "date": 1619166218837,
        "tool": "go",
        "benches": [
          {
            "name": "BenchmarkString",
            "value": 14898,
            "unit": "ns/op\t    9602 B/op\t     136 allocs/op",
            "extra": "100000 times\n2 procs"
          },
          {
            "name": "BenchmarkGet",
            "value": 3952,
            "unit": "ns/op\t    1328 B/op\t      19 allocs/op",
            "extra": "500000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_String",
            "value": 11572,
            "unit": "ns/op\t    7119 B/op\t     129 allocs/op",
            "extra": "100000 times\n2 procs"
          },
          {
            "name": "BenchmarkDetail_String",
            "value": 7547,
            "unit": "ns/op\t    5446 B/op\t     106 allocs/op",
            "extra": "200000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_Get",
            "value": 3028,
            "unit": "ns/op\t    1280 B/op\t      18 allocs/op",
            "extra": "500000 times\n2 procs"
          },
          {
            "name": "Benchmark_info_prepare",
            "value": 4.21,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "300000000 times\n2 procs"
          },
          {
            "name": "BenchmarkStackTrace_String",
            "value": 277,
            "unit": "ns/op\t     248 B/op\t       5 allocs/op",
            "extra": "5000000 times\n2 procs"
          },
          {
            "name": "BenchmarkUint32",
            "value": 19.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_0",
            "value": 18.3,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_10",
            "value": 17.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_100",
            "value": 17.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "BenchmarkLimitedUint32_MaxUint64",
            "value": 18.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_0",
            "value": 29.7,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_10",
            "value": 29.4,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_100",
            "value": 28.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_Uint32_MaxUint32",
            "value": 28.6,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "50000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_0",
            "value": 57.5,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "20000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_10",
            "value": 52.9,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_100",
            "value": 56.8,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30000000 times\n2 procs"
          },
          {
            "name": "Benchmark_rand_init_MaxUint32",
            "value": 53.1,
            "unit": "ns/op\t       0 B/op\t       0 allocs/op",
            "extra": "30000000 times\n2 procs"
          }
        ]
      }
    ]
  }
}