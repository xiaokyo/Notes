# video的controls用css隐藏

```less
video {

				&::-webkit-media-controls-fullscreen-button {
             display: block;
        }

        &::-webkit-media-controls-play-button {
             display: block;
        }

        &::-webkit-media-controls-timeline {
             display: none;
        }

        &::-webkit-media-controls-current-time-display {
             display: none;
        }

        &::-webkit-media-controls-time-remaining-display {
             display: none;
        }

        &::-webkit-media-controls-mute-button {
             display: none;
        }

        &::-webkit-media-controls-toggle-closed-captions-button {
            display: none;
        }

        &::-webkit-media-controls-enclosure {
             display: none;
        }

        &::-webkit-media-controls-volume-slider {
             display: none;
        }
}
```

