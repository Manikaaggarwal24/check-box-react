# React Checkbox Component Readme

## Overview

This component renders a list of checkboxes, enabling users to filter data based on categories. It includes:

Select All: A checkbox to select or deselect all categories.
Individual Category Checkbox: Checkboxes for each unique category.
Data Table: Displays filtered data based on selected categories.

## Functionality

Filtering Data:
When a category checkbox is selected, only data matching that category is displayed.
When "Select All" is checked, data for all categories is shown.
When "Select All" is unchecked, only data for manually selected categories remains visible.

## Key Features

State Management: Employs React's useState hook for efficient state tracking.
Conditional Rendering: Uses conditional logic to display appropriate data based on selections.
Event Handlers: Manages checkbox interactions and updates states accordingly.
Category-Based Filtering: Enables users to filter data by specific categories.
