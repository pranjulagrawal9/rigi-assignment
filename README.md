
# Video Player with Playlist in React

It is a Video Player application built using React.js to allow users to play videos from a playlist. It supports features like seeking, timer, autoplay, and speed selector. Additionally, users can reorder the playlist.

![Screen Shot](https://github.com/pranjulagrawal9/rigi-assignment/blob/master/screenshots/video-player1.png)
![Screen Shot](https://github.com/pranjulagrawal9/rigi-assignment/blob/master/screenshots/video-player2.png)


## Hosted Link

https://rigi-app.netlify.app


## Run Locally

Clone the project

```bash
  git clone https://github.com/pranjulagrawal9/rigi-assignment.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

__Note:__ Do not use Strict Mode while running locally because I am using an external library that do not work with Strict Mode.


## Brief Overview

- __Video Player__ with Play/Pause toggle, Seek functionality, Timer displaying current playback time and duration, Autoplay, Speed selector for playback speed adjustment, fullscreen mode, volume control, thumbnail previews, keyboard shortcuts.

- __Playlist__ to display and manage videos, allow users to reorder videos in the playlist, clicking on a video in the playlist loads and plays that video in the video player, next video plays automatically after completing the current video.

## Tech Stack

- React.js, React Router, Tailwind CSS.
- vidstack library for building video player.
- react-beautiful-dnd library for implementing re-ordering of videos in playlists.

## Lighthouse Report
![Screen Shot](https://github.com/pranjulagrawal9/rigi-assignment/blob/master/Lighthouse-report.png)
