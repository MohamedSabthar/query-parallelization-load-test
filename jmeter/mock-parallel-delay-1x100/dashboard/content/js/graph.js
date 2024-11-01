/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 18187.0, "minX": 0.0, "maxY": 18654.0, "series": [{"data": [[0.0, 18187.0], [0.1, 18187.0], [0.2, 18187.0], [0.3, 18187.0], [0.4, 18187.0], [0.5, 18187.0], [0.6, 18187.0], [0.7, 18187.0], [0.8, 18187.0], [0.9, 18187.0], [1.0, 18189.0], [1.1, 18189.0], [1.2, 18189.0], [1.3, 18189.0], [1.4, 18189.0], [1.5, 18189.0], [1.6, 18189.0], [1.7, 18189.0], [1.8, 18189.0], [1.9, 18189.0], [2.0, 18192.0], [2.1, 18192.0], [2.2, 18192.0], [2.3, 18192.0], [2.4, 18192.0], [2.5, 18192.0], [2.6, 18192.0], [2.7, 18192.0], [2.8, 18192.0], [2.9, 18192.0], [3.0, 18192.0], [3.1, 18192.0], [3.2, 18192.0], [3.3, 18192.0], [3.4, 18192.0], [3.5, 18192.0], [3.6, 18192.0], [3.7, 18192.0], [3.8, 18192.0], [3.9, 18192.0], [4.0, 18193.0], [4.1, 18193.0], [4.2, 18193.0], [4.3, 18193.0], [4.4, 18193.0], [4.5, 18193.0], [4.6, 18193.0], [4.7, 18193.0], [4.8, 18193.0], [4.9, 18193.0], [5.0, 18194.0], [5.1, 18194.0], [5.2, 18194.0], [5.3, 18194.0], [5.4, 18194.0], [5.5, 18194.0], [5.6, 18194.0], [5.7, 18194.0], [5.8, 18194.0], [5.9, 18194.0], [6.0, 18194.0], [6.1, 18194.0], [6.2, 18194.0], [6.3, 18194.0], [6.4, 18194.0], [6.5, 18194.0], [6.6, 18194.0], [6.7, 18194.0], [6.8, 18194.0], [6.9, 18194.0], [7.0, 18195.0], [7.1, 18195.0], [7.2, 18195.0], [7.3, 18195.0], [7.4, 18195.0], [7.5, 18195.0], [7.6, 18195.0], [7.7, 18195.0], [7.8, 18195.0], [7.9, 18195.0], [8.0, 18195.0], [8.1, 18195.0], [8.2, 18195.0], [8.3, 18195.0], [8.4, 18195.0], [8.5, 18195.0], [8.6, 18195.0], [8.7, 18195.0], [8.8, 18195.0], [8.9, 18195.0], [9.0, 18199.0], [9.1, 18199.0], [9.2, 18199.0], [9.3, 18199.0], [9.4, 18199.0], [9.5, 18199.0], [9.6, 18199.0], [9.7, 18199.0], [9.8, 18199.0], [9.9, 18199.0], [10.0, 18201.0], [10.1, 18201.0], [10.2, 18201.0], [10.3, 18201.0], [10.4, 18201.0], [10.5, 18201.0], [10.6, 18201.0], [10.7, 18201.0], [10.8, 18201.0], [10.9, 18201.0], [11.0, 18202.0], [11.1, 18202.0], [11.2, 18202.0], [11.3, 18202.0], [11.4, 18202.0], [11.5, 18202.0], [11.6, 18202.0], [11.7, 18202.0], [11.8, 18202.0], [11.9, 18202.0], [12.0, 18202.0], [12.1, 18202.0], [12.2, 18202.0], [12.3, 18202.0], [12.4, 18202.0], [12.5, 18202.0], [12.6, 18202.0], [12.7, 18202.0], [12.8, 18202.0], [12.9, 18202.0], [13.0, 18203.0], [13.1, 18203.0], [13.2, 18203.0], [13.3, 18203.0], [13.4, 18203.0], [13.5, 18203.0], [13.6, 18203.0], [13.7, 18203.0], [13.8, 18203.0], [13.9, 18203.0], [14.0, 18203.0], [14.1, 18203.0], [14.2, 18203.0], [14.3, 18203.0], [14.4, 18203.0], [14.5, 18203.0], [14.6, 18203.0], [14.7, 18203.0], [14.8, 18203.0], [14.9, 18203.0], [15.0, 18204.0], [15.1, 18204.0], [15.2, 18204.0], [15.3, 18204.0], [15.4, 18204.0], [15.5, 18204.0], [15.6, 18204.0], [15.7, 18204.0], [15.8, 18204.0], [15.9, 18204.0], [16.0, 18205.0], [16.1, 18205.0], [16.2, 18205.0], [16.3, 18205.0], [16.4, 18205.0], [16.5, 18205.0], [16.6, 18205.0], [16.7, 18205.0], [16.8, 18205.0], [16.9, 18205.0], [17.0, 18206.0], [17.1, 18206.0], [17.2, 18206.0], [17.3, 18206.0], [17.4, 18206.0], [17.5, 18206.0], [17.6, 18206.0], [17.7, 18206.0], [17.8, 18206.0], [17.9, 18206.0], [18.0, 18206.0], [18.1, 18206.0], [18.2, 18206.0], [18.3, 18206.0], [18.4, 18206.0], [18.5, 18206.0], [18.6, 18206.0], [18.7, 18206.0], [18.8, 18206.0], [18.9, 18206.0], [19.0, 18206.0], [19.1, 18206.0], [19.2, 18206.0], [19.3, 18206.0], [19.4, 18206.0], [19.5, 18206.0], [19.6, 18206.0], [19.7, 18206.0], [19.8, 18206.0], [19.9, 18206.0], [20.0, 18207.0], [20.1, 18207.0], [20.2, 18207.0], [20.3, 18207.0], [20.4, 18207.0], [20.5, 18207.0], [20.6, 18207.0], [20.7, 18207.0], [20.8, 18207.0], [20.9, 18207.0], [21.0, 18207.0], [21.1, 18207.0], [21.2, 18207.0], [21.3, 18207.0], [21.4, 18207.0], [21.5, 18207.0], [21.6, 18207.0], [21.7, 18207.0], [21.8, 18207.0], [21.9, 18207.0], [22.0, 18207.0], [22.1, 18207.0], [22.2, 18207.0], [22.3, 18207.0], [22.4, 18207.0], [22.5, 18207.0], [22.6, 18207.0], [22.7, 18207.0], [22.8, 18207.0], [22.9, 18207.0], [23.0, 18207.0], [23.1, 18207.0], [23.2, 18207.0], [23.3, 18207.0], [23.4, 18207.0], [23.5, 18207.0], [23.6, 18207.0], [23.7, 18207.0], [23.8, 18207.0], [23.9, 18207.0], [24.0, 18208.0], [24.1, 18208.0], [24.2, 18208.0], [24.3, 18208.0], [24.4, 18208.0], [24.5, 18208.0], [24.6, 18208.0], [24.7, 18208.0], [24.8, 18208.0], [24.9, 18208.0], [25.0, 18209.0], [25.1, 18209.0], [25.2, 18209.0], [25.3, 18209.0], [25.4, 18209.0], [25.5, 18209.0], [25.6, 18209.0], [25.7, 18209.0], [25.8, 18209.0], [25.9, 18209.0], [26.0, 18209.0], [26.1, 18209.0], [26.2, 18209.0], [26.3, 18209.0], [26.4, 18209.0], [26.5, 18209.0], [26.6, 18209.0], [26.7, 18209.0], [26.8, 18209.0], [26.9, 18209.0], [27.0, 18209.0], [27.1, 18209.0], [27.2, 18209.0], [27.3, 18209.0], [27.4, 18209.0], [27.5, 18209.0], [27.6, 18209.0], [27.7, 18209.0], [27.8, 18209.0], [27.9, 18209.0], [28.0, 18210.0], [28.1, 18210.0], [28.2, 18210.0], [28.3, 18210.0], [28.4, 18210.0], [28.5, 18210.0], [28.6, 18210.0], [28.7, 18210.0], [28.8, 18210.0], [28.9, 18210.0], [29.0, 18210.0], [29.1, 18210.0], [29.2, 18210.0], [29.3, 18210.0], [29.4, 18210.0], [29.5, 18210.0], [29.6, 18210.0], [29.7, 18210.0], [29.8, 18210.0], [29.9, 18210.0], [30.0, 18210.0], [30.1, 18210.0], [30.2, 18210.0], [30.3, 18210.0], [30.4, 18210.0], [30.5, 18210.0], [30.6, 18210.0], [30.7, 18210.0], [30.8, 18210.0], [30.9, 18210.0], [31.0, 18211.0], [31.1, 18211.0], [31.2, 18211.0], [31.3, 18211.0], [31.4, 18211.0], [31.5, 18211.0], [31.6, 18211.0], [31.7, 18211.0], [31.8, 18211.0], [31.9, 18211.0], [32.0, 18211.0], [32.1, 18211.0], [32.2, 18211.0], [32.3, 18211.0], [32.4, 18211.0], [32.5, 18211.0], [32.6, 18211.0], [32.7, 18211.0], [32.8, 18211.0], [32.9, 18211.0], [33.0, 18212.0], [33.1, 18212.0], [33.2, 18212.0], [33.3, 18212.0], [33.4, 18212.0], [33.5, 18212.0], [33.6, 18212.0], [33.7, 18212.0], [33.8, 18212.0], [33.9, 18212.0], [34.0, 18212.0], [34.1, 18212.0], [34.2, 18212.0], [34.3, 18212.0], [34.4, 18212.0], [34.5, 18212.0], [34.6, 18212.0], [34.7, 18212.0], [34.8, 18212.0], [34.9, 18212.0], [35.0, 18213.0], [35.1, 18213.0], [35.2, 18213.0], [35.3, 18213.0], [35.4, 18213.0], [35.5, 18213.0], [35.6, 18213.0], [35.7, 18213.0], [35.8, 18213.0], [35.9, 18213.0], [36.0, 18213.0], [36.1, 18213.0], [36.2, 18213.0], [36.3, 18213.0], [36.4, 18213.0], [36.5, 18213.0], [36.6, 18213.0], [36.7, 18213.0], [36.8, 18213.0], [36.9, 18213.0], [37.0, 18214.0], [37.1, 18214.0], [37.2, 18214.0], [37.3, 18214.0], [37.4, 18214.0], [37.5, 18214.0], [37.6, 18214.0], [37.7, 18214.0], [37.8, 18214.0], [37.9, 18214.0], [38.0, 18215.0], [38.1, 18215.0], [38.2, 18215.0], [38.3, 18215.0], [38.4, 18215.0], [38.5, 18215.0], [38.6, 18215.0], [38.7, 18215.0], [38.8, 18215.0], [38.9, 18215.0], [39.0, 18215.0], [39.1, 18215.0], [39.2, 18215.0], [39.3, 18215.0], [39.4, 18215.0], [39.5, 18215.0], [39.6, 18215.0], [39.7, 18215.0], [39.8, 18215.0], [39.9, 18215.0], [40.0, 18216.0], [40.1, 18216.0], [40.2, 18216.0], [40.3, 18216.0], [40.4, 18216.0], [40.5, 18216.0], [40.6, 18216.0], [40.7, 18216.0], [40.8, 18216.0], [40.9, 18216.0], [41.0, 18216.0], [41.1, 18216.0], [41.2, 18216.0], [41.3, 18216.0], [41.4, 18216.0], [41.5, 18216.0], [41.6, 18216.0], [41.7, 18216.0], [41.8, 18216.0], [41.9, 18216.0], [42.0, 18217.0], [42.1, 18217.0], [42.2, 18217.0], [42.3, 18217.0], [42.4, 18217.0], [42.5, 18217.0], [42.6, 18217.0], [42.7, 18217.0], [42.8, 18217.0], [42.9, 18217.0], [43.0, 18217.0], [43.1, 18217.0], [43.2, 18217.0], [43.3, 18217.0], [43.4, 18217.0], [43.5, 18217.0], [43.6, 18217.0], [43.7, 18217.0], [43.8, 18217.0], [43.9, 18217.0], [44.0, 18217.0], [44.1, 18217.0], [44.2, 18217.0], [44.3, 18217.0], [44.4, 18217.0], [44.5, 18217.0], [44.6, 18217.0], [44.7, 18217.0], [44.8, 18217.0], [44.9, 18217.0], [45.0, 18218.0], [45.1, 18218.0], [45.2, 18218.0], [45.3, 18218.0], [45.4, 18218.0], [45.5, 18218.0], [45.6, 18218.0], [45.7, 18218.0], [45.8, 18218.0], [45.9, 18218.0], [46.0, 18218.0], [46.1, 18218.0], [46.2, 18218.0], [46.3, 18218.0], [46.4, 18218.0], [46.5, 18218.0], [46.6, 18218.0], [46.7, 18218.0], [46.8, 18218.0], [46.9, 18218.0], [47.0, 18219.0], [47.1, 18219.0], [47.2, 18219.0], [47.3, 18219.0], [47.4, 18219.0], [47.5, 18219.0], [47.6, 18219.0], [47.7, 18219.0], [47.8, 18219.0], [47.9, 18219.0], [48.0, 18220.0], [48.1, 18220.0], [48.2, 18220.0], [48.3, 18220.0], [48.4, 18220.0], [48.5, 18220.0], [48.6, 18220.0], [48.7, 18220.0], [48.8, 18220.0], [48.9, 18220.0], [49.0, 18220.0], [49.1, 18220.0], [49.2, 18220.0], [49.3, 18220.0], [49.4, 18220.0], [49.5, 18220.0], [49.6, 18220.0], [49.7, 18220.0], [49.8, 18220.0], [49.9, 18220.0], [50.0, 18220.0], [50.1, 18220.0], [50.2, 18220.0], [50.3, 18220.0], [50.4, 18220.0], [50.5, 18220.0], [50.6, 18220.0], [50.7, 18220.0], [50.8, 18220.0], [50.9, 18220.0], [51.0, 18221.0], [51.1, 18221.0], [51.2, 18221.0], [51.3, 18221.0], [51.4, 18221.0], [51.5, 18221.0], [51.6, 18221.0], [51.7, 18221.0], [51.8, 18221.0], [51.9, 18221.0], [52.0, 18221.0], [52.1, 18221.0], [52.2, 18221.0], [52.3, 18221.0], [52.4, 18221.0], [52.5, 18221.0], [52.6, 18221.0], [52.7, 18221.0], [52.8, 18221.0], [52.9, 18221.0], [53.0, 18222.0], [53.1, 18222.0], [53.2, 18222.0], [53.3, 18222.0], [53.4, 18222.0], [53.5, 18222.0], [53.6, 18222.0], [53.7, 18222.0], [53.8, 18222.0], [53.9, 18222.0], [54.0, 18223.0], [54.1, 18223.0], [54.2, 18223.0], [54.3, 18223.0], [54.4, 18223.0], [54.5, 18223.0], [54.6, 18223.0], [54.7, 18223.0], [54.8, 18223.0], [54.9, 18223.0], [55.0, 18223.0], [55.1, 18223.0], [55.2, 18223.0], [55.3, 18223.0], [55.4, 18223.0], [55.5, 18223.0], [55.6, 18223.0], [55.7, 18223.0], [55.8, 18223.0], [55.9, 18223.0], [56.0, 18223.0], [56.1, 18223.0], [56.2, 18223.0], [56.3, 18223.0], [56.4, 18223.0], [56.5, 18223.0], [56.6, 18223.0], [56.7, 18223.0], [56.8, 18223.0], [56.9, 18223.0], [57.0, 18224.0], [57.1, 18224.0], [57.2, 18224.0], [57.3, 18224.0], [57.4, 18224.0], [57.5, 18224.0], [57.6, 18224.0], [57.7, 18224.0], [57.8, 18224.0], [57.9, 18224.0], [58.0, 18224.0], [58.1, 18224.0], [58.2, 18224.0], [58.3, 18224.0], [58.4, 18224.0], [58.5, 18224.0], [58.6, 18224.0], [58.7, 18224.0], [58.8, 18224.0], [58.9, 18224.0], [59.0, 18224.0], [59.1, 18224.0], [59.2, 18224.0], [59.3, 18224.0], [59.4, 18224.0], [59.5, 18224.0], [59.6, 18224.0], [59.7, 18224.0], [59.8, 18224.0], [59.9, 18224.0], [60.0, 18225.0], [60.1, 18225.0], [60.2, 18225.0], [60.3, 18225.0], [60.4, 18225.0], [60.5, 18225.0], [60.6, 18225.0], [60.7, 18225.0], [60.8, 18225.0], [60.9, 18225.0], [61.0, 18226.0], [61.1, 18226.0], [61.2, 18226.0], [61.3, 18226.0], [61.4, 18226.0], [61.5, 18226.0], [61.6, 18226.0], [61.7, 18226.0], [61.8, 18226.0], [61.9, 18226.0], [62.0, 18226.0], [62.1, 18226.0], [62.2, 18226.0], [62.3, 18226.0], [62.4, 18226.0], [62.5, 18226.0], [62.6, 18226.0], [62.7, 18226.0], [62.8, 18226.0], [62.9, 18226.0], [63.0, 18227.0], [63.1, 18227.0], [63.2, 18227.0], [63.3, 18227.0], [63.4, 18227.0], [63.5, 18227.0], [63.6, 18227.0], [63.7, 18227.0], [63.8, 18227.0], [63.9, 18227.0], [64.0, 18229.0], [64.1, 18229.0], [64.2, 18229.0], [64.3, 18229.0], [64.4, 18229.0], [64.5, 18229.0], [64.6, 18229.0], [64.7, 18229.0], [64.8, 18229.0], [64.9, 18229.0], [65.0, 18229.0], [65.1, 18229.0], [65.2, 18229.0], [65.3, 18229.0], [65.4, 18229.0], [65.5, 18229.0], [65.6, 18229.0], [65.7, 18229.0], [65.8, 18229.0], [65.9, 18229.0], [66.0, 18230.0], [66.1, 18230.0], [66.2, 18230.0], [66.3, 18230.0], [66.4, 18230.0], [66.5, 18230.0], [66.6, 18230.0], [66.7, 18230.0], [66.8, 18230.0], [66.9, 18230.0], [67.0, 18230.0], [67.1, 18230.0], [67.2, 18230.0], [67.3, 18230.0], [67.4, 18230.0], [67.5, 18230.0], [67.6, 18230.0], [67.7, 18230.0], [67.8, 18230.0], [67.9, 18230.0], [68.0, 18230.0], [68.1, 18230.0], [68.2, 18230.0], [68.3, 18230.0], [68.4, 18230.0], [68.5, 18230.0], [68.6, 18230.0], [68.7, 18230.0], [68.8, 18230.0], [68.9, 18230.0], [69.0, 18236.0], [69.1, 18236.0], [69.2, 18236.0], [69.3, 18236.0], [69.4, 18236.0], [69.5, 18236.0], [69.6, 18236.0], [69.7, 18236.0], [69.8, 18236.0], [69.9, 18236.0], [70.0, 18236.0], [70.1, 18236.0], [70.2, 18236.0], [70.3, 18236.0], [70.4, 18236.0], [70.5, 18236.0], [70.6, 18236.0], [70.7, 18236.0], [70.8, 18236.0], [70.9, 18236.0], [71.0, 18237.0], [71.1, 18237.0], [71.2, 18237.0], [71.3, 18237.0], [71.4, 18237.0], [71.5, 18237.0], [71.6, 18237.0], [71.7, 18237.0], [71.8, 18237.0], [71.9, 18237.0], [72.0, 18238.0], [72.1, 18238.0], [72.2, 18238.0], [72.3, 18238.0], [72.4, 18238.0], [72.5, 18238.0], [72.6, 18238.0], [72.7, 18238.0], [72.8, 18238.0], [72.9, 18238.0], [73.0, 18241.0], [73.1, 18241.0], [73.2, 18241.0], [73.3, 18241.0], [73.4, 18241.0], [73.5, 18241.0], [73.6, 18241.0], [73.7, 18241.0], [73.8, 18241.0], [73.9, 18241.0], [74.0, 18241.0], [74.1, 18241.0], [74.2, 18241.0], [74.3, 18241.0], [74.4, 18241.0], [74.5, 18241.0], [74.6, 18241.0], [74.7, 18241.0], [74.8, 18241.0], [74.9, 18241.0], [75.0, 18244.0], [75.1, 18244.0], [75.2, 18244.0], [75.3, 18244.0], [75.4, 18244.0], [75.5, 18244.0], [75.6, 18244.0], [75.7, 18244.0], [75.8, 18244.0], [75.9, 18244.0], [76.0, 18247.0], [76.1, 18247.0], [76.2, 18247.0], [76.3, 18247.0], [76.4, 18247.0], [76.5, 18247.0], [76.6, 18247.0], [76.7, 18247.0], [76.8, 18247.0], [76.9, 18247.0], [77.0, 18248.0], [77.1, 18248.0], [77.2, 18248.0], [77.3, 18248.0], [77.4, 18248.0], [77.5, 18248.0], [77.6, 18248.0], [77.7, 18248.0], [77.8, 18248.0], [77.9, 18248.0], [78.0, 18248.0], [78.1, 18248.0], [78.2, 18248.0], [78.3, 18248.0], [78.4, 18248.0], [78.5, 18248.0], [78.6, 18248.0], [78.7, 18248.0], [78.8, 18248.0], [78.9, 18248.0], [79.0, 18249.0], [79.1, 18249.0], [79.2, 18249.0], [79.3, 18249.0], [79.4, 18249.0], [79.5, 18249.0], [79.6, 18249.0], [79.7, 18249.0], [79.8, 18249.0], [79.9, 18249.0], [80.0, 18251.0], [80.1, 18251.0], [80.2, 18251.0], [80.3, 18251.0], [80.4, 18251.0], [80.5, 18251.0], [80.6, 18251.0], [80.7, 18251.0], [80.8, 18251.0], [80.9, 18251.0], [81.0, 18253.0], [81.1, 18253.0], [81.2, 18253.0], [81.3, 18253.0], [81.4, 18253.0], [81.5, 18253.0], [81.6, 18253.0], [81.7, 18253.0], [81.8, 18253.0], [81.9, 18253.0], [82.0, 18254.0], [82.1, 18254.0], [82.2, 18254.0], [82.3, 18254.0], [82.4, 18254.0], [82.5, 18254.0], [82.6, 18254.0], [82.7, 18254.0], [82.8, 18254.0], [82.9, 18254.0], [83.0, 18256.0], [83.1, 18256.0], [83.2, 18256.0], [83.3, 18256.0], [83.4, 18256.0], [83.5, 18256.0], [83.6, 18256.0], [83.7, 18256.0], [83.8, 18256.0], [83.9, 18256.0], [84.0, 18265.0], [84.1, 18265.0], [84.2, 18265.0], [84.3, 18265.0], [84.4, 18265.0], [84.5, 18265.0], [84.6, 18265.0], [84.7, 18265.0], [84.8, 18265.0], [84.9, 18265.0], [85.0, 18267.0], [85.1, 18267.0], [85.2, 18267.0], [85.3, 18267.0], [85.4, 18267.0], [85.5, 18267.0], [85.6, 18267.0], [85.7, 18267.0], [85.8, 18267.0], [85.9, 18267.0], [86.0, 18269.0], [86.1, 18269.0], [86.2, 18269.0], [86.3, 18269.0], [86.4, 18269.0], [86.5, 18269.0], [86.6, 18269.0], [86.7, 18269.0], [86.8, 18269.0], [86.9, 18269.0], [87.0, 18271.0], [87.1, 18271.0], [87.2, 18271.0], [87.3, 18271.0], [87.4, 18271.0], [87.5, 18271.0], [87.6, 18271.0], [87.7, 18271.0], [87.8, 18271.0], [87.9, 18271.0], [88.0, 18272.0], [88.1, 18272.0], [88.2, 18272.0], [88.3, 18272.0], [88.4, 18272.0], [88.5, 18272.0], [88.6, 18272.0], [88.7, 18272.0], [88.8, 18272.0], [88.9, 18272.0], [89.0, 18273.0], [89.1, 18273.0], [89.2, 18273.0], [89.3, 18273.0], [89.4, 18273.0], [89.5, 18273.0], [89.6, 18273.0], [89.7, 18273.0], [89.8, 18273.0], [89.9, 18273.0], [90.0, 18273.0], [90.1, 18273.0], [90.2, 18273.0], [90.3, 18273.0], [90.4, 18273.0], [90.5, 18273.0], [90.6, 18273.0], [90.7, 18273.0], [90.8, 18273.0], [90.9, 18273.0], [91.0, 18275.0], [91.1, 18275.0], [91.2, 18275.0], [91.3, 18275.0], [91.4, 18275.0], [91.5, 18275.0], [91.6, 18275.0], [91.7, 18275.0], [91.8, 18275.0], [91.9, 18275.0], [92.0, 18277.0], [92.1, 18277.0], [92.2, 18277.0], [92.3, 18277.0], [92.4, 18277.0], [92.5, 18277.0], [92.6, 18277.0], [92.7, 18277.0], [92.8, 18277.0], [92.9, 18277.0], [93.0, 18278.0], [93.1, 18278.0], [93.2, 18278.0], [93.3, 18278.0], [93.4, 18278.0], [93.5, 18278.0], [93.6, 18278.0], [93.7, 18278.0], [93.8, 18278.0], [93.9, 18278.0], [94.0, 18279.0], [94.1, 18279.0], [94.2, 18279.0], [94.3, 18279.0], [94.4, 18279.0], [94.5, 18279.0], [94.6, 18279.0], [94.7, 18279.0], [94.8, 18279.0], [94.9, 18279.0], [95.0, 18291.0], [95.1, 18291.0], [95.2, 18291.0], [95.3, 18291.0], [95.4, 18291.0], [95.5, 18291.0], [95.6, 18291.0], [95.7, 18291.0], [95.8, 18291.0], [95.9, 18291.0], [96.0, 18292.0], [96.1, 18292.0], [96.2, 18292.0], [96.3, 18292.0], [96.4, 18292.0], [96.5, 18292.0], [96.6, 18292.0], [96.7, 18292.0], [96.8, 18292.0], [96.9, 18292.0], [97.0, 18294.0], [97.1, 18294.0], [97.2, 18294.0], [97.3, 18294.0], [97.4, 18294.0], [97.5, 18294.0], [97.6, 18294.0], [97.7, 18294.0], [97.8, 18294.0], [97.9, 18294.0], [98.0, 18303.0], [98.1, 18303.0], [98.2, 18303.0], [98.3, 18303.0], [98.4, 18303.0], [98.5, 18303.0], [98.6, 18303.0], [98.7, 18303.0], [98.8, 18303.0], [98.9, 18303.0], [99.0, 18654.0], [99.1, 18654.0], [99.2, 18654.0], [99.3, 18654.0], [99.4, 18654.0], [99.5, 18654.0], [99.6, 18654.0], [99.7, 18654.0], [99.8, 18654.0], [99.9, 18654.0]], "isOverall": false, "label": "GraphQL HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 18100.0, "maxY": 88.0, "series": [{"data": [[18200.0, 88.0], [18300.0, 1.0], [18100.0, 10.0], [18600.0, 1.0]], "isOverall": false, "label": "GraphQL HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 18600.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.73045124E12, "maxY": 1.0, "series": [{"data": [[1.73045238E12, 1.0], [1.73045256E12, 1.0], [1.73045136E12, 1.0], [1.73045148E12, 1.0], [1.73045178E12, 1.0], [1.73045208E12, 1.0], [1.73045286E12, 1.0], [1.73045124E12, 1.0], [1.73045154E12, 1.0], [1.73045184E12, 1.0], [1.73045166E12, 1.0], [1.73045196E12, 1.0], [1.73045298E12, 1.0], [1.73045226E12, 1.0], [1.73045268E12, 1.0], [1.73045142E12, 1.0], [1.73045172E12, 1.0], [1.73045202E12, 1.0], [1.73045292E12, 1.0], [1.73045232E12, 1.0], [1.73045262E12, 1.0], [1.73045214E12, 1.0], [1.7304528E12, 1.0], [1.7304525E12, 1.0], [1.7304519E12, 1.0], [1.73045304E12, 1.0], [1.7304522E12, 1.0], [1.73045274E12, 1.0], [1.73045244E12, 1.0], [1.7304513E12, 1.0], [1.7304516E12, 1.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73045304E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 18231.44, "minX": 1.0, "maxY": 18231.44, "series": [{"data": [[1.0, 18231.44]], "isOverall": false, "label": "GraphQL HTTP Request", "isController": false}, {"data": [[1.0, 18231.44]], "isOverall": false, "label": "GraphQL HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 45.06666666666667, "minX": 1.73045124E12, "maxY": 894.4, "series": [{"data": [[1.73045238E12, 670.8], [1.73045256E12, 670.8], [1.73045136E12, 670.8], [1.73045148E12, 894.4], [1.73045178E12, 670.8], [1.73045208E12, 670.8], [1.73045286E12, 670.7666666666667], [1.73045124E12, 447.2], [1.73045154E12, 670.8], [1.73045184E12, 670.7833333333333], [1.73045166E12, 670.8], [1.73045196E12, 670.8], [1.73045298E12, 670.7833333333333], [1.73045226E12, 670.8], [1.73045268E12, 670.7833333333333], [1.73045142E12, 670.8], [1.73045172E12, 894.4], [1.73045202E12, 670.8], [1.73045292E12, 894.3833333333333], [1.73045232E12, 894.3833333333333], [1.73045262E12, 670.8], [1.73045214E12, 894.4], [1.7304528E12, 670.8], [1.7304525E12, 894.4], [1.7304519E12, 894.4], [1.73045304E12, 447.2], [1.7304522E12, 670.7833333333333], [1.73045274E12, 894.4], [1.73045244E12, 670.8], [1.7304513E12, 894.3833333333333], [1.7304516E12, 670.8]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.73045238E12, 67.6], [1.73045256E12, 67.6], [1.73045136E12, 67.6], [1.73045148E12, 90.13333333333334], [1.73045178E12, 67.6], [1.73045208E12, 67.6], [1.73045286E12, 67.56666666666666], [1.73045124E12, 45.06666666666667], [1.73045154E12, 67.6], [1.73045184E12, 67.58333333333333], [1.73045166E12, 67.6], [1.73045196E12, 67.6], [1.73045298E12, 67.58333333333333], [1.73045226E12, 67.6], [1.73045268E12, 67.58333333333333], [1.73045142E12, 67.6], [1.73045172E12, 90.13333333333334], [1.73045202E12, 67.6], [1.73045292E12, 90.11666666666666], [1.73045232E12, 90.11666666666666], [1.73045262E12, 67.6], [1.73045214E12, 90.13333333333334], [1.7304528E12, 67.6], [1.7304525E12, 90.13333333333334], [1.7304519E12, 90.13333333333334], [1.73045304E12, 45.06666666666667], [1.7304522E12, 67.58333333333333], [1.73045274E12, 90.13333333333334], [1.73045244E12, 67.6], [1.7304513E12, 90.11666666666666], [1.7304516E12, 67.6]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73045304E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 18190.666666666668, "minX": 1.73045124E12, "maxY": 18464.5, "series": [{"data": [[1.73045238E12, 18218.666666666668], [1.73045256E12, 18211.666666666668], [1.73045136E12, 18287.333333333332], [1.73045148E12, 18252.75], [1.73045178E12, 18236.0], [1.73045208E12, 18203.333333333332], [1.73045286E12, 18208.666666666668], [1.73045124E12, 18464.5], [1.73045154E12, 18261.333333333332], [1.73045184E12, 18249.333333333332], [1.73045166E12, 18249.333333333332], [1.73045196E12, 18210.666666666668], [1.73045298E12, 18190.666666666668], [1.73045226E12, 18216.0], [1.73045268E12, 18211.0], [1.73045142E12, 18224.333333333332], [1.73045172E12, 18258.25], [1.73045202E12, 18225.0], [1.73045292E12, 18205.25], [1.73045232E12, 18220.75], [1.73045262E12, 18216.666666666668], [1.73045214E12, 18205.0], [1.7304528E12, 18210.333333333332], [1.7304525E12, 18211.75], [1.7304519E12, 18223.75], [1.73045304E12, 18219.5], [1.7304522E12, 18214.333333333332], [1.73045274E12, 18212.25], [1.73045244E12, 18211.666666666668], [1.7304513E12, 18269.25], [1.7304516E12, 18257.0]], "isOverall": false, "label": "GraphQL HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73045304E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 18190.333333333332, "minX": 1.73045124E12, "maxY": 18463.0, "series": [{"data": [[1.73045238E12, 18218.666666666668], [1.73045256E12, 18211.666666666668], [1.73045136E12, 18287.333333333332], [1.73045148E12, 18252.75], [1.73045178E12, 18235.666666666668], [1.73045208E12, 18203.333333333332], [1.73045286E12, 18208.666666666668], [1.73045124E12, 18463.0], [1.73045154E12, 18261.0], [1.73045184E12, 18249.0], [1.73045166E12, 18249.333333333332], [1.73045196E12, 18210.666666666668], [1.73045298E12, 18190.333333333332], [1.73045226E12, 18216.0], [1.73045268E12, 18211.0], [1.73045142E12, 18224.333333333332], [1.73045172E12, 18258.25], [1.73045202E12, 18224.0], [1.73045292E12, 18205.25], [1.73045232E12, 18220.75], [1.73045262E12, 18216.666666666668], [1.73045214E12, 18204.5], [1.7304528E12, 18210.0], [1.7304525E12, 18211.75], [1.7304519E12, 18223.75], [1.73045304E12, 18219.5], [1.7304522E12, 18214.333333333332], [1.73045274E12, 18212.0], [1.73045244E12, 18211.666666666668], [1.7304513E12, 18269.0], [1.7304516E12, 18257.0]], "isOverall": false, "label": "GraphQL HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73045304E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.25, "minX": 1.73045124E12, "maxY": 6.0, "series": [{"data": [[1.73045238E12, 1.3333333333333333], [1.73045256E12, 1.0], [1.73045136E12, 1.3333333333333333], [1.73045148E12, 1.0], [1.73045178E12, 0.6666666666666666], [1.73045208E12, 0.6666666666666666], [1.73045286E12, 0.6666666666666666], [1.73045124E12, 6.0], [1.73045154E12, 1.0], [1.73045184E12, 1.0], [1.73045166E12, 1.3333333333333335], [1.73045196E12, 0.6666666666666667], [1.73045298E12, 1.0], [1.73045226E12, 1.3333333333333333], [1.73045268E12, 1.0], [1.73045142E12, 0.6666666666666666], [1.73045172E12, 1.25], [1.73045202E12, 0.6666666666666666], [1.73045292E12, 1.25], [1.73045232E12, 0.75], [1.73045262E12, 1.0], [1.73045214E12, 1.0], [1.7304528E12, 1.0], [1.7304525E12, 0.75], [1.7304519E12, 1.25], [1.73045304E12, 1.5], [1.7304522E12, 1.0], [1.73045274E12, 0.75], [1.73045244E12, 0.33333333333333337], [1.7304513E12, 0.25], [1.7304516E12, 1.0]], "isOverall": false, "label": "GraphQL HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73045304E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 18187.0, "minX": 1.73045124E12, "maxY": 18654.0, "series": [{"data": [[1.73045238E12, 18224.0], [1.73045256E12, 18225.0], [1.73045136E12, 18303.0], [1.73045148E12, 18277.0], [1.73045178E12, 18249.0], [1.73045208E12, 18214.0], [1.73045286E12, 18217.0], [1.73045124E12, 18654.0], [1.73045154E12, 18272.0], [1.73045184E12, 18256.0], [1.73045166E12, 18265.0], [1.73045196E12, 18215.0], [1.73045298E12, 18193.0], [1.73045226E12, 18223.0], [1.73045268E12, 18217.0], [1.73045142E12, 18229.0], [1.73045172E12, 18279.0], [1.73045202E12, 18244.0], [1.73045292E12, 18220.0], [1.73045232E12, 18230.0], [1.73045262E12, 18226.0], [1.73045214E12, 18216.0], [1.7304528E12, 18223.0], [1.7304525E12, 18229.0], [1.7304519E12, 18236.0], [1.73045304E12, 18236.0], [1.7304522E12, 18227.0], [1.73045274E12, 18222.0], [1.73045244E12, 18213.0], [1.7304513E12, 18294.0], [1.7304516E12, 18278.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.73045238E12, 18211.0], [1.73045256E12, 18204.0], [1.73045136E12, 18267.0], [1.73045148E12, 18213.0], [1.73045178E12, 18212.0], [1.73045208E12, 18194.0], [1.73045286E12, 18201.0], [1.73045124E12, 18275.0], [1.73045154E12, 18241.0], [1.73045184E12, 18241.0], [1.73045166E12, 18230.0], [1.73045196E12, 18207.0], [1.73045298E12, 18187.0], [1.73045226E12, 18207.0], [1.73045268E12, 18207.0], [1.73045142E12, 18221.0], [1.73045172E12, 18237.0], [1.73045202E12, 18205.0], [1.73045292E12, 18189.0], [1.73045232E12, 18216.0], [1.73045262E12, 18207.0], [1.73045214E12, 18194.0], [1.7304528E12, 18202.0], [1.7304525E12, 18195.0], [1.7304519E12, 18209.0], [1.73045304E12, 18203.0], [1.7304522E12, 18192.0], [1.73045274E12, 18206.0], [1.73045244E12, 18210.0], [1.7304513E12, 18238.0], [1.7304516E12, 18220.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.73045238E12, 18224.0], [1.73045256E12, 18225.0], [1.73045136E12, 18303.0], [1.73045148E12, 18277.0], [1.73045178E12, 18249.0], [1.73045208E12, 18214.0], [1.73045286E12, 18217.0], [1.73045124E12, 18654.0], [1.73045154E12, 18272.0], [1.73045184E12, 18256.0], [1.73045166E12, 18265.0], [1.73045196E12, 18215.0], [1.73045298E12, 18193.0], [1.73045226E12, 18223.0], [1.73045268E12, 18217.0], [1.73045142E12, 18229.0], [1.73045172E12, 18279.0], [1.73045202E12, 18244.0], [1.73045292E12, 18220.0], [1.73045232E12, 18230.0], [1.73045262E12, 18226.0], [1.73045214E12, 18216.0], [1.7304528E12, 18223.0], [1.7304525E12, 18229.0], [1.7304519E12, 18236.0], [1.73045304E12, 18236.0], [1.7304522E12, 18227.0], [1.73045274E12, 18222.0], [1.73045244E12, 18213.0], [1.7304513E12, 18294.0], [1.7304516E12, 18278.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.73045238E12, 18224.0], [1.73045256E12, 18225.0], [1.73045136E12, 18303.0], [1.73045148E12, 18277.0], [1.73045178E12, 18249.0], [1.73045208E12, 18214.0], [1.73045286E12, 18217.0], [1.73045124E12, 18654.0], [1.73045154E12, 18272.0], [1.73045184E12, 18256.0], [1.73045166E12, 18265.0], [1.73045196E12, 18215.0], [1.73045298E12, 18193.0], [1.73045226E12, 18223.0], [1.73045268E12, 18217.0], [1.73045142E12, 18229.0], [1.73045172E12, 18279.0], [1.73045202E12, 18244.0], [1.73045292E12, 18220.0], [1.73045232E12, 18230.0], [1.73045262E12, 18226.0], [1.73045214E12, 18216.0], [1.7304528E12, 18223.0], [1.7304525E12, 18229.0], [1.7304519E12, 18236.0], [1.73045304E12, 18236.0], [1.7304522E12, 18227.0], [1.73045274E12, 18222.0], [1.73045244E12, 18213.0], [1.7304513E12, 18294.0], [1.7304516E12, 18278.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.73045238E12, 18221.0], [1.73045256E12, 18206.0], [1.73045136E12, 18292.0], [1.73045148E12, 18260.5], [1.73045178E12, 18247.0], [1.73045208E12, 18202.0], [1.73045286E12, 18208.0], [1.73045124E12, 18464.5], [1.73045154E12, 18271.0], [1.73045184E12, 18251.0], [1.73045166E12, 18253.0], [1.73045196E12, 18210.0], [1.73045298E12, 18192.0], [1.73045226E12, 18218.0], [1.73045268E12, 18209.0], [1.73045142E12, 18223.0], [1.73045172E12, 18258.5], [1.73045202E12, 18226.0], [1.73045292E12, 18206.0], [1.73045232E12, 18218.5], [1.73045262E12, 18217.0], [1.73045214E12, 18205.0], [1.7304528E12, 18206.0], [1.7304525E12, 18211.5], [1.7304519E12, 18225.0], [1.73045304E12, 18219.5], [1.7304522E12, 18224.0], [1.73045274E12, 18210.5], [1.73045244E12, 18212.0], [1.7304513E12, 18272.5], [1.7304516E12, 18273.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.73045238E12, 18224.0], [1.73045256E12, 18225.0], [1.73045136E12, 18303.0], [1.73045148E12, 18277.0], [1.73045178E12, 18249.0], [1.73045208E12, 18214.0], [1.73045286E12, 18217.0], [1.73045124E12, 18654.0], [1.73045154E12, 18272.0], [1.73045184E12, 18256.0], [1.73045166E12, 18265.0], [1.73045196E12, 18215.0], [1.73045298E12, 18193.0], [1.73045226E12, 18223.0], [1.73045268E12, 18217.0], [1.73045142E12, 18229.0], [1.73045172E12, 18279.0], [1.73045202E12, 18244.0], [1.73045292E12, 18220.0], [1.73045232E12, 18230.0], [1.73045262E12, 18226.0], [1.73045214E12, 18216.0], [1.7304528E12, 18223.0], [1.7304525E12, 18229.0], [1.7304519E12, 18236.0], [1.73045304E12, 18236.0], [1.7304522E12, 18227.0], [1.73045274E12, 18222.0], [1.73045244E12, 18213.0], [1.7304513E12, 18294.0], [1.7304516E12, 18278.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73045304E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 18220.0, "minX": 1.0, "maxY": 18220.0, "series": [{"data": [[1.0, 18220.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 18220.0, "minX": 1.0, "maxY": 18220.0, "series": [{"data": [[1.0, 18220.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.73045124E12, "maxY": 0.06666666666666667, "series": [{"data": [[1.73045238E12, 0.05], [1.73045256E12, 0.05], [1.73045136E12, 0.05], [1.73045148E12, 0.06666666666666667], [1.73045178E12, 0.05], [1.73045208E12, 0.05], [1.73045286E12, 0.05], [1.73045124E12, 0.05], [1.73045154E12, 0.05], [1.73045184E12, 0.05], [1.73045166E12, 0.05], [1.73045196E12, 0.05], [1.73045298E12, 0.05], [1.73045226E12, 0.05], [1.73045268E12, 0.05], [1.73045142E12, 0.05], [1.73045172E12, 0.06666666666666667], [1.73045202E12, 0.05], [1.73045292E12, 0.06666666666666667], [1.73045232E12, 0.06666666666666667], [1.73045262E12, 0.05], [1.73045214E12, 0.06666666666666667], [1.7304528E12, 0.05], [1.7304525E12, 0.06666666666666667], [1.7304519E12, 0.06666666666666667], [1.73045304E12, 0.016666666666666666], [1.7304522E12, 0.05], [1.73045274E12, 0.06666666666666667], [1.73045244E12, 0.05], [1.7304513E12, 0.06666666666666667], [1.7304516E12, 0.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73045304E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.73045124E12, "maxY": 0.06666666666666667, "series": [{"data": [[1.73045238E12, 0.05], [1.73045256E12, 0.05], [1.73045136E12, 0.05], [1.73045148E12, 0.06666666666666667], [1.73045178E12, 0.05], [1.73045208E12, 0.05], [1.73045286E12, 0.05], [1.73045124E12, 0.03333333333333333], [1.73045154E12, 0.05], [1.73045184E12, 0.05], [1.73045166E12, 0.05], [1.73045196E12, 0.05], [1.73045298E12, 0.05], [1.73045226E12, 0.05], [1.73045268E12, 0.05], [1.73045142E12, 0.05], [1.73045172E12, 0.06666666666666667], [1.73045202E12, 0.05], [1.73045292E12, 0.06666666666666667], [1.73045232E12, 0.06666666666666667], [1.73045262E12, 0.05], [1.73045214E12, 0.06666666666666667], [1.7304528E12, 0.05], [1.7304525E12, 0.06666666666666667], [1.7304519E12, 0.06666666666666667], [1.73045304E12, 0.03333333333333333], [1.7304522E12, 0.05], [1.73045274E12, 0.06666666666666667], [1.73045244E12, 0.05], [1.7304513E12, 0.06666666666666667], [1.7304516E12, 0.05]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73045304E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.73045124E12, "maxY": 0.06666666666666667, "series": [{"data": [[1.73045238E12, 0.05], [1.73045256E12, 0.05], [1.73045136E12, 0.05], [1.73045148E12, 0.06666666666666667], [1.73045178E12, 0.05], [1.73045208E12, 0.05], [1.73045286E12, 0.05], [1.73045124E12, 0.03333333333333333], [1.73045154E12, 0.05], [1.73045184E12, 0.05], [1.73045166E12, 0.05], [1.73045196E12, 0.05], [1.73045298E12, 0.05], [1.73045226E12, 0.05], [1.73045268E12, 0.05], [1.73045142E12, 0.05], [1.73045172E12, 0.06666666666666667], [1.73045202E12, 0.05], [1.73045292E12, 0.06666666666666667], [1.73045232E12, 0.06666666666666667], [1.73045262E12, 0.05], [1.73045214E12, 0.06666666666666667], [1.7304528E12, 0.05], [1.7304525E12, 0.06666666666666667], [1.7304519E12, 0.06666666666666667], [1.73045304E12, 0.03333333333333333], [1.7304522E12, 0.05], [1.73045274E12, 0.06666666666666667], [1.73045244E12, 0.05], [1.7304513E12, 0.06666666666666667], [1.7304516E12, 0.05]], "isOverall": false, "label": "GraphQL HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73045304E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.03333333333333333, "minX": 1.73045124E12, "maxY": 0.06666666666666667, "series": [{"data": [[1.73045238E12, 0.05], [1.73045256E12, 0.05], [1.73045136E12, 0.05], [1.73045148E12, 0.06666666666666667], [1.73045178E12, 0.05], [1.73045208E12, 0.05], [1.73045286E12, 0.05], [1.73045124E12, 0.03333333333333333], [1.73045154E12, 0.05], [1.73045184E12, 0.05], [1.73045166E12, 0.05], [1.73045196E12, 0.05], [1.73045298E12, 0.05], [1.73045226E12, 0.05], [1.73045268E12, 0.05], [1.73045142E12, 0.05], [1.73045172E12, 0.06666666666666667], [1.73045202E12, 0.05], [1.73045292E12, 0.06666666666666667], [1.73045232E12, 0.06666666666666667], [1.73045262E12, 0.05], [1.73045214E12, 0.06666666666666667], [1.7304528E12, 0.05], [1.7304525E12, 0.06666666666666667], [1.7304519E12, 0.06666666666666667], [1.73045304E12, 0.03333333333333333], [1.7304522E12, 0.05], [1.73045274E12, 0.06666666666666667], [1.73045244E12, 0.05], [1.7304513E12, 0.06666666666666667], [1.7304516E12, 0.05]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73045304E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

