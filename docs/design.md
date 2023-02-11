# Design Document

## Tech

- Typescript
- Deno
- Vue
- Vite
- Vitest
- Playwright

## Dependencies

-  Colorjs-io

-  Open-Props

-  PostCSS
     - JIT Props
     - Preset Env


## Classes


### Palette

This class holds the color palette.

#### Variables

-   colors Array of an array of Color objects holds the colors

      - [

        [ Row1Col1Color, Row1Col2Color ], [ Row2Col1Color, Row2Col2Color ]

        ]

-   rowNames Array of strings holds the row names. Names must be unique.

-   colNames Array of strings holds the column names. Names must be unique.

#### Functions

-   addRow adds a row with default colors

-   addCol adds a column with default colors and a name based off the other columns in the palette

-   setRowName renames a specific row; input int row (or string of old name?), string name

-   setColName renames a specific col; input int col (or string of old name?), string name

-   setRowH sets every color in a row to a specific hue; input int row, float hue

-   setColL sets every color in a column to a specific luminosity; input int col, float lum

-   getRow returns the name of a specified row; returns string

-   getCol returns the name of a specified column; returns string

-   moveRow moves a row in the palette; input int row, int location (The location is the row number the row will be moved before, eg 1 would put the row at position 0, and length + 1 would put the row at the end. 0 < location <= length + 1)

-   moveCol moves a column in the palette; input int col, int location (The location is the col number the col will be moved before, eg 1 would put the col at position 0, and length of colors[0] (or the length of colNames) + 1 would put the col at the end. 0 < location <= length of colors[0] + 1)

-   save saves the palette to local storage (maybe stringify will work or can extend the Storage object?)

## Components

### PaletteDisplay

Displays the palette in a grid of squares. Each square is the color of the corresponding color in the palette colors array. The palette will stay within the container and any overflow will be scrollable. The contrast ratio can be optionally displayed on the squares. When selected the square will increase in size.
