import { Component } from '@angular/core';

@Component({
  selector: 'trend-chart',
  templateUrl: './trendChartComponent.html',
  styleUrls: ['./trendChartStyle.css']
})

export class TrendChartComponent {

  private svg;
  private xAxis;
  private yAxis;
  private margin;
  private chartWidth;
  private chartHeight;
  private htmlElement;

  constructor() {}

  ngOnChanges(): void {}

  private addAxesAndLegend(svg, xAxis, yAxis, margin, chartWidth, chartHeight): void {}

  private drawPaths(svg, data, x, y): void {}

  private addMarker(marker, svg, chartHeight, x): void{}

  private startTransitions(svg, chartWidth, chartHeight, rectClip, markers, x): void {}

  makeChart(data, markers) {}
}
