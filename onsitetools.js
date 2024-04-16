// ==UserScript==
// @name Show Product CC UGP
// @author Will Burns
// @namespace    https://wiki.ae.com/display/MERCHANDISING/SM+Site+Tools
// @include https://www.ae.com/*/*
// @include http://www.ae.com/*/*
// @include https://staging-ugp.ae.com/*/*
// @include http://staging-ugp.ae.com/*/*
// @include https://sit.aezone.com/*/*
// @include https://sit-stable.aezone.com/*/*
// @updateURL https://raw.githubusercontent.com/bigwillyburns/site-merch-tools/main/onsitetools.js
// @downloadURL https://raw.githubusercontent.com/bigwillyburns/site-merch-tools/main/onsitetools.js
// @require http://code.jquery.com/jquery-3.3.1.min.js
// @version 2.17
// ==/UserScript==
var run = 6
var allCCsUnique = new Array();

function showAllCCOnPage (){
run=5;
CCOnPage();
    $(".qa-search-results-page").append("<div class='CCNumber'id='allCC' style='z-index:3000;width: 90%;overflow-wrap: break-word;'>"+allCCsUnique+"</div>");
    $(".bottom-content").append("<div class='CCNumber'id='allCC' style='z-index:3000;width: 90%;overflow-wrap: break-word;'>"+allCCsUnique+"</div>");
};
function setClickEvents(){
$('.imageInspector').click(function(){
    var ID = $(this).attr('id');
    ID = ID.substring(3,16);
    if($("#GMimageGrid_"+ID+"").length){
        $("#GMimageGrid_"+ID+"").remove();
    }
    else{
        var insertImages ='<div class="CCNumber" id="GMimageGrid_'+ID+'" style="position:absolute;background-color:white;font-size:12px;z-index:55;left:14px;top:40px;width:310px;"><div style="float:left; width:75px;text-align:center;"><img src="https://s7d2.scene7.com/is/image/aeo/'+ID+'_f?size=88,88&cropN=0,0,1,1">_f</div><div style="float:left; width:75px;text-align:center;"><img src="https://s7d2.scene7.com/is/image/aeo/'+ID+'_b?size=88,88&cropN=0,0,1,1">_b</div><div style="float:left; width:75px;text-align:center;"><img src="https://s7d2.scene7.com/is/image/aeo/'+ID+'_of?size=88,88&cropN=0,0,1,1">_of</div><div style="float:left; width:75px;text-align:center;"><img src="https://s7d2.scene7.com/is/image/aeo/'+ID+'_ob?size=88,88&cropN=0,0,1,1">_ob</div><div style="float:left; width:75px;text-align:center;"><img src="https://s7d2.scene7.com/is/image/aeo/'+ID+'_l1?size=88,88&cropN=0,0,1,1">_l1</div><div style="float:left; width:75px;text-align:center;"><img src="https://s7d2.scene7.com/is/image/aeo/'+ID+'_l2?size=88,88&cropN=0,0,1,1">_l2</div><div style="float:left; width:75px;text-align:center;"><img src="https://s7d2.scene7.com/is/image/aeo/'+ID+'_l3?size=88,88&cropN=0,0,1,1">_l3</div><div style="float:left; width:75px;text-align:center;"><img src="https://s7d2.scene7.com/is/image/aeo/'+ID+'_d1?size=88,88&cropN=0,0,1,1">_d1</div><div style="float:left; width:75px;text-align:center;"><img src="https://s7d2.scene7.com/is/image/aeo/'+ID+'_d2?size=88,88&cropN=0,0,1,1">_d2</div><div style="float:left; width:75px;text-align:center;"><img src="https://s7d2.scene7.com/is/image/aeo/'+ID+'_d3?size=88,88&cropN=0,0,1,1">_d3</div><div style="float:left; width:75px;text-align:center;"><img src="https://s7d2.scene7.com/is/image/aeo/'+ID+'_g1?size=88,88&cropN=0,0,1,1">_g1</div><div style="float:left; width:75px;text-align:center;"><img src="https://s7d2.scene7.com/is/image/aeo/'+ID+'_g2?size=88,88&cropN=0,0,1,1">_g2</div><div style="float:left; width:75px;text-align:center;"><img src="https://s7d2.scene7.com/is/image/aeo/'+ID+'_g3?size=88,88&cropN=0,0,1,1">_g3</div><div style="float:left; width:75px;text-align:center;"><img src="https://s7d2.scene7.com/is/image/aeo/'+ID+'_is?size=88,88&cropN=0,0,1,1">_is</div><div style="float:left; width:75px;text-align:center;"><img src="https://s7d2.scene7.com/is/image/aeo/'+ID+'_os?size=88,88&cropN=0,0,1,1">_os</div><div style="float:left; width:75px;text-align:center;"><img src="https://s7d2.scene7.com/is/image/aeo/'+ID+'_r?size=88,88&cropN=0,0,1,1">_r</div><div style="float:left; width:75px;text-align:center;"><img src="https://s7d2.scene7.com/is/image/aeo/'+ID+'_cb?size=88,88&cropN=0,0,1,1">_cb</div><div style="float:left; width:75px;text-align:center;"><img src="https://s7d2.scene7.com/is/image/aeo/'+ID+'_cd?size=88,88&cropN=0,0,1,1">_cd</div></div>';
        $('#grid_'+ID).prepend(insertImages);
    }
});
$('.showInv').click(function(){
    var ID = $(this).parent().attr('data-product-id');
    if ($('#stock_'+ID).length){
        $('#stock_'+ID).remove();
    }
    else{
        $('#'+ID).prepend('<div class="CCNumber" id="stock_'+ID+'" style="position:absolute;background-color:white;font-size:12px;z-index:53;left: 101px;text-align: left;top: 4px;width: 210px;list-style-type: none;cell-padding: 10px;padding: 16px;overflow: hidden;height: 395px;overflow-y: auto;"></div>');
        var xmlHttp = new XMLHttpRequest();
          xmlHttp.open( "GET", "https://www.ae.com/ugp-api/catalog/v1/product/sizes?productIds="+ID+"", true );
          xmlHttp.setRequestHeader("X-Access-Token",JSON.parse(localStorage.getItem('aeotoken')).access_token);
          xmlHttp.onload = function() {
        var data = JSON.parse(this.response)
          if (xmlHttp.status >= 200 && xmlHttp.status < 400) {
            var instock = 0
            var outofstock = 0
            var lowstock = 0
            var totalSKUS = 0
            data.data.records[0].sizes.skus.forEach(sku => {
                var red = "style='color: maroon;'";
                var yellow = "style='color: goldenrod;'";
                var green = "style='color: darkseagreen;'";
                var color;
                var stock
                if(sku.inventoryStatus == 0){stock="In Stock"; color = green; instock++}
                else if(sku.inventoryStatus == 1){stock="Low Stock"; color = yellow; lowstock++}
                else {stock="Out of Stock"; color = red; outofstock++}
            $('#stock_'+ID).append('<tr '+color+'><td style="padding:5px">'+sku.size+'</td><td style="padding:5px">'+stock+'</tr></tr>');
            })
          totalSKUS = instock+outofstock+lowstock;
          var instockpercentage = Math.round(((instock+lowstock)/totalSKUS)*100);
//          var inventoryScore = ((100/totalSKUS)*(instock+(lowstock*.5)));
          $('#stock_'+ID).prepend('<tr><td style="padding:5px">In Stock %</td><td style="padding:5px">'+instockpercentage+'</tr></tr>');
          } else {
            console.log('error')
          }
        }
            xmlHttp.send(null);
    }
    });
}
function CCOnPage(){
if (run > 5){}
else{
$(".CCNumber").remove();
//Start by getting all Product IDs on the page and put them into Array
var imageSRC = $(".tile-link");
var inLoc = document.getElementsByClassName("product-tile qa-product-tile");
var arrID = new Array();
var uarrID = new Array();
var prodIDs = new Array();

/*
        for (var i = 0; i < imageSRC.length; i++) {
            var hrefImage = imageSRC[i].getAttribute("href");
            var N = hrefImage.indexOf("?");
            hrefImage = hrefImage.substring(N-13,N);
            arrID.push(hrefImage);
        }
uarrID = arrID.filter(function(itm, i, a) {
    return i == a.indexOf(itm);
});*/
//prodIDs=$(".qa-product-tile").data("productId");
$(".qa-product-tile").each(function() {
  var i;
  i = $(this).data("productId");
  prodIDs.push(i)
});

//Create a DIV that gets inserted
for ( i = 0; i < prodIDs.length; i++) {
            var ID = prodIDs[i];
            var node = document.createTextNode(ID);
            var para = document.createElement("div");
            var imageGrid = '<div class="CCNumber" id="grid_'+ID+'"></div>';
            $(inLoc[i]).prepend('<div class="CCNumber" id="instockgrid_'+ID+'"></div>');
//Create element
            para.setAttribute("style","font-size: 12px;color: black;text-align: center;font-family: 'Gotham Book','Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:bold;");
            para.setAttribute("class","CCNumber");
            para.setAttribute("id",ID);
            para.appendChild(node);
            inLoc[i].appendChild(para);
            $(inLoc[i]).prepend(imageGrid);
            var imageHTML ='<div class="imageInspector CCNumber"id="II_'+ID+'"style="position: absolute; padding:7px; margin: 17px 0 0 0; z-index: 52;"><img width="20px"src="https://visualsitemerch.web.app/images/image_icon.png"></div>';
            $(inLoc[i]).prepend(imageHTML);
            $(inLoc[i]).prepend("<div class='showInv CCNumber'id='IS_"+ID+"' style='position: absolute; padding:5px; margin: 15px 0 0 32px; z-index: 52;'><img width='28px'src='https://visualsitemerch.web.app/images/instock.png'></div>");


        }
//END FUNCTIONS

//CC Button at bottom
$('.results-list').append("<div class='CCNumber'><button id='ccbutton' style='background-color: #555555;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;'>Show All CCs</button> <h3>Total CCs "+prodIDs.length+"</h3></div>");
$('.product-list').append("<div class='CCNumber'><button id='ccbutton' style='background-color: #555555;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;'>Show All CCs</button> <h3>Total CCs "+prodIDs.length+"</h3></div>");
$('#ccbutton').click(function(){showAllCCOnPage()});
setClickEvents();
run++;
allCCsUnique = prodIDs;
return prodIDs
}}

