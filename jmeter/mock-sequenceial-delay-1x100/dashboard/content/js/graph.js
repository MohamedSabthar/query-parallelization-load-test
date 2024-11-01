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
        data: {"result": {"minY": 35310.0, "minX": 0.0, "maxY": 35928.0, "series": [{"data": [[0.0, 35310.0], [0.1, 35310.0], [0.2, 35310.0], [0.3, 35310.0], [0.4, 35310.0], [0.5, 35310.0], [0.6, 35310.0], [0.7, 35310.0], [0.8, 35310.0], [0.9, 35310.0], [1.0, 35337.0], [1.1, 35337.0], [1.2, 35337.0], [1.3, 35337.0], [1.4, 35337.0], [1.5, 35337.0], [1.6, 35337.0], [1.7, 35337.0], [1.8, 35337.0], [1.9, 35337.0], [2.0, 35345.0], [2.1, 35345.0], [2.2, 35345.0], [2.3, 35345.0], [2.4, 35345.0], [2.5, 35345.0], [2.6, 35345.0], [2.7, 35345.0], [2.8, 35345.0], [2.9, 35345.0], [3.0, 35346.0], [3.1, 35346.0], [3.2, 35346.0], [3.3, 35346.0], [3.4, 35346.0], [3.5, 35346.0], [3.6, 35346.0], [3.7, 35346.0], [3.8, 35346.0], [3.9, 35346.0], [4.0, 35359.0], [4.1, 35359.0], [4.2, 35359.0], [4.3, 35359.0], [4.4, 35359.0], [4.5, 35359.0], [4.6, 35359.0], [4.7, 35359.0], [4.8, 35359.0], [4.9, 35359.0], [5.0, 35362.0], [5.1, 35362.0], [5.2, 35362.0], [5.3, 35362.0], [5.4, 35362.0], [5.5, 35362.0], [5.6, 35362.0], [5.7, 35362.0], [5.8, 35362.0], [5.9, 35362.0], [6.0, 35364.0], [6.1, 35364.0], [6.2, 35364.0], [6.3, 35364.0], [6.4, 35364.0], [6.5, 35364.0], [6.6, 35364.0], [6.7, 35364.0], [6.8, 35364.0], [6.9, 35364.0], [7.0, 35365.0], [7.1, 35365.0], [7.2, 35365.0], [7.3, 35365.0], [7.4, 35365.0], [7.5, 35365.0], [7.6, 35365.0], [7.7, 35365.0], [7.8, 35365.0], [7.9, 35365.0], [8.0, 35365.0], [8.1, 35365.0], [8.2, 35365.0], [8.3, 35365.0], [8.4, 35365.0], [8.5, 35365.0], [8.6, 35365.0], [8.7, 35365.0], [8.8, 35365.0], [8.9, 35365.0], [9.0, 35368.0], [9.1, 35368.0], [9.2, 35368.0], [9.3, 35368.0], [9.4, 35368.0], [9.5, 35368.0], [9.6, 35368.0], [9.7, 35368.0], [9.8, 35368.0], [9.9, 35368.0], [10.0, 35372.0], [10.1, 35372.0], [10.2, 35372.0], [10.3, 35372.0], [10.4, 35372.0], [10.5, 35372.0], [10.6, 35372.0], [10.7, 35372.0], [10.8, 35372.0], [10.9, 35372.0], [11.0, 35372.0], [11.1, 35372.0], [11.2, 35372.0], [11.3, 35372.0], [11.4, 35372.0], [11.5, 35372.0], [11.6, 35372.0], [11.7, 35372.0], [11.8, 35372.0], [11.9, 35372.0], [12.0, 35372.0], [12.1, 35372.0], [12.2, 35372.0], [12.3, 35372.0], [12.4, 35372.0], [12.5, 35372.0], [12.6, 35372.0], [12.7, 35372.0], [12.8, 35372.0], [12.9, 35372.0], [13.0, 35372.0], [13.1, 35372.0], [13.2, 35372.0], [13.3, 35372.0], [13.4, 35372.0], [13.5, 35372.0], [13.6, 35372.0], [13.7, 35372.0], [13.8, 35372.0], [13.9, 35372.0], [14.0, 35373.0], [14.1, 35373.0], [14.2, 35373.0], [14.3, 35373.0], [14.4, 35373.0], [14.5, 35373.0], [14.6, 35373.0], [14.7, 35373.0], [14.8, 35373.0], [14.9, 35373.0], [15.0, 35377.0], [15.1, 35377.0], [15.2, 35377.0], [15.3, 35377.0], [15.4, 35377.0], [15.5, 35377.0], [15.6, 35377.0], [15.7, 35377.0], [15.8, 35377.0], [15.9, 35377.0], [16.0, 35377.0], [16.1, 35377.0], [16.2, 35377.0], [16.3, 35377.0], [16.4, 35377.0], [16.5, 35377.0], [16.6, 35377.0], [16.7, 35377.0], [16.8, 35377.0], [16.9, 35377.0], [17.0, 35377.0], [17.1, 35377.0], [17.2, 35377.0], [17.3, 35377.0], [17.4, 35377.0], [17.5, 35377.0], [17.6, 35377.0], [17.7, 35377.0], [17.8, 35377.0], [17.9, 35377.0], [18.0, 35377.0], [18.1, 35377.0], [18.2, 35377.0], [18.3, 35377.0], [18.4, 35377.0], [18.5, 35377.0], [18.6, 35377.0], [18.7, 35377.0], [18.8, 35377.0], [18.9, 35377.0], [19.0, 35378.0], [19.1, 35378.0], [19.2, 35378.0], [19.3, 35378.0], [19.4, 35378.0], [19.5, 35378.0], [19.6, 35378.0], [19.7, 35378.0], [19.8, 35378.0], [19.9, 35378.0], [20.0, 35380.0], [20.1, 35380.0], [20.2, 35380.0], [20.3, 35380.0], [20.4, 35380.0], [20.5, 35380.0], [20.6, 35380.0], [20.7, 35380.0], [20.8, 35380.0], [20.9, 35380.0], [21.0, 35380.0], [21.1, 35380.0], [21.2, 35380.0], [21.3, 35380.0], [21.4, 35380.0], [21.5, 35380.0], [21.6, 35380.0], [21.7, 35380.0], [21.8, 35380.0], [21.9, 35380.0], [22.0, 35380.0], [22.1, 35380.0], [22.2, 35380.0], [22.3, 35380.0], [22.4, 35380.0], [22.5, 35380.0], [22.6, 35380.0], [22.7, 35380.0], [22.8, 35380.0], [22.9, 35380.0], [23.0, 35381.0], [23.1, 35381.0], [23.2, 35381.0], [23.3, 35381.0], [23.4, 35381.0], [23.5, 35381.0], [23.6, 35381.0], [23.7, 35381.0], [23.8, 35381.0], [23.9, 35381.0], [24.0, 35381.0], [24.1, 35381.0], [24.2, 35381.0], [24.3, 35381.0], [24.4, 35381.0], [24.5, 35381.0], [24.6, 35381.0], [24.7, 35381.0], [24.8, 35381.0], [24.9, 35381.0], [25.0, 35383.0], [25.1, 35383.0], [25.2, 35383.0], [25.3, 35383.0], [25.4, 35383.0], [25.5, 35383.0], [25.6, 35383.0], [25.7, 35383.0], [25.8, 35383.0], [25.9, 35383.0], [26.0, 35384.0], [26.1, 35384.0], [26.2, 35384.0], [26.3, 35384.0], [26.4, 35384.0], [26.5, 35384.0], [26.6, 35384.0], [26.7, 35384.0], [26.8, 35384.0], [26.9, 35384.0], [27.0, 35385.0], [27.1, 35385.0], [27.2, 35385.0], [27.3, 35385.0], [27.4, 35385.0], [27.5, 35385.0], [27.6, 35385.0], [27.7, 35385.0], [27.8, 35385.0], [27.9, 35385.0], [28.0, 35385.0], [28.1, 35385.0], [28.2, 35385.0], [28.3, 35385.0], [28.4, 35385.0], [28.5, 35385.0], [28.6, 35385.0], [28.7, 35385.0], [28.8, 35385.0], [28.9, 35385.0], [29.0, 35386.0], [29.1, 35386.0], [29.2, 35386.0], [29.3, 35386.0], [29.4, 35386.0], [29.5, 35386.0], [29.6, 35386.0], [29.7, 35386.0], [29.8, 35386.0], [29.9, 35386.0], [30.0, 35388.0], [30.1, 35388.0], [30.2, 35388.0], [30.3, 35388.0], [30.4, 35388.0], [30.5, 35388.0], [30.6, 35388.0], [30.7, 35388.0], [30.8, 35388.0], [30.9, 35388.0], [31.0, 35389.0], [31.1, 35389.0], [31.2, 35389.0], [31.3, 35389.0], [31.4, 35389.0], [31.5, 35389.0], [31.6, 35389.0], [31.7, 35389.0], [31.8, 35389.0], [31.9, 35389.0], [32.0, 35389.0], [32.1, 35389.0], [32.2, 35389.0], [32.3, 35389.0], [32.4, 35389.0], [32.5, 35389.0], [32.6, 35389.0], [32.7, 35389.0], [32.8, 35389.0], [32.9, 35389.0], [33.0, 35390.0], [33.1, 35390.0], [33.2, 35390.0], [33.3, 35390.0], [33.4, 35390.0], [33.5, 35390.0], [33.6, 35390.0], [33.7, 35390.0], [33.8, 35390.0], [33.9, 35390.0], [34.0, 35390.0], [34.1, 35390.0], [34.2, 35390.0], [34.3, 35390.0], [34.4, 35390.0], [34.5, 35390.0], [34.6, 35390.0], [34.7, 35390.0], [34.8, 35390.0], [34.9, 35390.0], [35.0, 35391.0], [35.1, 35391.0], [35.2, 35391.0], [35.3, 35391.0], [35.4, 35391.0], [35.5, 35391.0], [35.6, 35391.0], [35.7, 35391.0], [35.8, 35391.0], [35.9, 35391.0], [36.0, 35392.0], [36.1, 35392.0], [36.2, 35392.0], [36.3, 35392.0], [36.4, 35392.0], [36.5, 35392.0], [36.6, 35392.0], [36.7, 35392.0], [36.8, 35392.0], [36.9, 35392.0], [37.0, 35392.0], [37.1, 35392.0], [37.2, 35392.0], [37.3, 35392.0], [37.4, 35392.0], [37.5, 35392.0], [37.6, 35392.0], [37.7, 35392.0], [37.8, 35392.0], [37.9, 35392.0], [38.0, 35393.0], [38.1, 35393.0], [38.2, 35393.0], [38.3, 35393.0], [38.4, 35393.0], [38.5, 35393.0], [38.6, 35393.0], [38.7, 35393.0], [38.8, 35393.0], [38.9, 35393.0], [39.0, 35393.0], [39.1, 35393.0], [39.2, 35393.0], [39.3, 35393.0], [39.4, 35393.0], [39.5, 35393.0], [39.6, 35393.0], [39.7, 35393.0], [39.8, 35393.0], [39.9, 35393.0], [40.0, 35394.0], [40.1, 35394.0], [40.2, 35394.0], [40.3, 35394.0], [40.4, 35394.0], [40.5, 35394.0], [40.6, 35394.0], [40.7, 35394.0], [40.8, 35394.0], [40.9, 35394.0], [41.0, 35394.0], [41.1, 35394.0], [41.2, 35394.0], [41.3, 35394.0], [41.4, 35394.0], [41.5, 35394.0], [41.6, 35394.0], [41.7, 35394.0], [41.8, 35394.0], [41.9, 35394.0], [42.0, 35395.0], [42.1, 35395.0], [42.2, 35395.0], [42.3, 35395.0], [42.4, 35395.0], [42.5, 35395.0], [42.6, 35395.0], [42.7, 35395.0], [42.8, 35395.0], [42.9, 35395.0], [43.0, 35396.0], [43.1, 35396.0], [43.2, 35396.0], [43.3, 35396.0], [43.4, 35396.0], [43.5, 35396.0], [43.6, 35396.0], [43.7, 35396.0], [43.8, 35396.0], [43.9, 35396.0], [44.0, 35397.0], [44.1, 35397.0], [44.2, 35397.0], [44.3, 35397.0], [44.4, 35397.0], [44.5, 35397.0], [44.6, 35397.0], [44.7, 35397.0], [44.8, 35397.0], [44.9, 35397.0], [45.0, 35397.0], [45.1, 35397.0], [45.2, 35397.0], [45.3, 35397.0], [45.4, 35397.0], [45.5, 35397.0], [45.6, 35397.0], [45.7, 35397.0], [45.8, 35397.0], [45.9, 35397.0], [46.0, 35398.0], [46.1, 35398.0], [46.2, 35398.0], [46.3, 35398.0], [46.4, 35398.0], [46.5, 35398.0], [46.6, 35398.0], [46.7, 35398.0], [46.8, 35398.0], [46.9, 35398.0], [47.0, 35398.0], [47.1, 35398.0], [47.2, 35398.0], [47.3, 35398.0], [47.4, 35398.0], [47.5, 35398.0], [47.6, 35398.0], [47.7, 35398.0], [47.8, 35398.0], [47.9, 35398.0], [48.0, 35401.0], [48.1, 35401.0], [48.2, 35401.0], [48.3, 35401.0], [48.4, 35401.0], [48.5, 35401.0], [48.6, 35401.0], [48.7, 35401.0], [48.8, 35401.0], [48.9, 35401.0], [49.0, 35403.0], [49.1, 35403.0], [49.2, 35403.0], [49.3, 35403.0], [49.4, 35403.0], [49.5, 35403.0], [49.6, 35403.0], [49.7, 35403.0], [49.8, 35403.0], [49.9, 35403.0], [50.0, 35405.0], [50.1, 35405.0], [50.2, 35405.0], [50.3, 35405.0], [50.4, 35405.0], [50.5, 35405.0], [50.6, 35405.0], [50.7, 35405.0], [50.8, 35405.0], [50.9, 35405.0], [51.0, 35407.0], [51.1, 35407.0], [51.2, 35407.0], [51.3, 35407.0], [51.4, 35407.0], [51.5, 35407.0], [51.6, 35407.0], [51.7, 35407.0], [51.8, 35407.0], [51.9, 35407.0], [52.0, 35407.0], [52.1, 35407.0], [52.2, 35407.0], [52.3, 35407.0], [52.4, 35407.0], [52.5, 35407.0], [52.6, 35407.0], [52.7, 35407.0], [52.8, 35407.0], [52.9, 35407.0], [53.0, 35407.0], [53.1, 35407.0], [53.2, 35407.0], [53.3, 35407.0], [53.4, 35407.0], [53.5, 35407.0], [53.6, 35407.0], [53.7, 35407.0], [53.8, 35407.0], [53.9, 35407.0], [54.0, 35407.0], [54.1, 35407.0], [54.2, 35407.0], [54.3, 35407.0], [54.4, 35407.0], [54.5, 35407.0], [54.6, 35407.0], [54.7, 35407.0], [54.8, 35407.0], [54.9, 35407.0], [55.0, 35408.0], [55.1, 35408.0], [55.2, 35408.0], [55.3, 35408.0], [55.4, 35408.0], [55.5, 35408.0], [55.6, 35408.0], [55.7, 35408.0], [55.8, 35408.0], [55.9, 35408.0], [56.0, 35408.0], [56.1, 35408.0], [56.2, 35408.0], [56.3, 35408.0], [56.4, 35408.0], [56.5, 35408.0], [56.6, 35408.0], [56.7, 35408.0], [56.8, 35408.0], [56.9, 35408.0], [57.0, 35409.0], [57.1, 35409.0], [57.2, 35409.0], [57.3, 35409.0], [57.4, 35409.0], [57.5, 35409.0], [57.6, 35409.0], [57.7, 35409.0], [57.8, 35409.0], [57.9, 35409.0], [58.0, 35409.0], [58.1, 35409.0], [58.2, 35409.0], [58.3, 35409.0], [58.4, 35409.0], [58.5, 35409.0], [58.6, 35409.0], [58.7, 35409.0], [58.8, 35409.0], [58.9, 35409.0], [59.0, 35411.0], [59.1, 35411.0], [59.2, 35411.0], [59.3, 35411.0], [59.4, 35411.0], [59.5, 35411.0], [59.6, 35411.0], [59.7, 35411.0], [59.8, 35411.0], [59.9, 35411.0], [60.0, 35411.0], [60.1, 35411.0], [60.2, 35411.0], [60.3, 35411.0], [60.4, 35411.0], [60.5, 35411.0], [60.6, 35411.0], [60.7, 35411.0], [60.8, 35411.0], [60.9, 35411.0], [61.0, 35414.0], [61.1, 35414.0], [61.2, 35414.0], [61.3, 35414.0], [61.4, 35414.0], [61.5, 35414.0], [61.6, 35414.0], [61.7, 35414.0], [61.8, 35414.0], [61.9, 35414.0], [62.0, 35416.0], [62.1, 35416.0], [62.2, 35416.0], [62.3, 35416.0], [62.4, 35416.0], [62.5, 35416.0], [62.6, 35416.0], [62.7, 35416.0], [62.8, 35416.0], [62.9, 35416.0], [63.0, 35416.0], [63.1, 35416.0], [63.2, 35416.0], [63.3, 35416.0], [63.4, 35416.0], [63.5, 35416.0], [63.6, 35416.0], [63.7, 35416.0], [63.8, 35416.0], [63.9, 35416.0], [64.0, 35417.0], [64.1, 35417.0], [64.2, 35417.0], [64.3, 35417.0], [64.4, 35417.0], [64.5, 35417.0], [64.6, 35417.0], [64.7, 35417.0], [64.8, 35417.0], [64.9, 35417.0], [65.0, 35417.0], [65.1, 35417.0], [65.2, 35417.0], [65.3, 35417.0], [65.4, 35417.0], [65.5, 35417.0], [65.6, 35417.0], [65.7, 35417.0], [65.8, 35417.0], [65.9, 35417.0], [66.0, 35417.0], [66.1, 35417.0], [66.2, 35417.0], [66.3, 35417.0], [66.4, 35417.0], [66.5, 35417.0], [66.6, 35417.0], [66.7, 35417.0], [66.8, 35417.0], [66.9, 35417.0], [67.0, 35421.0], [67.1, 35421.0], [67.2, 35421.0], [67.3, 35421.0], [67.4, 35421.0], [67.5, 35421.0], [67.6, 35421.0], [67.7, 35421.0], [67.8, 35421.0], [67.9, 35421.0], [68.0, 35421.0], [68.1, 35421.0], [68.2, 35421.0], [68.3, 35421.0], [68.4, 35421.0], [68.5, 35421.0], [68.6, 35421.0], [68.7, 35421.0], [68.8, 35421.0], [68.9, 35421.0], [69.0, 35422.0], [69.1, 35422.0], [69.2, 35422.0], [69.3, 35422.0], [69.4, 35422.0], [69.5, 35422.0], [69.6, 35422.0], [69.7, 35422.0], [69.8, 35422.0], [69.9, 35422.0], [70.0, 35422.0], [70.1, 35422.0], [70.2, 35422.0], [70.3, 35422.0], [70.4, 35422.0], [70.5, 35422.0], [70.6, 35422.0], [70.7, 35422.0], [70.8, 35422.0], [70.9, 35422.0], [71.0, 35422.0], [71.1, 35422.0], [71.2, 35422.0], [71.3, 35422.0], [71.4, 35422.0], [71.5, 35422.0], [71.6, 35422.0], [71.7, 35422.0], [71.8, 35422.0], [71.9, 35422.0], [72.0, 35424.0], [72.1, 35424.0], [72.2, 35424.0], [72.3, 35424.0], [72.4, 35424.0], [72.5, 35424.0], [72.6, 35424.0], [72.7, 35424.0], [72.8, 35424.0], [72.9, 35424.0], [73.0, 35427.0], [73.1, 35427.0], [73.2, 35427.0], [73.3, 35427.0], [73.4, 35427.0], [73.5, 35427.0], [73.6, 35427.0], [73.7, 35427.0], [73.8, 35427.0], [73.9, 35427.0], [74.0, 35431.0], [74.1, 35431.0], [74.2, 35431.0], [74.3, 35431.0], [74.4, 35431.0], [74.5, 35431.0], [74.6, 35431.0], [74.7, 35431.0], [74.8, 35431.0], [74.9, 35431.0], [75.0, 35435.0], [75.1, 35435.0], [75.2, 35435.0], [75.3, 35435.0], [75.4, 35435.0], [75.5, 35435.0], [75.6, 35435.0], [75.7, 35435.0], [75.8, 35435.0], [75.9, 35435.0], [76.0, 35435.0], [76.1, 35435.0], [76.2, 35435.0], [76.3, 35435.0], [76.4, 35435.0], [76.5, 35435.0], [76.6, 35435.0], [76.7, 35435.0], [76.8, 35435.0], [76.9, 35435.0], [77.0, 35442.0], [77.1, 35442.0], [77.2, 35442.0], [77.3, 35442.0], [77.4, 35442.0], [77.5, 35442.0], [77.6, 35442.0], [77.7, 35442.0], [77.8, 35442.0], [77.9, 35442.0], [78.0, 35443.0], [78.1, 35443.0], [78.2, 35443.0], [78.3, 35443.0], [78.4, 35443.0], [78.5, 35443.0], [78.6, 35443.0], [78.7, 35443.0], [78.8, 35443.0], [78.9, 35443.0], [79.0, 35444.0], [79.1, 35444.0], [79.2, 35444.0], [79.3, 35444.0], [79.4, 35444.0], [79.5, 35444.0], [79.6, 35444.0], [79.7, 35444.0], [79.8, 35444.0], [79.9, 35444.0], [80.0, 35444.0], [80.1, 35444.0], [80.2, 35444.0], [80.3, 35444.0], [80.4, 35444.0], [80.5, 35444.0], [80.6, 35444.0], [80.7, 35444.0], [80.8, 35444.0], [80.9, 35444.0], [81.0, 35445.0], [81.1, 35445.0], [81.2, 35445.0], [81.3, 35445.0], [81.4, 35445.0], [81.5, 35445.0], [81.6, 35445.0], [81.7, 35445.0], [81.8, 35445.0], [81.9, 35445.0], [82.0, 35448.0], [82.1, 35448.0], [82.2, 35448.0], [82.3, 35448.0], [82.4, 35448.0], [82.5, 35448.0], [82.6, 35448.0], [82.7, 35448.0], [82.8, 35448.0], [82.9, 35448.0], [83.0, 35450.0], [83.1, 35450.0], [83.2, 35450.0], [83.3, 35450.0], [83.4, 35450.0], [83.5, 35450.0], [83.6, 35450.0], [83.7, 35450.0], [83.8, 35450.0], [83.9, 35450.0], [84.0, 35453.0], [84.1, 35453.0], [84.2, 35453.0], [84.3, 35453.0], [84.4, 35453.0], [84.5, 35453.0], [84.6, 35453.0], [84.7, 35453.0], [84.8, 35453.0], [84.9, 35453.0], [85.0, 35460.0], [85.1, 35460.0], [85.2, 35460.0], [85.3, 35460.0], [85.4, 35460.0], [85.5, 35460.0], [85.6, 35460.0], [85.7, 35460.0], [85.8, 35460.0], [85.9, 35460.0], [86.0, 35464.0], [86.1, 35464.0], [86.2, 35464.0], [86.3, 35464.0], [86.4, 35464.0], [86.5, 35464.0], [86.6, 35464.0], [86.7, 35464.0], [86.8, 35464.0], [86.9, 35464.0], [87.0, 35464.0], [87.1, 35464.0], [87.2, 35464.0], [87.3, 35464.0], [87.4, 35464.0], [87.5, 35464.0], [87.6, 35464.0], [87.7, 35464.0], [87.8, 35464.0], [87.9, 35464.0], [88.0, 35467.0], [88.1, 35467.0], [88.2, 35467.0], [88.3, 35467.0], [88.4, 35467.0], [88.5, 35467.0], [88.6, 35467.0], [88.7, 35467.0], [88.8, 35467.0], [88.9, 35467.0], [89.0, 35476.0], [89.1, 35476.0], [89.2, 35476.0], [89.3, 35476.0], [89.4, 35476.0], [89.5, 35476.0], [89.6, 35476.0], [89.7, 35476.0], [89.8, 35476.0], [89.9, 35476.0], [90.0, 35488.0], [90.1, 35488.0], [90.2, 35488.0], [90.3, 35488.0], [90.4, 35488.0], [90.5, 35488.0], [90.6, 35488.0], [90.7, 35488.0], [90.8, 35488.0], [90.9, 35488.0], [91.0, 35489.0], [91.1, 35489.0], [91.2, 35489.0], [91.3, 35489.0], [91.4, 35489.0], [91.5, 35489.0], [91.6, 35489.0], [91.7, 35489.0], [91.8, 35489.0], [91.9, 35489.0], [92.0, 35490.0], [92.1, 35490.0], [92.2, 35490.0], [92.3, 35490.0], [92.4, 35490.0], [92.5, 35490.0], [92.6, 35490.0], [92.7, 35490.0], [92.8, 35490.0], [92.9, 35490.0], [93.0, 35498.0], [93.1, 35498.0], [93.2, 35498.0], [93.3, 35498.0], [93.4, 35498.0], [93.5, 35498.0], [93.6, 35498.0], [93.7, 35498.0], [93.8, 35498.0], [93.9, 35498.0], [94.0, 35509.0], [94.1, 35509.0], [94.2, 35509.0], [94.3, 35509.0], [94.4, 35509.0], [94.5, 35509.0], [94.6, 35509.0], [94.7, 35509.0], [94.8, 35509.0], [94.9, 35509.0], [95.0, 35516.0], [95.1, 35516.0], [95.2, 35516.0], [95.3, 35516.0], [95.4, 35516.0], [95.5, 35516.0], [95.6, 35516.0], [95.7, 35516.0], [95.8, 35516.0], [95.9, 35516.0], [96.0, 35521.0], [96.1, 35521.0], [96.2, 35521.0], [96.3, 35521.0], [96.4, 35521.0], [96.5, 35521.0], [96.6, 35521.0], [96.7, 35521.0], [96.8, 35521.0], [96.9, 35521.0], [97.0, 35522.0], [97.1, 35522.0], [97.2, 35522.0], [97.3, 35522.0], [97.4, 35522.0], [97.5, 35522.0], [97.6, 35522.0], [97.7, 35522.0], [97.8, 35522.0], [97.9, 35522.0], [98.0, 35536.0], [98.1, 35536.0], [98.2, 35536.0], [98.3, 35536.0], [98.4, 35536.0], [98.5, 35536.0], [98.6, 35536.0], [98.7, 35536.0], [98.8, 35536.0], [98.9, 35536.0], [99.0, 35928.0], [99.1, 35928.0], [99.2, 35928.0], [99.3, 35928.0], [99.4, 35928.0], [99.5, 35928.0], [99.6, 35928.0], [99.7, 35928.0], [99.8, 35928.0], [99.9, 35928.0]], "isOverall": false, "label": "GraphQL HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 35300.0, "maxY": 48.0, "series": [{"data": [[35900.0, 1.0], [35500.0, 5.0], [35400.0, 46.0], [35300.0, 48.0]], "isOverall": false, "label": "GraphQL HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 35900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.73044764E12, "maxY": 1.0, "series": [{"data": [[1.73044854E12, 1.0], [1.73045076E12, 1.0], [1.73044914E12, 1.0], [1.73044794E12, 1.0], [1.73044956E12, 1.0], [1.73045016E12, 1.0], [1.7304477E12, 1.0], [1.73044932E12, 1.0], [1.73045094E12, 1.0], [1.73044992E12, 1.0], [1.73044974E12, 1.0], [1.73044872E12, 1.0], [1.73045034E12, 1.0], [1.73044812E12, 1.0], [1.73044818E12, 1.0], [1.7304498E12, 1.0], [1.7304504E12, 1.0], [1.7304486E12, 1.0], [1.73045022E12, 1.0], [1.7304492E12, 1.0], [1.73045082E12, 1.0], [1.73044836E12, 1.0], [1.73044998E12, 1.0], [1.73044896E12, 1.0], [1.73045058E12, 1.0], [1.73044776E12, 1.0], [1.73044878E12, 1.0], [1.730451E12, 1.0], [1.73044938E12, 1.0], [1.73044884E12, 1.0], [1.73045046E12, 1.0], [1.73044944E12, 1.0], [1.73045106E12, 1.0], [1.73044926E12, 1.0], [1.73044824E12, 1.0], [1.73044764E12, 1.0], [1.73044986E12, 1.0], [1.730448E12, 1.0], [1.73044902E12, 1.0], [1.73044962E12, 1.0], [1.73045004E12, 1.0], [1.73044782E12, 1.0], [1.73044842E12, 1.0], [1.73045064E12, 1.0], [1.7304495E12, 1.0], [1.73044848E12, 1.0], [1.73044788E12, 1.0], [1.7304501E12, 1.0], [1.7304483E12, 1.0], [1.73045052E12, 1.0], [1.7304489E12, 1.0], [1.73045112E12, 1.0], [1.73045028E12, 1.0], [1.73044806E12, 1.0], [1.73044866E12, 1.0], [1.73045088E12, 1.0], [1.73044908E12, 1.0], [1.7304507E12, 1.0], [1.73044968E12, 1.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73045112E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 35416.16000000001, "minX": 1.0, "maxY": 35416.16000000001, "series": [{"data": [[1.0, 35416.16000000001]], "isOverall": false, "label": "GraphQL HTTP Request", "isController": false}, {"data": [[1.0, 35416.16000000001]], "isOverall": false, "label": "GraphQL HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 22.516666666666666, "minX": 1.73044764E12, "maxY": 447.2, "series": [{"data": [[1.73044854E12, 223.6], [1.73045076E12, 447.2], [1.73044914E12, 223.6], [1.73044794E12, 223.6], [1.73044956E12, 223.6], [1.73045016E12, 447.2], [1.7304477E12, 447.18333333333334], [1.73044932E12, 223.6], [1.73045094E12, 223.6], [1.73044992E12, 223.6], [1.73044974E12, 223.58333333333334], [1.73044872E12, 223.58333333333334], [1.73045034E12, 223.6], [1.73044812E12, 447.2], [1.73044818E12, 223.6], [1.7304498E12, 447.2], [1.7304504E12, 447.2], [1.7304486E12, 447.2], [1.73045022E12, 447.2], [1.7304492E12, 447.2], [1.73045082E12, 447.2], [1.73044836E12, 223.6], [1.73044998E12, 447.2], [1.73044896E12, 223.6], [1.73045058E12, 447.2], [1.73044776E12, 223.6], [1.73044878E12, 447.2], [1.730451E12, 447.18333333333334], [1.73044938E12, 447.2], [1.73044884E12, 447.2], [1.73045046E12, 447.2], [1.73044944E12, 447.2], [1.73045106E12, 447.18333333333334], [1.73044926E12, 447.2], [1.73044824E12, 447.2], [1.73044764E12, 447.2], [1.73044986E12, 447.2], [1.730448E12, 447.2], [1.73044902E12, 447.2], [1.73044962E12, 447.2], [1.73045004E12, 447.2], [1.73044782E12, 447.18333333333334], [1.73044842E12, 447.2], [1.73045064E12, 447.18333333333334], [1.7304495E12, 447.2], [1.73044848E12, 447.2], [1.73044788E12, 447.2], [1.7304501E12, 223.58333333333334], [1.7304483E12, 447.18333333333334], [1.73045052E12, 223.6], [1.7304489E12, 447.2], [1.73045112E12, 223.58333333333334], [1.73045028E12, 447.2], [1.73044806E12, 447.18333333333334], [1.73044866E12, 447.2], [1.73045088E12, 447.2], [1.73044908E12, 447.18333333333334], [1.7304507E12, 223.58333333333334], [1.73044968E12, 447.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.73044854E12, 22.533333333333335], [1.73045076E12, 45.06666666666667], [1.73044914E12, 22.533333333333335], [1.73044794E12, 22.533333333333335], [1.73044956E12, 22.533333333333335], [1.73045016E12, 45.06666666666667], [1.7304477E12, 45.05], [1.73044932E12, 22.533333333333335], [1.73045094E12, 22.533333333333335], [1.73044992E12, 22.533333333333335], [1.73044974E12, 22.516666666666666], [1.73044872E12, 22.516666666666666], [1.73045034E12, 22.533333333333335], [1.73044812E12, 45.06666666666667], [1.73044818E12, 22.533333333333335], [1.7304498E12, 45.06666666666667], [1.7304504E12, 45.06666666666667], [1.7304486E12, 45.06666666666667], [1.73045022E12, 45.06666666666667], [1.7304492E12, 45.06666666666667], [1.73045082E12, 45.06666666666667], [1.73044836E12, 22.533333333333335], [1.73044998E12, 45.06666666666667], [1.73044896E12, 22.533333333333335], [1.73045058E12, 45.06666666666667], [1.73044776E12, 22.533333333333335], [1.73044878E12, 45.06666666666667], [1.730451E12, 45.05], [1.73044938E12, 45.06666666666667], [1.73044884E12, 45.06666666666667], [1.73045046E12, 45.06666666666667], [1.73044944E12, 45.06666666666667], [1.73045106E12, 45.05], [1.73044926E12, 45.06666666666667], [1.73044824E12, 45.06666666666667], [1.73044764E12, 45.06666666666667], [1.73044986E12, 45.06666666666667], [1.730448E12, 45.06666666666667], [1.73044902E12, 45.06666666666667], [1.73044962E12, 45.06666666666667], [1.73045004E12, 45.06666666666667], [1.73044782E12, 45.05], [1.73044842E12, 45.06666666666667], [1.73045064E12, 45.05], [1.7304495E12, 45.06666666666667], [1.73044848E12, 45.06666666666667], [1.73044788E12, 45.06666666666667], [1.7304501E12, 22.516666666666666], [1.7304483E12, 45.05], [1.73045052E12, 22.533333333333335], [1.7304489E12, 45.06666666666667], [1.73045112E12, 22.516666666666666], [1.73045028E12, 45.06666666666667], [1.73044806E12, 45.05], [1.73044866E12, 45.06666666666667], [1.73045088E12, 45.06666666666667], [1.73044908E12, 45.05], [1.7304507E12, 22.516666666666666], [1.73044968E12, 45.06666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73045112E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 35341.0, "minX": 1.73044764E12, "maxY": 35732.0, "series": [{"data": [[1.73044854E12, 35403.0], [1.73045076E12, 35372.5], [1.73044914E12, 35435.0], [1.73044794E12, 35516.0], [1.73044956E12, 35377.0], [1.73045016E12, 35390.5], [1.7304477E12, 35499.5], [1.73044932E12, 35381.0], [1.73045094E12, 35396.0], [1.73044992E12, 35384.0], [1.73044974E12, 35390.0], [1.73044872E12, 35407.0], [1.73045034E12, 35421.0], [1.73044812E12, 35403.5], [1.73044818E12, 35476.0], [1.7304498E12, 35378.5], [1.7304504E12, 35419.5], [1.7304486E12, 35409.0], [1.73045022E12, 35416.5], [1.7304492E12, 35404.5], [1.73045082E12, 35426.5], [1.73044836E12, 35377.0], [1.73044998E12, 35363.5], [1.73044896E12, 35488.0], [1.73045058E12, 35419.0], [1.73044776E12, 35467.0], [1.73044878E12, 35415.0], [1.730451E12, 35397.0], [1.73044938E12, 35419.0], [1.73044884E12, 35401.0], [1.73045046E12, 35390.0], [1.73044944E12, 35368.0], [1.73045106E12, 35381.5], [1.73044926E12, 35422.0], [1.73044824E12, 35427.5], [1.73044764E12, 35732.0], [1.73044986E12, 35399.5], [1.730448E12, 35466.0], [1.73044902E12, 35414.0], [1.73044962E12, 35427.5], [1.73045004E12, 35391.0], [1.73044782E12, 35471.5], [1.73044842E12, 35478.5], [1.73045064E12, 35361.5], [1.7304495E12, 35371.0], [1.73044848E12, 35402.5], [1.73044788E12, 35481.0], [1.7304501E12, 35388.0], [1.7304483E12, 35421.0], [1.73045052E12, 35395.0], [1.7304489E12, 35438.5], [1.73045112E12, 35368.0], [1.73045028E12, 35391.5], [1.73044806E12, 35416.0], [1.73044866E12, 35369.5], [1.73045088E12, 35350.5], [1.73044908E12, 35435.5], [1.7304507E12, 35380.0], [1.73044968E12, 35341.0]], "isOverall": false, "label": "GraphQL HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73045112E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 35341.0, "minX": 1.73044764E12, "maxY": 35730.5, "series": [{"data": [[1.73044854E12, 35403.0], [1.73045076E12, 35372.5], [1.73044914E12, 35435.0], [1.73044794E12, 35516.0], [1.73044956E12, 35376.0], [1.73045016E12, 35390.5], [1.7304477E12, 35499.5], [1.73044932E12, 35381.0], [1.73045094E12, 35396.0], [1.73044992E12, 35384.0], [1.73044974E12, 35390.0], [1.73044872E12, 35407.0], [1.73045034E12, 35421.0], [1.73044812E12, 35403.5], [1.73044818E12, 35476.0], [1.7304498E12, 35378.5], [1.7304504E12, 35419.5], [1.7304486E12, 35407.0], [1.73045022E12, 35416.5], [1.7304492E12, 35403.5], [1.73045082E12, 35426.5], [1.73044836E12, 35376.0], [1.73044998E12, 35363.5], [1.73044896E12, 35488.0], [1.73045058E12, 35419.0], [1.73044776E12, 35467.0], [1.73044878E12, 35415.0], [1.730451E12, 35397.0], [1.73044938E12, 35418.5], [1.73044884E12, 35401.0], [1.73045046E12, 35390.0], [1.73044944E12, 35368.0], [1.73045106E12, 35381.5], [1.73044926E12, 35422.0], [1.73044824E12, 35427.0], [1.73044764E12, 35730.5], [1.73044986E12, 35399.0], [1.730448E12, 35465.5], [1.73044902E12, 35414.0], [1.73044962E12, 35427.5], [1.73045004E12, 35391.0], [1.73044782E12, 35471.0], [1.73044842E12, 35478.0], [1.73045064E12, 35361.5], [1.7304495E12, 35371.0], [1.73044848E12, 35402.5], [1.73044788E12, 35481.0], [1.7304501E12, 35388.0], [1.7304483E12, 35420.5], [1.73045052E12, 35395.0], [1.7304489E12, 35438.5], [1.73045112E12, 35368.0], [1.73045028E12, 35391.5], [1.73044806E12, 35416.0], [1.73044866E12, 35366.5], [1.73045088E12, 35350.0], [1.73044908E12, 35435.0], [1.7304507E12, 35380.0], [1.73044968E12, 35341.0]], "isOverall": false, "label": "GraphQL HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73045112E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.73044764E12, "maxY": 7.0, "series": [{"data": [[1.73044854E12, 1.0], [1.73045076E12, 1.0], [1.73044914E12, 2.0], [1.73044794E12, 1.0], [1.73044956E12, 2.0], [1.73045016E12, 1.5], [1.7304477E12, 1.0], [1.73044932E12, 1.0], [1.73045094E12, 1.0], [1.73044992E12, 1.0], [1.73044974E12, 1.0], [1.73044872E12, 2.0], [1.73045034E12, 1.0], [1.73044812E12, 1.5], [1.73044818E12, 7.0], [1.7304498E12, 1.0], [1.7304504E12, 1.5], [1.7304486E12, 1.5], [1.73045022E12, 1.5], [1.7304492E12, 2.0], [1.73045082E12, 2.0], [1.73044836E12, 2.0], [1.73044998E12, 3.0], [1.73044896E12, 3.0], [1.73045058E12, 1.5], [1.73044776E12, 1.0], [1.73044878E12, 3.0], [1.730451E12, 2.0], [1.73044938E12, 1.5], [1.73044884E12, 1.5], [1.73045046E12, 1.5], [1.73044944E12, 1.0], [1.73045106E12, 1.0], [1.73044926E12, 2.0], [1.73044824E12, 2.0], [1.73044764E12, 6.5], [1.73044986E12, 1.0], [1.730448E12, 1.0], [1.73044902E12, 1.0], [1.73044962E12, 3.0], [1.73045004E12, 1.0], [1.73044782E12, 1.5], [1.73044842E12, 2.0], [1.73045064E12, 4.5], [1.7304495E12, 2.0], [1.73044848E12, 1.5], [1.73044788E12, 1.5], [1.7304501E12, 1.0], [1.7304483E12, 2.0], [1.73045052E12, 1.0], [1.7304489E12, 1.5], [1.73045112E12, 1.0], [1.73045028E12, 2.0], [1.73044806E12, 3.0], [1.73044866E12, 2.0], [1.73045088E12, 1.5], [1.73044908E12, 2.0], [1.7304507E12, 2.0], [1.73044968E12, 2.0]], "isOverall": false, "label": "GraphQL HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73045112E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 35310.0, "minX": 1.73044764E12, "maxY": 35928.0, "series": [{"data": [[1.73044854E12, 35403.0], [1.73045076E12, 35373.0], [1.73044914E12, 35435.0], [1.73044794E12, 35516.0], [1.73044956E12, 35377.0], [1.73045016E12, 35392.0], [1.7304477E12, 35509.0], [1.73044932E12, 35381.0], [1.73045094E12, 35396.0], [1.73044992E12, 35384.0], [1.73044974E12, 35390.0], [1.73044872E12, 35407.0], [1.73045034E12, 35421.0], [1.73044812E12, 35422.0], [1.73044818E12, 35476.0], [1.7304498E12, 35385.0], [1.7304504E12, 35422.0], [1.7304486E12, 35409.0], [1.73045022E12, 35417.0], [1.7304492E12, 35411.0], [1.73045082E12, 35460.0], [1.73044836E12, 35377.0], [1.73044998E12, 35365.0], [1.73044896E12, 35488.0], [1.73045058E12, 35421.0], [1.73044776E12, 35467.0], [1.73044878E12, 35416.0], [1.730451E12, 35405.0], [1.73044938E12, 35445.0], [1.73044884E12, 35408.0], [1.73045046E12, 35408.0], [1.73044944E12, 35372.0], [1.73045106E12, 35383.0], [1.73044926E12, 35450.0], [1.73044824E12, 35448.0], [1.73044764E12, 35928.0], [1.73044986E12, 35407.0], [1.730448E12, 35489.0], [1.73044902E12, 35431.0], [1.73044962E12, 35444.0], [1.73045004E12, 35401.0], [1.73044782E12, 35521.0], [1.73044842E12, 35522.0], [1.73045064E12, 35377.0], [1.7304495E12, 35377.0], [1.73044848E12, 35407.0], [1.73044788E12, 35498.0], [1.7304501E12, 35388.0], [1.7304483E12, 35464.0], [1.73045052E12, 35395.0], [1.7304489E12, 35453.0], [1.73045112E12, 35368.0], [1.73045028E12, 35397.0], [1.73044806E12, 35442.0], [1.73044866E12, 35380.0], [1.73045088E12, 35391.0], [1.73044908E12, 35444.0], [1.7304507E12, 35380.0], [1.73044968E12, 35345.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.73044854E12, 35403.0], [1.73045076E12, 35372.0], [1.73044914E12, 35435.0], [1.73044794E12, 35516.0], [1.73044956E12, 35377.0], [1.73045016E12, 35389.0], [1.7304477E12, 35490.0], [1.73044932E12, 35381.0], [1.73045094E12, 35396.0], [1.73044992E12, 35384.0], [1.73044974E12, 35390.0], [1.73044872E12, 35407.0], [1.73045034E12, 35421.0], [1.73044812E12, 35385.0], [1.73044818E12, 35476.0], [1.7304498E12, 35372.0], [1.7304504E12, 35417.0], [1.7304486E12, 35409.0], [1.73045022E12, 35416.0], [1.7304492E12, 35398.0], [1.73045082E12, 35393.0], [1.73044836E12, 35377.0], [1.73044998E12, 35362.0], [1.73044896E12, 35488.0], [1.73045058E12, 35417.0], [1.73044776E12, 35467.0], [1.73044878E12, 35414.0], [1.730451E12, 35389.0], [1.73044938E12, 35393.0], [1.73044884E12, 35394.0], [1.73045046E12, 35372.0], [1.73044944E12, 35364.0], [1.73045106E12, 35380.0], [1.73044926E12, 35394.0], [1.73044824E12, 35407.0], [1.73044764E12, 35536.0], [1.73044986E12, 35392.0], [1.730448E12, 35443.0], [1.73044902E12, 35397.0], [1.73044962E12, 35411.0], [1.73045004E12, 35381.0], [1.73044782E12, 35422.0], [1.73044842E12, 35435.0], [1.73045064E12, 35346.0], [1.7304495E12, 35365.0], [1.73044848E12, 35398.0], [1.73044788E12, 35464.0], [1.7304501E12, 35388.0], [1.7304483E12, 35378.0], [1.73045052E12, 35395.0], [1.7304489E12, 35424.0], [1.73045112E12, 35368.0], [1.73045028E12, 35386.0], [1.73044806E12, 35390.0], [1.73044866E12, 35359.0], [1.73045088E12, 35310.0], [1.73044908E12, 35427.0], [1.7304507E12, 35380.0], [1.73044968E12, 35337.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.73044854E12, 35403.0], [1.73045076E12, 35373.0], [1.73044914E12, 35435.0], [1.73044794E12, 35516.0], [1.73044956E12, 35377.0], [1.73045016E12, 35392.0], [1.7304477E12, 35509.0], [1.73044932E12, 35381.0], [1.73045094E12, 35396.0], [1.73044992E12, 35384.0], [1.73044974E12, 35390.0], [1.73044872E12, 35407.0], [1.73045034E12, 35421.0], [1.73044812E12, 35422.0], [1.73044818E12, 35476.0], [1.7304498E12, 35385.0], [1.7304504E12, 35422.0], [1.7304486E12, 35409.0], [1.73045022E12, 35417.0], [1.7304492E12, 35411.0], [1.73045082E12, 35460.0], [1.73044836E12, 35377.0], [1.73044998E12, 35365.0], [1.73044896E12, 35488.0], [1.73045058E12, 35421.0], [1.73044776E12, 35467.0], [1.73044878E12, 35416.0], [1.730451E12, 35405.0], [1.73044938E12, 35445.0], [1.73044884E12, 35408.0], [1.73045046E12, 35408.0], [1.73044944E12, 35372.0], [1.73045106E12, 35383.0], [1.73044926E12, 35450.0], [1.73044824E12, 35448.0], [1.73044764E12, 35928.0], [1.73044986E12, 35407.0], [1.730448E12, 35489.0], [1.73044902E12, 35431.0], [1.73044962E12, 35444.0], [1.73045004E12, 35401.0], [1.73044782E12, 35521.0], [1.73044842E12, 35522.0], [1.73045064E12, 35377.0], [1.7304495E12, 35377.0], [1.73044848E12, 35407.0], [1.73044788E12, 35498.0], [1.7304501E12, 35388.0], [1.7304483E12, 35464.0], [1.73045052E12, 35395.0], [1.7304489E12, 35453.0], [1.73045112E12, 35368.0], [1.73045028E12, 35397.0], [1.73044806E12, 35442.0], [1.73044866E12, 35380.0], [1.73045088E12, 35391.0], [1.73044908E12, 35444.0], [1.7304507E12, 35380.0], [1.73044968E12, 35345.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.73044854E12, 35403.0], [1.73045076E12, 35373.0], [1.73044914E12, 35435.0], [1.73044794E12, 35516.0], [1.73044956E12, 35377.0], [1.73045016E12, 35392.0], [1.7304477E12, 35509.0], [1.73044932E12, 35381.0], [1.73045094E12, 35396.0], [1.73044992E12, 35384.0], [1.73044974E12, 35390.0], [1.73044872E12, 35407.0], [1.73045034E12, 35421.0], [1.73044812E12, 35422.0], [1.73044818E12, 35476.0], [1.7304498E12, 35385.0], [1.7304504E12, 35422.0], [1.7304486E12, 35409.0], [1.73045022E12, 35417.0], [1.7304492E12, 35411.0], [1.73045082E12, 35460.0], [1.73044836E12, 35377.0], [1.73044998E12, 35365.0], [1.73044896E12, 35488.0], [1.73045058E12, 35421.0], [1.73044776E12, 35467.0], [1.73044878E12, 35416.0], [1.730451E12, 35405.0], [1.73044938E12, 35445.0], [1.73044884E12, 35408.0], [1.73045046E12, 35408.0], [1.73044944E12, 35372.0], [1.73045106E12, 35383.0], [1.73044926E12, 35450.0], [1.73044824E12, 35448.0], [1.73044764E12, 35928.0], [1.73044986E12, 35407.0], [1.730448E12, 35489.0], [1.73044902E12, 35431.0], [1.73044962E12, 35444.0], [1.73045004E12, 35401.0], [1.73044782E12, 35521.0], [1.73044842E12, 35522.0], [1.73045064E12, 35377.0], [1.7304495E12, 35377.0], [1.73044848E12, 35407.0], [1.73044788E12, 35498.0], [1.7304501E12, 35388.0], [1.7304483E12, 35464.0], [1.73045052E12, 35395.0], [1.7304489E12, 35453.0], [1.73045112E12, 35368.0], [1.73045028E12, 35397.0], [1.73044806E12, 35442.0], [1.73044866E12, 35380.0], [1.73045088E12, 35391.0], [1.73044908E12, 35444.0], [1.7304507E12, 35380.0], [1.73044968E12, 35345.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.73044854E12, 35403.0], [1.73045076E12, 35372.5], [1.73044914E12, 35435.0], [1.73044794E12, 35516.0], [1.73044956E12, 35377.0], [1.73045016E12, 35390.5], [1.7304477E12, 35499.5], [1.73044932E12, 35381.0], [1.73045094E12, 35396.0], [1.73044992E12, 35384.0], [1.73044974E12, 35390.0], [1.73044872E12, 35407.0], [1.73045034E12, 35421.0], [1.73044812E12, 35403.5], [1.73044818E12, 35476.0], [1.7304498E12, 35378.5], [1.7304504E12, 35419.5], [1.7304486E12, 35409.0], [1.73045022E12, 35416.5], [1.7304492E12, 35404.5], [1.73045082E12, 35426.5], [1.73044836E12, 35377.0], [1.73044998E12, 35363.5], [1.73044896E12, 35488.0], [1.73045058E12, 35419.0], [1.73044776E12, 35467.0], [1.73044878E12, 35415.0], [1.730451E12, 35397.0], [1.73044938E12, 35419.0], [1.73044884E12, 35401.0], [1.73045046E12, 35390.0], [1.73044944E12, 35368.0], [1.73045106E12, 35381.5], [1.73044926E12, 35422.0], [1.73044824E12, 35427.5], [1.73044764E12, 35732.0], [1.73044986E12, 35399.5], [1.730448E12, 35466.0], [1.73044902E12, 35414.0], [1.73044962E12, 35427.5], [1.73045004E12, 35391.0], [1.73044782E12, 35471.5], [1.73044842E12, 35478.5], [1.73045064E12, 35361.5], [1.7304495E12, 35371.0], [1.73044848E12, 35402.5], [1.73044788E12, 35481.0], [1.7304501E12, 35388.0], [1.7304483E12, 35421.0], [1.73045052E12, 35395.0], [1.7304489E12, 35438.5], [1.73045112E12, 35368.0], [1.73045028E12, 35391.5], [1.73044806E12, 35416.0], [1.73044866E12, 35369.5], [1.73045088E12, 35350.5], [1.73044908E12, 35435.5], [1.7304507E12, 35380.0], [1.73044968E12, 35341.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.73044854E12, 35403.0], [1.73045076E12, 35373.0], [1.73044914E12, 35435.0], [1.73044794E12, 35516.0], [1.73044956E12, 35377.0], [1.73045016E12, 35392.0], [1.7304477E12, 35509.0], [1.73044932E12, 35381.0], [1.73045094E12, 35396.0], [1.73044992E12, 35384.0], [1.73044974E12, 35390.0], [1.73044872E12, 35407.0], [1.73045034E12, 35421.0], [1.73044812E12, 35422.0], [1.73044818E12, 35476.0], [1.7304498E12, 35385.0], [1.7304504E12, 35422.0], [1.7304486E12, 35409.0], [1.73045022E12, 35417.0], [1.7304492E12, 35411.0], [1.73045082E12, 35460.0], [1.73044836E12, 35377.0], [1.73044998E12, 35365.0], [1.73044896E12, 35488.0], [1.73045058E12, 35421.0], [1.73044776E12, 35467.0], [1.73044878E12, 35416.0], [1.730451E12, 35405.0], [1.73044938E12, 35445.0], [1.73044884E12, 35408.0], [1.73045046E12, 35408.0], [1.73044944E12, 35372.0], [1.73045106E12, 35383.0], [1.73044926E12, 35450.0], [1.73044824E12, 35448.0], [1.73044764E12, 35928.0], [1.73044986E12, 35407.0], [1.730448E12, 35489.0], [1.73044902E12, 35431.0], [1.73044962E12, 35444.0], [1.73045004E12, 35401.0], [1.73044782E12, 35521.0], [1.73044842E12, 35522.0], [1.73045064E12, 35377.0], [1.7304495E12, 35377.0], [1.73044848E12, 35407.0], [1.73044788E12, 35498.0], [1.7304501E12, 35388.0], [1.7304483E12, 35464.0], [1.73045052E12, 35395.0], [1.7304489E12, 35453.0], [1.73045112E12, 35368.0], [1.73045028E12, 35397.0], [1.73044806E12, 35442.0], [1.73044866E12, 35380.0], [1.73045088E12, 35391.0], [1.73044908E12, 35444.0], [1.7304507E12, 35380.0], [1.73044968E12, 35345.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73045112E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 35404.0, "minX": 1.0, "maxY": 35404.0, "series": [{"data": [[1.0, 35404.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 35404.0, "minX": 1.0, "maxY": 35404.0, "series": [{"data": [[1.0, 35404.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.73044758E12, "maxY": 0.03333333333333333, "series": [{"data": [[1.73044854E12, 0.016666666666666666], [1.73045076E12, 0.03333333333333333], [1.73044914E12, 0.016666666666666666], [1.73044794E12, 0.016666666666666666], [1.73044956E12, 0.016666666666666666], [1.73045016E12, 0.03333333333333333], [1.7304477E12, 0.03333333333333333], [1.73044932E12, 0.016666666666666666], [1.73045094E12, 0.016666666666666666], [1.73044992E12, 0.016666666666666666], [1.73044974E12, 0.016666666666666666], [1.73044872E12, 0.016666666666666666], [1.73045034E12, 0.016666666666666666], [1.73044812E12, 0.03333333333333333], [1.73044818E12, 0.016666666666666666], [1.7304498E12, 0.03333333333333333], [1.73044758E12, 0.016666666666666666], [1.7304504E12, 0.03333333333333333], [1.7304486E12, 0.03333333333333333], [1.73045022E12, 0.03333333333333333], [1.7304492E12, 0.03333333333333333], [1.73045082E12, 0.03333333333333333], [1.73044836E12, 0.016666666666666666], [1.73044998E12, 0.03333333333333333], [1.73044896E12, 0.016666666666666666], [1.73045058E12, 0.03333333333333333], [1.73044776E12, 0.016666666666666666], [1.73044878E12, 0.03333333333333333], [1.730451E12, 0.03333333333333333], [1.73044938E12, 0.03333333333333333], [1.73044884E12, 0.03333333333333333], [1.73045046E12, 0.03333333333333333], [1.73044944E12, 0.03333333333333333], [1.73045106E12, 0.03333333333333333], [1.73044926E12, 0.03333333333333333], [1.73044824E12, 0.03333333333333333], [1.73044764E12, 0.03333333333333333], [1.73044986E12, 0.03333333333333333], [1.730448E12, 0.03333333333333333], [1.73044902E12, 0.03333333333333333], [1.73044962E12, 0.03333333333333333], [1.73045004E12, 0.03333333333333333], [1.73044782E12, 0.03333333333333333], [1.73044842E12, 0.03333333333333333], [1.73045064E12, 0.03333333333333333], [1.7304495E12, 0.03333333333333333], [1.73044848E12, 0.03333333333333333], [1.73044788E12, 0.03333333333333333], [1.7304501E12, 0.016666666666666666], [1.7304483E12, 0.03333333333333333], [1.73045052E12, 0.016666666666666666], [1.7304489E12, 0.03333333333333333], [1.73045028E12, 0.03333333333333333], [1.73044806E12, 0.03333333333333333], [1.73044866E12, 0.03333333333333333], [1.73045088E12, 0.03333333333333333], [1.73044908E12, 0.03333333333333333], [1.7304507E12, 0.016666666666666666], [1.73044968E12, 0.03333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73045106E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.73044764E12, "maxY": 0.03333333333333333, "series": [{"data": [[1.73044854E12, 0.016666666666666666], [1.73045076E12, 0.03333333333333333], [1.73044914E12, 0.016666666666666666], [1.73044794E12, 0.016666666666666666], [1.73044956E12, 0.016666666666666666], [1.73045016E12, 0.03333333333333333], [1.7304477E12, 0.03333333333333333], [1.73044932E12, 0.016666666666666666], [1.73045094E12, 0.016666666666666666], [1.73044992E12, 0.016666666666666666], [1.73044974E12, 0.016666666666666666], [1.73044872E12, 0.016666666666666666], [1.73045034E12, 0.016666666666666666], [1.73044812E12, 0.03333333333333333], [1.73044818E12, 0.016666666666666666], [1.7304498E12, 0.03333333333333333], [1.7304504E12, 0.03333333333333333], [1.7304486E12, 0.03333333333333333], [1.73045022E12, 0.03333333333333333], [1.7304492E12, 0.03333333333333333], [1.73045082E12, 0.03333333333333333], [1.73044836E12, 0.016666666666666666], [1.73044998E12, 0.03333333333333333], [1.73044896E12, 0.016666666666666666], [1.73045058E12, 0.03333333333333333], [1.73044776E12, 0.016666666666666666], [1.73044878E12, 0.03333333333333333], [1.730451E12, 0.03333333333333333], [1.73044938E12, 0.03333333333333333], [1.73044884E12, 0.03333333333333333], [1.73045046E12, 0.03333333333333333], [1.73044944E12, 0.03333333333333333], [1.73045106E12, 0.03333333333333333], [1.73044926E12, 0.03333333333333333], [1.73044824E12, 0.03333333333333333], [1.73044764E12, 0.03333333333333333], [1.73044986E12, 0.03333333333333333], [1.730448E12, 0.03333333333333333], [1.73044902E12, 0.03333333333333333], [1.73044962E12, 0.03333333333333333], [1.73045004E12, 0.03333333333333333], [1.73044782E12, 0.03333333333333333], [1.73044842E12, 0.03333333333333333], [1.73045064E12, 0.03333333333333333], [1.7304495E12, 0.03333333333333333], [1.73044848E12, 0.03333333333333333], [1.73044788E12, 0.03333333333333333], [1.7304501E12, 0.016666666666666666], [1.7304483E12, 0.03333333333333333], [1.73045052E12, 0.016666666666666666], [1.7304489E12, 0.03333333333333333], [1.73045112E12, 0.016666666666666666], [1.73045028E12, 0.03333333333333333], [1.73044806E12, 0.03333333333333333], [1.73044866E12, 0.03333333333333333], [1.73045088E12, 0.03333333333333333], [1.73044908E12, 0.03333333333333333], [1.7304507E12, 0.016666666666666666], [1.73044968E12, 0.03333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.73045112E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.73044764E12, "maxY": 0.03333333333333333, "series": [{"data": [[1.73044854E12, 0.016666666666666666], [1.73045076E12, 0.03333333333333333], [1.73044914E12, 0.016666666666666666], [1.73044794E12, 0.016666666666666666], [1.73044956E12, 0.016666666666666666], [1.73045016E12, 0.03333333333333333], [1.7304477E12, 0.03333333333333333], [1.73044932E12, 0.016666666666666666], [1.73045094E12, 0.016666666666666666], [1.73044992E12, 0.016666666666666666], [1.73044974E12, 0.016666666666666666], [1.73044872E12, 0.016666666666666666], [1.73045034E12, 0.016666666666666666], [1.73044812E12, 0.03333333333333333], [1.73044818E12, 0.016666666666666666], [1.7304498E12, 0.03333333333333333], [1.7304504E12, 0.03333333333333333], [1.7304486E12, 0.03333333333333333], [1.73045022E12, 0.03333333333333333], [1.7304492E12, 0.03333333333333333], [1.73045082E12, 0.03333333333333333], [1.73044836E12, 0.016666666666666666], [1.73044998E12, 0.03333333333333333], [1.73044896E12, 0.016666666666666666], [1.73045058E12, 0.03333333333333333], [1.73044776E12, 0.016666666666666666], [1.73044878E12, 0.03333333333333333], [1.730451E12, 0.03333333333333333], [1.73044938E12, 0.03333333333333333], [1.73044884E12, 0.03333333333333333], [1.73045046E12, 0.03333333333333333], [1.73044944E12, 0.03333333333333333], [1.73045106E12, 0.03333333333333333], [1.73044926E12, 0.03333333333333333], [1.73044824E12, 0.03333333333333333], [1.73044764E12, 0.03333333333333333], [1.73044986E12, 0.03333333333333333], [1.730448E12, 0.03333333333333333], [1.73044902E12, 0.03333333333333333], [1.73044962E12, 0.03333333333333333], [1.73045004E12, 0.03333333333333333], [1.73044782E12, 0.03333333333333333], [1.73044842E12, 0.03333333333333333], [1.73045064E12, 0.03333333333333333], [1.7304495E12, 0.03333333333333333], [1.73044848E12, 0.03333333333333333], [1.73044788E12, 0.03333333333333333], [1.7304501E12, 0.016666666666666666], [1.7304483E12, 0.03333333333333333], [1.73045052E12, 0.016666666666666666], [1.7304489E12, 0.03333333333333333], [1.73045112E12, 0.016666666666666666], [1.73045028E12, 0.03333333333333333], [1.73044806E12, 0.03333333333333333], [1.73044866E12, 0.03333333333333333], [1.73045088E12, 0.03333333333333333], [1.73044908E12, 0.03333333333333333], [1.7304507E12, 0.016666666666666666], [1.73044968E12, 0.03333333333333333]], "isOverall": false, "label": "GraphQL HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73045112E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.73044764E12, "maxY": 0.03333333333333333, "series": [{"data": [[1.73044854E12, 0.016666666666666666], [1.73045076E12, 0.03333333333333333], [1.73044914E12, 0.016666666666666666], [1.73044794E12, 0.016666666666666666], [1.73044956E12, 0.016666666666666666], [1.73045016E12, 0.03333333333333333], [1.7304477E12, 0.03333333333333333], [1.73044932E12, 0.016666666666666666], [1.73045094E12, 0.016666666666666666], [1.73044992E12, 0.016666666666666666], [1.73044974E12, 0.016666666666666666], [1.73044872E12, 0.016666666666666666], [1.73045034E12, 0.016666666666666666], [1.73044812E12, 0.03333333333333333], [1.73044818E12, 0.016666666666666666], [1.7304498E12, 0.03333333333333333], [1.7304504E12, 0.03333333333333333], [1.7304486E12, 0.03333333333333333], [1.73045022E12, 0.03333333333333333], [1.7304492E12, 0.03333333333333333], [1.73045082E12, 0.03333333333333333], [1.73044836E12, 0.016666666666666666], [1.73044998E12, 0.03333333333333333], [1.73044896E12, 0.016666666666666666], [1.73045058E12, 0.03333333333333333], [1.73044776E12, 0.016666666666666666], [1.73044878E12, 0.03333333333333333], [1.730451E12, 0.03333333333333333], [1.73044938E12, 0.03333333333333333], [1.73044884E12, 0.03333333333333333], [1.73045046E12, 0.03333333333333333], [1.73044944E12, 0.03333333333333333], [1.73045106E12, 0.03333333333333333], [1.73044926E12, 0.03333333333333333], [1.73044824E12, 0.03333333333333333], [1.73044764E12, 0.03333333333333333], [1.73044986E12, 0.03333333333333333], [1.730448E12, 0.03333333333333333], [1.73044902E12, 0.03333333333333333], [1.73044962E12, 0.03333333333333333], [1.73045004E12, 0.03333333333333333], [1.73044782E12, 0.03333333333333333], [1.73044842E12, 0.03333333333333333], [1.73045064E12, 0.03333333333333333], [1.7304495E12, 0.03333333333333333], [1.73044848E12, 0.03333333333333333], [1.73044788E12, 0.03333333333333333], [1.7304501E12, 0.016666666666666666], [1.7304483E12, 0.03333333333333333], [1.73045052E12, 0.016666666666666666], [1.7304489E12, 0.03333333333333333], [1.73045112E12, 0.016666666666666666], [1.73045028E12, 0.03333333333333333], [1.73044806E12, 0.03333333333333333], [1.73044866E12, 0.03333333333333333], [1.73045088E12, 0.03333333333333333], [1.73044908E12, 0.03333333333333333], [1.7304507E12, 0.016666666666666666], [1.73044968E12, 0.03333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.73045112E12, "title": "Total Transactions Per Second"}},
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

