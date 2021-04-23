package rand

import (
	"math"
	"testing"
)

func BenchmarkUint32(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			if u := Uint32(); u < 0 {
				b.Errorf("Uint32() returns invalid value: %d", u)
			}
		}
	})
}

func BenchmarkLimitedUint32_0(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			if u := LimitedUint32(0); u < 0 {
				b.Errorf("LimitedUint32(0) returns invalid value: %d", u)
			}
		}
	})
}

func BenchmarkLimitedUint32_10(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			if u := LimitedUint32(10); u < 0 {
				b.Errorf("LimitedUint32(10) returns invalid value: %d", u)
			}
		}
	})
}

func BenchmarkLimitedUint32_100(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			if u := LimitedUint32(100); u < 0 {
				b.Errorf("LimitedUint32(100) returns invalid value: %d", u)
			}
		}
	})
}

func BenchmarkLimitedUint32_MaxUint64(b *testing.B) {
	b.ReportAllocs()
	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			if u := LimitedUint32(math.MaxUint32); u < 0 {
				b.Errorf("LimitedUint32(math.MaxUint32) returns invalid value: %d", u)
			}
		}
	})
}

func Benchmark_rand_Uint32_0(b *testing.B) {
	var x uint32 = 0
	r := &rand{
		x: &x,
	}
	b.ReportAllocs()
	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			if u := r.Uint32(); u < 0 {
				b.Errorf("r.Uint32() returns invalid value: %d", u)
			}
		}
	})
}

func Benchmark_rand_Uint32_10(b *testing.B) {
	var x uint32 = 10
	r := &rand{
		x: &x,
	}
	b.ReportAllocs()
	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			if u := r.Uint32(); u < 0 {
				b.Errorf("r.Uint32() returns invalid value: %d", u)
			}
		}
	})
}

func Benchmark_rand_Uint32_100(b *testing.B) {
	var x uint32 = 100
	r := &rand{
		x: &x,
	}
	b.ReportAllocs()
	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			if u := r.Uint32(); u < 0 {
				b.Errorf("r.Uint32() returns invalid value: %d", u)
			}
		}
	})
}

func Benchmark_rand_Uint32_MaxUint32(b *testing.B) {
	var x uint32 = math.MaxUint32
	r := &rand{
		x: &x,
	}
	b.ReportAllocs()
	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			if u := r.Uint32(); u < 0 {
				b.Errorf("r.Uint32() returns invalid value: %d", u)
			}
		}
	})
}

func Benchmark_rand_init_0(b *testing.B) {
	r := &rand{}
	b.ReportAllocs()
	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			if rand := r.init(); rand.x == nil {
				b.Errorf("r.init() returns invalid object: %#v", rand)
			}
		}
	})
}

func Benchmark_rand_init_10(b *testing.B) {
	var x uint32 = 100
	r := &rand{
		x: &x,
	}
	b.ReportAllocs()
	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			if rand := r.init(); rand.x == nil {
				b.Errorf("r.init() returns invalid object: %#v", rand)
			}
		}
	})
}

func Benchmark_rand_init_100(b *testing.B) {
	var x uint32 = 100
	r := &rand{
		x: &x,
	}
	b.ReportAllocs()
	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			if rand := r.init(); rand.x == nil {
				b.Errorf("r.init() returns invalid object: %#v", rand)
			}
		}
	})
}

func Benchmark_rand_init_MaxUint32(b *testing.B) {
	var x uint32 = math.MaxUint32
	r := &rand{
		x: &x,
	}
	b.ReportAllocs()
	b.ResetTimer()
	b.RunParallel(func(pb *testing.PB) {
		for pb.Next() {
			if rand := r.init(); rand.x == nil {
				b.Errorf("r.init() returns invalid object: %#v", rand)
			}
		}
	})
}