setTimeout(function(){
//var TLTUIDloc = document.cookie;
var TLTUIDloc = document.cookie.search("TLTUID");
var TLTUID = document.cookie.substring(TLTUIDloc,39+TLTUIDloc);
$('.qa-sticky-header-promo').prepend('<div id="myTLTUID" style="position: absolute;padding: 0 123px 0 0;z-index:9999;font-size:11px;">'+TLTUID+'</div>');
$('.utilities-list').prepend('<div id="showccbutton" style="padding: 0px 5px 0 0;z-index: 52;margin-top: 4px;"><img width="20px"src="https://visualsitemerch.web.app/images/smtools_icon.png"></div>');
$('#showccbutton').click(function(){run = 5;CCOnPage()});
$('.utilities-list').prepend('<div id="productLokkup" style="padding: 0px 9px 0 0;z-index: 52;margin-top: 6px;"><img width="27px"src="https://visualsitemerch.web.app/images/Product_lookup.png"></div>');
$('#productLokkup').click(function(){
    var stringOfProducts = prompt("Please paste in your CCs");
//    stringOfProducts =  stringOfProducts.replace(/(\r\n|\n|\r)/gm,",");
    stringOfProducts =  stringOfProducts.replace(/ /g,',');
    var productsSearched = new Array;
    productsSearched = stringOfProducts.split(",");
//    var stringOfProducts = "0754_1860_626,0754_1379_218,0754_1840_225,0754_1840_403,0754_1925_410,0753_1841_817,0753_1770_626,0753_1288_073,0752_1868_713,0752_1924_713,0752_1924_403,0752_1413_100,0752_1384_438,0752_1519_536,2758_1661_690";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://www.ae.com/ugp-api/catalog/v1/product/sizes?productIds="+stringOfProducts+"", true );
    xmlHttp.setRequestHeader("X-Access-Token",JSON.parse(localStorage.getItem('aeotoken')).access_token);
    xmlHttp.onload = function() {
        var data = JSON.parse(this.response)
        if (xmlHttp.status >= 200 && xmlHttp.status < 400) {
            //set product container
            $('#main-header').prepend('<div id="product_grid"style="padding-bottom: 60px;top: 84px;position: absolute;width: 900px;background-color: whitesmoke;left: 0;right: 0;margin-left: auto;margin-right: auto;z-index: 53;height: 800px;overflow: hidden;overflow-y: auto;padding-top: 85px;"><div id="productGridHeader"style="position: absolute;width: 307px;font-size: xx-large;left: 0;right: 0;margin-left: auto;margin-right: auto;margin-top: -70px;">AEO Product Lookup</div><div id="CC_close" style="position: absolute;margin: -76px 0 0 7px;"><img src="https://visualsitemerch.web.app/images/close.png"</div></div>')
            $('#CC_close').click(function(){$('#product_grid').remove()});
            var productsFound = new Array;
            //Looping through the Products
            if (data.data.records){
            data.data.records.forEach(records => {
            var lowStock = 0
            var inStock = 0
            var noStock = 0
            var totalSkus = 0
            var productinstock
            productsFound.push(records.sizes.productId);
                // Looping through the SKUS
                records.sizes.skus.forEach(sku => {
                  if (sku.inventoryStatus == 0){
                     inStock++
                     totalSkus++
                  }
                  else if (sku.inventoryStatus == 1){
                     totalSkus++
                     lowStock++
                  }
                  else {
                     totalSkus++
                     noStock++
                  }
                })
             if (totalSkus == noStock){productinstock = "Out of Stock"}
             else{productinstock = "In Stock"}
             var inStockPercentage = Math.round(((lowStock+inStock)/totalSkus)*100);
             $('#product_grid').append('<div id="CC_'+records.sizes.productId+'" class="CC_download" style="white-space: nowrap;float: left;width: 255px;margin-left: 35px;margin-bottom: 35px;font-size: small;"><a href="https://www.ae.com/us/en/p/siteMerchTools/'+records.sizes.productId+'" target="_blank"><img src="https://s7d2.scene7.com/is/image/aeo/'+records.sizes.productId+'_f?$cat-main_small$"></a><br/><div style="text-align: center;">'+records.sizes.productName+'<br/>'+records.sizes.productId+'<br/>Product Status: '+productinstock+' | %'+inStockPercentage+' In Stock </div></div>')
             if (productinstock == "Out of Stock"){$('#CC_'+records.sizes.productId).prepend('<div style="position: absolute;margin: 226px 0 0 155px;"><img src="https://visualsitemerch.web.app/images/outOfStock2.png"></div>')};
             //end of loop for records
             })}
         }
         else {
            console.log('error')
        }
        var notFound = new Array;
        notFound = productsSearched.filter(e => !productsFound.includes(e));
        notFound.forEach(prod => {
        $('#product_grid').append('<div id="CC_'+prod+'" style="white-space: nowrap;float: left;width: 255px;margin-left: 35px;margin-bottom: 35px;font-size: small;"><a href="https://www.ae.com/us/en/p/siteMerchTools/'+prod+'" target="_blank"><img src="https://s7d2.scene7.com/is/image/aeo/'+prod+'_f?$cat-main_small$"></a><div style="position: absolute;margin: -109px 0 0 60px;"><img src="https://visualsitemerch.web.app/images/missing.png"></div><br/><div style="text-align: center;"><br/>Sorry we could not find<br/>'+prod+'</div></div>')

        })
    }
    xmlHttp.send(null);
});
}, 4000);
