window.BENCHMARK_DATA = {
  "lastUpdate": 1619159832830,
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
      }
    ]
  }
}