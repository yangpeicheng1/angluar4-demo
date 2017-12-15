import { Component,OnInit } from '@angular/core';
import { EChartOption } from 'echarts-ng2';
@Component({
  selector: 'app-count-year',
  templateUrl: './count-year.component.html',
  styleUrls: ['./count-year.component.css']
})
export class CountYearComponent implements OnInit {
  title = 'count-year';
  constructor() { };
  chartOption: EChartOption;
  lineOption: EChartOption ;
  ngOnInit():void{
    this.chartOption = this.createChart([{name: '宠物', value: 37}, {name: '工具', value: 222}, {name: '孩子', value: 4466}]);
    const x: Array<string> = ['1月', '3月', '4月', '5月', '6月'];
    const y: Array<number> = [1000, 1300, 2045, 2780, 2400, 4310];
    this.lineOption = this.createLine(x, y, '标题');
  }
  // 画饼图
  private createChart(data: any[]): EChartOption {
    return {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [
        {
          name: '消费',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: data
        }
      ]
    };
  }
  private createLine(x, y, title: string): EChartOption {
    return {
      title: {
        text: title,
        subtext: '单位（元）',
        x: 'left'
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {x: 40, y: 50, x2: 10, y2:30, borderWidth: 0},
      xAxis: [
        {
          splitLine: {show: true},
          type: 'category',
          boundaryGap: false,
          data: x
        }
      ],
      yAxis: [
        {
          show:true,
          type: 'value',
        }
      ],
      series: [
        {
          name: '消费',
          type: 'line',
          //center: ['10%', '10%'],
          smooth: true,
          itemStyle: {normal: {areaStyle: {type: 'default'}}},
          data: y
        },
      ]
    };
  }
}
