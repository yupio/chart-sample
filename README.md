# chart-sample
Directives for building chart sample.


## Table of contents

- [Installation](#installation)
- [Example](#example)
- [Directives](#directives)
- [Dependency](#dependency)

## Installation

- node.js, grunt required
- run bower i
- run npm i
- grunt 

## Example
### Markup

    <div 
      chart-sample = ""
      chart-sample-width = "600"
      chart-sample-height = "230"
      chart-sample-pie-hole = "0.3"
    />
    </div>

## Directives
### `chartSample`

    <ANY
      chart-sample = ""
      [chart-sample-width = ""]
      [chart-sample-height = ""]
      [chart-sample-pie-hole = ""]
    ></ANY>

| Attribute               | Type   | Description                                  | Required | Default |
| ----------------------- | ------ | -------------------------------------------- | -------- | ------- |
| `chart-sample`          | n/a    |                                              | true     |         |
| `chart-sample-width`    | int    | google chart width                           | false    |   500   |
| `chart-sample-height`   | int    | google chart height                          | false    |   200   |
| `chart-sample-pie-hole` | number | If between 0 and 1, displays a donut chart.  | false    |   0.4   |


### `chartSamplePlot`

    <ANY
      chart-sample-plot=""
    ></ANY>

| Param                           | Type   | Details                                   |
|---------------------------------|--------|-------------------------------------------|
| `chart-sample-plot`             | n/a    | placeholder to plot google chart          |
| `chart-sample-plot-width`       | int    | google chart width                        |
| `chart-sample-plot-height`      | int    | google chart height                       |
| `chart-sample-plot-chart-object`| object | google chart object                       |
chartSamplePlotHeight

## Dependency

### `Google Chart`

https://developers.google.com/chart
