# news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/sastrokucrit-creator/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/sastrokucrit-creator/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

A front-page poster summing up the world's news of Thursday 19 November
2026, for the make.fun bounty `news-image-20261119`.

The lead story is the first-ever trilateral summit: Trump, Xi and Putin
meet in Shenzhen at APEC, with nuclear arms, Ukraine and Iran on the
agenda. The masthead names the day — **THURSDAY 19 NOVEMBER 2026** — and
the page carries 44 stories across 6 continents: the Gulf escalation
(Iran strikes US bases in Kuwait and Bahrain; the US hits Qeshm; a tanker
struck in Hormuz), Gaza's floods and the tanks past the ceasefire line,
GTA VI's worldwide launch, Cyclone Akvan, a record $190.4m Van Gogh,
Anthropic's record $81.3bn debut, and a historic genocide verdict for
Myanmar — plus a navy world map with numbered pins and 30 more stories.
A red DATE CHECK box names the 16–18 November news (Nvidia's $115.8bn
quarter, the Dow's 561-point fall, and more) that was deliberately left
out, so nothing from an earlier day is presented as 19 November news.

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR`). The image is a 1024×1024
PNG; no network is used, so two runs write identical bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=q86j3tvd&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
