;; NOTE: not working yet
(module
  (import "console" "log" (func $log (param i32)))
  (start $main)
  (func $main
    i32.const 42
    call $log
  )
)
