// js/vega_lite_vis.js

var vg_1 = "charts/chart1_internet_trend.vg.json";
var vg_2 = "charts/chart2_map_state_usage.vg.json";
var vg_3 = "charts/chart3_slope_lifestyle.vg.json";
var vg_4 = "charts/chart4_faceted_age_activities.vg.json";
var vg_5 = "charts/chart5_heatmap_state_activities.vg.json";

vegaEmbed("#chart1", vg_1).then(function(result) {}).catch(console.error);
vegaEmbed("#chart2", vg_2).then(function(result) {}).catch(console.error);
vegaEmbed("#chart3", vg_3).then(function(result) {}).catch(console.error);
vegaEmbed("#chart4", vg_4).then(function(result) {}).catch(console.error);
vegaEmbed("#chart5", vg_5).then(function(result) {}).catch(console.error);
