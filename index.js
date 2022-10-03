var productContent = "";

window.products.map(product => {
    var content = window.htmlTemplate, curIndex = 0, endIndex;
    
    if(product.prod_name.indexOf("Top") == -1) return;
    if(product.is_in_stock == "0") return;
    
    while((curIndex = content.indexOf("{{")) != -1)
    {
        endIndex = content.indexOf("}}", curIndex);
        content = content.slice(0, curIndex) + product[content.slice(curIndex + 2, endIndex)] + content.slice(endIndex + 2);
    }

    if(product.sale_price !== "None") {
        curIndex = content.indexOf("</a>");
        content = content.slice(0, curIndex) + `<div class="in_sales">` + product.currency_symbol + product.sale_price + `</div>` + content.slice(curIndex);
    }
    
    productContent += content;
});

document.getElementById("XgenElement").innerHTML = productContent;