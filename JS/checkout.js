// 商品項目
let orderItem = document.querySelectorAll(".order-item");
//  +/-按鈕
let addBtn = document.querySelectorAll(".add");
let reduceBtn = document.querySelectorAll(".reduce");
// 輸入框
let itemNumInput = document.querySelectorAll(".order-input");
// 商品小計
let itemSubtotal = document.querySelectorAll(".order-item-subtotal span");
// let Price = 10.5;
let itemPrice = document.querySelectorAll(".order-item-price");
// 訂單總計
let orderTotal = document.querySelector(".total");
// 訂單數量
let orderQty = document.querySelector(".qty")
// 訂單小計
let orderSubtotal = document.querySelector(".subtotal")
// 運費
let orderFee = document.querySelector(".fee")
// 畫面一進來的時候 執行某段程式碼
window.onload = function() {
    for (let i = 0; i < orderItem.length; i++) {
        // 初始化 重新計算
        // itemSubtotal[i].innerHTML = Number(itemNumInput[index].value) * Number(itemPrice[index].textContent);
        calculateOrderItem(i);
    }

};
console.log(addBtn, reduceBtn, itemNumInput);
addBtn.forEach(function(btn, index) {
    console.log(btn);
    btn.addEventListener('click', function () {
        handleButton(index, 1);
    //    itemNumInput[index].value = Number(itemNumInput[index].value) + 1;
    //    priceElement.innHTML = price;
    // 單品小計 = 數量 * 單價
    //    calculateOrderItem(index);
    //    itemSubtotal[index].innerHTML = Number(itemNumInput[index].value) * Number(itemPrice[index].textContent);
    });
});

reduceBtn.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
        if(itemNumInput[index].value <= 1) {
            let yes = confirm('是否確定要刪除該商品');

            if(yes) {
                orderItem[index].remove();
 
            } else {
                return;
                // 跳出整個迴圈
            }

        }
        handleButton(index, -1);
        // itemNumInput[index].value = Number(itemNumInput[index].value) - 1;
        // calculateOrderItem(index);
        // itemSubtotal[index].innerHTML = Number(itemNumInput[index].value) * Number(itemPrice[index].textContent);
    })
});

itemNumInput.forEach(function (input, index) {
    input.addEventListener("change", function() {
        // 先防呆
        if(input.value <= 0) {
            input.value = 1;
        }
        // 再計算
        calculateOrderItem(index);
    });


});
// 處理按鈕功能 單品數量增減
function handleButton(index, num) {
    itemNumInput[index].value = Number(itemNumInput[index].value) + num;
    calculateOrderItem(index);

    let qty = 0;
    for(let i = 0; i < orderItem.length; i++) {
        qty = qty + parseInt(itemNumInput[i].value);
    }
    orderQty.innerHTML = qty;
}
// 計算商品價格
function calculateOrderItem(index) {
    itemSubtotal[index].innerHTML =parseInt(itemNumInput[index].value) * Number(itemPrice[index].textContent);
    // console.log(itemNumInput[index].value);
    calculateOrderPrice(index);
}

// 所有商品(數量、小計、運費、總計)總和
function calculateOrderPrice() {
    let qty = 0;
    let subtotal = 0;
    let fee = 60;
    for(let i = 0; i < orderItem.length; i++) {
        qty = qty + parseInt(itemNumInput[i].value);
        subtotal = subtotal + parseInt(itemSubtotal[i].textContent);
    }

    if (subtotal >= 100) fee = 0;

    orderQty.innerHTML = qty;
    orderSubtotal.innerHTML = "$ " + subtotal;
    orderFee.innerHTML = "$ " + fee;
    orderTotal.innerHTML = "$ " + parseInt(subtotal + fee);
    // if (subtotal >= 100) {
    //     fee = 0;

    // }

}



