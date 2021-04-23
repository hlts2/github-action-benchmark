package rand

import (
	"sync"
	"sync/atomic"

	"github.com/kpango/fastime"
)

type rand struct {
	x *uint32
}

var pool = sync.Pool{
	New: func() interface{} {
		return (&rand{
			x: new(uint32),
		}).init()
	},
}

func Uint32() (x uint32) {
	r := pool.Get().(*rand)
	x = r.Uint32()
	pool.Put(r)
	return
}

func LimitedUint32(max uint64) uint32 {
	return uint32(uint64(Uint32()) * max >> 32)
}

func (r *rand) Uint32() (x uint32) {
	if atomic.LoadUint32(r.x) == 0 {
		r.init()
	}
	x = atomic.LoadUint32(r.x)
	x ^= x << 13
	x ^= x >> 17
	x ^= x << 5
	atomic.StoreUint32(r.x, x)
	return
}

func (r *rand) init() *rand {
	if r.x == nil {
		r.x = new(uint32)
	}
	x := fastime.UnixNanoNow()
	atomic.StoreUint32(r.x, uint32((x>>32)^x))
	return r
}
