'use strict';

module.exports = function (Model, options) {
  // give each dog a unique tag for tracking
  Model.observe('before save', function event(ctx, next) { //Observe any insert/update event on Model
    if (ctx.isNewInstance == true) {
      Model.find({ limit: 1, order: "createdAt DESC" }, function (error_sub, sub_data) {
        var sub_data = JSON.parse(JSON.stringify(sub_data));
        console.log('asdasdasd', sub_data)
        if (sub_data.length > 0) {
          if (sub_data[0].hasOwnProperty("invoice_number")) {
            let temp_invoice_num = sub_data[0].invoice_number
            ctx.instance.invoice_number = Number(temp_invoice_num) + 1;

            console.log(ctx.instance.invoice_number, "ctx.instance.invoice_numbe")
            ctx.instance.invoice_id = "WS" + Number(ctx.instance.invoice_number);
          } else {
            ctx.instance.invoice_number = 10000000;
            ctx.instance.invoice_id = "WS" + ctx.instance.invoice_number;
          }
        } else {
          ctx.instance.invoice_number = 10000000;
          ctx.instance.invoice_id = "WS" + ctx.instance.invoice_number;
        }
        next();
      });
      
      // ctx.instance.squirrel = true;
    }
    else{
      next();

    }
  });
};
