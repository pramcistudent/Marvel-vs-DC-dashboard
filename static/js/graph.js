/* -- Main --*/

queue()
    .defer(d3.csv, 'static/data/superheroData.csv')
    .await(createDataVis);

/* -- Color varieaton For  --*/
var publisherColors = d3.scale.ordinal()
    .domain(["Marvel", "DC"])
    .range(["#000f9c", "#ed1d24"]);

var genderColors = d3.scale.ordinal()
    .domain(["Male", "Female", "Other"])
    .range(["#007bf8", "#f8a5a5", "#bab9b9"]);

var alignmentColors = d3.scale.ordinal()
    .domain(["Good", "Bad", "Neutral"])
    .range(["#0c870a", "#b30600", "#fffb91"]);

var hairColors = d3.scale.ordinal()
    .domain(["Black", "Blond", "Brown", "No Hair", "Red", "White", "Auburn", "Green", "Purple", "Grey", "Others",])
    .range(["#000000", "#e6c7af", "#59361f", "#fafa9c", "#eb2412", "#e8e8e5", "#01f802", "#0ba62e", "#7b0b7c", "#aaaaaa", "#f9ba7a",]);

var eyeColors = d3.scale.ordinal()
    .domain(["Blue", "Brown", "Green", "Red", "Black", "Yellow", "White", "Grey", "Purple", "Amber", "Other",])
    .range(["#3b58f9", "#b37b57", "#01f802", "#eb2412", "#000000", "#f7f14a", "#e8e8e5", "#aaaaaa", "#7b0b7c", "#f00fbf", "#f9ba7a",]);

function createDataVis(error, superheroData) {
    var ndx = crossfilter(superheroData);

/* -- Data Conversion --*/
    function hero_attr_to_integer(hero_attr) {
        hero_attr.forEach(function(ha) {
            superheroData.forEach(function(d) {
                var ha_lower = ha.toLowerCase();
                d[ha_lower] = parseInt(d[ha], 10);
            });
        });
    }

/* -- Data Preparation --*/
    var heroAttributes = ["Intelligence", "Strength", "Speed", "Durability", "Power", "Combat"];
    hero_attr_to_integer(heroAttributes);

/* -- Hero Selector --*/
    hero_selector(ndx);

/* -- Bar Charts --*/
    publisher(ndx);

/* -- Gender Percent --*/
    display_gender_percent(ndx, 'Male', '#percent-male');
    display_gender_percent(ndx, 'Female', '#percent-female');
    display_gender_percent(ndx, 'Other', '#percent-other');

/* -- Pie Charts --*/
    alignment(ndx);
    
/* -- Row Chart --*/
    hair_color(ndx);
    eye_color(ndx);

/* -- Line Chart --*/
    stats(ndx);

    dc.renderAll();
}

/* -- Helper Function Remove Blanks --*/
function remove_blanks(group, value_to_remove) {
    return {
        all: function() {
            return group.all().filter(function(d) {
                return d.key !== value_to_remove;
            });
        }
    };
}

/* -- Super Hero Selector --*/
function hero_selector(ndx) {
    var heroDim = ndx.dimension(dc.pluck('Name'));
    var heroGroup = heroDim.group();
    dc.selectMenu('#hero-selector')
        .dimension(heroDim)
        .group(heroGroup)
        .title(function(d) {
            return d.key;
        });
}

/* -- Comic Publisher Bar Chart --*/
function publisher(ndx) {
    var publisherDim = ndx.dimension(dc.pluck('Publisher'));
    var publisherGroup = remove_blanks(publisherDim.group(), "");
    dc.barChart('#publisher')
        .width(300)
        .height(300)
        .transitionDuration(500)
        .dimension(publisherDim)
        .group(publisherGroup)
        .colors(publisherColors)
        .colorAccessor(function(d) {
            return d.key;
        })
        .barPadding(.3)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(false)
        .yAxis().ticks(10);
}

/* -- Pie Chart Percentage -*/

function show_slice_percent(key, endAngle, startAngle) {
    var percent = dc.utils.printSingleValue((endAngle - startAngle) / (2 * Math.PI) * 100);
    if (percent > 5) {
        return key + ' ' + Math.round(percent) + '%';
    }
}

/* -- Gender Pie Chart --*/
function display_gender_percent(ndx, gender, element) {
    var genderDim = ndx.dimension(dc.pluck('Gender'));
    var genderGroup = remove_blanks(genderDim.group(), "");
    dc.pieChart('#gender')
        .width(500)
        .height(350)
        .radius(170)
        .cx(210)
        .transitionDuration(500)
        .legend(dc.legend().x(420).y(10).itemHeight(35).gap(8))
        .on('pretransition', function(chart) {
            chart.selectAll('text.pie-slice').text(function(d) {
                return show_slice_percent(d.data.key, d.endAngle, d.startAngle);
            });
        })
        .colors(genderColors)
        .colorAccessor(function(d) {
            return d.key;
        })
        .useViewBoxResizing(true)
        .dimension(genderDim)
        .group(genderGroup)
        .title(function(d) {
            if (d.value === 1) {
                return d.value + " Superhero is " + d.key;
            }
            else {
                return d.value + " Superheroes are " + d.key;
            }
        });
}

