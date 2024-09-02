const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AeLZKZ7Tns88WOIs8OXZyAKV5dZYVb8-cdl8P0bilVQ3n-DoYTIkkv8qoQezvIbnwlPAOQevxQImfY0x",
  client_secret: "EL3Nhh1uqlz46bbCLBWJsEwjqtMVW_Sr-_5RjnEHbvpWkC_OcunxEZTnideOW_WorLbEiZ-T_aaSj-hk",
});

module.exports = paypal;
