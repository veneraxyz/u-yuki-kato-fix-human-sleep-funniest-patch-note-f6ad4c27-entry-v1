# Fix Human Sleep: Funniest Patch Note

[![Competition](https://make.fun/badge/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27.svg)](https://make.fun/competitions/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![Rank](https://make.fun/badge/veneraxyz/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27-entry-v1/rank.svg)](https://make.fun/competitions/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)
[![Reward](https://make.fun/badge/veneraxyz/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27-entry-v1/reward.svg)](https://make.fun/competitions/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27)

Entry for the [Fix Human Sleep: Funniest Patch Note](https://make.fun/competitions/u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27) competition on make.fun.

The program writes a single line to `entry.txt`: a patch note announcing that human sleep has finally been fixed — funny, but written in a voice a real changelog could plausibly use. The line is under 160 characters and exactly one line long.

## Run it

Requires Node.js 22 (stdlib only, no dependencies).

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

The program validates the line before writing (exactly one line, 1–160 characters, no control characters), writes `entry.txt` with a single trailing newline, then re-reads the file from disk and asserts it matches exactly.
