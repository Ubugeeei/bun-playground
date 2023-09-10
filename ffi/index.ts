import { dlopen, FFIType } from "bun:ffi";
import dylib from "./lib/target/release/librust_lib.dylib";

const {
  symbols: { add },
} = dlopen(dylib, {
  add: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.i32,
  },
});

console.log(`add 1 + 2 on rust lib: ${add(1, 2)}`);
