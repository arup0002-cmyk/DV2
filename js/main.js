var vg_1 = "js/internet_trend.vg.json";

vegaEmbed("#adoption_chart", vg_1)
  .then(function(result) {
      console.log("Chart loaded successfully");
  })
  .catch(console.error);