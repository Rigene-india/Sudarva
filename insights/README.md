# Insight cover images

Drop an image file in **this folder** to give a built-in Insight post a cover image.
The file name must match the post's id, ending in `.jpg`:

| Post (title)                                               | File to add here            |
| ---------------------------------------------------------- | --------------------------- |
| Distribution is the last unbuilt layer in travel          | `distribution-layer.jpg`    |
| Why "never disrupt an active eSIM" is a systems problem    | `never-disrupt.jpg`         |
| Metering to the byte                                       | `metering.jpg`              |
| The retail roaming penalty                                 | `roaming-penalty.jpg`       |
| Built, then shown: how we think about shipping             | `built-then-shown.jpg`      |

That's it — no code changes needed. The image appears on the Insights feature card,
the list row, and the article header automatically.

## Notes

- **Until you add a file**, that post keeps showing the gray placeholder — no broken
  image, nothing looks wrong.
- **Recommended size:** landscape, about **1200 × 750 px**. Images are cropped to fill.
- **Want a different format** (`.png` / `.webp`)? Either save/convert the file as `.jpg`,
  or open `public/script.js`, find the post's `cover: '/insights/<id>.jpg'`, and change
  the extension to match your file.
- **Sanity posts** set their own cover in the Studio and ignore this folder — these files
  are only for the five built-in fallback posts.
