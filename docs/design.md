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
* setRowH sets every color in a row to a specific hue
* setColL sets every color in a column to a specific luminosity 
* set sets a color to a coordinate (rename?)
