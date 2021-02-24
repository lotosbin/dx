#!/usr/bin/env bash
deno install --allow-read --allow-write --unstable --allow-env --name dx "$@" src/main.ts