/* -- Hero Alignment Pie Chart --*/
function alignment(ndx) {
    var alignmentDim = ndx.dimension(dc.pluck('Alignment'));
    var alignmentGroup = remove_blanks(alignmentDim.group(), "");
    dc.pieChart('#alignment')
        .width(500)
        .height(350)
        .radius(170)
        .cx(210)
        .transitionDuration(500)
        .legend(dc.legend().x(420).y(10).itemHeight(35).gap(8))
        .on('pretransition', function(chart) {
            chart.selectAll('text.pie-slice').text(function(d) {
                return show_slice_percent(d.data.key, d.endAngle, d.startAngle);
            });
        })
        .useViewBoxResizing(true)
        .dimension(alignmentDim)
        .group(alignmentGroup)
        .colors(alignmentColors)
        .colorAccessor(function(d) {
            return d.key;
        })
        .title(function(d) {
            if (d.value === 1) {
                return d.value + " Superhero is " + d.key;
            }
            else {
                return d.value + " Superheroes are " + d.key;
            }
        });
}

/* -- Hair Color Row Chart --*/
function hair_color(ndx) {
    var hairColorDim = ndx.dimension(dc.pluck('Hair color'));
    var hairColorGroup = remove_blanks(hairColorDim.group(), "");
    dc.rowChart('#hair-color')
        .width(900)
        .height(400)
        .margins({ top: 10, right: 20, bottom: 40, left: 20 })
        .cap(10)
        .useViewBoxResizing(true)
        .transitionDuration(500)
        .dimension(hairColorDim)
        .group(hairColorGroup)
        .colors(hairColors)
        .colorAccessor(function(d) {
            return d.key;
        })
        .title(function(d) {
            return d.value + " Superhero(es) created by " + d.key;
        })
        .label(function(d) {
            return d.key + " " + d.value;
        });
}

/* -- Eye Color Row Chart --*/
function eye_color(ndx) {
    var eyeColorDim = ndx.dimension(dc.pluck('Eye color'));
    var eyeColorGroup = remove_blanks(eyeColorDim.group(), "");
    dc.rowChart('#eye-color')
        .width(900)
        .height(400)
        .margins({ top: 10, right: 20, bottom: 40, left: 20 })
        .cap(10)
        .useViewBoxResizing(true)
        .transitionDuration(500)
        .dimension(eyeColorDim)
        .colors(eyeColors)
        .colorAccessor(function(d) {
            return d.key;
        })
        .group(eyeColorGroup)
        .title(function(d) {
            return d.value + " Superhero(es) created by " + d.key;
        })
        .label(function(d) {
            return d.key + " " + d.value;
        });
}

/* -- Stats Line Chart --*/
function stats(ndx) {
    var intDim = ndx.dimension(dc.pluck('intelligence'));
    var intGroup = remove_blanks(intDim.group(), 0);
    var strDim = ndx.dimension(dc.pluck('strength'));
    var strGroup = remove_blanks(strDim.group(), 0);
    var speDim = ndx.dimension(dc.pluck('speed'));
    var speGroup = remove_blanks(speDim.group(), 0);
    var durDim = ndx.dimension(dc.pluck('durability'));
    var durGroup = remove_blanks(durDim.group(), 0);
    var powDim = ndx.dimension(dc.pluck('power'));
    var powGroup = remove_blanks(powDim.group(), 0);
    var comDim = ndx.dimension(dc.pluck('combat'));
    var comGroup = remove_blanks(comDim.group(), 0);

    var compositeChart = dc.compositeChart('#stats');
    compositeChart
        .width(900)
        .height(350)
        .margins({ top: 10, right: 30, bottom: 40, left: 40 })
        .x(d3.scale.linear().domain([0, 100]))
        .xAxisLabel('Attribute Value')
        .yAxisLabel('Frequency')
        .elasticY(true)
        .legend(dc.legend().x(80).y(20).itemHeight(18).gap(5).horizontal(true).autoItemWidth(false).itemWidth(90))
        .useViewBoxResizing(true)
        .brushOn(false)
        .compose([
            dc.lineChart(compositeChart).colors('grey').group(intGroup, 'Intelligence'),
            dc.lineChart(compositeChart).colors('blue').group(strGroup, 'Strength'),
            dc.lineChart(compositeChart).colors('yellow').group(speGroup, 'Speed'),
            dc.lineChart(compositeChart).colors('puple').group(durGroup, 'Durability'),
            dc.lineChart(compositeChart).colors('red').group(powGroup, 'Power'),
            dc.lineChart(compositeChart).colors('green').group(comGroup, 'Combat'),
        ]);
}