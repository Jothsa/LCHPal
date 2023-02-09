# Design Document

## Classes

### Palette

This class holds the color palette.

#### Variables

* colors Array of Color objects holds the colors
* rows Array of strings holds the row names
* cols Array of strings holds the column names

#### Functions
* addRow adds a row with default colors
* addCol adds a column with default colors and a name based off the other columns in the palette
* setRowH sets every color in a row to a specific hue; input int row, float hue
* setColL sets every color in a column to a specific luminosity; input int col, float lum
* setColor sets a specific color; input int row, int col, Color color (rename?)
* getColor returns the color of a specific coordinate, input int row, int col; returns Color
* getCol returns the name of a specified column; returns string
* getRow returns the name of a specified row; returns string
