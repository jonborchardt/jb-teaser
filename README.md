# Teaser

## Quickstart
 `npm install -g @angular/cli` 
 `git clone https://github.com/jonborchardt/jb-teaser.git`
 `cd jb-teaser`
 `npm install`
 `ng build`
 `ng serve --open`


# Details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Remaining work

This was done quite quickly.... There are many todos in the comments.
I am in NO way happy with the visual look and feel nor the total functionality, but that is the reality of a time based release.

Bucket 1
DONE
- The user should be able browse through the line-item data as either a list or table (ie.
pagination or infinite-scrolling).
- The user should be able to edit line-item "adjustments".
- The user should be able to see each line-item's billable amount (sub-total = actuals +
adjustments).
- The user should be able to sort the data.
- The user should be able to output the invoice to *.CSV, *.XLS, etc.
- The user should be able to customize the layout.

Partial Done, rest VNext
- The user should be able flag individual line-items as "reviewed" (meaning they are disabled
from further editing).

VNext 
- The user should be able to see sub-totals grouped by campaign (line-items grouped by their
parent campaign).
- The user should be able to see the invoice grand-total (sum of each line-item's billable
amount).
- The user should be able to archive line-items

Backlog 
- Multiple users should be able to edit the same invoice concurrently.
- The user should be able to browse/filter/sort the invoice history, as well.
- The user should be able flag "campaigns" as being reviewed, as well.


Bucket 2
DONE 
- The user should be able to add comments on an individual line-item.

VNext 
- The user should be able to filter the data (ie. by campaign name, etc., should affect the
grand-total).

Backlog 
- An integration into an external service that makes sense (eg. a currency conversion service,
an export to Amazon S3, etc)
- The user should be able to share and reuse filters between users.
- The user should be able to see a history of all the adjustments/comments/changes/etc. made
to the invoice by different users.