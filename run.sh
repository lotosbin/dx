#!/usr/bin/env bash
deno  run --allow-read --allow-write --unstable --allow-env src/main.ts "$@"
