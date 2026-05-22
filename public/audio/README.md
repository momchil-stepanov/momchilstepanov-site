# Audio assets

Audio sample files are referenced from page configuration in
`src/data/samples/*.ts`. Each entry's `audioUrl` field points to a
path under this directory.

## Expected directory layout

```
public/audio/
├── advertising/
│   ├── sample-01.mp3
│   ├── sample-02.mp3
│   └── …
├── voice-over/
│   └── …
├── audiobooks/
│   └── …
└── music/
    └── …
```

## TODO — files to add before launch

- [ ] `public/audio/advertising/sample-01.mp3` … `sample-10.mp3` (10 files)
- [ ] `public/audio/voice-over/sample-01.mp3` … `sample-10.mp3`
- [ ] `public/audio/audiobooks/sample-01.mp3` … `sample-10.mp3` (2–3 min each)
- [ ] `public/audio/music/sample-01.mp3` … `sample-10.mp3`

## Format recommendations

- Container: MP3
- Bitrate: 128–192 kbps (good enough for voice, keeps file size low)
- Sample rate: 44.1 kHz
- Mono for VO / dialogue, stereo for music
- Target file size: under 1 MB for samples ≤ 60 sec; under 4 MB for
  audiobook excerpts of 2–3 min
- Normalise to roughly −16 LUFS so the on-page player level is
  consistent across samples
- Strip ID3 tags or keep them minimal — only title/artist if useful
- File names should match `audioUrl` in `src/data/samples/*.ts`

## Player notes

The accordion + waveform player (`SampleList.astro`) lazy-loads
WaveSurfer.js and only fetches the audio file when a sample is
expanded. Missing files will silently fail to render a waveform but
will not break the rest of the page.
