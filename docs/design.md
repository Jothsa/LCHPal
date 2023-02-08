# Design

This details what the application will look like and its features.
This is a modern color palette maker using the oklch format. It will be accessed via a website. The main screen will feature a large view of the color palette, and a tab switcher. The color palette is made up of a grid of squares of colors. There are several tabs available.

## Main Tab

The main tab displays a large view of the color palette on the left side of the screen (approx. 2/3 of the screen) and information about the selected color on the right. The information displayed is the color's, L, C, and H values in the OKLCH color space; which display profiles can support this color; and the color's APCA contrast against white and any other user specified colors. The color's L, C, and H values can be adjusted here.

## Edit View

The edit view allows the palette to be easily edited. It displays a view of the color palette on left and tools to edit and compare the selected color on the right. A color is enlarged when selected. Rows and columns can be added to the palette by selecting the plus icon on the top right for columns or the bottom right for rows (Maybe change it so its clearer) The color palette displays the colors's APCA contrast against white or another user specified color in the same square as the color. There will be options to set the selected column's luminance to the same value as the selected color's luminance and to set the selected row's hue to the same value as the selected color's hue. The user can enter edit mode by selected the edit palette icon. Edit mode allows the user to quickly add or remove columns or rows. (Maybe change name so it's not confusing?)

## Export

Here a selected palette can be exported as css variables. The whole palette can be exported, or only selected colors. Fallback colors can be optionally exported as well. The variables are named --rowName-ColumnName. A small view of the palette is displayed on the left and export options on the right. Also on the right is a text field displaying the exported content which the user can copy and paste.

## Settings

Here the user can customize many areas of the application. The user can set the theme, background color, change the colors used in contrast comparison and adjust the step size for adjusting LCH values.

## About

This tab displays information about LCH, OKLCH, the application, and the application's creator (me).
