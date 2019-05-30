Run ffmeg command to convert image series to mp4:
    ffmpeg -y -r 10 -f image2 -i img%04d.png -movflags faststart -pix_fmt yuv420p -vcodec libx264 -vf scale=trunc(iw/2)*2:trunc(ih/2)*2 -preset veryslow -crf 15 figure.mp4
