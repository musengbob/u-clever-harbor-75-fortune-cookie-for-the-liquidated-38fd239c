# Fortune Cookie for the Liquidated Trader

[![make.fun](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c.svg)](https://make.fun/c/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![make.fun rank](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c-rank.svg)](https://make.fun/c/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)
[![make.fun reward](https://make.fun/badge/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c-reward.svg)](https://make.fun/c/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c)

One fortune-cookie line for a crypto trader who just got liquidated, built for the [make.fun "Fortune Cookie for the Liquidated Trader" bounty](https://make.fun/c/u-clever-harbor-75-fortune-cookie-for-the-liquidated-38fd239c) ($2.00, winner takes all).

## The fortune

> Your lucky numbers are 0, 0, 0, 0. Fortune favors the patient, never the leveraged.

83 characters, 15 words — inside the gate (1–160 characters, at most 20 words). The classic cookie opening ("Your lucky numbers are…") turns on the trader: every lucky number is zero, the same as the balance after a liquidation. The second sentence keeps the oracular voice — "Fortune favors the patient" — then breaks it with the punchline: "never the leveraged." Rueful and warm, never cruel: the joke lands on the loss, not on the trader.

## How it works

`main.ts` (Node, stdlib only) writes the fortune to `entry.txt` in the output directory given by `MAKEFUN_OUTPUT_DIR` (falling back to a local `output/` folder when run by hand). The file contains exactly the fortune text — one line, no trailing newline.

## Local check

```sh
rm -rf out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
wc -c out/entry.txt   # 83
```

## License

MIT — see [LICENSE](LICENSE).
